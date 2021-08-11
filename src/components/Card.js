// Card.js component

import React from "react"
import Photo from "../components/Photo"
import Name from "../components/Name"
import Bar from "../components/Bar"
import IconLinks from "./IconLinks"
import Weather from "../components/Weather"
import Button from "../components/Button"

let data = {
    "name": "Michael Peters",
    "bio": "Gonzaga Univ. CS '21 -> Kochava"
} 

export default function Card() {
    return (
    <div className="grid grid-cols-1 justify-center bg-white rounded-lg border-4 border-gray-600 shadow-photo p-2">
        <Photo className="self-center"/>
        <Name name={data.name} bio={data.bio} className="self-center"/>
        <Bar/>
        <IconLinks/>
        <Bar/>
        <Weather city="Spokane"/>
        <Weather city="Seattle"/>
        <Bar/>
        <Button title="Resume" link="https://michaelpeterswa.com/resume.pdf"/>
        <Button title="Twitter" link="https://twitter.com/michaelpeterswa"/>
        <Button title="Instagram" link="https://instagram.com/mptrswa"/>
    </div>
  )
}
