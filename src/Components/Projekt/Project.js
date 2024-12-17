import React from 'react';
import Navbar from '../Navbar/Navbar';
import Layput from '../Layout/layput';
import Home from '../Home/Home';
import Real from '../Real/real';

const Project = () => {
    return (
        <div>
                <Layput/>
                <Navbar/>
                <Real/>
                <Home/>
        </div>
    );
}

export default Project;
