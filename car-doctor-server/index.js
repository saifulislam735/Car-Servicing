const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
}));

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Received request for ${req.method} ${req.url}`);
    next();
});
  
// MongoDB Client
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6obomcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// JWT Verification Middleware
const VerifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({ error: true, message: 'unauthorized access' });
    }
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.ACESS_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: true, message: 'unauthorized access' });
        }
        req.decoded = decoded;
        next();
    });
};

// Connect to MongoDB
async function run() {
    try {
        console.log('Attempting to connect to MongoDB...');
        await client.connect();
        console.log('Successfully connected to MongoDB!');
        const carDoctorDB = client.db("carDoctorDB");
        const serviceCollection = carDoctorDB.collection("service");
        const bookingsCollection = carDoctorDB.collection("bookingsCollection");

        // Routes
        app.get('/services', async (req, res) => {
            try {
                const searchText = req.query.search || '';
                const minimumPrice = parseInt(req.query.minPrice, 10) || 0;
                const maximumPrice = parseInt(req.query.maxPrice, 10) || Infinity;
                const order = req.query.order || 'asc';

                const options = {
                    sort: { "price": order === 'asc' ? 1 : -1 },
                    projection: { title: 1, img: 1, price: 1 },
                };
                const query = {
                    price: { $lte: maximumPrice, $gte: minimumPrice },
                    title: { $regex: searchText, $options: 'i' }
                };

                const result = await serviceCollection.find(query, options).toArray();
                res.json(result);
            } catch (error) {
                console.error('Error fetching services:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });

        // Other routes...

        // Ping MongoDB to confirm connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Optional: Ensure client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
