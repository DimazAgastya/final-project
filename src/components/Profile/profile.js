import React from "react";
import "./profile.css";

const profile = () => {
	// setting dropzone

	return (
		<div className="container-fluid login_container ">
			<header className="arrow row">
				<div className="col-2">
					<img src="/SVG/arrow_left.svg" alt="arrow icon" className=" arrow_svg .d-none .d-sm-block .d-md-none" />
				</div>
				<div className="col-auto my-5 ">
					<h3 className="">Lengkapi info account</h3>
				</div>
			</header>
			<div className="photo_section">
				<div className="dummy_dropzone">
					<img src="/SVG/camera.svg" className="camera_icon" alt="camera" />
				</div>
			</div>
			<form className="mx-3">
				<div className="row">
					<label className="col-sm-12 col-md-2" htmlFor="nama">
						Nama*
					</label>
					<input type="text" name="nama" id="nama" required placeholder="Nama Lengkap" className=" col-10 col-md-auto input_box"></input>
				</div>
				<div className="row my-4">
					<label className="col-sm-12 col-md-2" htmlFor="nama">
						Kota*
					</label>
					<input type="kota" name="kota" id="kota" required placeholder="Pilih Kota" className=" col-10 col-md-auto input_box"></input>
				</div>
				<div className="row my-4">
					<label className="col-sm-12 col-md-2" htmlFor="nama">
						Alamat
					</label>
					<input type="Alamat" name="Alamat" id="Alamat" required placeholder="Contoh: Jalan Ikan Hiu 33" className=" col-10 col-md-auto input_box_2"></input>
				</div>
				<div className="row my-4">
					<label className="col-sm-12 col-md-2" htmlFor="nama">
						No.Handpone
					</label>
					<input type="kota" name="kota" id="kota" required placeholder="contoh: +628123456789" className=" col-10 col-md-auto input_box"></input>
				</div>
			</form>
			<button type="submit" className="btn_login mx-3">
				Simpan
			</button>
		</div>
	);
};

export default profile;
