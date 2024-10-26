import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getI18n, useTranslation } from "react-i18next";

function Team() {
	const { t } = useTranslation();

	useEffect(() => {
		if (localStorage.getItem("lang") === null) {
			localStorage.setItem("lang", getI18n().resolvedLanguage || "tr");
		} else {
			// @ts-ignore
			getI18n().changeLanguage(localStorage.getItem("lang"));
		}
	}, []);

	return (
		<>
			<Navbar />
			<img
				src="backgrounds/backgroundImage.png"
				alt="FIRST Logo"
				className="absolute h-[725px] -z-10 right-0 opacity-80 mt-10"
			/>
			<section className="w-full p-6 md:p-0 md:w-[80%] lg:w-[60%] mx-auto mt-[10%] bg-cover relative py-4 md:py-8">
				<article className="z-10  flex flex-col gap-4">
					<h1 className="text-3xl md:text-5xl font-bold text-default-blue flex space-x-4">
						<img
							src="svg/gear.svg"
							alt="settings icon"
							className="h-8 mb-auto my-auto mx-1"
						/>
						<span>{t("takim_first")}</span>
					</h1>
					<h2 className="text-2xl md:text-3xl font-bold text-black uppercase">
						{t("takim_first_nedir")}
					</h2>
					<p className="text-sm md:text-base uppercase">
						{t("takim_first_aciklama")}
					</p>

					<h2 className="text-2xl md:text-3xl font-bold text-black uppercase">
						{t("takim_first_vizyon")}
					</h2>
					<p className="text-sm md:text-base uppercase">
						{t("takim_first_vizyon_aciklama")}
					</p>
				</article>
			</section>

			<section className="w-full p-6 md:p-0 md:w-[80%] lg:w-[60%] mx-auto mt-[5%] relative py-4 md:py-8">
				<article className="z-10  bg-opacity-80 flex flex-col gap-4">
					<h1 className="text-2xl md:text-4xl font-bold text-default-blue">
						{t("takim_takimimiz")}
					</h1>
					<p className="text-sm md:text-base">
						{t("takim_takimimiz_aciklama")}
					</p>
				</article>
			</section>

			<Footer />
		</>
	);
}

export default Team;
