import React from "react";
import "./register.css";

const register = () => {
	return (
		<div>
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
						<h2>Daftar</h2>
						<form className="">
							<div className="row">
								<label className="col-sm-12 col-md-2" htmlFor="nama">
									Nama
								</label>
								<input type="text" name="nama" id="nama" required placeholder="Nama Lengkap" className=" col-10 col-md-auto input_box"></input>
							</div>
							<div className="row my-4">
								<label className="col-sm-12 col-md-2" htmlFor="nama">
									Email
								</label>
								<input type="email" name="email" id="email" required placeholder="Contoh: johndee@gmail.com" className=" col-10 col-md-auto input_box"></input>
							</div>
							<div className="row my-4">
								<label className="col-sm-12 col-md-2" htmlFor="nama">
									Password
								</label>
								<input type="password" name="password" id="password" required placeholder="Buat password" className=" col-10 col-md-auto input_box"></input>
							</div>
						</form>
						<button type="submit" className="btn_login">
							Daftar
						</button>
						<div className="footer">
							<p>
								Sudah punya akun?
								<a href="/register" className="daftar">
									Masuk sini
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default register;
