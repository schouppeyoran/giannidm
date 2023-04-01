import React from 'react';

import {Navbar, Hero, Footer, About, Portfolio, Results} from './components';

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Portfolio/>
            <Results/>
            <Footer/>
        </>
    )
}

export default App