import { API_URL } from "./const.js";

export const getData = async () => {

  const response = await fetch(API_URL);
  const obj = await response.json();

  console.log('obj ', obj) 
  return obj; // [{},{}]
}