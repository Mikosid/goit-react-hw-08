import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../contacts/operations";
import { logOut } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.error;
        state.items = [];
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.items = [];
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })

      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.items = [];
        state.error = payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
  (state) => state.contacts.items,
  (state) => state.filter.name,
  (items, filter) => {
    const normalizedFilter =
      typeof filter === "string" ? filter.toLowerCase() : "";

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
