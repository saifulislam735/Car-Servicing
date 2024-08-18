//import React from 'react';

const OrderTable = ({ orderInfo }) => {

    const { service_name, service_price, client_email, service_image, service_date } = orderInfo;
    return (
        <tr className="text-xl">
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-[140px] h-[140px]">
                            <img

                                className=""
                                src={service_image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold ">{service_name}</div>
                    </div>
                </div>
            </td>
            <td>

                <span className="badge badge-ghost ">{service_price}</span>
            </td>
            <td>{service_date}</td>
            <td>{client_email}</td>
            <th>
                <button className="btn btn-ghost bg-[#FF3811] py-2 px-5 rounded-lg text-slate-100 ">Pending</button>
            </th>
        </tr>

    );
};

export default OrderTable;