import React from 'react';
import '../../styles/style.css';
import pictureOne from './assets/images/Screenshot.png';
import pictureTwo from './assets/images/Screenshot2.png';
import pictureThree from './assets/images/Screenshot3.png';
import pictureFour from './assets/images/Screenshot4.png';
import pictureFive from './assets/images/avi-richards-Z3ownETsdNQ-unsplash.jpg';

export default function Work() {
  return (
    <div class="sections">
      <div class="Projects">
        <div class="project-pic">
                <a href="https://par92.github.io/group-6/"><img class="Work" id="Work" src={pictureOne}/></a>
                <h3>Project 1 (Stumble On the Force)</h3>
                <a href="https://github.com/Par92/group-6">Github</a>
        </div> 
        <div class="project-pic">
                <a href="https://par92.github.io/Weather-Dashboard/"><img class="Work" src={pictureTwo}/></a>
                <h3>Weather Dashboard</h3>
                <a href="https://github.com/Par92/Weather-Dashboard">Github</a>
        </div>
        <div class="project-pic">
                <a href="https://par92.github.io/JavaScript-Quiz/"><img class="Work" src={pictureThree}/></a>
                <h3>JS Quiz!</h3>
                <a href="https://github.com/Par92/JavaScript-Quiz">Github</a>
        </div>
        <div class="project-pic">
                <a href="https://rocky-ridge-05041.herokuapp.com/"><img class="Work" src={pictureFour}/></a>
                <h3>Project 2 (AFC Richmond Sports Page)</h3>
        </div> 
        <div class="project-pic">
                <a href="https://google.com"><img class="Work" src={pictureFive}/></a>
                <h3>Project 3 (coming soon)</h3>
        </div>
      </div>
    </div>
  );
}
