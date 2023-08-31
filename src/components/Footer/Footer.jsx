import {useNavigate} from "react-router-dom";
import {useContext} from "react";

import {footerTitles as titles, footerElements} from "@utils/constants";
import {toFormatBrandForRequest} from "@utils/helpers";
import {appContext} from "@services/Context";

import "./Footer.style.scss";

import peroLogo from "@assets/images/logo/pero-logo.svg";
import telegramLogo from "@assets/images/social-media/telegram.svg";


export default function Footer({className='footer'}) {
    const {changeRegPopup} = useContext(appContext);
    const navigate = useNavigate();


    const footerMobileRender = () => {
        return (
            <ul className="footer__mobile">
                <li className="footer__mobile-el">
                    <svg width="40" height="40" onClick={() => navigate('/catalog/')} viewBox="0 0 40 40" fill="none">
                        <path d="M24.2852 22.4C26.5309 22.4 28.6051 21.568 30.2737 20.1696L37.5593 28.3296C37.8271 28.63 38.1906 28.799 38.5696 28.7993C38.7574 28.7994 38.9432 28.7582 39.1167 28.6779C39.2902 28.5976 39.4478 28.4798 39.5806 28.3312C39.7135 28.1827 39.8189 28.0063 39.8908 27.8121C39.9628 27.6179 39.9999 27.4098 40 27.1995C40.0001 26.9893 39.9633 26.7811 39.8916 26.5868C39.8199 26.3925 39.7147 26.216 39.5821 26.0672L32.2965 17.9072C33.6451 15.8873 34.3454 13.4167 34.2842 10.8954C34.223 8.37416 33.4037 5.94986 31.9591 4.01505C30.5144 2.08025 28.529 0.748222 26.3243 0.234653C24.1195 -0.278916 21.8246 0.0560409 19.811 1.18529C17.7974 2.31453 16.183 4.17196 15.2293 6.4568C14.2756 8.74165 14.0384 11.3201 14.5561 13.7748C15.0738 16.2294 16.3161 18.4165 18.0818 19.9819C19.8475 21.5473 22.0333 22.3993 24.2852 22.4ZM24.2852 19.2C22.3909 19.2 20.5741 18.3572 19.2346 16.8569C17.895 15.3566 17.1425 13.3217 17.1425 11.2C17.1425 9.07828 17.895 7.04345 19.2346 5.54316C20.5741 4.04287 22.3909 3.20001 24.2852 3.20001C26.1796 3.20001 27.9964 4.04287 29.3359 5.54316C30.6754 7.04345 31.4279 9.07828 31.4279 11.2C31.4279 13.3217 30.6754 15.3566 29.3359 16.8569C27.9964 18.3572 26.1796 19.2 24.2852 19.2ZM34.0993 28.9792L31.0822 25.6H2.14281C1.5745 25.6 1.02947 25.8529 0.627616 26.3029C0.22576 26.753 0 27.3635 0 28C0 28.6365 0.22576 29.247 0.627616 29.6971C1.02947 30.1471 1.5745 30.4 2.14281 30.4H32.1422C32.5561 30.4002 32.9612 30.2661 33.3085 30.0139C33.6558 29.7618 33.9305 29.4024 34.0993 28.9792ZM14.6997 20.8C13.5826 19.4007 12.7207 17.77 12.1626 16H2.14281C1.5745 16 1.02947 16.2529 0.627616 16.703C0.22576 17.153 0 17.7635 0 18.4C0 19.0365 0.22576 19.647 0.627616 20.0971C1.02947 20.5472 1.5745 20.8 2.14281 20.8H14.6997ZM12.1626 6.40001C11.6855 7.90401 11.4283 9.51681 11.4283 11.2H2.14281C1.5745 11.2 1.02947 10.9472 0.627616 10.4971C0.22576 10.047 0 9.43653 0 8.80001C0 8.16349 0.22576 7.55304 0.627616 7.10295C1.02947 6.65287 1.5745 6.40001 2.14281 6.40001H12.1626ZM2.14281 35.2C1.5745 35.2 1.02947 35.4529 0.627616 35.9029C0.22576 36.353 0 36.9635 0 37.6C0 38.2365 0.22576 38.847 0.627616 39.2971C1.02947 39.7471 1.5745 40 2.14281 40H32.1422C32.7105 40 33.2556 39.7471 33.6574 39.2971C34.0593 38.847 34.285 38.2365 34.285 37.6C34.285 36.9635 34.0593 36.353 33.6574 35.9029C33.2556 35.4529 32.7105 35.2 32.1422 35.2H2.14281Z" fill="#797979"/>
                    </svg>    
                    <svg width="45" height="40" viewBox="0 0 45 40" fill="none">
                        <path d="M43.9113 8.19721C43.2131 6.59311 42.2063 5.13949 40.9474 3.91773C39.6875 2.69232 38.2021 1.7185 36.5719 1.04923C34.8815 0.352489 33.0684 -0.00414399 31.238 3.63284e-05C28.67 3.63284e-05 26.1645 0.697778 23.9871 2.01573C23.4662 2.33101 22.9714 2.6773 22.5026 3.05459C22.0338 2.6773 21.5389 2.33101 21.018 2.01573C18.8407 0.697778 16.3352 3.63284e-05 13.7672 3.63284e-05C11.918 3.63284e-05 10.1262 0.351491 8.43326 1.04923C6.79765 1.72113 5.32353 2.68763 4.05776 3.91773C2.79718 5.13811 1.79019 6.59207 1.09388 8.19721C0.369834 9.86662 0 11.6394 0 13.4639C0 15.185 0.354207 16.9784 1.05741 18.8029C1.64602 20.3276 2.48987 21.9091 3.56812 23.5062C5.27665 26.0335 7.62587 28.6695 10.5429 31.3415C15.3768 35.7709 20.1638 38.8306 20.3669 38.9547L21.6014 39.7403C22.1484 40.0866 22.8516 40.0866 23.3985 39.7403L24.633 38.9547C24.8362 38.8255 29.618 35.7709 34.4571 31.3415C37.3741 28.6695 39.7233 26.0335 41.4318 23.5062C42.5101 21.9091 43.3591 20.3276 43.9425 18.8029C44.6457 16.9784 44.9999 15.185 44.9999 13.4639C45.0052 11.6394 44.6353 9.86662 43.9113 8.19721Z" fill="#797979"/>
                    </svg>
                </li>
                <li className="footer__mobile-home home-icon" onClick={() => navigate('/')}>
                    <span className="home-icon__circle">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g clipPath="url(#clip0_159_677)">
                                <path d="M36.6669 22.1111C36.5206 22.1119 36.3757 22.0839 36.2403 22.0286C36.1049 21.9733 35.9818 21.8918 35.878 21.7889L20.0002 5.89997L4.12242 21.7889C3.90986 21.9709 3.63644 22.066 3.3568 22.0552C3.07716 22.0444 2.81189 21.9285 2.61401 21.7306C2.41613 21.5327 2.3002 21.2674 2.2894 20.9878C2.2786 20.7082 2.37372 20.4347 2.55575 20.2222L19.2224 3.55552C19.4306 3.34858 19.7122 3.23242 20.0057 3.23242C20.2993 3.23242 20.5809 3.34858 20.7891 3.55552L37.4557 20.2222C37.6086 20.3782 37.7122 20.5758 37.7534 20.7903C37.7946 21.0047 37.7717 21.2266 37.6875 21.4282C37.6034 21.6297 37.4617 21.802 37.2801 21.9235C37.0986 22.0449 36.8853 22.1102 36.6669 22.1111Z" fill="white"/>
                                <path d="M19.9998 8.65552L6.6665 22.0333V35.5555C6.6665 36.1449 6.90063 36.7101 7.31738 37.1269C7.73413 37.5436 8.29936 37.7777 8.88873 37.7777H16.6665V26.6666H23.3332V37.7777H31.1109C31.7003 37.7777 32.2655 37.5436 32.6823 37.1269C33.099 36.7101 33.3332 36.1449 33.3332 35.5555V21.9555L19.9998 8.65552Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_159_677">
                                    <rect width="40" height="40" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </li>
                <li className="footer__mobile-el">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M0 1.71429C0 1.25963 0.180624 0.823593 0.502137 0.502102C0.823651 0.180612 1.25972 0 1.71441 0H2.98992C5.1615 0 6.46445 1.46057 7.20736 2.81829C7.70339 3.72343 8.06228 4.77257 8.34344 5.72343C8.41949 5.71743 8.49574 5.71438 8.57203 5.71429H37.1409C39.0382 5.71429 40.4097 7.52914 39.8885 9.35543L35.7099 24.0046C35.3353 25.3185 34.5427 26.4746 33.4521 27.2978C32.3616 28.1211 31.0325 28.5666 29.6661 28.5669H16.0697C14.6924 28.5669 13.3533 28.1147 12.2581 27.2797C11.1628 26.4447 10.3722 25.2732 10.0076 23.9451L8.27029 17.6091L5.39009 7.89943L5.3878 7.88114C5.03121 6.58514 4.69747 5.37143 4.19915 4.46629C3.7214 3.58629 3.33738 3.42857 2.99221 3.42857H1.71441C1.25972 3.42857 0.823651 3.24796 0.502137 2.92647C0.180624 2.60498 0 2.16894 0 1.71429ZM14.8582 40C16.0707 40 17.2335 39.5184 18.0909 38.6611C18.9483 37.8038 19.4299 36.641 19.4299 35.4286C19.4299 34.2162 18.9483 33.0534 18.0909 32.1961C17.2335 31.3388 16.0707 30.8571 14.8582 30.8571C13.6457 30.8571 12.4828 31.3388 11.6255 32.1961C10.7681 33.0534 10.2864 34.2162 10.2864 35.4286C10.2864 36.641 10.7681 37.8038 11.6255 38.6611C12.4828 39.5184 13.6457 40 14.8582 40ZM30.8593 40C32.0718 40 33.2346 39.5184 34.092 38.6611C34.9494 37.8038 35.431 36.641 35.431 35.4286C35.431 34.2162 34.9494 33.0534 34.092 32.1961C33.2346 31.3388 32.0718 30.8571 30.8593 30.8571C29.6468 30.8571 28.484 31.3388 27.6266 32.1961C26.7692 33.0534 26.2875 34.2162 26.2875 35.4286C26.2875 36.641 26.7692 37.8038 27.6266 38.6611C28.484 39.5184 29.6468 40 30.8593 40Z" fill="#797979"/>
                    </svg>
                    <svg width="35" height="40" onClick={changeRegPopup} viewBox="0 0 35 40" fill="none">
                        <path d="M17.5 0C20.2848 0 22.9555 1.05357 24.9246 2.92893C26.8938 4.8043 28 7.34784 28 10C28 12.6522 26.8938 15.1957 24.9246 17.0711C22.9555 18.9464 20.2848 20 17.5 20C14.7152 20 12.0445 18.9464 10.0754 17.0711C8.10625 15.1957 7 12.6522 7 10C7 7.34784 8.10625 4.8043 10.0754 2.92893C12.0445 1.05357 14.7152 0 17.5 0ZM17.5 22C29.1025 22 35 22 35 35V40H0V35C0 22 5.8975 22 17.5 22Z" fill="#797979"/>
                    </svg>
                </li>
            </ul>
        );
    }


    return (
        <footer className={className}>
            <div className="footer__wrapper">
                <div className="footer__top">
                    {titles.map(({id, title}) => (
                            <div className="footer__top-block footer-block" key={id}>
                                <h5 className="footer-block__title">{title}</h5>
                                <ul className="footer-block__list">
                                    {footerElements[id - 1].elements.map((element, index) => (
                                        <li 
                                            className="footer-block__list-el" 
                                            onClick={() => id === 2 && navigate(`/catalog/?brands=${toFormatBrandForRequest(element)}`)} 
                                            key={index}
                                        >
                                            {element}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )
                    )}

                    <div className="footer__top-block footer-block footer-block--last">
                        <h5 className="footer-block__title">Остались вопросы ?</h5>
                        <p className="footer-block__text">Мы с радостью на них ответим</p>
                        <button className="footer-block__btn btn">Задать вопрос</button>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__bottom-left">© Pero, 2023</p>
                    <div className="footer__bottom-right">
                        <img src={peroLogo} alt="pero"/>
                        <a href="https://t.me/pero_nn_bot">
                            <img src={telegramLogo} alt="tg:pero"/>
                        </a>
                    </div>
                </div>
                
                {footerMobileRender()}
            </div>
        </footer>
    )
}
