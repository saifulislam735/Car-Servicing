import { useContext, useEffect, useState } from 'react';
import OrderImage from '../../assets/assets/images/services/2.jpg';
import OrderTable from './OrderTable';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Order = () => {
    const [orderData, setOrderData] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://car-servicings-9paq.vercel.app/order/${user.email}`,
                //this is for jwt token
                {
                    method: 'GET',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('access-token')}`
                    }
                }
            )
                .then(res => res.json())
                .then(data => setOrderData(data))
                .catch(error => console.error('Error fetching order data:', error));
        }
    }, [user]);

    return (
        <div>
            {orderData && orderData.length > 0 ?
                <div>
                    <div
                        style={{
                            backgroundImage: `linear-gradient(to right, #000000, rgba(21, 21, 21, 0.00)), url(${OrderImage})`,
                            backgroundSize: 'cover',
                            height: '200px',
                            width: '100%',
                        }}
                        className="bg-no-repeat flex flex-col justify-center items-center relative"
                    >
                        <h2 className="text-white text-[45px] mt-10 text-center pt-4 relative z-10">
                            Ordered Services
                        </h2>
                        <div className="relative flex justify-center items-center w-full h-full z-10">
                            <svg
                                className="absolute bottom-[-1.5px]"
                                xmlns="http://www.w3.org/2000/svg"
                                width="296"
                                height="50"
                                viewBox="0 0 296 50"
                                fill="none"
                            >
                                <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
                            </svg>
                            <p className="text-white text-xl absolute text-center font-semibold bottom-2">
                                Home/Service
                            </p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-xl font-bold'>
                                    <th>Service Name</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderData.map(orderInfo => (
                                        <OrderTable key={orderInfo._id} orderInfo={orderInfo} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                :
                <div className='w-full h-[600px] flex justify-center items-center text-5xl flex-col gap-5'>
                    <p>You have no booking to show</p>
                    <p>Please! Book A service</p>
                    <div className='text-center'>
                        <small>if you booked any service and It isnot showing, It maybe due to experiation of your  <br /> login session !! then <Link className='underline' to='/login'>login</Link> again</small>
                    </div>
                </div>
            }
        </div>
    );
};

export default Order;
