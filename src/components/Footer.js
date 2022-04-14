import React from 'react';
import '../styles/style.css';
import gitHubIcon from '../components/Projects/assets/images/github.png'
import linkedInIcon from '../components/Projects/assets/images/linkedIn.png'
export default function Footer() {
    return (
        <>
        <footer>
        <a href="https://github.com/Par92"> <img class="Icon" src={gitHubIcon}/></a>
        <a href="https://www.linkedin.com/in/peter-riggs-denver/"> <img class="Icon" src={linkedInIcon}/></a>
        </footer>
        </>
    );
}