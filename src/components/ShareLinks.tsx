/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const links = [
    {
        "id": "hn",
        "name": "Hacker News",
    },
    {
        "id": "pinboard",
        "name": "Pinboard",
    },
    {
        "id": "reddit",
        "name": "Reddit",
    },
    {
        "id": "twitter",
        "name": "Twitter",
    }
];

type ShareLinksProps = {
    url: string;
    text: string;
};

export function ShareLinks( { url, text } : ShareLinksProps) {

    const content: JSX.Element[] = []
    links.forEach((link, index) => {
        content.push(<Link className="text-body-tertiary text-decoration-none" href={`https://simpleshare.dev/go?site=${link.id}&url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`} key={index}>
            <img src={`https://cdn.simpleshare.dev/tile/${link.id}-tile.svg`} alt={`Share on ${link.name}`} className="mx-1" style={{"height": "1.25em"}}/>
        </Link>);
    }
    );

    return (
        <div>
            <small>
                Share: {content}
            </small>
        </div>
    )
}