import React from 'react'

const Cast = (props) => {
    return (
        <div>
        <div className="flex flex-col items-center">
            <div className="w-32 h-32">
                <img src={props.image} alt="Cast member" className="w-full h-full rounded-full"/>
            </div>
            <h1 className="text-xl  text-gray-800">{props.castName}</h1>
            <h5 className="text-sm  text-gray-400"> as {props.role}</h5>
        </div>  
        </div>
    )
}

export default Cast;
