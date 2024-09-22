import { getEngine } from '@/engines';
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
                    </tr>
                </thead>
                <tbody>
                    {engine.options.map((option) => (
                        <tr key={option.code}>
                            <td>{option.code}</td>
                            <td>{option.description}</td>
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
