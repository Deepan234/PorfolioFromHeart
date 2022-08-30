import React from "react";
import "./About.css";
import aboutImg from "./img/About1.PNG";
function About() {
    //  Up To Top Btn
    window.addEventListener("scroll", function () {
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0)
    });
    return (
        <div className="about component__space" id="About">
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={aboutImg} alt="" className="about__img" />
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">About Me</h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                Hi ,I am Deepan Chakravarthy (Full Stack Developer) (React) in Capgemini.
                                Build two different websites and worked with devops and deployments like
                                docker,jenkins etc., and also worked in spring boot config and spring security
                                along with netflix eureka server.
                            </p>
                            <p className="about__text p__color">
                                Researching, designing, implementing and managing software. Testing or evaluating
                                new software. Identifying required modifications and developing them. Writing and
                                implementing software code is the role of developer and I acknomeldge this things to do.
                            </p>
                            <p className="about__text p__color">
                                A Full Stack Developer is someone who works with the Back End — or
                                server side — of the application as well as the Front End, or client side.
                                Full Stack Developers have to have some skills in a wide variety of coding.
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a href="https://drive.google.com/drive/folders/1ipjxeliOPGxWEdedPnFDJbVfuNVRMft4">
                                    <button className="about btn pointer">Download Cv</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* UP TO TOP BTN */}
            <div className="up__to__top__btn">
                <a href="#" className="bottom__to__top">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-up white"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default About;
