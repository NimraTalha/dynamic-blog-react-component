/* eslint-disable @next/next/no-img-element */

import React from "react";



const AuthoreCard = () => {
  return (
    <div className="bg-white mt-12 shadow-lg rounded-lg p-6">
      <div className="flex items-center animate-bounce mt-4">
        <img
          src="/Images/logo.jpg" 
          alt="Author Image" 
          width={66} 
          height={66} 
          className="w-16 h-16 rounded-full mr-4 object-cover border-4 border-pink-400"
        />
        <div>
          <h3 className="text-xl font-bold">Nimra Talha

          </h3>
          <p className="text-green-500">Website Designer|Language instructor| Student of GENERATIVE AI ROBOTIC ENGINEERING</p>
        </div>
      </div>
      <p className="text-pretty font-dark text-gray-500 leading-relaxed"> I am Nimra Talha, an online educator with a focus on teaching Urdu and Arabic. My experience has allowed me to connect with learners from around the world, helping them achieve their language goals.

I also have experience working as an online manager for a USA-based company, where I developed strong organizational and communication skills while managing remote teams.

Currently, I’m expanding my expertise in website design, combining creativity with technical skills to create user-friendly websites. I’m also working on a blog website, where I share insights and resources on language learning and web design.

I’m always eager to learn and grow, seeking new opportunities to leverage my diverse skills and make a positive impact.
      </p>
      <div className="mt-4 flex space-x-3">

        <a href="https://www.linkedin.com/in/nimra-talha-7691a21a3/"
        className="px-4 py-2 text-black bg-green-500 rounded-md hover:bg-green-300 transition-300">
          LinkedIn

        </a>
        <a href="#"
        className="px-4 py-2 text-black bg-green-500 rounded-md hover:bg-green-300 transition-300">
         Twitter

        </a>
        <a href="https://www.facebook.com/NimraTalha123"
        className="px-4 py-2 text-black bg-green-500 rounded-md hover:bg-green-300 transition-300">
          Facebook

        </a>
        <a href="https://www.youtube.com/@MsNIMRA"
        className="px-4 py-2 text-black bg-green-500 rounded-md hover:bg-green-300 transition-300">
         Youtube

        </a>
      </div>

    </div>
  );
};

export default AuthoreCard;
