import React from 'react';
import './hero.css';
import {images} from '../../constants';
import {SlArrowRight} from 'react-icons/sl';

const heroSection = {
  name: 'Gianni De Mulder',
  introText: "I am a 25 year old full-time Video Editor and Social Media Manager with over 5 years of experience. I have worked with dozens of the top Twitch streamers and creators from a variety of different games including IRL content. I am always up to date with all of the latest gaming trends and can capitalize on them to maximize views and growth. I can take your content and brand to the next level with professional social media management and editing.",
  ctaText: 'View my work',
  ctaRef: '#portfolio',
  image: images.hero,
}

// TYPES: 
// 'YouTube'
// 'TikTok'
// 'Twitch'

const clients = [
  {
    avatar: images.rogueAvatar,
    name: 'Rogue',
    page: ''
  },
  {
    avatar: images.chaoticMuchAvatar,
    name: 'ChaoticMuch',
    page: ''
  },
  {
    avatar: images.dezignfulAvatar,
    name: 'Dezignful',
    page: ''
  },
  {
    avatar: images.diegoSaursAvatar,
    name: 'DiegoSaurs',
    page: ''
  },
  {
    avatar: images.erycTricepsAvatar,
    name: 'ErycTriceps',
    page: ''
  },
  {
    avatar: images.kingRichardAvatar,
    name: 'King Richard',
    page: ''
  },
  {
    avatar: images.ralliedAvatar,
    name: 'Rallied',
    page: ''
  },
  {
    avatar: images.scopedAvatar,
    name: 'Scoped',
    page: ''
  },
  
]

const Hero = () => {
  return (
    <section id='hero' className='container app__hero'>
      <div className="app__hero-content">
        <div className="app__hero-content-text">
          <h1>{heroSection.name}</h1>
          <p>{heroSection.introText}</p>
          <div className='app__ctaButton1'>
                <a className='app__ctaButton1-cta' href={heroSection.ctaRef}>
                {heroSection.ctaText}
                <SlArrowRight className='app__ctaButton1-arrow1'/>
                <SlArrowRight className='app__ctaButton1-arrow2'/>
                <SlArrowRight className='app__ctaButton1-arrow3'/>
                </a>
            </div>

        </div>
        <div className="app__hero-content-img">
          <div className='app__hero-content-img-glow'/>
          <img src={heroSection.image} alt="" />
        </div>
      </div>
      <div className="app__hero-clients">
        <h2>Creators I have worked with:</h2>
        <div className='app__hero-clients-list'>
          {clients.map((client) => (
            <div className='app__hero-clients-item'>
              <img src={client.avatar} alt="" />
              <div className='app__hero-clients-item-name'>
                <h3>{client.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero