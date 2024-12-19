import mockData from "../../mockData.json";
import { supabase } from "../../client";
import TrackTionBot from "../trackionBot";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
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


export default function ChartROI() {
  const [SPYdata, setSPYdata] = useState([])


  
const data = [
  {
    name: "January",
    sp500: 4000,
    portfolio: 4200,
    amt: 2400,
  },
  {
    name: "February",
    sp500: 4100,
    portfolio: 4300,
    amt: 2450,
  },
  {
    name: "March",
    sp500: 3950,
    portfolio: 4450,
    amt: 2500,
  },
  {
    name: "April",
    sp500: 4200,
    portfolio: 4600,
    amt: 2550,
  },
  {
    name: "May",
    sp500: 4300,
    portfolio: 4700,
    amt: 2600,
  },
  {
    name: "June",
    sp500: 4250,
    portfolio: 4650,
    amt: 2550,
  },
  {
    name: "July",
    sp500: 4400,
    portfolio: 4800,
    amt: 2700,
  },
  {
    name: "August",
    sp500: 4350,
    portfolio: 4750,
    amt: 2650,
  },
  {
    name: "September",
    sp500: 4200,
    portfolio: 4600,
    amt: 2600,
  },
  {
    name: "October",
    sp500: 4300,
    portfolio: 4700,
    amt: 2650,
  },
  {
    name: "November",
    sp500: 4450,
    portfolio: 4900,
    amt: 2750,
  },
  {
    name: "December",
    sp500: 4500,
    portfolio: 4950,
    amt: 2800,
  },
];

  return (
    <LineChart
      width={700}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 200,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="portfolio"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="sp500" stroke="#82ca9d" />
    </LineChart>
  );
}
