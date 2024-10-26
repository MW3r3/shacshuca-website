
import React, { useState } from "react";
import { getI18n, useTranslation } from "react-i18next";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();

	return (
		<nav className="bg-default-blue flex items-center justify-between py-4 px-6 lg:px-0 relative mb-6">
			{/* Sol Menüler */}
			<div className="hidden lg:flex space-x-4 font-bold ml-[15%] z-50">
				<a
					href="/"
					className="relative text-white after:content-[''] after:h-1 after:w-0 after:-bottom-[20px] after:rounded-full after:left-0 after:absolute after:bg-white after:hover:w-full after:duration-[0.3s]">
					{t("navbar_anasayfa")}
				</a>
				<a
					href="/team"
					className="relative text-white after:content-[''] after:h-1 after:w-0 after:-bottom-[20px] after:rounded-full after:left-0 after:absolute after:bg-white after:hover:w-full after:duration-[0.3s]">
					{t("navbar_takim")}
				</a>
				<a
					href="/projects"
					className="relative text-white after:content-[''] after:h-1 after:w-0 after:-bottom-[20px] after:rounded-full after:left-0 after:absolute after:bg-white after:hover:w-full after:duration-[0.3s]">
					{t("navbar_projeler")}
				</a>
				<a
					href="/magazine"
					className="relative text-white after:content-[''] after:h-1 after:w-0 after:-bottom-[20px] after:rounded-full after:left-0 after:absolute after:bg-white after:hover:w-full after:duration-[0.3s]">
					{t("navbar_dergi")}
				</a>
			</div>

			{/* Orta Logo */}
			<div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-30 pointer-events-none md:pointer-events-auto">
				<img
					src="/svg/logo-wrapper.svg"
					alt="Logo Wrapper"
					className="w-[120px] h-[100px] lg:w-[156px] lg:h-[136px]" // Responsive dış logo boyutu
				/>
				<img
					src="/svg/logo.svg"
					alt="Logo"
					className="absolute top-[12px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]" // Responsive iç logo
				/>
			</div>

			{/* Sağ Buton ve Dil */}
			<div className="hidden lg:flex space-x-4 items-center mr-2">
				<a
					href="mailto:shacshucarobotics@gmail.com"
					className="bg-white text-default-blue px-2 py-1 rounded-full font-bold">
					{t("navbar_iletisim")}
				</a>
				<button
					className="flex items-center"
					onClick={() => {
						var newLanguage =
							getI18n().resolvedLanguage === "en" ? "tr" : "en";
						// @ts-ignore
						getI18n().changeLanguage(newLanguage);
						localStorage.setItem("lang", newLanguage);
					}}>
					<img
						src={
							// @ts-ignore
							getI18n().resolvedLanguage == "en"
								? "/flags/en.png"
								: "/flags/tr.png"
						}
						alt="Language"
						className="h-8 rounded-full border-2 border-white"
					/>
				</button>
			</div>

			{/* Hamburger Menu - Mobil */}
			<div className="lg:hidden flex items-center">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="text-white">
					{/* Hamburger ikonu */}
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"></path>
					</svg>
				</button>
			</div>

			{/* Mobil Menü */}
			{isOpen && (
				<div className="lg:hidden absolute top-14 right-0 z-20 bg-default-blue w-full flex flex-col items-start p-4 space-y-2">
					<a href="/" className="text-white">
						{t("navbar_anasayfa")}
					</a>
					<a href="/team" className="text-white">
						{t("navbar_takim")}
					</a>
					<a href="/projects" className="text-white">
						{t("navbar_projeler")}
					</a>
					<a href="/magazine" className="text-white">
						{t("navbar_dergi")}
					</a>
					<a
						href="mailto:shacshucarobotics@gmail.com"
						className="text-white">
						{t("navbar_iletisim")}
					</a>
					<button
						className="flex items-center"
						onClick={() => {
							var newLanguage =
								getI18n().resolvedLanguage === "en"
									? "tr"
									: "en";
							// @ts-ignore
							getI18n().changeLanguage(newLanguage);
							localStorage.setItem("lang", newLanguage);
						}}>
						<img
							src={
								// @ts-ignore
								getI18n().resolvedLanguage == "en"
									? "flags/en.png"
									: "flags/tr.png"
							}
							alt="Language"
							className="h-8 rounded-full border-2 border-white"
						/>
					</button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
