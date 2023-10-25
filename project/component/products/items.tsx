import React from 'react';

export default function ItemsWraper({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <div className='products-page-items'>
            {children}
        </div>
    );
}