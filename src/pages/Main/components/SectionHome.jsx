import React from "react";
import '../styles/SectionHome.css';

function SectionHome() {
    return (
        <section className="home">
            <div className="container-text_home">
                <h1>Acompanhe e cuide da sua gravidez.</h1>

                <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quas fuga nam deleniti, 
                nisi nulla rem nemo libero blanditiis, molestias 
                ipsa ipsam. Dolores fugiat reiciendis debitis distinctio 
                laboriosam ipsam nihil aliquid.</p>

                <button className="button_home">Baixe o App!</button>
            </div>

            <div className="container-img_home">
                <img src="./images/imgHome.png" alt="" />
            </div>
        </section>
    );
}

export default SectionHome;