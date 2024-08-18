import { useLoaderData } from "react-router-dom";
import serviceImage from '../../../assets/assets/images/checkout/checkout.png';
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Booking = () => {
    const data = useLoaderData();
    const [{ title, img, price }] = data;

    const { user } = useContext(AuthContext)
    //console.log(img)
    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const service_name = form.service_name.value;
        const service_price = form.service_price.value;
        const client_email = form.client_email.value;
        const service_date = form.date.value;
        const product_description = form.product_description.value;
        const service_image = img;
        const logged_email = user.email;



        const service_booking_data = {
            service_name,
            service_price,
            client_email,
            service_date,
            product_description,
            service_image,
            logged_email
        };

        //console.log(service_booking_data);

        fetch("https://car-servicings-9paq.vercel.app/bookings", {
            method: "POST",
            body: JSON.stringify(service_booking_data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Service booked successfully!",
                        icon: "success"
                    });
                    form.reset()
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <div
                style={{
                    backgroundImage: `linear-gradient(to right, #000000, rgba(21, 21, 21, 0.00)), url(${serviceImage})`,
                    backgroundSize: 'cover',
                    height: '200px',
                    width: '100%',
                }}
                className="bg-no-repeat flex flex-col justify-center items-center relative"
            >
                <h2 className="text-white text-[45px] mt-10 text-center pt-4 relative z-10">
                    Booking Service: {title}
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

            <div className="bg-[#F3F3F3] mt-10 p-[90px]">
                <form onSubmit={handleBookService} className="space-y-6">
                    <div className="flex justify-between gap-5">
                        <input
                            type="text"
                            name="service_name"
                            placeholder="Service Name"
                            className="input input-bordered w-1/2"
                            defaultValue={title}
                            required
                        />
                        <input
                            type="text"
                            name="service_price"
                            placeholder="Service Price"
                            className="input input-bordered w-1/2"
                            defaultValue={price}
                            required

                        />
                    </div>
                    <div className="flex justify-between gap-5">
                        <input
                            type="text"
                            name="client_email"
                            placeholder="Email"
                            className="input input-bordered w-1/2"
                            defaultValue={user.email}
                            required
                        />
                        <input
                            type="date"
                            name="date"
                            placeholder="enter the date of taking services"
                            className="input input-bordered w-1/2"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="product_description"
                            placeholder="Product Description"
                            className="w-full p-4"
                            rows="6"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#FF3811] py-4 w-full rounded-lg text-white font-bold"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking;
