
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service;

    return (
        <div className="card bg-base-100 shadow-xl  h-full w-full ">
            <figure className="flex-grow">
                <img src={img} alt={title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body flex flex-col ">
                <h2 className="card-title text-[#444]">{title}!</h2>
                <p className="text-start text-[#FF3811] text-xl">${price}</p>
                <div className="card-actions justify-end mt-auto">
                    <Link to={`bookings/${_id}`} className="btn btn-primary">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
