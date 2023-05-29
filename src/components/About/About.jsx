import React, { useState } from 'react';
import { images } from '../../constants';
import './about.css';

const aboutSection = {
    title: "What exactly I'd be doing for you:",
    description: ''
}

const work = [
    {
        label: "Gather footage",
        description: "Go through Twitch clips"
    },
    {
        label: "Convert to short-form",
        description: "Edit the clips into TikTok / Instagram Reels / YouTube Shorts format"
    },
    {
        label: "Engage audience",
        description: "Come up with clever / engaging captions & tags"
    },
    {
        label: "Handle distribution",
        description: "Post the short-form content during peak hours"
    },
]

const About = () => {
    const [expandedCard, setExpandedCard] = useState(null);
  
    const handleCardHover = (index) => {
      if (expandedCard !== index) {
        setExpandedCard(index);
      }
    };
  
    return (
        <section id='about' className='container app__about'>
            <h1>{aboutSection.title}</h1>
            <p>{aboutSection.description}</p>
            <div className="app__about-cards">
                {work.map((item, index) => (
                    <div className={`app__about-card ${index === expandedCard ? 'expandedCard' : ''}`} onMouseEnter={() => handleCardHover(index)}>
                        <h1>{item.label}</h1>
                        <div className="app__about-card-expanded">
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p>I can pretty much take care of everything myself and reduce your workload to 0, BUT I can also hop into Discord calls with you to discuss content ideas and give you scripts for intros and voiceovers if you'd like to be more involved. Creating and sending me off-stream content is also a possibility if you want to put in additional effort yourself. This extra effort however isn't required, but could definitely help out to increase the overall views and growth.</p>
        </section>
    );
};

export default About