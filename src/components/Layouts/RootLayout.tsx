import React from 'react';
import Navbar from '../shared/Navbar';

interface IProps {
    children: React.ReactNode
}
const RootLayout = ({children}:IProps) => {
    return (
        <>
         <Navbar />
            {children}
        </>
    );
};

export default RootLayout;