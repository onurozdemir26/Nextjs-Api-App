import React from 'react'
import Link from 'next/link'

function Navigation() {
    return (
        <div>
            <ul className="navbar">
                <li className="list">
                    <Link href="/">
                        <a>Ana Sayfa</a>
                    </Link>
                </li>
                
                
            </ul>
        </div>
    )
}

export default Navigation
