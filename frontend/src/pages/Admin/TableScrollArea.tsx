import cx from "clsx";
import { useEffect, useState } from "react";
import { Table, ScrollArea } from "@mantine/core";
import classes from "./TableScrollArea.module.css";
import axios from "axios";

// const data1 = [
//   {
//     name: "John Doe",
//     phoneNumber: 1234567890,
//     email: "john.doe@example.com",
//     type: "Veg",
//     quantity: 1,
//     address: "123 Main St, City, Country",
//     subscription: "Weekly",
//     time: "Lunch",
//     cost: 10,
//   },
//   {
//     name: "Bob Johnson",
//     phoneNumber: 1112223333,
//     email: "bob.johnson@example.com",
//     type: "Veg",
//     quantity: 1,
//     address: "789 Oak St, City, Country",
//     subscription: "Monthly",
//     time: "Lunch",
//     cost: 12,
//   },
//   {
//     name: "Alice Smith",
//     phoneNumber: 9876543210,
//     email: "alice.smith@example.com",
//     type: "Non-Veg",
//     quantity: 2,
//     address: "456 Elm St, City, Country",
//     subscription: "Daily",
//     time: "Dinner",
//     cost: 15,
//   },
//   {
//     name: "Emily Davis",
//     phoneNumber: 4445556666,
//     email: "emily.davis@example.com",
//     type: "Non-Veg",
//     quantity: 1,
//     address: "321 Pine St, City, Country",
//     subscription: "Weekly",
//     time: "Dinner",
//     cost: 18,
//   },
//   {
//     name: "Michael Wilson",
//     phoneNumber: 7778889999,
//     email: "michael.wilson@example.com",
//     type: "Veg",
//     quantity: 3,
//     address: "555 Maple St, City, Country",
//     subscription: "Daily",
//     time: "Lunch",
//     cost: 9,
//   },
//   {
//     name: "Sarah Brown",
//     phoneNumber: 3336669999,
//     email: "sarah.brown@example.com",
//     type: "Non-Veg",
//     quantity: 2,
//     address: "777 Cedar St, City, Country",
//     subscription: "Monthly",
//     time: "Dinner",
//     cost: 20,
//   },
//   {
//     name: "David Miller",
//     phoneNumber: 1231231234,
//     email: "david.miller@example.com",
//     type: "Veg",
//     quantity: 2,
//     address: "222 Walnut St, City, Country",
//     subscription: "Weekly",
//     time: "Lunch",
//     cost: 11,
//   },
//   {
//     name: "Jessica Taylor",
//     phoneNumber: 4564564567,
//     email: "jessica.taylor@example.com",
//     type: "Non-Veg",
//     quantity: 1,
//     address: "444 Birch St, City, Country",
//     subscription: "Daily",
//     time: "Dinner",
//     cost: 16,
//   },
//   {
//     name: "Matthew Lee",
//     phoneNumber: 7897897890,
//     email: "matthew.lee@example.com",
//     type: "Veg",
//     quantity: 3,
//     address: "999 Cherry St, City, Country",
//     subscription: "Monthly",
//     time: "Lunch",
//     cost: 10,
//   },
//   {
//     name: "Lauren Hall",
//     phoneNumber: 9879879876,
//     email: "lauren.hall@example.com",
//     type: "Non-Veg",
//     quantity: 2,
//     address: "888 Olive St, City, Country",
//     subscription: "Weekly",
//     time: "Dinner",
//     cost: 19,
//   },
//   {
//     name: "John Doe",
//     phoneNumber: 1234567890,
//     email: "john.doe@example.com",
//     type: "Veg",
//     quantity: 1,
//     address: "123 Main St, City, Country",
//     subscription: "Weekly",
//     time: "Lunch",
//     cost: 10,
//   },
//   {
//     name: "Bob Johnson",
//     phoneNumber: 1112223333,
//     email: "bob.johnson@example.com",
//     type: "Veg",
//     quantity: 1,
//     address: "789 Oak St, City, Country",
//     subscription: "Monthly",
//     time: "Lunch",
//     cost: 12,
//   },
//   {
//     name: "Alice Smith",
//     phoneNumber: 9876543210,
//     email: "alice.smith@example.com",
//     type: "Non-Veg",
//     quantity: 2,
//     address: "456 Elm St, City, Country",
//     subscription: "Daily",
//     time: "Dinner",
//     cost: 15,
//   },
//   {
//     name: "Emily Davis",
//     phoneNumber: 4445556666,
//     email: "emily.davis@example.com",
//     type: "Non-Veg",
//     quantity: 1,
//     address: "321 Pine St, City, Country",
//     subscription: "Weekly",
//     time: "Dinner",
//     cost: 18,
//   },
//   {
//     name: "Michael Wilson",
//     phoneNumber: 7778889999,
//     email: "michael.wilson@example.com",
//     type: "Veg",
//     quantity: 3,
//     address: "555 Maple St, City, Country",
//     subscription: "Daily",
//     time: "Lunch",
//     cost: 9,
//   },
//   {
//     name: "Sarah Brown",
//     phoneNumber: 3336669999,
//     email: "sarah.brown@example.com",
//     type: "Non-Veg",
//     quantity: 2,
//     address: "777 Cedar St, City, Country",
//     subscription: "Monthly",
//     time: "Dinner",
//     cost: 20,
//   },
//   {
//     name: "David Miller",
//     phoneNumber: 1231231234,
//     email: "david.miller@example.com",
//     type: "Veg",
//     quantity: 2,
//     address: "222 Walnut St, City, Country",
//     subscription: "Weekly",
//     time: "Lunch",
//     cost: 11,
//   },
//   {
//     name: "Jessica Taylor",
//     phoneNumber: 4564564567,
//     email: "jessica.taylor@example.com",
//     type: "Non-Veg",
//     quantity: 1,
//     address: "444 Birch St, City, Country",
//     subscription: "Daily",
//     time: "Dinner",
//     cost: 16,
//   },
//   {
//     name: "Matthew Lee",
//     phoneNumber: 7897897890,
//     email: "matthew.lee@example.com",
//     type: "Veg",
//     quantity: 3,
//     address: "999 Cherry St, City, Country",
//     subscription: "Monthly",
//     time: "Lunch",
//     cost: 10,
//   },
//   {
//     name: "Lauren Hall",
//     phoneNumber: 9879879876,
//     email: "lauren.hall@example.com",
//     type: "Non-Veg",
//     quantity: 2,
//     address:
//       "888 Olive St, City, Country 888 Olive St, City, Country 888 Olive St, City, Country ",
//     subscription: "Weekly",
//     time: "Dinner",
//     cost: 19,
//   },
// ];

