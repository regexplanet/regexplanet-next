import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy - RegexPlanet",
};

export default function Page() {
    return (
        <>
            <h1>Privacy Policy</h1>

            The privacy of RegexPlanet users is important to me.


            <h2 className="py-2">What personal information do I collect?</h2>
            <ul>
                <li>IP address</li>
                <li>User Agent</li>
                <li>Anything else your browser sends</li>
                <li>Anything you type into one of the forms</li>
            </ul>

            <h2 className="py-2">What do I do with this personal information?</h2>
            <ul>
                <li>Monitor who is using the service</li>
                <li>Respond to feedback and inquiries</li>
                <li>Hunt down spammers and string them up by their fingernails</li>
            </ul>

            <h2 className="py-2">How do I keep this information secure?</h2>
            <p>
                I do not store any data locally. Raw log files are stored by the cloud provider (currently Google CloudRun). 
            </p>

            <h2 className="py-2">Is that it?</h2>
            <p>
                Unfortunately not. I use a variety of third party tools to run the site, each of which has their own privacy policy.  
                The list includes but is not limited to:
            </p>

            <ul>
                <li>Cloudflare</li>
                <li>Developer Media</li>
                <li>Google AdSense</li>
                <li>Google Analytics</li>
                <li>Google AppEngine</li>
                <li>Google CloudRun</li>
                <li>Regex.zone</li>
                <li>Vercel</li>
                <li>Wufoo</li>
            </ul>
        </>
    );
}