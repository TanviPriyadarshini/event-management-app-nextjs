'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Shell from '@/components/Shell'

const DashboardLayout = ({ children, rsvps, events }) => {
    const path = usePathname()
    return (
        <Shell>
            {path === '/dashboard' ? (
                <div className="flex w-full h-full">
                    <div className="w-1/2 border-r border-default-50">{rsvps}</div>
                    <div className="w-1/2 flex flex-col">
                        <div className="border-b border-default-50 w-full h-1/2">
                            {events}
                        </div>
                        <div className="w-full h-1/2">{children}</div>
                    </div>
                </div>
            ) : (
                <div>
                    {children}
                </div>
            )
            }
        </Shell >
    )
}

export default DashboardLayout