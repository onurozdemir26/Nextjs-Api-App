import React from 'react'
import Link from 'next/link'

function Navigation() {
    return (
        <div>
            <ul className="navbar">
                <li>
                    <Link href="/">
                        <a>Ana Sayfa</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Hakkımda</a>
                    </Link>
                </li>
                
            </ul>
        </div>
    )
}

export default Navigation
