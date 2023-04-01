import React, { useState } from 'react';
import './portfolio.css';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import images from '../../constants/images';

const portfolioSection = {
    title: 'My portfolio',
    description: ''
}

const portfolioCategories = [
  {
    label: 'Warzone',
    id: 'warzone'
  },
  {
    label: 'Fortnite',
    id: 'fortnite'
  },
  {
    label: 'Valorant',
    id: 'valorant'
  },
  {
    label: 'Apex Legends',
    id: 'apex'
  },
  {
    label: 'IRL',
    id: 'irl'
  },
]

const portfolioItems = [
  {
    title: 'apextt1',
    thumbnail: images.apextt1Thumbnail,
    streamableLink: 'https://streamable.com/e/u4bygh',
    type: 'apex'
  },
  {
    title: 'apextt2',
    thumbnail: images.apextt2Thumbnail,
    streamableLink: 'https://streamable.com/e/pbx0ab',
    type: 'apex'
  },
  {
    title: 'apextt3',
    thumbnail: images.apextt3Thumbnail,
    streamableLink: 'https://streamable.com/e/waw0nv',
    type: 'apex'
  },
  {
    title: 'apextt4',
    thumbnail: images.apextt4Thumbnail,
    streamableLink: 'https://streamable.com/e/b7ugp0',
    type: 'apex'
  },
  {
    title: 'apextt5',
    thumbnail: images.apextt5Thumbnail,
    streamableLink: 'https://streamable.com/e/beghs7',
    type: 'apex'
  },
  {
    title: 'fortnitett1',
    thumbnail: images.fortnitett1Thumbnail,
    streamableLink: 'https://streamable.com/e/9lc09r',
    type: 'fortnite'
  },
  {
    title: 'fortnitett2',
    thumbnail: images.fortnitett2Thumbnail,
    streamableLink: 'https://streamable.com/e/4hzueo',
    type: 'fortnite'
  },
  {
    title: 'fortnitett3',
    thumbnail: images.fortnitett3Thumbnail,
    streamableLink: 'https://streamable.com/e/ax44zt',
    type: 'fortnite'
  },
  {
    title: 'fortnitett4',
    thumbnail: images.fortnitett4Thumbnail,
    streamableLink: 'https://streamable.com/e/hizf14',
    type: 'fortnite'
  },
  {
    title: 'fortnitett5',
    thumbnail: images.fortnitett5Thumbnail,
    streamableLink: 'https://streamable.com/e/sps6yq',
    type: 'fortnite'
  },
  {
    title: 'warzonett1',
    thumbnail: images.warzonett1Thumbnail,
    streamableLink: 'https://streamable.com/e/7jx0lc',
    type: 'warzone'
  },
  {
    title: 'warzonett2',
    thumbnail: images.warzonett2Thumbnail,
    streamableLink: 'https://streamable.com/e/6nl0dl',
    type: 'warzone'
  },
  {
    title: 'warzonett3',
    thumbnail: images.warzonett3Thumbnail,
    streamableLink: 'https://streamable.com/e/38ziwp',
    type: 'warzone'
  },
  {
    title: 'warzonett4',
    thumbnail: images.warzonett4Thumbnail,
    streamableLink: 'https://streamable.com/e/ogpkqq',
    type: 'warzone'
  },
  {
    title: 'warzonett5',
    thumbnail: images.warzonett5Thumbnail,
    streamableLink: 'https://streamable.com/e/i8bzhi',
    type: 'warzone'
  },
  {
    title: 'valott1',
    thumbnail: images.valott1Thumbnail,
    streamableLink: 'https://streamable.com/e/zpdn3q',
    type: 'valorant'
  },
  {
    title: 'valott2',
    thumbnail: images.valott2Thumbnail,
    streamableLink: 'https://streamable.com/e/w4w6s5',
    type: 'valorant'
  },
  {
    title: 'valott3',
    thumbnail: images.valott3Thumbnail,
    streamableLink: 'https://streamable.com/e/8c475o',
    type: 'valorant'
  },
  {
    title: 'valott4',
    thumbnail: images.valott4Thumbnail,
    streamableLink: 'https://streamable.com/e/185j6x',
    type: 'valorant'
  },
  {
    title: 'valott5',
    thumbnail: images.valott5Thumbnail,
    streamableLink: 'https://streamable.com/e/atjswt',
    type: 'valorant'
  },
  {
    title: 'irl1',
    thumbnail: images.irltt1Thumbnail,
    streamableLink: 'https://streamable.com/e/fg12en',
    type: 'irl'
  },
  {
    title: 'irl2',
    thumbnail: images.irltt2Thumbnail,
    streamableLink: 'https://streamable.com/e/4x7l47',
    type: 'irl'
  },
  {
    title: 'irl3',
    thumbnail: images.irltt3Thumbnail,
    streamableLink: 'https://streamable.com/e/8h4woh',
    type: 'irl'
  },
  {
    title: 'irl4',
    thumbnail: images.irltt4Thumbnail,
    streamableLink: 'https://streamable.com/e/b7afzu',
    type: 'irl'
  },
  {
    title: 'irl5',
    thumbnail: images.irltt5Thumbnail,
    streamableLink: 'https://streamable.com/e/4vwpl3',
    type: 'irl'
  },
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredItems = activeCategory
    ? portfolioItems.filter((item) => item.type === activeCategory)
    : portfolioItems;

  const leftIndex = activeIndex === 0 ? filteredItems.length - 1 : activeIndex - 1;
  const centerIndex = activeIndex;
  const rightIndex = activeIndex === filteredItems.length - 1 ? 0 : activeIndex + 1;

  const handleLeftClick = () => {
    const newIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : filteredItems.length - 1;
    setActiveIndex(newIndex);
  };

  const handleRightClick = () => {
    const newIndex = activeIndex + 1 < filteredItems.length ? activeIndex + 1 : 0;
    setActiveIndex(newIndex);
  };


  return (
    <section id='portfolio' className='app__portfolio'>
      <h1>{portfolioSection.title}</h1>
      <p>{portfolioSection.description}</p>
      <div className="app__portfolio-interface">
        <div className="app__portfolio-categories">
          {portfolioCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => setActiveCategory(activeCategory === category.id ? '' : category.id)}
              className={`app__portfolio-category ${activeCategory === category.id ? 'activeCategory' : ''}`}
            >
              <h2>{category.label}</h2>
            </div>
          ))}
        </div>
        <div className="app__portfolio-items">
          <div className="app__portfolio-items-button-left" onClick={handleLeftClick}>
            <FaArrowLeft/>
          </div>
          <div className="app__portfolio-items-button-right" onClick={handleRightClick}>
            <FaArrowRight/>
          </div>
          <div className="app__portfolio-items-left">
            <img src={filteredItems[leftIndex].thumbnail} alt="" />
          </div>
          <div className="app__portfolio-items-center">
            <iframe src={filteredItems[centerIndex].streamableLink} frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
          </div>
          <div className="app__portfolio-items-right">
            <img src={filteredItems[rightIndex].thumbnail} alt="" /> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio