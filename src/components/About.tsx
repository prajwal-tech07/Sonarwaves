import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-teal-700 flex items-center justify-center p-4">
      <div className="bg-yellow-300 rounded-bl-[100px] p-12 max-w-4xl flex items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-teal-800 mb-6">
            "We don't diagnose, we alert—early warnings for a healthier tomorrow."
          </h2>
        </div>
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3"
            alt="Medical Professionals"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;