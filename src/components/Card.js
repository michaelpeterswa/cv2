// Card.js component

import React from "react"
import Photo from "../components/Photo"
import Name from "../components/Name"
import Bar from "../components/Bar"
import Links from "../components/Links"
import Weather from "../components/Weather"

let data = {
    "name": "Michael Peters",
    "bio": "Gonzaga Univ.",
    "education": [
        "test",
        "test2",
        "test3"
    ]
} 

export default function Card() {
    return (
    <div className="grid grid-cols-1 justify-center bg-white rounded-lg border-4 border-gray-600 shadow-photo p-2">
        <Photo className="self-center"/>
        <Name name={data.name} bio={data.bio} className="self-center"/>
        <Bar/>
        <Links/>
        <Bar/>
        <Weather/>
    </div>
  )
}