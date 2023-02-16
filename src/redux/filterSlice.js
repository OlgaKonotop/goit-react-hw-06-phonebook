import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    contactsFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { contactsFilter } = filtersSlice.actions;

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

// state.filter(contact =>
//   contact.name.toLowerCase().includes(action.payload).toLowerCase()
// );

// deleteContacts(state, action) {
//   const index = state.findIndex(contact => contact.id === action.payload);
//   state.splice(index, 1);
// },

// const normalizeFilter = filter.toLowerCase();
// return contacts.filter(contact =>
//   contact.name.toLowerCase().includes(normalizeFilter)
// );
