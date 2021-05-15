import axios from 'axios';

const KEY = 'AIzaSyBEjB9I2LeMFSgQ4Yips4A4yNBoijJZrVw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});