import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loginData:{},
    registerData:{},
    isLoading :false
}

export const loginUser = createAsyncThunk(
  'demoSite/loginUser',
  async (data) => {
   let userRecord = JSON.parse(localStorage.getItem("user"))
    if(data.userId === userRecord[0].userId && data.Password === userRecord[0].Password){
            return{
                status:200,
                token:"AbcderSDFW#$$#RWesdfsdkfer315454",
                message:"user login successfully"
            }     
    }else{
        return{
            status:404,
            message:"something went wrong"
        }
    }
})

export const userRegister = createAsyncThunk(
    'demoSite/register',
    async (data) => {
      if(data){
         let allUser = [];
         allUser.push(data)
         localStorage.setItem("user",JSON.stringify(allUser))
              return{
                  status:200,
                  data:allUser,
                  message:"user Register successfully"
              }     
      }else{
          return{
              status:404,
              message:"something went wrong"
          }
      }
  })

export const siteReducer = createSlice({
    name:"demoSite",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
          state.loginData = action.payload
        })
        builder.addCase(userRegister.pending, (state, action) => {
            state.isLoading = true
          })
          .addCase(userRegister.fulfilled, (state, action) => {
            state.isLoading = false
          state.registerData = action.payload
        })
      },
})

export default siteReducer.reducer;

