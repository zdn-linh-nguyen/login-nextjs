import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { userLoginGoogle } from "./userAction";

interface IUser {
	displayName: string;
	img: string;
	email: string;
	provider: string;
}

const initialState: IUser = {
	displayName: "",
	img: "",
	email: "",
	provider: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getUser: (state) => {
			const user = localStorage.getItem("user");
			if (user) {
				state.displayName = JSON.parse(user).displayName;
				state.img = JSON.parse(user).img;
				state.email = JSON.parse(user).email;
				state.provider = JSON.parse(user).provider;
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(userLoginGoogle.fulfilled, (state, { payload }) => {
			const { user } = payload;
			state.displayName = user.displayName;
			state.img = user.img;
			state.email = user.email;
			state.provider = user.provider;
			localStorage.setItem("user", JSON.stringify(user));
		});
	},
});

export const { getUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
