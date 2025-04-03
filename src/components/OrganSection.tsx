import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrganCard = ({ title, image, path }: { title: string; image: string; path: string }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-white rounded-3xl shadow-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => navigate(path)}
    >
      <img src={image} alt={title} className="w-48 h-48 object-contain mx-auto mb-4"/>
      <h3 className="text-2xl font-bold text-teal-800 text-center">{title}</h3>
    </div>
  );
};

const OrganSection = () => {
  const organs = [
    {
      title: "KIDNEY",
      image: "/src/assets/kidney.jpg", // Replace with your custom image path
      path: "/organ/kidney"
    },
    {
      title: "LUNGS",
      image: "/src/assets/lungs.jpg", // Replace with your custom image path
      path: "/organ/lungs"
    },
    {
      title: "NECK",
      image: "/src/assets/neck.jpg", // Replace with your custom image path
      path: "/organ/neck"
    },
    {
      title: "ABDOMEN",
      image: "/src/assets/abdomen.jpg", // Replace with your custom image path
      path: "/organ/abdomen"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-teal-800 mb-12">CHOOSE THE PART</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {organs.map((organ) => (
          <OrganCard key={organ.title} {...organ} />
        ))}
      </div>
    </div>
  );
};

export default OrganSection;