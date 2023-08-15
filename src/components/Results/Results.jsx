import React, { useState } from "react";
import "./results.css";
import { images } from "../../constants";

const resultsSection = {
  title: "Results",
  description: "",
};

const resultsMedia = [
  {
    avatar: images.scopedAvatar,
    name: "Scoped",
    introText: "Fortnite Streamer/Pro",
    media: [
      images.scopedResult7,
      images.scopedResult1,
      images.scopedResult2,
      images.scopedResult3,
      images.scopedResult4,
      images.scopedResult5,
      images.scopedResult6,
    ],
  },
  {
    avatar: images.dellorAvatar,
    name: "Dellor",
    introText: "DayZ Streamer/Creator",
    media: [images.dellorResult1, images.dellorResult2, images.dellorResult3],
  },
  {
    avatar: images.rogueAvatar,
    name: "Rogue",
    introText: "Apex Legends Streamer/Creator for Team Liquid",
    media: [
      images.rogueResult6,
      images.rogueResult1,
      images.rogueResult2,
      images.rogueResult3,
      images.rogueResult4,
      images.rogueResult5,
    ],
  },
  {
    avatar: images.chaoticMuchAvatar,
    name: "ChaoticMuch",
    introText: "Apex Legends Streamer/Pro",
    media: [
      images.chaoticMuchResult1,
      images.chaoticMuchResult2,
      images.chaoticMuchResult3,
      images.chaoticMuchResult4,
      images.chaoticMuchResult5,
      images.chaoticMuchResult6,
      images.chaoticMuchResult7,
      images.chaoticMuchResult8,
    ],
  },
  {
    avatar: images.diegoSaursAvatar,
    name: "DiegoSaurs",
    introText: "Apex Legends Streamer/Creator",
    media: [
      images.diegoSaursResult1,
      images.diegoSaursResult2,
      images.diegoSaursResult3,
    ],
  },
  {
    avatar: images.erycTricepsAvatar,
    name: "ErycTriceps",
    introText: "Valorant Streamer/Creator",
    media: [
      images.erycTricepsResult1,
      images.erycTricepsResult2,
      images.erycTricepsResult3,
    ],
  },
  {
    avatar: images.kingRichardAvatar,
    name: "KingRichard",
    introText: "Variety Streamer/Creator",
    media: [
      images.kingRichardResult1,
      images.kingRichardResult2,
      images.kingRichardResult3,
    ],
  },
  {
    avatar: images.ralliedAvatar,
    name: "Rallied",
    introText: "Warzone Streamer/Creator",
    media: [
      images.ralliedResult1,
      images.ralliedResult2,
      images.ralliedResult3,
    ],
  },
];

const Results = () => {
  const [selectedResult, setSelectedResult] = useState(resultsMedia[0]);

  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  return (
    <section id="results" className="container app__results">
      <h1>{resultsSection.title}</h1>
      <p>{resultsSection.description}</p>
      <div className="app__results-container">
        <div className="app__results-selector">
          {resultsMedia.map((result) => (
            <div
              key={result.name}
              className={`app__results-selector-item ${
                selectedResult === result && "selectedItem"
              }`}
              onClick={() => handleResultClick(result)}
            >
              <img src={result.avatar} alt={result.name} />
              <h3>{result.name}</h3>
            </div>
          ))}
        </div>
        <div className="app__results-media">
          {selectedResult ? (
            <>
              <p>{selectedResult.introText}</p>
              <div className="app__results-media-container">
                {selectedResult.media.map((image) => (
                  <img key={image} src={image} alt={selectedResult.name} />
                ))}
              </div>
            </>
          ) : (
            <p>Select a result to see more details.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
