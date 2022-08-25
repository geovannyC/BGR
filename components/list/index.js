import React, { useEffect, useState } from "react";
import { getFetch } from "../../untils/fetch";
import { ListPage } from "./listPage/ListPage";

export const FlatListBasics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = async () => {
    const devicesTtitle = await getFetch("https://dummyjson.com/products").then(
      (item) => {
        return item.products;
      }
    );
    setData(devicesTtitle);
  };
  return <ListPage data={data} />;
};
