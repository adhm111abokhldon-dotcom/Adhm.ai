import Title from "./Title";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const OurWork = () => {
  const { t } = useTranslation();

  const images = [
    "/mobile-app-template.jpg",
    "/dashboard.avif",
    "/fitness-app.webp",
  ];

  const workItems = t("ourWork.items", { returnObjects: true });

  const workData = workItems.map((item, index) => ({
    ...item,
    image: images[index],
  }));

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className=" flex flex-col items-center gap-7 px-4 sm:px-12
   lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title title={t("ourWork.title")} desc={t("ourWork.desc")} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer "
          >
            <div className="h-50 w-full rounded-xl">
              {" "}
              <img
                src={work.image}
                alt={work.title}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
