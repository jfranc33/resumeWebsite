import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

export default function Typewritten({}: Props) {
  return (
    <>
        <Typewriter
            onInit = {(typewriter) => {
                typewriter.pauseFor(2000)
                    .typeString("Nice to meet you?")
                    .pauseFor(400)
                    .deleteChars(1)
                    .pauseFor(200)
                    .typeString("!")
                    .start()
            }}
            options = {{
                autoStart : true,
                cursor : ""
            }}
        />
    </>
  )
}