interface RowData {
  name: string;
  phoneNumber: number;
  email: string;
  type: string;
  quantity: number;
  pickupAddress: string;
  dropAddress: string;
  subscription: string;
  time: string;
  cost: number;
}

export default function TableScrollArea() {
  const [scrolled, setScrolled] = useState(false);

  const [data, setData] = useState<RowData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/tiffin");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const rows = data.map((row) => (
    <Table.Tr key={row.name} style={{ fontSize: "15px" }}>
      <Table.Td align="left">{row.name}</Table.Td>
      <Table.Td align="left">{row.phoneNumber}</Table.Td>
      <Table.Td align="left">{row.email}</Table.Td>
      <Table.Td align="left">{row.type}</Table.Td>
      <Table.Td align="left">{row.quantity}</Table.Td>
      <Table.Td align="left">{row.pickupAddress}</Table.Td>
      <Table.Td align="left">{row.dropAddress}</Table.Td>
      <Table.Td align="left">{row.subscription}</Table.Td>
      <Table.Td align="left">{row.time}</Table.Td>
      <Table.Td align="left">{row.cost}</Table.Td>{" "}
    </Table.Tr>
  ));

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ScrollArea
        h={500}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table w={1500}>
          <Table.Thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <Table.Tr style={{ fontSize: "20px" }}>
              <Table.Th align="left">Name</Table.Th>
              <Table.Th align="left">Phone Number</Table.Th>
              <Table.Th align="left">Email</Table.Th>
              <Table.Th align="left">Type</Table.Th>
              <Table.Th align="left">Quantity</Table.Th>
              <Table.Th align="left">Pickup Address</Table.Th>
              <Table.Th align="left">Drop Address</Table.Th>
              <Table.Th align="left">Subscription</Table.Th>
              <Table.Th align="left">Time</Table.Th>
              <Table.Th align="left">Cost</Table.Th>{" "}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </div>
  );
}
