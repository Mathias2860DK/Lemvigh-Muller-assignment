import React, { useEffect, useState } from 'react';
import './StoryCard.css';
import { AuthorAndItemType } from '../types/ItemType';
import { timeAgo } from '../helper/timeHelper';

const StoryCard: React.FC<AuthorAndItemType> = (authorAndItem) => {

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const postTime = timeAgo(authorAndItem.story.time);


  
  return (
    <div className="story-card">
      <div className="image-container">
        <div className='overlay-box'>
          <h2 className='point-text'>{authorAndItem.story.score}</h2>
          <h4 className='points-text'>Points</h4>
          </div>
      <a href={authorAndItem.story.url} target="_blank" rel="noopener noreferrer">
  <img src={`https://picsum.photos/300/300?random=${randomNumber}`} alt={authorAndItem.story.title} className="story-image" />
    
  <div className="overlay-text">{authorAndItem.story.title}</div>
  </a>
</div>
   
    <div className="story-details">
      <div className='white-text'>By <span className='orange-text'>{authorAndItem.author.id}</span> - Karma score {authorAndItem.author.karma}</div>
      <div className='white-text'></div>
      <div className='pd-10'>
      <div className='white-text'>{postTime}</div>
      </div>
    </div>
  </div>
  );
};

export default StoryCard;
