import React from 'react';
import Feature from '../feature/Feature';
import './whatisfluke.css';

const Whatisfluke = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Fluke Factory?" text="Fluke Factory is a young team of focused and driven individuals commited towards building entertaining pieces of software, be it games, music or art." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1>The possibilities are NOT beyond our imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Games" text="Taking hella long bish, give em to me now!" />
      <Feature title="Music" text="Explore the tunes" />
      <Feature title="Art" text="Arttt" />
    </div>
  </div>
);

export default Whatisfluke;
