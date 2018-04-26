import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://m2w2.herokuapp.com/api/`,
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
})