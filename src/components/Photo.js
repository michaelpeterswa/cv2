import React from "react"

export default function Photo(props) {
    return (
    <div className="flex flex-wrap justify-center p-2">
        <img src="https://raw.githubusercontent.com/michaelpeterswa/cv2/main/src/images/profile.jpg" alt="michaelpeterswa" className="rounded-full border-4 border-gray-600 antialiased" width={150}
      height={150}/>
    </div>
  )
}