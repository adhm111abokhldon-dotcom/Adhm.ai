import Title from "./Title";
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      desc: "We turn ideas into powerful digital solution that connect, engage...",
      image: "/public/mobile-app-template.jpg",
    },
    {
      title: "Dashboard mangement",
      desc: "We help you execute your plan and deliver results.",
      image: "/public/dashboard.avif",
    },
    {
      title: "Fitness app promotion",
      desc: "We help you create a marketing strategy that drives results.",
      image: "/public/fitness-app.webp",
    },
  ];

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
      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solution that move your business forward."
      />

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
