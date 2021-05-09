import React from "react"
import {useEffect, useState} from "react"

export default function Weather(props){

    const [temp, setTemp] = useState(0)
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Spokane&units=imperial&appid=${process.env.GATSBY_OPENWEATHERMAP_KEY}`)
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
            setTemp(resultData.main.temp)
        }) // set data for the temperature
    }, [])

    return (
        <div>
            <h3 className="px-2 font-sans text-gray-500 text-md text-center">Spokane - {temp}°F</h3>
        </div>
    )
}