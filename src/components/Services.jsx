import React from "react";
import { TiSocialTwitter } from "react-icons/ti"; //soial
import { HiOutlineAnnotation } from "react-icons/hi"; //
import { HiOutlinePencilSquare } from "react-icons/hi2"; // write
import { HiOutlineMegaphone } from "react-icons/hi2"; //market
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const icons = [
    <HiOutlineAnnotation />,
    <HiOutlineMegaphone />,
    <HiOutlinePencilSquare />,
    <TiSocialTwitter />,
  ];

  const servicesItems = t("services.items", { returnObjects: true });

  const servicesData = servicesItems.map((item, index) => ({
    ...item,
    icon: icons[index],
  }));

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12
   lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <div
        className="absolute -z-10 left-0 dark:z-1 top-40
           w-50/100 min-w-50 h-45 sm:h-1/3 max-w-225 max-h-175
           blur-[90px] sm:blur-[120px]
           bg-[#FE41FF] dark:bg-[#FF00B2]/50 rounded-full
           "
      ></div>

      <Title title={t("services.title")} desc={t("services.desc")} />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
