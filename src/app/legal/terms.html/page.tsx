import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service - RegexPlanet",
};

export default function Page() {

    return (
        <>
            <h1>Terms of Service</h1>

            <h2 className="h4 py-2"><small>Thanks you for using RegexPlanet!</small></h2>

            <div className="alert alert-warning" role="alert">tl;dr: It is a free service.  Use it at your own risk and don&apos;t rely on it.</div>

            <p className="py-2">
                These Terms of Service (“Terms”) govern your access to and use of any website, app, service, technology, API,
                widget, platform, channel or any other products or features owned, operated, branded or offered by RegexPlanet (“RegexPlanet” or the “Service”),
            </p>

            <p className="py-2">
                Please read these Terms carefully, and contact us if you have any questions. By accessing or using the Service, you agree to be bound 
                by these Terms and by our Privacy Policy.  If you do not agree to our Terms, you must not access or use the Service.
            </p>


            <ol>
                <li className="py-2">
                    <b>The Service</b><br/>
                    RegexPlanet is a website for testing regular expressions.  It is provided as a free service to the public.
                </li>
                <li className="py-2">
                    <b>Disclaimer</b><br />
                    The Service is provided “as is” and “as available” without any warranties of any kind, either express or implied.  RegexPlanet does not warrant that the Service will be available, uninterrupted, secure, or error-free.
                </li>
                <li className="py-2">
                    <b>Limitation of Liability</b><br/>
                    RegexPlanet will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the Service.
                </li>
                <li className="py-2">
                    <b>Links to Other Websites</b><br />
                    RegexPlanet contains links to third party websites or services that we do not own or control. We are not responsible for the content, policies, or practices of any third party website or service linked to on our Site. It is your responsibility to read the terms and conditions and privacy policies of these third party websites before using these sites.
                </li>
                <li className="py-2">
                    <b>Changes to the Terms</b><br/>
                    RegexPlanet reserves the right to modify these Terms at any time.  If we make changes to these Terms, we will post the revised Terms on the Site and update the “Last Updated” date at the top of these Terms.  If you continue to use the Service after the changes are posted, you agree to the revised Terms.    
                </li>
                <li className="py-2">
                    <b>Termination</b><br/>
                    RegexPlanet reserves the right to terminate or suspend your access to the Service at any time, without notice, for any reason.
                </li>
                <li className="py-2">
                    <b>Feedback</b><br/>
                    If you provide RegexPlanet with any feedback, comments, or suggestions regarding the Service, you grant RegexPlanet the right to 
                    use such feedback, comments, or suggestions for any purpose without any compensation to you.
                </li>
                <li className="py-2">
                    <b>Governing Law</b><br/>
                    These Terms are governed by the laws of the Commonwealth of Pennsylvania.
                </li>
                <li className="py-2">
                    <b>Contact</b><br/>
                    If you have any questions about these Terms, please contact us via the <a href="/support/contact.html">contact form linked in the footer</a>.
                </li>
            </ol>
            <p>Effective Date: January 1st, 2024</p>
        </>
    );
}