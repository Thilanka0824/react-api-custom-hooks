import React, { useState, useEffect } from "react";
import useFuncAPI from "./useFuncAPI";

const useAPI = (route, id) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    fetch(`${baseUrl}/${route}/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, [route, id]);

  switch (route) {
    case "users":
        let newData = {
            ...data
        }
        if(newData.title === undefined) {
            newData.title = "no Data"
        }
        return newData
      
      case 'todos':
        return {
            name: "Empty",
            title: data.title
        }
    case 'posts':
        return {
            name: 'No Name',
            ...data
        }
    default:
      return data;
  }
};

export default useAPI;
