import React from "react";
import "./login.css";

const LoginForm = () => {
	return (
		<div className="register_right col-12 col-lg-4">
			<h2>Masuk</h2>
			<form className="register_form">
				<label className="login_label" htmlFor="nama">
					Email
				</label>
				<div>
					<input type="Email" name="Email" id="Email" required placeholder=" Contoh: johndee@gmail.com" className="input_box"></input>
				</div>
				<label className="login_label" htmlFor="nama">
					Password
				</label>
				<div>
					<input type="Password" name="Password" id="Password" required placeholder="Masukkan password" className="input_box"></input>
				</div>
			</form>
			<button type="submit" className="btn_login mt-5">
				Masuk
			</button>
			<div className="footer">
				<p>
					belum punya akun?
					<a href="/register" className="daftar">
						Daftar sini
					</a>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
