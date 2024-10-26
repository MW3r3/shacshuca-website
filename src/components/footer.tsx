import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
	const { t } = useTranslation();
	return (
		<footer className="flex md:w-[80%] lg:w-[60%] mx-auto flex-col md:flex-row justify-between border-t-4 border-gray-300 mt-4 space-y-4 md:space-y-0 py-4">
			<div className="text-center md:text-left">
				{t("footer")}
			</div>
			<div className="flex justify-center md:justify-end gap-6">
				<a href="https://www.instagram.com/shc_robotics/?locale=en_GB">
					<img
						src="/footer-icons/instagram-logo.svg"
						alt="Instagram"
					/>
				</a>
				<a href="https://www.linkedin.com/company/shacshuca-robotics">
					<img src="/footer-icons/linkedin-logo.svg" alt="LinkedIn" />
				</a>
				
			</div>
		</footer>
	);
}

export default Footer;
