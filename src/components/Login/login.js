import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const login = () => {
	return (
		<div className="container-fluid login_container">
			<section className="arrow">
				<img
					src="/SVG/arrow_left.svg"
					alt="arrow icon"
					className=" arrow-svg
                    .d-none .d-sm-block .d-md-none"
				/>
			</section>
			<div className="main_login row">
				<div className="login_left col-12 col-md-7 ">
					<img src="/SVG/login_img.svg" className="d-none d-md-block" alt=" login" />
				</div>
				<div className="login_right col-12 col-md-5">
					<h2>Masuk</h2>
					<form className="">
						<div className="row">
							<label className="col-sm-12 col-md-2" htmlFor="email">
								Email
							</label>
							<input type="email" name="email" id="email" required placeholder="Contoh: johndee@gmail.com" className=" col-10 col-md-auto input_email"></input>
						</div>
						<div className="row my-4">
							<label htmlFor="Password" className="col-sm-12 col-md-2">
								Password
							</label>
							<input type="Password" name="Password" id="Password" required className="col-10 col-md-auto input_password" placeholder="Masukkan password"></input>
						</div>
					</form>
					<button type="submit" className="btn_login">
						Masuk
					</button>
					<div className="footer ">
						<p>
							Belum punya akun?
							<a href="/register" className="daftar">
								Daftar sini
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default login;

/*
<div className="row">
							<div className="">
								<label htmlFor="">Password</label>
								<input type="Password" name="Password" id="Password" required></input>
							</div>
						</div>

                        <button className="btn btn-primary">Login</button>
						<p>
							Belum punya akun
							<a href="/register">daftar sini</a>
						</p>
*/
