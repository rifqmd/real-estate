"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DiscoverSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="py-12 bg-white mb-16"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div variants={itemVariants} className="my-12 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            Discover
          </h2>
          <p className="mt-8 text-lg text-gray-600">
            Find your Dream Property Now!
          </p>
          <p className="mt-2 text-gray-500 max-x-3xl mx-auto">
            Explore our extensive listings to find the perfect home that suits
            your needs and lifestyle. Start your journey to homeownership today!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {[
            {
              imageSrc: "/landing-icon-wand.png",
              title: "Search for Properties",
              description:
                "Easily search through our extensive database of properties using various filters to find the perfect match for your needs.",
            },
            {
              imageSrc: "/landing-icon-calendar.png",
              title: "Schedule a Viewing",
              description:
                "Book a viewing appointment for your favorite properties and experience them in person.",
            },
            {
              imageSrc: "/landing-icon-heart.png",
              title: "Save Your Favorites",
              description:
                "Easily save your favorite properties to revisit them later.",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard
                {...card}
                // imageSrc={card.imageSrc}
                // title={card.title}
                // description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="text-center px-4 py-12 shadow-lg rounded-lg bg-primary-50 md:h-72">
    <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
      <Image
        src={imageSrc}
        width={40}
        height={40}
        className="w-full h-full"
        alt={title}
      />
    </div>

    <h3 className="text-xl mt-4 font-medium text-gray-800 ">{title}</h3>
    <p className="mt-4 text-base text-gray-500">{description}</p>
  </div>
);
