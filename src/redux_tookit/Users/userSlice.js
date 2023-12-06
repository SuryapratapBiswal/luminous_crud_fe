import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const baseUrl = "http://localhost:8000"

export const addUserSliceAsync = createAsyncThunk('addUserSliceAsync', async (formData) => {
    try {
        const response = await axios.post(`${baseUrl}/register`, formData)
        return response.data.resultObj
    } catch (error) {
        console.log(error)
    }

})
export const getUserSliceAsync = createAsyncThunk('getUserSliceAsync', async () => {
    try {
        const response = await axios.get(`${baseUrl}/getusers`)
        return response.data.resultObj
    } catch (error) {
        console.log(error)
    }
})
export const deleteUserSliceAsync = createAsyncThunk('deleteUserSliceAsync', async ({ id, dispatch }) => {

    try {
        
        const userId = id
        const response = await axios.post(`${baseUrl}/getusers/remove`, { id: userId })
        dispatch(getUserSliceAsync())
        console.log(userId, "userId")
        return response.data
    } catch (error) {
        console.log(error)
    }
})
export const updateUserSliceAsync = createAsyncThunk(
    'updateUserSliceAsync',
    async (updatedData) => {
        try {
            const response = await axios.put(`${baseUrl}/getusers/update`, updatedData);
            return response.data.resultObj;
        } catch (error) {
            console.log(error);
            throw new Error('Error updating user data.');
        }
    }
);
const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        userData: []
    },
    extraReducers: {
        [getUserSliceAsync.fulfilled]: (state, { payload }) => {
            state.userData = payload;
        },
    }

})

export default userSlice.reducer;