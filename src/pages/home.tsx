import { getI18n, useTranslation } from "react-i18next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Sponsors from "../components/sponsors";
import Strip from "../components/team-strip";
import Values from "../components/values";
import { useEffect } from "react";

export default function HomePage() {
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
		<div className="overflow-hidden max-w-screen">
			<Navbar />
			<div className="flex flex-row lg:h-[100vh] w-full sm:m-0 my-10 lg:mt-0">
				<div className="flex flex-col w-full relative">
					<div className="relative mt-10 mx-auto text-center lg:m-0 lg:text-left lg:ml-[15%] lg:mt-[150px]">
						<div className="flex items-center gap-2 w-fit mx-auto lg:w-full lg:m-0">
							<img
								src="svg/gear.svg"
								className="m-2"
								width={25}
								height={25}
								alt="gear icon"
							/>
							<h1 className="text-4xl font-arial text-default-blue font-bold bg-opacity-50 bg-white">
								SHC ROBOTICS
							</h1>
						</div>

						<p className="text-lg md:text-base lg:w-[40%] w-[90%] md:w-[80%] mx-auto lg:m-0 px-6 lg:px-0 lg:p-0">
							{t("anasayfa_aciklama")}
						</p>
					</div>
				</div>

				<img
					src="backgrounds/bg.png"
					className="hidden lg:block max-w-full max-h-full absolute right-5 sm:top-[-100px] sm:right-[-100px] sm:z-[-1] sm:left-auto transition-all duration-500 ease-in-out"
					style={{ left: "calc(100% - 45%)" }}
				/>
			</div>

			<Strip />

			<Values />

			<Footer />
		</div>
	);
}
