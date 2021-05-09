import React from "react"

export default function Name(props) {
    return (
        <div className="flex py-1">
            <a href={props.link} className="flex-auto bg-white hover:bg-gray-400 text-gray-600 font-sans py-1 px-2 rounded-lg border-2 border-gray-600 text-center">
                {props.title}
            </a>
        </div>
    )
}