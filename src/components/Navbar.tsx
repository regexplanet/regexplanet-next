'use client';

import Link from "next/link";
import { NavbarLink } from "./NavbarLink";
import { PiCloudCheckBold, PiPlayBold, PiQuestionBold } from "react-icons/pi";

/* eslint-disable @next/next/no-img-element */


const links = [
    { link: '/', label: 'Testing', startsWith: '/advanced/', icon: <PiPlayBold /> },
    {
        link: '/status.html', label: 'Status', startsWith: '/status.html', icon: <PiCloudCheckBold />
    },
    {
        link: '/support/index.html', label: 'Support', startsWith: '/support/', icon: <PiQuestionBold />
    },
];

export function Navbar() {

    const items = links.map((link) => NavbarLink(link));

    return (
        <>
            <nav className="navbar navbar-expand bg-body-tertiary border-bottom">
                <div className="container-lg">
                    <Link className="navbar-brand fs-3 fw-bold" href="/">
                        <img alt="RegexPlanet Logo" src="/favicon.svg" style={{ "height": "2rem" }} className="pe-2 d-none d-md-inline" />
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