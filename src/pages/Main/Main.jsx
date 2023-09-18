import React from 'react';
import Header from './components/Header';
import SectionArticles from './components/SectionArticles'
import Home from './components/SectionHome'
import Footer from './components/Footer';

function Main(){
    return (
      <div>
        <Header/>
        <Home/>
        <SectionArticles/>
        <Footer/>
      </div>  
    );
};

export default Main;