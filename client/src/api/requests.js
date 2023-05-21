import { BASE_URL } from "./base_url";
import axios from "axios";

//get all  Authors
export const getAllAuthors = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL+'/authors';
  }
  else{
    URL = BASE_URL+`/authors?name=${name}`;
  }
  await axios.get(URL).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};
//get  Author by ID
export const getAuthorByID = async (ID) => {
  let globalData;
  await axios.get(`${BASE_URL}/authors/${ID}`).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};

//delete  Author by  ID
export const deleteAuthorByID = async (ID) => {
    let deletedAuthor;
    await axios.delete(`${BASE_URL}/authors/${ID}`).then((res) => {
      deletedAuthor = res.data.data;
    });
  
    return deletedAuthor;
  };


//post  Author
export const postAuthor = (payload) => {
  axios.post(`${BASE_URL}/authors`, payload);
};


//edit  Author
export const editAuthor = (id,payload)=>{
    axios.put(`${BASE_URL}/authors/${id}`,payload);
  }



