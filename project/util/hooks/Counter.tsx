import React, { useState, useEffect } from 'react';
import '../../assets/scss/intro/_counter.scss';

export default function Counter({ limit, title }: { limit: number, title: string }): React.JSX.Element {
    const [count, setCounter] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (count < limit) {
                setCounter(count + 1);
            }
        });

        return () => {
            clearInterval(timer);
        }
    }, [count]);

    return (
        <div className='counter'>
            <span className='count'>{count}</span>
            <span className='title'>{title}</span>
        </div>
    );
}