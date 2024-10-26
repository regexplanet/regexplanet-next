'use client';

import Link from "next/link";
import { NavbarLink } from "./NavbarLink";
import { PiBlueprint, PiBlueprintBold, PiCloudCheck, PiCloudCheckBold, PiPlay, PiPlayBold, PiQuestion, PiQuestionBold } from "react-icons/pi";

/* eslint-disable @next/next/no-img-element */


const links = [
    { link: '/', label: 'Testing', startsWith: '/advanced/', icon: <PiPlay />, icon_bold: <PiPlayBold /> },
    { link: 'https://www.regex.zone/patterns/', label: 'Patterns', startsWith: '/patterns/', icon: <PiBlueprint />, icon_bold: <PiBlueprintBold /> }, 
    {
        link: '/status.html', label: 'Status', startsWith: '/status.html', icon: <PiCloudCheck />, icon_bold: <PiCloudCheckBold />
    },
    {
        link: '/support/index.html', label: 'Support', startsWith: '/support/', icon: <PiQuestion />, icon_bold: <PiQuestionBold />
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