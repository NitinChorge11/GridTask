import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

const UserList = () => {
  const [user, setUser] = useState([]);
  //   const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://lfapi.html5.run/products").then((res) => {
      console.log(res.data);
      setUser(res.data);
      //   setList(user[2]);
    });
  }, []);
  const data = [
    { field: "id", headerName: "Id", with: 150 },
    { field: "title", headerName: "Title", with: 250 },
    { field: "productType", headerName: "Product Type", with: 200 },
    { field: "featured", headerName: "Featured", with: 150 },
    { field: "is_new", headerName: "Is New", with: 150 },
    { field: "is_out_of_stock", headerName: "Is out of stock", with: 150 },
    { field: "glutenFree", headerName: "Gluten Free", with: 150 },
    { field: "dairyFree", headerName: "Dairy Free", with: 150 },
    { field: "trending", headerName: "Trending", with: 150 },
    { field: "pantry", headerName: "Pantry", with: 150 },
    { field: "nutFree", headerName: "Nutfree", with: 150 },
    { field: "short_description", headerName: "short_description", with: 150 },
  ];
  return (
    <>
      <h2>Grid Task</h2>
      <DataGrid columns={data} rows={user} style={{ height: "80vh" }} />
    </>
  );
};

export default UserList;
