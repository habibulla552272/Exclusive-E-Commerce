import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
const ApiData = createContext();


const ContextApi = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.in/api/products?limit=150").then((res) => {
      setData(res.data.products);
    });
  }, []);

  return (
    <>
      <ApiData.Provider value={data}>{children}</ApiData.Provider>
    </>
  );
};

export { ContextApi, ApiData };
