import React from 'react'
import Typewritten from './Typewritten';

type Props = {}

export default function ({ }: Props) {
    return (
        <div className="mx-auto pt-44 pb-44">
            <div className="flex flex-col mx-4 align-middle">
                <div className="flex flex-row flex-wrap mx-auto">
                    <h1 className="text-8xl sm:text-9xl font-semibold text-[#F4A261]">Hi, &nbsp;</h1>
                    <h1 className="text-8xl sm:text-9xl font-black bg-gradient-to-r bg-clip-text text-transparent from-[#F4A261] to-[#E76F51]">I'm Jerome.</h1>
                </div>
                <div className="hidden md:flex md:mx-auto md:text-8xl md:flex-wrap md:font-semibold md:text-[#E9C46A]">
                    <Typewritten />
                </div>
            </div>
        </div>
    )
}