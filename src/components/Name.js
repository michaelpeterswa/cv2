import React from "react"

export default function Name(props) {
    return (
        <div>
            <h1 className="px-2 font-sans text-gray-600 text-3xl text-center">{props.name}</h1>
            <h3 className="px-2 font-sans text-gray-500 text-md text-center">{props.bio}</h3>
        </div>
    )
}