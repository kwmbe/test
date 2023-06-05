import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './'
import { ContactDetailType } from '../types/organisation-config'


var initialState: ContactDetailType = {
  emailAddress: "",
  telephone: "",
  website: "",
}

export const contactDetailSlice = createSlice({
  name: 'contactDetail',
  initialState,
  reducers: {
    newInitial: (state, newState: PayloadAction<ContactDetailType>) => {
      // initialState.emailAddress = newState.payload.emailAddress
      // initialState.telephone = newState.payload.telephone
      // initialState.website = newState.payload.website
    },
    reset: (state) => {
      state.emailAddress = initialState.emailAddress
      state.telephone = initialState.telephone
      state.website = initialState.website
    },
    emailReducer: (state, action: PayloadAction<string>) => {
      state.emailAddress = action.payload
    },
    telReducer: (state, action: PayloadAction<string>) => {
      state.telephone = action.payload
    },
    websiteReducer: (state, action: PayloadAction<string>) => {
      state.website = action.payload
    },
  },
})

export const {
  newInitial,
  reset,
  emailReducer,
  telReducer,
  websiteReducer,
} = contactDetailSlice.actions

export const isInitial = (state: RootState) => state.contactDetail == initialState
export const isValidated = (state: RootState) => (
  state.contactDetail.emailAddress != initialState.emailAddress &&
  state.contactDetail.telephone.length == 11 &&
  state.contactDetail.website != initialState.website 
)

export default contactDetailSlice.reducer