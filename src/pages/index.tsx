import { userApi } from "@/apis/userApi";
import { useAppDispatch } from "@/app/store";
import InputOTP from "@/components/InputOTP";
import { Button } from "antd";
import { useEffect, useState } from "react";

export default function Home() {
	const [otp, setOtp] = useState<string>("");
	const handleChangeOtp = (value: string) => {
		setOtp(value);
	};

	const dispatch = useAppDispatch();
	// const handleLogin = useGoogleLogin({
	// 	onSuccess: async (tokenResponse) => {
	// 		try {
	// 			const res = dispatch(userLoginGoogle(tokenResponse.access_token));
	// 			console.log(res);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	},
	// });

	async function handleLogin() {
		try {
			const res = await userApi.loginWithGoogle();
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await userApi.getAllUsers();
				console.log(res);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	const loginWithGoogle = () => {
		window.open(`http://localhost:5000/api/v1/auth/google/login`, "_self");
	};

	return (
		<div>
			<div className="">1</div>
			<div className="">
				<button>Facebook</button>
			</div>
			<Button onClick={loginWithGoogle} className="bg-blue-500 " type="primary">
				Google
			</Button>
			<Button className="bg-blue-500 " type="primary">
				Primary Button
			</Button>
			<Button onClick={handleLogin} className="bg-blue-500 " type="primary">
				Google
			</Button>
			<InputOTP onChange={handleChangeOtp} />
		</div>
	);
}
