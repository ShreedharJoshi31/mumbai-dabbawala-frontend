import React, { useContext } from "react";
import AdminHero from "./AdminHero";
import TableScrollArea from "./TableScrollArea";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router";
import classes from "./Admin.module.css";

const Admin = () => {
  const { state } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!state.user) {
    return (
      <div>
        <h2>Please log in to view all details.</h2>
      </div>
    );
  }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div>
      <AdminHero />
      <div className={classes.buttonContainer}>
        <Button onClick={handleLogout} color="red">
          Logout
        </Button>
      </div>
      <TableScrollArea />
    </div>
  );
};

export default Admin;
