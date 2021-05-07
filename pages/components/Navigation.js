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
                        <a>Hakkımızda</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog/hello-world">
                        <a>İletişim</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
