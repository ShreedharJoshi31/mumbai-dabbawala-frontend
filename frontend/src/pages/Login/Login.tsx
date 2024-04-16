import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import classes from "./Login.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function AuthenticationImage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleClick = async (e: any) => {
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/user/login`,
        credentials,
        {
          withCredentials: true,
        }
      );

      console.log(res);

      if (!res.data.msg) {
        alert("Incorrect Login Credentials");
      } else {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
        navigate("/admin");
      }
    } catch (error: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Mumbai Dabbawala
        </Title>

        <TextInput
          label="Username"
          name="username"
          placeholder="Username"
          size="md"
          ta="left"
          value={credentials.username}
          onChange={handleChange}
        />
        <PasswordInput
          label="Password"
          name="password"
          placeholder="Your password"
          mt="md"
          size="md"
          ta="left"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button fullWidth mt="xl" size="md" onClick={handleClick}>
          Login
        </Button>

        <Text ta="left" mt="md">
          Want to order our scrumptious meals{" "}
          <Anchor<"a"> href="#" fw={700} onClick={() => navigate("/register")}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
