import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
