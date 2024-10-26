import React from "react";
import values from "../constants/values.json";
import { useTranslation } from "react-i18next";

function Values() {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col gap-6 w-[90vw] sm:w-[80vw] md:w-[60vw] mx-auto justify-center items-center my-12">
			<h1 className="text-[#1679AB] font-bold text-5xl text-center">
				{t("anasayfa_degerlerimiz")}
			</h1>

			<h1 className="text-2xl text-center font-medium text-wrap">
				{t("anasayfa_degerlerimiz_alt")}
			</h1>

			<div className="flex gap-4 flex-wrap justify-center items-center w-full">
				{values.map((values) => (
					<div className="relative group max-w-[200px]">
						<img
							src={values.img}
							alt={values.alt}
							className="h-auto w-full"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Values;
