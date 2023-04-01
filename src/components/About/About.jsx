import React from 'react';
import { images } from '../../constants';
import './about.css';

const aboutSection = {
    title: "What exactly I'd be doing for you:",
    description: ''
}

const work = {
    tag: 'Content creation',
    title: 'Content management',
    descriptionItems: [
        'Go through your Twitch clips everyday',
        'Edit those clips into an entertaining TT/IG/YT format ',
        'Come up with clever/engaging captions',
        'Post the Tiktoks/Reels/Shorts during peak hours',
    ],
    description: "I can pretty much take care of everything myself and reduce your workload to 0, BUT I can also hop into Discord calls with you to discuss content ideas and give you scripts for intros and voiceovers if you'd like to be more involved. Creating and sending me off-stream content is also a possibility if you want to put in additional effort yourself. This extra effort however isn't required, but could definitely help out to increase the overall views and growth.",
    image: images.work1
}

const About = () => {
  return (
    <section id='about' className='container app__about'>
        <h1>{aboutSection.title}</h1>
        <p>{aboutSection.description}</p>
        <ul className='app__about-sumup'>
            {work.descriptionItems.map((descriptionItem) => (
                <li className="app__about-sumup-item">
                    <h2>{descriptionItem}</h2>
                </li>
            ))}
        </ul>
        <p>{work.description}</p>
    </section>
  )
}

export default About