import React from 'react';
import '../styles/Footer.css';


function Footer() {
    return (
        <footer className='footer'>
            <div className="image_footer">
                <img className="logo_footer" src='./images/logo-footer.png' ></img>
            </div>

            <div className="links_columns">
                <div className="links">
                    <h3 className='title_link'>Acesso Rápido</h3>
                    <a className="link" href="/">
                        <i class="fa-solid fa-chevron-right"></i>
                        <p>Home</p>
                    </a>
                    <a className="link" href="/services">
                        <i class="fa-solid fa-chevron-right"></i>
                        <p>Services</p>
                    </a>
                    <a className="link" href="/">
                        <i class="fa-solid fa-chevron-right"></i>
                        <p>Profissionais</p>
                    </a>
                    <a className="link" href="/blog">
                        <i class="fa-solid fa-chevron-right"></i>
                        <p>Blog</p>
                    </a>
                </div>

                <div className="links">
                    <h3 className='title_link'>Nossos Serviços</h3>
                    <a className="link" href="/">
                        <i class="fa-solid fa-chevron-right"></i>
                        <p>Clinico Geral</p>
                    </a>
                    <a className="link" href="/">
                        <i class="fa-solid fa-chevron-right"></i>
                        <p>Fisioterapia</p>
                    </a>
                    <a className="link" href="/">
                        <i class="fa-solid fa-chevron-right"></i>
                        <p>Nutricionista</p>
                    </a>
                    <a className="link" href="/">
                        <i class="fa-solid fa-chevron-right"></i>
                        <p>Obstetra</p>
                    </a>
                    <a className="link" href="/">
                        <i class="fa-solid fa-chevron-right"></i>
                        <p>Organização Gestacional</p>
                    </a>
                </div>

                <div className="links">
                    <h3 className='title_link'>Contato</h3>
                    <a className="link" href="/">
                        <i class="fa-solid fa-phone-flip"></i>
                        <p>+123-456-789</p>
                    </a>
                    <a className="link" href="/">
                        <i class="fa-solid fa-envelope"></i>
                        <p> bebevindo@gmail.com</p>
                    </a>
                    <a className="link" href="/">
                        <i class="fa-solid fa-location-dot"></i>
                        <p> São paulo, Brasil - 123</p>
                    </a>
                </div>

                <div className="links">
                    <h3 className='title_link'>Redes Sociais</h3>
                    <a className="link" href="/">
                        <i class="fa-brands fa-facebook-f"></i>
                        <p>Facebook</p>
                    </a>
                    <a className="link" href="/">
                        <i class="fa-brands fa-twitter"></i>
                        <p>Twitter</p>
                    </a>
                    <a className="link" href="/">
                        <i class="fa-brands fa-instagram"></i>
                        <p>Instagram</p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


