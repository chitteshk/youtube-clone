
# YouTube Clone

A YouTube clone built with React and Tailwind CSS.

## Features
- Browse trending and popular videos
- Search for videos
- Responsive layout with top navigation and sidebar
- Category filter bar with horizontal scroll
- Video details and statistics
- Modern UI with custom styling

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/chitteshk/youtube-clone.git
   cd youtube-clone
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```sh
npm start
# or
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Running Tests
```sh
npm test
# or
yarn test
```

### Building for Production
```sh
npm run build
# or
yarn build
```

## Folder Structure
- `src/` - React components and source code
- `public/` - Static files and HTML template

## API
- Uses the YouTube Data API v3 for fetching video data
- Requires a YouTube API key (set in `.env` as `REACT_APP_YOUTUBE_API_KEY`)

## License
This project is for educational purposes only and is not affiliated with YouTube.
