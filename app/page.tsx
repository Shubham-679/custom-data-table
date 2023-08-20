"use client"

import { CustomTable } from "./components/CustomTable/index";
import { useState, useEffect } from "react";
import axios from "axios";
import { IColumnType, IDataType } from "./components/CustomTable/types/index";
import { Badge, Button, Box } from "@chakra-ui/react";

export default function Home() {

  const [data, setData] = useState<IDataType[]>([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then(({ data : { users } }) => {
        setData(users);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns: IColumnType<IDataType>[] = [
    {
      key: "id",
      title: "Id",
    },
    {
      key: "firstName",
      title: "Full Name",
      sortable: true,
      render: (_, item) => <Box>{item.firstName + " " + item.lastName}</Box>
    },
    {
      key: "email",
      title: "Email", 
      sortable: true,
    },
    {
      key: "phone",
      title: "Phone",
      width: 200,
    },
    {
      key: "domain",
      title: "Domain",
      sortable: true,
      render: (_, { domain }) => <Badge colorScheme='purple'>{domain}</Badge>
    },
    {
      key: "",
      title: "Action",
      render: (_, row) => <Button colorScheme='purple'>Select</Button>
    },
  ];

  return (
    <main>
      <CustomTable caption="" columns={columns} rows={data} pagination />
    </main>
  );
}
