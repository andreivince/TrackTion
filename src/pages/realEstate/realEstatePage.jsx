import "/Users/andreivince/Desktop/TrackTion/TrackTion Code/src/App.css";
import React from "react";
import { createPortal } from "react-dom";
import Modal from "react-modal";
import ModalContent from "../../components/modalContent";
import { useState } from "react";
import Dividends from "../../components/dividends";
import Gains from "../../components/gains";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { supabase } from "../../client";
import SignOutButton from "../../components/SignOutButton";
import RealEstate from "../../components/realEstate";
import Vehicles from "../../components/vehicles";
import Loans from "../../components/loans";
import Portfolio from "../../components/portfolio";
import TrackTionBot from "../../components/trackionBot";
import Objectives from "../../components/objectives";

export default function RealEstatePage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-10">
      <div className="flex">
        <Objectives />
        <SignOutButton />
      </div>

      <div className="flex flex-col items-center justify-center mb-10">
        <p className="font-bold text-5xl mb-4">Your Real Estate.</p>

        <div className="flex gap-5">
          <ManualButton />
        </div>
      </div>

      {/* Dividends and Gains Section */}
      <div className="grid gap-10 grid-cols-2 ">

        <RealEstate />
      </div>
    </div>
  );
}

function ManualButton() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button className="glow-on-hover" onClick={() => setShowModal(true)}>
        Manual
      </button>
      <button
        disabled
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
        onClick={() => setShowModal(true)}
      >
        Auto
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}

