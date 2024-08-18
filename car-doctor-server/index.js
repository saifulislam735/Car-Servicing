const express = require('express')
const cors = require('cors')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000

app.use(cors({
    "methods": ["GET", "POST", "PATCH", "DELETE", "OPTIONS"], // 
    credentials: true, 
}));

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6obomcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        //verify jwt token.
        const VerifyJWT = (req, res, next) => {
            //console.log('jwt verification started')
            //console.log(req.headers.authorization)
            const authorization = req.headers.authorization;
            if (!authorization) {
                return res.status(401).send({ error: true, message: 'unauthorized access' })
            }
            const token = authorization.split(' ')[1];
            //console.log('token in jwt', token)
            jwt.verify(token, process.env.ACESS_TOKEN, (err, decoded) => {
                if (err) {
                    return res.status(401).send({ error: true, message: 'unauthorized access' })
                }
                req.decoded = decoded;
                next();
            });
        }

        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const carDoctorDB = client.db("carDoctorDB");

        const serviceCollection = carDoctorDB.collection("service");
        const bookingsCollection = carDoctorDB.collection("bookingsCollection");

        app.get('/services', async (req, res) => {
            const searchText = req.query.search;
            const minimumPrice = parseInt(req.query.minPrice) || 0;
            const maximumPrice = parseInt(req.query.maxPrice) || Infinity;
            const order = req.query.order || 'asc';
            // console.log(searchText)
            const options = {
                sort: { "price": order == "asc" ? 1 : -1 },
                // sort returned documents in ascending order by title (A->Z)
                // Include only the `title` and `img` `price` fields in each returned document
                projection: { title: 1, img: 1, price: 1 },
            };
            const query = { price: { $lte: maximumPrice, $gte: minimumPrice }, title: { $regex: searchText, $options: 'i' } };
            // The query object is empty to return all documents
            const result = await serviceCollection.find(query, options).toArray();
            res.send(result)
        })

        app.get('/bookings/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const options = {
                // sort returned documents in ascending order by title (A->Z)
                sort: { title: 1 },
                // Include only the `title` and `img` `price` fields in each returned document
                projection: { title: 1, img: 1, price: 1 },
            };
            // The query object is empty to return all documents
            const result = await serviceCollection.find(query, options).toArray();
            res.send(result)
        })

        app.post('/bookings', async (req, res) => {
            const data = req.body;
            //console.log(data)
            const result = await bookingsCollection.insertOne(data);
            res.send(result)
        })

        //getting orderd bookings
        app.get('/order/:email', VerifyJWT, async (req, res) => {
            console.log('Comeback after jwt verfication done')
            // const decoded = req.decoded;
            const decoded = req.decoded.email;
            //email form frontend
            const email = req.params.email;
            if (decoded !== email) {
                return res.status(403).send({ error: 1, message: 'forbidden acess access' })
            }
            let query = {}
            if (req.params?.email) {
                query = { logged_email: `${email}` };
            }
            const result = await bookingsCollection.find(query).toArray();
            res.send(result)

        })

        //jwt
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            //var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });
            const token = jwt.sign(user,
                process.env.ACESS_TOKEN,
                { expiresIn: '1h' });
            res.send({ token })
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}/`)
})