import React from 'react';

export default function SelectionWraper({ children }: { children: React.ReactNode}): React.JSX.Element {
    return (
        <div className='products-page-selection'>
            {children}
        </div>
    );
}