import React from 'react';
import { github, linkedin, youtube, instagram } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
     <a target="blank" href="https://www.youtube.com/channel/UCQ0FEKIwfm9mf27FPoI7-Fw"><img  src={youtube} /> </a>
    </div>

    <div>
      <a target="blank" href="https://www.linkedin.com/in/luka-habu%C5%A1-14639b20a/"><img src={linkedin} /> </a>
    </div>
    <div>
    <a target="blank" href="https://www.instagram.com/lukahabus/"><img src={instagram} /></a>
    </div>
    <div>
    <a target="blank" href="https://github.com/Ficiao/WiaP-Head-in-the-Clouds"> <img src={github} /></a>
    </div>
  </div>
);

export default Brand;