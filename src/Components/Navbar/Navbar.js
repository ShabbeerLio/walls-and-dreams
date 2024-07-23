import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Logo from "../../Assets/logo-rbg.png"
import { Link } from 'react-router-dom';
// import { IoLogoWhatsapp } from "react-icons/io5";
import FormFloat from './FormFloat';
import { IoReorderTwo } from "react-icons/io5";

const Navbar = (props) => {

    const [activeLink, setActiveLink] = useState('/');
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);
    const [formopen, setFormopen] = useState(false);
    const [showEnquiry, setShowEnquiry] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100; // Adjust this value based on your requirement
            setShowEnquiry(show);
        };

        const sections = document.querySelectorAll('section[id]');

        function scrollActive() {
            const scrollY = window.scrollY;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50 + 80;
                const sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active-link');
                } else {
                    document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active-link');
                }
            });
        }

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const closeMenu = (path) => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
        const togglerIcon = document.querySelectorAll('.toggler-icon');
        togglerIcon.forEach(icon => {
            icon.classList.toggle('active');
        });
        setIsCollapseOpen(!isCollapseOpen);
        handleLinkClick(path);
    };

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const formIsOpen = () => {
        setFormopen(!formopen);
    };

    const formIsClose = () => {
        setFormopen(false);
    };


    return (
        <>
            <div className="navBar">
                <div id="myNavMenu" className="nav-menu">
                    <nav className="row navbar navbar-expand-lg navbar-light align-items-lg-end">
                        <div className="container-fluid">
                            <div className="company-logo">
                                <div className="company-logo-box">
                                    <a
                                        className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                                        href="/"
                                        onClick={() => handleLinkClick('/')}
                                    >
                                        <img src={Logo} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="nav-button">
                                <button className={`navbar-toggler ${isCollapseOpen ? '' : 'collapsed'} d-flex d-lg-none flex-column justify-content-around`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    onClick={closeMenu}>
                                    <span className="toggler-icon top-bar"></span>
                                    <span className="toggler-icon middle-bar"></span>
                                    <span className="toggler-icon bottom-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-items">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                                                href="/"
                                                onClick={() => closeMenu('/')}
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
                                                href="/about"
                                                onClick={() => closeMenu('/about')}
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeLink === '/construction' ? 'active' : ''}`}
                                                href="/construction"
                                                onClick={() => closeMenu('/construction')}
                                            >
                                                Construction
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeLink === '/interior' ? 'active' : ''}`}
                                                href="/interior"
                                                onClick={() => closeMenu('/interior')}
                                            >Interior</a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeLink === '/renovation' ? 'active' : ''}`}
                                                href="/renovation"
                                                onClick={() => closeMenu('/renovation')}
                                            >Renovation</a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeLink === '/blog' ? 'active' : ''}`}
                                                href="/blog"
                                                onClick={() => closeMenu('/blog')}
                                            >Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeLink === '/dashboard' ? 'active' : ''}`}
                                                href="/dashboard"
                                                onClick={() => closeMenu('/dashboard')}
                                            >Dashboard</a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={`nav-link ${activeLink === '/contact-us' ? 'active' : ''}`}
                                                href="/contact-us"
                                                onClick={() => closeMenu('/contact-us')}
                                            >Contact Us</a>
                                        </li>
                                        <div className="nav-action">
                                            <div className="call-button">
                                                <p>
                                                    <Link to='tel: +919821128500'>
                                                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                                <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                                                    <animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform>
                                                                </path>
                                                                <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                                                    <set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1"></set>
                                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8"></animate>
                                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4"></animate>
                                                                    <set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0"></set>
                                                                </path>
                                                                <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                                                    <set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1"></set>
                                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20"></animate>
                                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10"></animate>
                                                                    <set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0"></set>
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        Call Us
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="fix-icon-call">
                                <span className='shine'></span>
                                <Link to='tel: +918130377070'>
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                                <animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform>
                                            </path>
                                            <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                                <set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1"></set>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8"></animate>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4"></animate>
                                                <set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0"></set>
                                            </path>
                                            <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                                <set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1"></set>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20"></animate>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10"></animate>
                                                <set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0"></set>
                                            </path>
                                        </g>
                                    </svg>
                                </Link>
                            </div> */}
                            <div className="action">
                                <p>
                                    <IoReorderTwo />
                                </p>
                            </div>
                            {/* <div className="fix-icon">
                                <span className='shine'></span>
                                <Link to="https://wa.me/+918130377070">
                                    <IoLogoWhatsapp />
                                </Link>
                            </div> */}
                            {/* {showEnquiry && (
                                <div className="fix-icon-enquery">
                                    <p onClick={formIsOpen}>ENQUIRE NOW</p>
                                </div>
                            )} */}
                            {formopen && (
                                <>
                                    <FormFloat formIsClose={formIsClose} />
                                </>
                            )}
                        </div>
                    </nav>

                </div>

            </div>
        </>
    )
}

export default Navbar
