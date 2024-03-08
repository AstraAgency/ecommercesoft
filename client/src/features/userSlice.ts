import { createSlice } from '@reduxjs/toolkit'

export const manageUsersSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setMyUser: (_, action) => action.payload,
  },
})

export const { setMyUser } = manageUsersSlice.actions
