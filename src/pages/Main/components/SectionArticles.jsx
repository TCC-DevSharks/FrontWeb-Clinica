import React from 'react'
import '../styles/SectionArticles.css'
import Article from './Article'

function SectionArticles(){
    return(
        <section className='articles'>
            <div className='description-ex'>
                Nossos artigos
            </div>

            <div className="news">
                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </div>
       </section>
    );
}

export default SectionArticles;