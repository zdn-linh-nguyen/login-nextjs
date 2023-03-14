import { userApi } from "@/apis/userApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLoginGoogle = createAsyncThunk("user/login", async (access_token: string, thunkApi) => {
	try {
		const response = await userApi.loginWithGoogle(access_token);
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error);
	}
});
