import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55279694-d74f3b25994f84b5d6770a0a1';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
}