import React from 'react';
import '../../styles/style.css';
import myPicture from './assets/images/IMG_2785.jpg';

export default function About() {
  return (
  <div class="sections">
      <img class="Me" src={myPicture}/>
        <p>Hey, I'm Peter Riggs.
            Thanks for taking the time to visit this page. Allow me to better introduce myself.
            Born and raised in Jackson, Tenn., I came to coding through a love of philosphy, logic, and creativity. I am very motivated and loved by my wife, our families, and our pets: 2 cats v. 1 dog.
            I have enjoyed my Jack-of-All-Trades career, spending time in the banking, hospitality, and construction industries. I seek out the the challenge of learning something new and have been promoted to take on more responsibility in every role I've held.
            I have found that I'm able to communicate well with all kinds of people, and like using this skill to unite teams to accomplish a common goal with high levels of success.
        </p>
  </div>
  );
}
