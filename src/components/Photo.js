import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Photo() {
    return (
    <div className="flex flex-wrap justify-center p-2">
        <StaticImage src="../images/profile.jpg" alt="michaelpeterswa" className="rounded-full border shadow" width={150}
      height={150}/>
    </div>
  )
}