// Page.js component
import React from "react"
import Card from "../components/Card"


export default function Page() {
    return(
    <div className="bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500">
        <div className="flex justify-center h-screen">
            <div className="m-auto">
                <Card/>
            </div>
        </div>
    </div>
    )
}