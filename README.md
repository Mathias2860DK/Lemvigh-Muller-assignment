# 10 Random Hacker News Stories

A web application that fetches and displays 10 random top stories from Hacker News.
Live site: https://bespoke-melba-efce20.netlify.app/

## Tasks

- Create a webpage that displays 10 random Hacker News using Hacker News API
- List stories in ascending order based on the stories’ scores

## UI Elements

- Story title
- Story URL
- Story timestamp
- Story score
- Author id
- Author karma score
- A static dummy image (not from the API)

## Requirements

- UI is responsive
- CSS compiled with a preprocessor
- No UI library or CSS framework used

## Bonus Points

- Visual eye-candy and user experience enhancements
- Use of a modern Javascript framework
- Use of Typescript

## Data Fetching Flow

1. Fetch 10 random top story IDs.
2. For each of these IDs, fetch the complete story.
3. Once obtained, fetch the author of each story.
4. Combine the story data with its respective author data.

## Running the Project Locally

### Prerequisites

- Install [Node.js](https://nodejs.org/)

### Setup & Running

1. **Clone the Repository**:

git clone https://github.com/Mathias2860DK/Lemvigh-Muller-assignment.git

2. **Navigate to the Project Directory**:

cd Lemvigh-Muller-assignment

3. **Install Dependencies**:

npm install

4. **Run the Application**:

npm start

5. **Access in Browser**:
Open your browser and visit [http://localhost:3000/](http://localhost:3000/)
