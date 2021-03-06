import React from "react";
import "./info.css";

const ProdukHeader = () => {
	return (
		<div className="arrow d-flex produk_header_container">
			<img
				src="/SVG/arrow_left.svg"
				alt="arrow icon"
				className=" arrow-svg
        "
			/>
			<div className="">
				<h2 className="text_reguler produk_header">Lengkapi Detail Produk</h2>
			</div>
		</div>
	);
};

export default ProdukHeader;
