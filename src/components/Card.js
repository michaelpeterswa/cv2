import React from "react"
import Photo from "../components/Photo"

export default function Card() {
    return (
    <div className="grid grid-cols-1 justify-center bg-white rounded-lg">
        <Photo className="self-center"></Photo>
        <h1 className="px-2 font-sans text-3xl">Michael Peters</h1>
    </div>
  )
}