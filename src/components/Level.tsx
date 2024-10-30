type LevelProps = {
    level: string;
}

export function Level({ level }: LevelProps) {
    if (level === 'alpha') {
        return (<span className="badge bg-danger">{level}</span>);
    }
    if (level === 'beta') {
        return (<span className="badge bg-warning">{level}</span>);
    }
    if (level === 'golden') {
        return (<span className="badge bg-success">{level}</span>);
    }
    if (level === 'notimplemented') {
        return (<i>(not implemented yet)</i>);
    }
    return (<>{level}</>)
}
