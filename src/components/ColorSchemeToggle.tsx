'use client'
import React from "react";

function getColorScheme() {

    if (typeof window === 'undefined') {
        return 'light';
    }

    if (document.documentElement.hasAttribute('data-bs-theme')) {
        return document.documentElement.getAttribute('data-bs-theme');
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
}

export function ColorSchemeToggle() {
    const [currentScheme, setColorScheme] = React.useState(getColorScheme());

    const onClick = (scheme: 'light' | 'dark' | 'auto') => {
        if (scheme == 'auto') {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                scheme = 'dark';
            } else {
                scheme = 'light';
            }
        }
        document.documentElement.setAttribute('data-bs-theme', scheme);
        setColorScheme(scheme);
    }

    return (
        <div className="btn-group" role="group" aria-label="Color scheme selector">
            <button className={`btn btn-sm ${currentScheme == 'light' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => onClick('light')}>Light</button>
            <button className={`btn btn-sm ${currentScheme == 'dark' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => onClick('dark')}>Dark</button>
        </div>
    );
}