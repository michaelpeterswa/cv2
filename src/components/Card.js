// Card.js component

import React from "react"
import Photo from "../components/Photo"
import { FaBeer } from 'react-icons/fa';

export default function Card() {
    return (
    <div className="grid grid-cols-1 justify-center bg-white rounded-lg">
        <Photo className="self-center"></Photo>
        <div>
            <h1 className="px-2 font-sans text-3xl inline-block py-2">Michael Peters <FaBeer className="inline-block align-bottom"/></h1>
        </div>
    </div>
  )
}