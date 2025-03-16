import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex((task) => task.id === payload.id);
        state.items.splice(index, 1);
      })
      .addMatcher(
        (action) => {
          if (action.type.endsWith("/pending")) return true;
        },
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => {
          if (action.type.endsWith("/rejected")) return true;
        },
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContactsItems = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectNameFilter],
  (contacts, filter) => {
    const filterName = filter.toLowerCase();
    return filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filterName))
      : contacts;
  }
);
