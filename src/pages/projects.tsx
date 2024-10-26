import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProjectCarousel from '../components/pcarousel';
import items from '../constants/projects.json';
import { useTranslation } from 'react-i18next';
import { getI18n } from 'react-i18next';

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem('lang') === null) {
      localStorage.setItem('lang', getI18n().resolvedLanguage || 'tr');
    } else {
      // @ts-ignore
      getI18n().changeLanguage(localStorage.getItem('lang'));
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <img
        alt="rabbit"
        src="/backgrounds/rabbit.png"
        className="absolute h-[725px] -z-10 right-0 opacity-80"
      />
      <main className="flex-grow">
        <section className="w-full p-4 md:p-0 md:w-[80%] lg:w-[60%] mx-auto mt-[5%] bg-cover relative py-2 md:py-4 min-h-[50vh]">
          <article className="z-10 flex flex-col gap-4">
            <h1 className="text-3xl md:text-5xl font-bold text-default-blue flex">
              SHC ROBOTICS
            </h1>

            <p className="uppercase lg:w-[40%]">{t("projeler_aciklama")}</p>
          </article>
        </section>

        <ProjectCarousel projects={items} />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;


