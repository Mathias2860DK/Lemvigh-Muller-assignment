import React, { useEffect, useState } from 'react';
import { get10RandomStoryIds, getItemsWithAuthors } from '../api/hackerNewsAPI';
import { AuthorAndItemType } from '../types/ItemType';
import { ReactComponent as RefreshIcon } from '../refresh-svgrepo-com.svg';
import './StoryPage.css';

import StoryCard from './StoryCard';
import './StoryCard.css';
import LoadingSpinner from './LoadingSpinner';
const StoryPage: React.FC = () => {
  const [storyAndAuthor, setStoryAndAuthor] = useState<AuthorAndItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await get10RandomStoryIds();
      const newData = await getItemsWithAuthors(data);
      setStoryAndAuthor(newData);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch top stories.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner/>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className='refresh-section'>
          <div className='white-text'>
            Click the icon to load new stories!
            <button className="refresh-button" onClick={()=> fetchData()}>
              <RefreshIcon width="20" height="20" />
            </button>
          </div>
        </div>
      <div className='article-container'>
        {storyAndAuthor.map((item) => {
          return (<StoryCard key={item.story.id} story={item.story} author={item.author} />)
        })}
      </div>
    </div>
  );
  
};

export default StoryPage;
