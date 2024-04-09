import React from "react"

type BadgeProps = {
    children: React.ReactNode
}

export default function Badge({children}: BadgeProps){
    return <span className="text-[.7rem] py-2 px-4 border rounded-full w-max">{children}</span>
}