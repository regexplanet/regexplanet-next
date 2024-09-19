'use client';
/* eslint-disable @next/next/no-img-element */

import { usePathname } from 'next/navigation'
import Link from 'next/link';

const links = [
    { link: '/', label: 'Testing', startsWith: '/advanced/' },
    { link: '/status.html', label: 'Status', startsWith: '/status.html'},
    { link: '/support/index.html', label: 'Support', startsWith: '/support/' },
];

export function Navbar() {
    const pathname = usePathname()

    const items = links.map((link) => (
        <li className="nav-item" key={link.label} >
            <Link
                className={pathname.startsWith(link.startsWith) ? 'nav-link active fw-bold' : 'nav-link'}
                href={link.link}
            >
                {link.label}
            </Link>
        </li>
    ));

    return (
        <>
            <nav className="navbar navbar-expand bg-body-tertiary border-bottom">
                <div className="container-lg">
                    <Link className="navbar-brand fs-3 fw-bold" href="/">
                        <img alt="RegexPlanet Logo" src="/favicon.svg" style={{"height":"2rem"}} className="pe-2" />
                        RegexPlanet
                    </Link>
                    <ul className="navbar-nav">
                        {items}
                    </ul>
                </div>
            </nav>
        </>
    );
}