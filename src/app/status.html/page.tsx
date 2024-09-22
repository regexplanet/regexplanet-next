import { Metadata } from 'next';
import { ResultsTable } from './ResultsTable';

export const metadata: Metadata = {
    title: "Backend status - RegexPlanet",
    description: `Status of RegexPlanet's backend services`,
}; 

export default function Page() {

    return (
        <>
            <h1>Current Status</h1>
            <hr />
            <p>
                Each engine is running in a separate instance. The table below shows the current status of each engine.
            </p>
            <p>
                The engines should be very responsive: they do not hit a database or do anything but calculate regexes. They should never take longer than a second (1,000 ms in the table above) unless there is a problem with the regex (or the host). Response times of less than 0.1 second (100 ms) are very good.
            </p>
            <ResultsTable />
        </>
    );
}



