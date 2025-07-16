import React from "react";
import { LearningSolutions, StatsSection } from "../../components";

export default function HomePage() {
  return (
    <div className="pt-20">
      {" "}
      {/* Added padding-top to account for fixed navbar */}
      <h1 className="text-4xl font-bold text-green-800 text-center py-8">
        Welcome to the Home Page
      </h1>
      <LearningSolutions />
      <StatsSection />
    </div>
  );
}
