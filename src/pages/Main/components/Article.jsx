import React from 'react'
import '../styles/Article.css'


function Articles() {
    return (
        <div className="new">
            <div className="image-card">
                <img className="img_card" src='./images/article-ex.png' alt='img-article'></img>
            </div>

            <div className="author_new">
                <div className="author">
                    <i class="fa-solid fa-calendar"></i> 2 Maio, 2023
                </div>

                <div className="author">
                    <i class="fa-solid fa-user"></i> By Admin
                </div>
            </div>

            <div className="title">
                Blog title goes here
            </div>

            <div className="desc_new">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.
            </div>

            <button className='more'>
                learn more <i className="fa-solid fa-square-caret-right"></i>
            </button>
        </div>
    );
}

export default Articles;