import Link from 'next/link';

import { ColorSchemeToggle } from './ColorSchemeToggle';

const links = [
    { link: 'https://github.com/regexplanet/regexplanet-next?tab=readme-ov-file#credits', label: 'Credits' },
    { link: 'https://github.com/regexplanet/regexplanet-next', label: 'Source' },
    { link: '/support/contact.html', label: 'Contact' },
    { link: '/legal/privacy.html', label: 'Privacy Policy' },
    { link: '/legal/terms.html', label: 'Terms of Service' },
];

export function Footer() {

    const initial: JSX.Element[] = []
    links.forEach((link, index) => {
        initial.push(<Link className="text-body-tertiary text-decoration-none" href={link.link} key={link.label}>
            {link.label}
        </Link>);
        if (index < links.length - 1) {
            initial.push(<span className="mx-1" key={`fkey${index}`}>|</span>);
        }
    }
    );

    return (
        <div className="container-lg py-3">
        <hr />
        <footer className="d-flex justify-content-center text-body-tertiary"><small className="me-3">
            {initial}
        </small> <ColorSchemeToggle /></footer>
        </div>
    )
}