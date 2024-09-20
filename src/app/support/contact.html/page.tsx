'use client'

import { usePathname, useSearchParams } from 'next/navigation'

export default function Page() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    let fullpath = pathname;
    if (searchParams.toString().length > 0) {
        fullpath += '?' + searchParams.toString();
    }

    return (
        <>
            <iframe height="737" title="Embedded Wufoo Form" style={{"width":"100%","border":"none"}} sandbox="allow-popups-to-escape-sandbox allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin" src={`https://fileformat.wufoo.com/embed/z5yinul1mj3me9/?field14=regexplanet-next&field16=${encodeURIComponent(fullpath)}`}></iframe>
        </>
    );
}