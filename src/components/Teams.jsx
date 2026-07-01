import React from "react";
import Title from "./Title";
import { motion } from "motion/react";

const Teams = () => {
  const teamData = [
    {
      name: "Anas AL Satal",
      title: "Marketing & Designer",
      image: "/public/anas2.jpeg",
    },
    {
      name: "Mohamed Samer Saad Al Deen",
      title: "ISIS Member",
      image: "/public/samer.jpeg",
    },
    {
      name: "Opada AL Hroop",
      title: "No One Know",
      image: "/public/apada2.jpeg",
    },
    {
      name: "Mohamed AL Hariri",
      title: "SEO & Top Manger",
      image: "/public/hariri.jpeg",
    },
    {
      name: "Aobe AL Hariri",
      title: "Security Guard",
      image: "/public/aobe.jpeg",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 flex flex-col gap-7 items-center text-gray-700 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brands success."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((team, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-900
          dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-300 dark:shadow-white/5 
          hover:scale-103 transition-all duration-400"
          >
            <img
              src={team.image}
              alt={team.title}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold text-sm max-sm:leading-3.5 max-sm:mb-1.5 tracking-tighter">
                {team.name}
              </h3>
              <p className="text-xs opacity-60 leading-3.5 tracking-tight">
                {team.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
