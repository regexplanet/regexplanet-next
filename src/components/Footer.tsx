import Link from 'next/link';

const links = [
    { link: 'https://github.com/regexplanet/regexplanet-next', label: 'Source' },
    { link: 'https://github.com/regexplanet/regexplanet-next?tab=readme-ov-file#credits', label: 'Credits' },
    //LATER: privacy, terms, etc
];

export function Footer() {

    const initial: JSX.Element[] = []
    links.forEach((link, index) => {
        initial.push(<Link className="text-body-tertiary text-decoration-none" href={link.link} key={link.label}>
            {link.label}
        </Link>);
        if (index < links.length - 1) {
            initial.push(<span className="mx-1" key="key{{index}}">|</span>);
        }
    }
    );

    return (
        <div className="container-lg py-3">
        <hr />
        <footer className="d-flex justify-content-center text-body-tertiary"><small>
            {initial}
        </small></footer>
        </div>
    )
}