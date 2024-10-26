import React from "react";
import sponsors from "../constants/sponsors.json";
import { useTranslation } from "react-i18next";

function Sponsors() {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col gap-6 w-[90vw] sm:w-[80vw] md:w-[60vw] mx-auto justify-center items-center mt-6">
			<h1 className="text-[#1679AB] font-bold text-5xl text-center">
				{t("anasayfa_isbirliklerimiz")}
			</h1>

			<div className="flex gap-4 flex-wrap justify-center items-center w-full">
				{sponsors.map((sponsor) => (
					<div className="relative group max-w-[200px]">
						<img
							src={sponsor.img}
							alt={sponsor.alt}
							className="h-auto w-full transition-opacity duration-300"
						/>

						<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

						<div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<span className="text-white font-bold text-xl bg-opacity-50 p-2 rounded">
								{sponsor.alt}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Sponsors;
