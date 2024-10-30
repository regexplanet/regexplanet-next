import { Level } from '@/components/Level';
import { getEngines } from '@/engines';



export default function List() {

    const rows = getEngines().map((engine) => {
        return (<tr key={`engine_${engine.handle}`}><td>{engine.short_name}</td><td><Level level={engine.level}/></td></tr>);
    });

    const total = getEngines().length;
    const working = getEngines().filter(engine => engine.test_url).length;

    return (
    <>
        <h1>Engines</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        <p>
            <Level level="alpha"/>: {getEngines().filter(engine => engine.level === 'alpha').length}<br/>
            <Level level="beta"/>: {getEngines().filter(engine => engine.level === 'beta').length}<br/>
            <Level level="golden"/>: {getEngines().filter(engine => engine.level === 'golden').length}<br/>
            Total working: {working}<br />
            <Level level="notimplemented"/>: {getEngines().filter(engine => engine.level === 'notimplemented').length}<br/>
            Grand total: {total}
        </p>
    </>
    );
}