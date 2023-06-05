import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './'
import { OrganizationConfigType } from '../types/organisation-config'


var initialState: Partial<OrganizationConfigType> = {
  migrationMode: false,
  code: "",
  description: "",
  bankAccount: "",
  vatAccountNumber: "",
  companyAccountNumber: "",
  // contactDetails: ContactDetailType,
  // address: AddressType,
}

export const orgConfSlice = createSlice({
  name: 'orgConf',
  initialState,
  reducers: {
    newInitial: (state, newState: PayloadAction<Partial<OrganizationConfigType>>) => {
      // initialState.migrationMode = newState.payload.migrationMode
      // initialState.code = newState.payload.code
      // initialState.description = newState.payload.description
      // initialState.bankAccount = newState.payload.bankAccount
      // initialState.vatAccountNumber = newState.payload.vatAccountNumber
      // initialState.companyAccountNumber = newState.payload.companyAccountNumber
    },
    reset: (state) => {
      state.migrationMode = initialState.migrationMode
      state.code = initialState.code
      state.description = initialState.description
      state.bankAccount = initialState.bankAccount
      state.vatAccountNumber = initialState.vatAccountNumber
      state.companyAccountNumber = initialState.companyAccountNumber
    },
    migReducer: (state, action: PayloadAction<boolean>) => {
      state.migrationMode = action.payload
    },
    codeReducer: (state, action: PayloadAction<string>) => {
      state.code = action.payload
    },
    descReducer: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
    bAccReducer: (state, action: PayloadAction<string>) => {
      state.bankAccount = action.payload
    },
    VANReducer: (state, action: PayloadAction<string>) => {
      state.vatAccountNumber = action.payload
    },
    CANReducer: (state, action: PayloadAction<string>) => {
      state.companyAccountNumber = action.payload
    },
  },
})

export const {
  newInitial,
  reset,
  migReducer,
  codeReducer,
  descReducer,
  bAccReducer,
  VANReducer,
  CANReducer,
} = orgConfSlice.actions

export const isInitial = (state: RootState) => state.orgConf == initialState
export const isValidated = (state: RootState) => (
  state.orgConf.code != initialState.code &&
  state.orgConf.description != initialState.description &&
  state.orgConf.bankAccount != initialState.bankAccount &&
  state.orgConf.vatAccountNumber != initialState.vatAccountNumber &&
  state.orgConf.companyAccountNumber != initialState.companyAccountNumber
)

export default orgConfSlice.reducer