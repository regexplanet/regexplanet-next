'use client'
import { RegexEngine } from "@/engines/RegexEngine";
import React from "react";
import { useState, useEffect, useRef } from 'react';
import { createPopper } from '@popperjs/core';

type HelpButtonDropdownProps = {
    links: Record<string, string>;
};

export function HelpButtonDropDown({ links }: HelpButtonDropdownProps) {
    const [showPopover, setShowPopover] = useState(false);
    const buttonRef = useRef(null);
    const popoverRef = useRef(null);

    useEffect(() => {
        if (showPopover && buttonRef.current && popoverRef.current) {
            const popper = createPopper(buttonRef.current, popoverRef.current, {
                placement: 'bottom-end', // Customize placement as needed
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 0], // Adjust offset as needed
                        },
                    },
                ],
            });

            return () => {
                popper.destroy();
            };
        }
    }, [showPopover]);

    return (
            <div className="btn-group" role="group">
                <button 
                    ref={buttonRef} 
                    type="button" 
                    className="btn btn-success dropdown-toggle border-start" 
                    aria-expanded="false"
                    onClick={(e) => { console.log(e); setShowPopover(!showPopover)}}>
                    
                </button>
                { showPopover && (<ul ref={popoverRef} className="dropdown-menu show">
                    { Object.entries(links).map(([key, value]) => <li key={key}><a className="dropdown-item" href={value}>{key}</a></li>) }
                </ul>)}
            </div>
    );
}

type HelpButtonProps = {
    engine: RegexEngine;
};

export function HelpButton({ engine }: HelpButtonProps) {
    return (
        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <a href={engine.help_url} className="btn btn-success" target="_blank">{engine.help_label}</a>
            { Object.keys(engine.links).length > 0 ? <HelpButtonDropDown links={engine.links} /> : null }
        </div>
    )
}
