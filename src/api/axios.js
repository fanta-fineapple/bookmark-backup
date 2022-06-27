import axios from "axios";
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const URL = `${PROXY}/v1/search/book.json`;

export const bookApi = {
  info: (isbn) => axios.get(`/v1/search/book_adv.xml`, { 
    params: {
      d_isbn: isbn
    },
    headers: {
      'X-Naver-Client-ID': process.env.REACT_APP_ID_KEY,
      'X-Naver-Client-Secret': process.env.REACT_APP_SECRET_KEY
    }
  }),
  search: (term, page) =>
    axios.get(URL, {
      params: {
        Query: term,
        // display: 10,
        start: page,
      },
      headers: {
        'X-Naver-Client-ID': process.env.REACT_APP_ID_KEY,
        'X-Naver-Client-Secret': process.env.REACT_APP_SECRET_KEY
      }
    })
};
