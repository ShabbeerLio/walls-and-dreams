import React from 'react'
import { IoIosPerson } from "react-icons/io";

const TestimoCard = ({item}) => {
    return (
        <>
            <div className="testimo-right-card">
                <p>{item.desc}</p>
                <div className="testimo-card-down">
                    <div className="testimo-card-profile">
                        <IoIosPerson />
                        {/* <img src={item.cover} alt="" /> */}
                        <div className="testimo-card-title">
                            <h5>{item.name}</h5>
                            <p>{item.pos}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimoCard
