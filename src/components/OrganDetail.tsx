import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import kidneyScanImage from '../assets/kidney-scan.jpg';
import lungsScanImage from '../assets/lungs-scan.jpg';
import neckScanImage from '../assets/neck-scan.jpg';
import abdomenScanImage from '../assets/abdomen-scan.jpg';

interface OrganInfo {
  title: string;
  description: string;
  symptoms: string[];
  prevention: string[];
  scanImage: string;
  highlightArea: { top: string; left: string; };
}

interface OrganInfoMap {
  [key: string]: OrganInfo;
}

const OrganDetail = () => {
  const { organ } = useParams<{ organ: string }>();
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);

  const organInfo: OrganInfoMap = {
    kidney: {
      title: "KIDNEY",
      description: "The kidneys are vital organs that filter blood, remove waste, and help control blood pressure.",
      symptoms: ["Back pain", "Changes in urination", "Swelling", "Fatigue"],
      prevention: ["Stay hydrated", "Maintain healthy diet", "Regular exercise", "Control blood pressure"],
      scanImage: kidneyScanImage,
      highlightArea: { top: '45%', left: '30%' }
    },
    lungs: {
      title: "LUNGS",
      description: "The lungs are essential organs responsible for breathing and oxygen exchange in the body.",
      symptoms: ["Shortness of breath", "Chronic cough", "Wheezing", "Chest pain"],
      prevention: ["Don't smoke", "Avoid air pollution", "Regular exercise", "Deep breathing exercises"],
      scanImage: lungsScanImage,
      highlightArea: { top: '30%', left: '50%' }
    },
    neck: {
      title: "NECK",
      description: "The neck contains vital structures and supports the head while allowing movement.",
      symptoms: ["Stiffness", "Pain", "Limited range of motion", "Headaches"],
      prevention: ["Good posture", "Ergonomic workspace", "Stretching exercises", "Stress management"],
      scanImage: neckScanImage,
      highlightArea: { top: '15%', left: '50%' }
    },
    abdomen: {
      title: "ABDOMEN",
      description: "The abdomen contains important organs for digestion and other vital functions.",
      symptoms: ["Pain", "Bloating", "Nausea", "Changes in appetite"],
      prevention: ["Healthy diet", "Regular exercise", "Stress management", "Regular check-ups"],
      scanImage: abdomenScanImage,
      highlightArea: { top: '40%', left: '50%' }
    }
  };

  const info = organ && organInfo[organ] ? organInfo[organ] : {
    title: "Organ Not Found",
    description: "Information not available",
    symptoms: [],
    prevention: [],
    scanImage: "",
    highlightArea: { top: '0%', left: '0%' }
  };

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

  if (isScanning) {
    return (
      <div className="min-h-screen bg-teal-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 bg-teal-700 rounded-full animate-pulse mx-auto mb-4"></div>
          <h2 className="text-4xl font-bold text-yellow-300 animate-pulse">Scanning...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-teal-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-yellow-300 mb-8 hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft className="mr-2" />
          Back
        </button>
        
        <h1 className="text-5xl font-bold mb-12 text-center">{info.title}</h1>
        
        <div className="relative max-w-md mx-auto bg-white rounded-3xl overflow-hidden">
          <img 
            src={info.scanImage} 
            alt={`${info.title} scan area`} 
            className="w-full h-[600px] object-cover"
          />
          
          <div className="p-6 text-center">
            <p className="text-gray-800 mb-6">Keep your phone in highlighted area</p>
            <button
              onClick={handleScan}
              className="bg-teal-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              SCAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganDetail;