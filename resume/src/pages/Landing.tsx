import React from 'react'
import Introduction from '../components/Introduction'

type Props = {}

export default function Landing({ }: Props) {
    return (
        <div className="w-full ">
            <div className="flex mx-auto max-w-7xl mt-44">
                <Introduction />
            </div>
        </div>
    )
}