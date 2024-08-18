
import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const Service = () => {
    const [services, setServices] = useState()
    const [sort, setSort] = useState(false)
    const [filter, setFilter] = useState(false)
    const [order, setOrder] = useState("asc")
    const [minimumPrice, setMinimumPrice] = useState(null);
    const [maximumPrice, setMaximumPrice] = useState(Infinity);
    const [search, setSearch] = useState(" ");
    const searchRef = useRef(null);

    const handleStoringIcon = () => {
        setSort(!sort)
    }
    const handleFilterIcon = () => {
        setFilter(!filter)
    }
    const handlePriceRange = (min, max) => {
        setMinimumPrice(min)
        setMaximumPrice(max)
    }

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent form submission
        // console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
    }
    // console.log(search)
    // console.log(minimumPrice, maximumPrice)
    useEffect(() => {
        fetch(`https://car-servicings-9paq.vercel.app/api/services?search=${search}&order=${order}&minPrice=${minimumPrice}&maxPrice=${maximumPrice}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [order, minimumPrice, maximumPrice, search])
    // console.log(services)
    return (
        <div className="text-center space-y-10">
            <div className="space-y-3">
                <h4 className="text-[#FF3811] text-xl font-bold" >Service</h4>
                <h2 className="text-[#151515] text-[45px] font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div>
                <div className="grid grid-cols-6 ">

                    <form className=" mx-auto col-span-5 w-full">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input ref={searchRef} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search services, names..." required />

                            <button onClick={handleSearch} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>

                    <div className="text-end col-span-1">
                        <details onClick={() => { handleFilterIcon() }} className="dropdown">
                            <summary className="btn m-1">Filter {filter ? <p><VscTriangleUp /></p> : <p><VscTriangleDown /> </p>}</summary>
                            <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 shadow bg-slate-700 text-white">
                                <li onClick={() => handlePriceRange(0, 100)}><a>0 to 100</a></li>
                                <li onClick={() => handlePriceRange(100, 300)}><a>100 to 300</a></li>
                                <li onClick={() => handlePriceRange(0, Infinity)}><a>All Prices</a></li>
                            </ul>
                        </details>

                        <details onClick={() => { handleStoringIcon() }} className="dropdown">
                            <summary className="btn m-1">Sort {sort ? <p><VscTriangleUp /></p> : <p><VscTriangleDown /> </p>}</summary>
                            <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 shadow bg-slate-700 text-white">
                                <li onClick={() => setOrder('asc')}><a>Low to High</a></li>
                                <li onClick={() => setOrder('desc')}><a>High to Low</a></li>
                            </ul>
                        </details>
                    </div>

                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">
                    {
                        services?.map(service => (
                            <div key={service._id} className="flex flex-col items-center justify-center">
                                <ServiceCard service={service}></ServiceCard>
                            </div>
                        ))
                    }
                </div>
            </div>

            <button className="text-[#FF3811] border border-[#FF3811] px-[22px] py-[15px] rounded-lg font-semibold">More Services</button>
        </div>
    );
};

export default Service;