import React from 'react'
import Introduction from '../components/Introduction'

type Props = {}

export default function Landing({ }: Props) {
    return (
        <div>
            <div className="w-screen h-screen bg-[#264653]">
                <div className="flex mx-auto max-w-7xl">
                    <Introduction />
                </div>
            </div>
        </div>
    )
}