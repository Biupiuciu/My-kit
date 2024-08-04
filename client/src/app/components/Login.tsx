"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.get("http://localhost:4040/test");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>
        <h1>name</h1>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h1>password</h1>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          sign in
        </button>
      </div>
    </div>
  );
};
