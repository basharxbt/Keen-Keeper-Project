"use client";
import React, { useContext } from "react";

import { RechartsDevtools } from "@recharts/devtools";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { TimeLine } from "@/contextApi/TimelineContext";

const StatChart = () => {
  const { contact, setContact } = useContext(TimeLine);
  console.log(contact);

  const data = [
    {
      name: "Calls",
      value: contact.filter((c) => c.action === "call").length,
      fill: "#0088FE",
    },
    {
      name: "Texts",
      value: contact.filter((c) => c.action === "text").length,
      fill: "#00C49F",
    },
    {
      name: "Video Calls",
      value: contact.filter((c) => c.action === "video").length,
      fill: "#FFBB28",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
        />
        <RechartsDevtools />
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default StatChart;
