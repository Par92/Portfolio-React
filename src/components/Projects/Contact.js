import React from 'react';
import '../../styles/style.css';
import myResume from './assets/Peter Riggs - Resume.pdf';

export default function Contact() {
  return (
    <div class="sections">
        <h2>Contact Me</h2>

        <ul>
            <li>Email: Peter92Riggs@gmail.com</li>
            <li>GitHub:<a href="https://github.com/Par92"> Par92</a></li>
            <li>LinkedIn:<a href="https://www.linkedin.com/in/peter-riggs-denver/"> Peter Riggs</a></li>
            <li>Resume: <a href={myResume}> PDF </a></li>
        </ul>
        
    </div>
  );
}
