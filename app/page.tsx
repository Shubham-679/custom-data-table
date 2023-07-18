"use client"

import Image from "next/image";
import { CustomTable } from "./components/CustomTable/index";
import { useState, useEffect } from "react";
import axios from "axios";
import { IColumnType, IDataType } from "./components/CustomTable/types/index";

export default function Home() {

  const [data, setData] = useState<IDataType[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns: IColumnType<IDataType>[] = [
    {
      key: "name",
      title: "Full Name",
      width: 200,
    },
    {
      key: "email",
      title: "Email",
      width: 200,
    },
    {
      key: "phone",
      title: "Phone",
      width: 200,
    },
  ];
  
  // const tableHeading: any = ["Name", "Email", "Phone"];

  return (
    <main>
      <CustomTable caption="MY data table" columns={columns} rows={data}/>
    </main>
  );
}
