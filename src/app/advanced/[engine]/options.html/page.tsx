import { getEngine } from '@/engines';
import { RegexOption } from '@/engines/RegexEngine';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { engine: string } }) {
    const engine = getEngine(params.engine);
    if (!engine) {
        return {};
    }

    return {
        title: `Options for ${engine.short_name} regular expressions - RegexPlanet`,
        description: `Options (aka flags) that you can set for ${engine.short_name} regular expressions.`,
    }
}

function OptionValue(theOption: RegexOption): string {
    if (theOption.numericCode) {
        return theOption.numericCode.toString();
    }
    if (theOption.legacyCode) {
        return theOption.legacyCode;
    }
    return theOption.code;
}

export default function Page({ params }: { params: { engine: string } }) {
    const engine = getEngine(params.engine);
    if (!engine) {
        return notFound();
    }

    return (
        <>
            <h1>Options for {engine.short_name} Regular Expressions</h1>
            <hr />
            <div className="alert alert-info" role="alert">Regular expressions can have options (also known as flags) that modify their behavior. Each engine supports a different set of options.</div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Option</th>
                        <th>Description</th>
                        <th>Backend value</th>
                        <th>Portable value</th>
                    </tr>
                </thead>
                <tbody>
                    {engine.options.map((option) => (
                        <tr key={option.code}>
                            <td>{option.code}</td>
                            <td>{option.description}</td>
                            <td>{OptionValue(option)}</td>
                            <td>{option.portableCode || <i className="text-muted">(not portable)</i>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {engine.option_notes ? (
                <div dangerouslySetInnerHTML={{ __html: engine.option_notes }} />
            ) : (
                <></>
            )}
        </>
    )
}
