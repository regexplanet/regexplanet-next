import { Metadata } from 'next';

import { cleanupSearchParam } from '@/functions/cleanupSearchParam';
import { ShareFormState } from './ShareFormState';
import { ShareForm } from './ShareForm';
import { PreviewRegex } from './PreviewRegex';

export const metadata: Metadata = {
    title: "Sharing - RegexPlanet",
};

async function lookupShareCode(shareCode: string): Promise<ShareFormState> {

    if (!shareCode) {
        return {
            message: "Please enter a share code",
            messageType: "info",
        };
    }
    //shareCode = "yyyyfud6z4r";
    const shareApiUrl = shareCode.indexOf('-') === -1 
        ? `https://appengine.regexplanet.com/share/index.json?share=${shareCode}` 
        : `https://www.regex.zone/share/lookup.json?share=${shareCode}`;
    const response = await fetch(shareApiUrl);
    const data = await response.json();
    console.log(`server response=${JSON.stringify(data)}`);
    if (data.success) {
        return {
            message: `Share code ${shareCode} found!`,
            messageType: 'success',
            shareCode,
            regex: data.recipe,
        };
    }
    return {
        message: `Share code ${shareCode} not found`,
        messageType: 'danger',
        shareCode,
    };
}

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) 
{
    const shareCode = cleanupSearchParam(searchParams["share"]);
    const shareFormState = await lookupShareCode(shareCode);

    return (
        <>
            <h1>Sharing</h1>
            { shareFormState.message ? <div className={`alert alert-${shareFormState.messageType || "info"}`}>{shareFormState.message}</div> : null }
            { shareFormState.regex
                ? <PreviewRegex theShare={shareFormState.regex} />
                : <ShareForm shareCode={shareCode} />
            }   
        </>
    );
}