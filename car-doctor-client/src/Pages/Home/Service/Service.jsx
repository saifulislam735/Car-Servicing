import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const Service = () => {
    const [services, setServices] = useState([]); // Initialize with an empty array
    const [sort, setSort] = useState(false);
    const [filter, setFilter] = useState(false);
    const [order, setOrder] = useState("asc");
    const [minimumPrice, setMinimumPrice] = useState(null);
    const [maximumPrice, setMaximumPrice] = useState(Infinity);
    const [search, setSearch] = useState(" ");
    const searchRef = useRef(null);

    const handleStoringIcon = () => {
        setSort(!sort);
    };

    const handleFilterIcon = () => {
        setFilter(!filter);
    };

    const handlePriceRange = (min, max) => {
        setMinimumPrice(min);
        setMaximumPrice(max);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(searchRef.current.value);
    };

    useEffect(() => {
        fetch(`https://car-servicing-api.onrender.com/?search=${search}&order=${order}&minPrice=${minimumPrice}&maxPrice=${maximumPrice}`)
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error("Error fetching services:", err));
    }, [order, minimumPrice, maximumPrice, search]);

    return (
        <div className="text-center space-y-10">
            <div className="space-y-3">
                <h4 className="text-[#FF3811] text-xl font-bold">Service</h4>
                <h2 className="text-[#151515] text-[45px] font-bold">Our Service Area</h2>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised
                    <br />
                    words which do not look even slightly believable.
                </p>
            </div>
            <div>
                <div className="grid grid-cols-6">
                    <form className="mx-auto col-span-5 w-full">
                        <label htmlFor="default-search" className="sr-only">Search</label>
                        <div className="relative">
                            <input
                                ref={searchRef}
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search services, names..."
                                required
                            />
                            <button onClick={handleSearch} type="submit" className="absolute right-2.5 bottom-2.5 bg-blue-700 text-white px-4 py-2 rounded-lg">
                                Search
                            </button>
                        </div>
                    </form>

                    <div className="text-end col-span-1">
                        <details onClick={handleFilterIcon} className="dropdown">
                            <summary className="btn m-1">Filter {filter ? <VscTriangleUp /> : <VscTriangleDown />}</summary>
                            <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 shadow bg-slate-700 text-white">
                                <li onClick={() => handlePriceRange(0, 100)}>0 to 100</li>
                                <li onClick={() => handlePriceRange(100, 300)}>100 to 300</li>
                                <li onClick={() => handlePriceRange(0, Infinity)}>All Prices</li>
                            </ul>
                        </details>

                        <details onClick={handleStoringIcon} className="dropdown">
                            <summary className="btn m-1">Sort {sort ? <VscTriangleUp /> : <VscTriangleDown />}</summary>
                            <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 shadow bg-slate-700 text-white">
                                <li onClick={() => setOrder('asc')}>Low to High</li>
                                <li onClick={() => setOrder('desc')}>High to Low</li>
                            </ul>
                        </details>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">
                    {services?.length > 0 ? (
                        services.map((service) => (
                            <ServiceCard key={service._id} service={service} />
                        ))
                    ) : (
                        <p>No services found</p>
                    )}
                </div>
            </div>

            <button className="text-[#FF3811] border border-[#FF3811] px-[22px] py-[15px] rounded-lg font-semibold">More Services</button>
        </div>
    );
};

export default Service;
