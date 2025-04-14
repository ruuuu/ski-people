import { API_URL } from "./const.js";



export const getData = async () => {

  try{
    const response = await fetch(API_URL);
    const obj = await response.json();

    console.log('obj ', obj) 
    return obj; // [{},{}]
  }
  catch(error){
    console.error()
  }
}