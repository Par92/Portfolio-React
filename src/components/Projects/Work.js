import React from 'react';
import '../../styles/style.css';
import pictureOne from './assets/images/Screenshot.png';
import pictureTwo from './assets/images/Screenshot2.png';
import pictureThree from './assets/images/Screenshot3.png';
import pictureFour from './assets/images/Screenshot4.png';
import pictureFive from './assets/images/avi-richards-Z3ownETsdNQ-unsplash.jpg';
import gitHubIcon from './assets/images/github.png'
import pictureSix from './assets/images/Screenshot5.png'
import pictureSeven from './assets/images/booksearch.png'
import pictureEight from './assets/images/eldenmrkt.gif'

export default function Work() {
  return (
    <div class="sections">
      <div class="Projects">
        <div class="project-pic">
                <a href="https://eldenmarket.herokuapp.com/"><img class="Work" src={pictureEight}/></a>
                <h3>Project 3 (Elden Market)</h3>
                <a href="https://github.com/bhodge166/eldenMarket"><img class="Icon" src={gitHubIcon}/></a>
                <h3> (click icon for github link)</h3>
        </div>
        <div class="project-pic">
                <a href="https://richmondafc.herokuapp.com/"><img class="Work" src={pictureFour}/></a>
                <h3>Project 2 (AFC Richmond)</h3>
                <a href="https://github.com/Par92/lassoSportsPage"><img class="Icon" src={gitHubIcon}/></a>
        </div> 
        <div class="project-pic">
                <a href="https://lit-retreat-07574.herokuapp.com/"><img class="Work" src={pictureSeven}/></a>
                <h3>Book Search (google API)</h3>
                <a href="https://github.com/Par92/Book-Search-Engine"><img class="Icon" src={gitHubIcon}/></a>
        </div>
        <div class="project-pic">
                <a href="https://par92.github.io/Weather-Dashboard/"><img class="Work" src={pictureTwo}/></a>
                <h3>Weather Dashboard</h3>
                <a href="https://github.com/Par92/Weather-Dashboard"><img class="Icon" src={gitHubIcon}/></a>
        </div>
        <div class="project-pic">
                <a href="https://par92.github.io/JavaScript-Quiz/"><img class="Work" src={pictureThree}/></a>
                <h3>JS Quiz!</h3>
                <a href="https://github.com/Par92/JavaScript-Quiz"><img class="Icon" src={gitHubIcon}/></a>
        </div>
        <div class="project-pic">
                <a href="https://par92.github.io/group-6/"><img class="Work" id="Work" src={pictureOne}/></a>
                <h3>Project 1 (Stumble On the Force)</h3>
                <a href="https://github.com/Par92/group-6"><img class="Icon" src={gitHubIcon}/></a>
        </div> 
      </div>
    </div>
  );
}
