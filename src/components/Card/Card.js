import React from "react";

const Card = () => {
  return (
    <div class="cursor-pointer shadow-lg hover:shadow-red-700 flex flex-col items-center bg-black border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        class="object-cover w-full rounded-t-lg h-52 md:w-48 md:rounded-none md:rounded-s-lg"
        src="https://i.postimg.cc/pLQT3YSQ/426655659-17853472548119863-1521372488653411893-n.jpg"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-white">
          SABOR A PORTO
        </h5>
        <p class="mb-3 font-normal text-white">
          530 ground se complace en presentar🇵🇹 SABOR A PORTO 🇵🇹 con un artista
          que hará su debut en la ciudad de las fallas geológicas, desde
          Portugal 🇵🇹 el es Rafael Lopes
        </p>
      </div>
    </div>
  );
};

export default Card;
