import axiosService from "./axiosService";

const ENDPOINT = "auth";

export const userApi = {
	loginWithGoogle: () => {
		return axiosService.get(`/${ENDPOINT}/google/login`);
	},

	getAllUsers: () => {
		return axiosService.get(`/${ENDPOINT}`);
	},
};
