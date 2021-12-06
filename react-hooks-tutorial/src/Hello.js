import React, { useEffect } from 'react';

export const Hello = () => {
    useEffect(() => {
        console.log('Rendered');

        return () => {
            console.log('Unmount')
        };
    }, [])
    return <div>Hello</div>
}