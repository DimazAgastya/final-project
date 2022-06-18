import React from "react";
import "./profile.css";

const profile = () => {
	// setting dropzone

	return (
		<div className="container-fluid login_container ">
			<header className="arrow d-flex">
				<div className="">
					<img src="/SVG/arrow_left.svg" alt="arrow icon" className=" arrow_svg d-md-none" />
				</div>
				<div className="profile_header_sm d-md-none">
					<h3 className="">Lengkapi info account</h3>
				</div>
			</header>
			<div className="profile_header d-none d-lg-block">
				<h3 className="">Lengkapi info account</h3>
			</div>
			<div className="photo_section">
				<div className="dummy_dropzone">
					<img src="/SVG/camera.svg" className="camera_icon" alt="camera" />
				</div>
			</div>
			<div className="register_right">
				<form className="register_form">
					<label className="label" htmlFor="nama">
						Nama
					</label>
					<div>
						<input type="text" name="nama" id="nama" required placeholder="Nama Lengkap" className="input_box"></input>
					</div>
					<label className="" htmlFor="nama">
						Email
					</label>
					<div>
						<input type="Email" name="Email" id="Email" required placeholder=" Contoh: johndee@gmail.com" className="input_box"></input>
					</div>
					<label className="" htmlFor="nama">
						Alamat
					</label>
					<div>
						<input type="Password" name="Password" id="Password" required placeholder="Contoh: Jalan Ikan Hiu 33" className="input_box_2"></input>
					</div>
					<label className="" htmlFor="nama">
						No Handpone
					</label>
					<div>
						<input type="Email" name="Email" id="Email" required placeholder=" contoh: +628123456789" className="input_box"></input>
					</div>
				</form>
				<button type="submit" className="btn_login mt-5">
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
	);
};

export default profile;
