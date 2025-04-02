"use client"
import { useState } from "react";
//import SinusControlList from "@/components/sinusControlList";
//import ManySinusPlot from "@/components/manySinusPlot";
import ListBoite from "./listeBoite";
import BackButton from "@/components/backButton";

export default function controlWaves() {

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold absolute top-4">🎵 Générateur de sinusoïdes</h1>
      <ListBoite/>
      <BackButton/>
    </div>
  );
}