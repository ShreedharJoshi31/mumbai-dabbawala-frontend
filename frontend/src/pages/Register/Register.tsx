import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  CheckIcon,
} from "@mantine/core";
import classes from "./Register.module.css";
import { useEffect, useRef, useState } from "react";
import { ActionIcon, rem } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import axios from "axios";
import { UnstyledButton, Menu, Image, Group } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { IconX, IconCheck } from "@tabler/icons-react";
import { Notification } from "@mantine/core";
import { useNavigate } from "react-router";

const typeData = [{ label: "Small" }, { label: "Medium" }, { label: "Large" }];
const subData = [
  { label: "Daily" },
  { label: "Monthly" },
  { label: "Quarterly" },
  { label: "Yearly" },
];

export default function Register() {
  const [cost, setCost] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    quantity: "",
    pickupAddress: "",
    dropAddress: "",
    time: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [showNotification, setShowNotification] = useState(false);
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  const handleClick = async () => {
    const data = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      type: typeSelected.label,
      quantity: formData.quantity,
      pickupAddress: formData.pickupAddress,
      dropAddress: formData.dropAddress,
      subscription: subSelected.label,
      time: formData.time,
      cost: cost,
    };
    try {
      // Send data to backend
      const response = await axios.post(
        "http://localhost:4000/api/v1/tiffin",
        data
      );
      console.log(response.data); // Handle response from backend
      // Reset form data after successful submission if needed
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        quantity: "",
        pickupAddress: "",
        dropAddress: "",
        time: "",
      });
      setShowNotification(true);
    } catch (error) {
      console.error("Error:", error); // Handle error
    }
  };

  const [typeOpened, setTypeOpened] = useState(false);
  const [typeSelected, setTypeSelected] = useState(typeData[0]);
  const typeItems = typeData.map((item) => (
    <Menu.Item onClick={() => setTypeSelected(item)} key={item.label}>
      {item.label}
    </Menu.Item>
  ));

  const [subOpened, setSubOpened] = useState(false);
  const [subSelected, setSubSelected] = useState(subData[0]);
  const subItems = subData.map((item) => (
    <Menu.Item onClick={() => setSubSelected(item)} key={item.label}>
      {item.label}
    </Menu.Item>
  ));

  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  const notification = (
    <Notification
      onClose={() => setShowNotification(false)}
      icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
      color="teal"
      title="Status"
      mt="md"
    >
      Registration Successful
    </Notification>
  );

  useEffect(() => {
    let typeCost = 0;
    switch (typeSelected.label) {
      case "Small":
        typeCost = 50;
        break;
      case "Medium":
        typeCost = 100;
        break;
      case "Large":
        typeCost = 200;
        break;
      default:
        typeCost = 0;
    }

    let subscriptionMultiplier = 0;
    switch (subSelected.label) {
      case "Daily":
        subscriptionMultiplier = 1;
        break;
      case "Monthly":
        subscriptionMultiplier = 28;
        break;
      case "Quarterly":
        subscriptionMultiplier = 112;
        break;
      case "Yearly":
        subscriptionMultiplier = 336;
        break;
      default:
        subscriptionMultiplier = 0;
    }

    setCost(typeCost * subscriptionMultiplier * Number(formData.quantity));
  }, [subSelected, typeSelected, formData]);

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Mumbai Dabbawala
        </Title>
        {showNotification && notification}

        <TextInput
          label="Name"
          name="name"
          type="text"
          ta="left"
          placeholder="Name"
          mt="sm"
          size="sm"
          // value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          label="Phone Number"
          name="phoneNumber"
          type="number"
          ta="left"
          placeholder="+91 12345 67890"
          mt="sm"
          size="sm"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
          mt="sm"
          ta="left"
          placeholder="hello@gmail.com"
          size="sm"
          value={formData.email}
          onChange={handleChange}
        />
        <div className={classes.inputWrapper}>
          <Text size="sm" fw={500} mt="sm" ta="left">
            Type
          </Text>
          {/* <TypePicker /> */}
          <Menu
            onOpen={() => setTypeOpened(true)}
            onClose={() => setTypeOpened(false)}
            radius="sm"
            width="target"
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={classes.control}
                typeData-expanded={typeOpened || undefined}
              >
                <Group gap="xs">
                  <span className={classes.label}>{typeSelected.label}</span>
                </Group>
                <IconChevronDown
                  size="1rem"
                  className={classes.icon}
                  stroke={1.5}
                />
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{typeItems}</Menu.Dropdown>
          </Menu>
        </div>

        <TextInput
          label="Quantity"
          name="quantity"
          ta="left"
          mt="sm"
          type="number"
          placeholder="example 1, 2, 3..."
          size="sm"
          value={formData.quantity}
          onChange={handleChange}
        />
        <TextInput
          label="Pickup Address"
          name="pickupAddress"
          ta="left"
          mt="sm"
          type="text"
          placeholder="Flat no., Building, Street,..."
          size="sm"
          value={formData.pickupAddress}
          onChange={handleChange}
        />
        <TextInput
          label="Drop Address"
          name="dropAddress"
          ta="left"
          mt="sm"
          type="text"
          placeholder="Flat no., Building, Street,..."
          size="sm"
          value={formData.dropAddress}
          onChange={handleChange}
        />
        <div className={classes.inputWrapper}>
          <Text size="sm" fw={500} mt="sm" ta="left">
            Subscription
          </Text>
          {/* <SubscriptionPicker /> */}
          <Menu
            onOpen={() => setSubOpened(true)}
            onClose={() => setSubOpened(false)}
            radius="sm"
            width="target"
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={classes.control}
                subData-expanded={subOpened || undefined}
              >
                <Group gap="xs">
                  <span className={classes.label}>{subSelected.label}</span>
                </Group>
                <IconChevronDown
                  size="1rem"
                  className={classes.icon}
                  stroke={1.5}
                />
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{subItems}</Menu.Dropdown>
          </Menu>
        </div>

        <TimeInput
          label="Time"
          name="time"
          ta="left"
          mt="sm"
          size="sm"
          ref={ref}
          // rightSection={pickerControl}
          value={formData.time}
          onChange={handleChange}
        />

        <Text size="sm" fw={500} mt="sm" ta="left">
          Total Cost: Rs. {cost} /-
        </Text>

        <Button fullWidth mt="xl" size="sm" onClick={handleClick}>
          Register
        </Button>

        <Text ta="left" mt="md">
          Admin Login{" "}
          <Anchor<"a"> href="#" fw={700} onClick={() => navigate("/login")}>
            Login
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
