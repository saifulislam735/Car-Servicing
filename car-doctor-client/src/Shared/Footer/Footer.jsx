// import React from 'react';
import logo from '../../assets/assets/logo.svg'
const Footer = () => {
    return (
        <footer className="footer bg-[#151515] items-center px-[150px] text-[#F3F3F3] py-32 ">
            <aside>

                <img src={logo} alt="" />
                <p>
                    Edwin Diaz is a software and web  <br />
                    technologies engineer, a life coach  <br />
                    trainer who is also a serial .<br />

                </p>
            </aside>
            <nav>
                <h6 className="footer-title">About</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Why Car Doctor?</a>
                <a className="link link-hover">About</a>

            </nav>
            <nav>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesbility</a>
            </nav>
        </footer>
    );
};

export default Footer;