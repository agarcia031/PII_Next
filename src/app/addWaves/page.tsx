"use client"
import ManySinusPlot from "@/components/manySinusPlot";
import SumSinusPlot from "@/components/sumSinusPlot";
import BackButton from "@/components/backButton";

export default function Suite() {
  
    return (
      <div >
        <h1>Plusieurs ondes 🔥</h1>
        <ManySinusPlot/>
        <SumSinusPlot/>
        <BackButton/>
      </div>
    );
  }