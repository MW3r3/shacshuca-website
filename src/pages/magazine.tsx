import { getI18n, useTranslation } from "react-i18next";
import { Carousel } from "../components/carousel";
import Navbar from "../components/navbar";
import items from "../constants/magazine.json"
import { useEffect } from "react";
import Footer from "../components/footer";

export default function MagazinePage() {
    const { t } = useTranslation();

    useEffect(() => {
        if (localStorage.getItem("lang") === null) {
            localStorage.setItem("lang", getI18n().resolvedLanguage || "tr")
        } else {
            // @ts-ignore
            getI18n().changeLanguage(localStorage.getItem("lang"));
        }
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-col flex-grow gap-y-6 pt-24 pb-0">
                <Carousel items={items} />
                <p className="text-red-500 text-center mt-0">
                    {t("dergi_aciklama")}
                </p>
                
            </div>

            <Footer />

        </div>

    );
}