import React from 'react'
import {FaGithub,FaPhoneAlt,FaEnvelope} from 'react-icons/fa'

export default function Links() {
    return (
        <div className="grid grid-cols-3 justify-items-stretch text-gray-600 text-3xl py-2">
            <div className="justify-self-center">
                <a href="https://github.com/michaelpeterswa">
                    <FaGithub/>
                </a>
            </div>
            <div className="justify-self-center">
                <a href="tel:+12068410993">
                    <FaPhoneAlt/>
                </a>
            </div>
            <div className="justify-self-center">
                <a href="mailto:michael@michaelpeterswa.com">
                    <FaEnvelope/>
                </a>
            </div>
        </div>
    )
}