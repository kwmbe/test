import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './'
import { AddressType } from '../types/organisation-config'


var initialState: AddressType = {
  streetName: "",
  streetNumber: 0,
  postalCode: 0,
  city: "",
  country: "",
}

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    newInitial: (state, newState: PayloadAction<AddressType>, ) => {
      // initialState.streetName = newState.payload.streetName
      // initialState.streetNumber = newState.payload.streetNumber
      // initialState.postalCode = newState.payload.postalCode
      // initialState.city = newState.payload.city
      // initialState.country = newState.payload.country
    },
    reset: (state) => {
      state.streetName = initialState.streetName
      state.streetNumber = initialState.streetNumber
      state.postalCode = initialState.postalCode
      state.city = initialState.city
      state.country = initialState.country
    },
    stNameReducer: (state, action: PayloadAction<string>) => {
      state.streetName = action.payload
    },
    stNrReducer: (state, action: PayloadAction<number>) => {
      state.streetNumber = action.payload
    },
    pCodeReducer: (state, action: PayloadAction<number>) => {
      state.postalCode = action.payload
    },
    cityReducer: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
    countryReducer: (state, action: PayloadAction<string>) => {
      state.country = action.payload
    },
  },
})

export const {
  newInitial,
  reset,
  stNameReducer,
  stNrReducer,
  pCodeReducer,
  cityReducer,
  countryReducer,
} = addressSlice.actions

export const isInitial = (state: RootState) => state.address == initialState
export const isValidated = (state: RootState) => (
  state.address.streetName != initialState.streetName &&
  state.address.streetNumber != initialState.streetNumber &&
  state.address.postalCode != initialState.postalCode &&
  state.address.city != initialState.city &&
  state.address.country != initialState.country
)

export default addressSlice.reducer