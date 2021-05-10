import React from "react"
import {useEffect, useState} from "react"

export default function Weather(props){

    const key = "cbf5a6825f08e9ea58070102dd2d58f8"

    const [temp, setTemp] = useState(0)
    const [condition, setCondition] = useState("Conditions")
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=imperial&appid=${key}`)
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
            setTemp(resultData.main.temp)
            setCondition(resultData.weather[0].main)
        }) // set data for the temperature
    }, [props.city])

    return (
        <div>
            <h3 className="px-2 font-sans text-gray-500 text-md text-center">{props.city} - {condition} - {temp}°F</h3>
        </div>
    )
}