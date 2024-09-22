'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link';
import React from 'react';

export type NavbarLinkData = {
    link: string;
    label: string; 
    startsWith: string
    icon: JSX.Element;
    icon_bold: JSX.Element;
};

export function NavbarLink(link: NavbarLinkData) {
    const pathname = usePathname()
    const isActive = pathname.startsWith(link.startsWith)

    return (
        <li className = "nav-item" key={link.label}>
        <Link
                className={`mx-2 nav-link${isActive ? ' fw-bold active' : ''}`}
            href={link.link}
        >
                <span className="d-lg-none">{isActive ? link.icon_bold : link.icon}</span>
                <span className="d-none d-lg-inline">{link.label}</span>
        </Link>
        </li>
    );
}