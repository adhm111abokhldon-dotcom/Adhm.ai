import React from "react";
import { TiSocialTwitter } from "react-icons/ti"; //soial
import { HiOutlineAnnotation } from "react-icons/hi"; //
import { HiOutlinePencilSquare } from "react-icons/hi2"; // write
import { HiOutlineMegaphone } from "react-icons/hi2"; //market
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn ideas into powerful digital solutions that connect, engage...",
      icon: <HiOutlineAnnotation />,
    },
    {
      title: "Content Marketing",
      description: "We help you turn execute your plan and deliver results.",
      icon: <HiOutlineMegaphone />,
    },
    {
      title: "Content Writing",
      description:
        "We help you create a marketing srategy that drives results.",
      icon: <HiOutlinePencilSquare />,
    },
    {
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: <TiSocialTwitter />,
    },
  ];

  return (
    <motion.div
    initial='hidden'
    whileInView={"visible"}
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
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

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
