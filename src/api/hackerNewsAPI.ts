import axios from 'axios';
import { AuthorAndItemType, ItemType } from '../types/ItemType';
import { UserType } from '../types/UserType';

const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
  timeout: 10000,
});

export const get10RandomStoryIds = async (): Promise<number[]> => {
  try {
    const response = await instance.get<number[]>('topstories.json');
    const allStories = response.data;

    // Shuffle the array
    const shuffledStories = allStories.sort(() => 0.5 - Math.random());

    // Get the first 10 items
    const randomTenStories = shuffledStories.slice(0, 10);

    return randomTenStories;
  } catch (error) {
    console.error('Error fetching top stories:', error);
    throw error;
  }
};


export const getItemById = async (id: number): Promise<ItemType> => {
  try {
    const response = await instance.get(`item/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching item with ID ${id}:`, error);
    throw error;
  }
};

export const getItemsWithAuthors = async (ids: number[]): Promise<AuthorAndItemType[]> => {
  try {
    const stories = await Promise.all(ids.map(id => getItemById(id)));

    stories.sort((a, b) => a.score - b.score);

    const authors = await Promise.all(stories.map(story => getUserById(story.by)));

    // Combine stories with their respective authors
    const itemsWithAuthors = stories.map((story, index) => ({
      story: story,
      author: authors[index]
    }));

    return itemsWithAuthors;
  } catch (error) {
    console.error('Error fetching stories:', error);
    throw error;
  }
};



export const getUserById = async (id: string): Promise<UserType> => {
  try {
    const response = await instance.get(`user/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};
