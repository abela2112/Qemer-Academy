"use client";
import { XAxis, YAxis, ResponsiveContainer, Bar, BarChart } from "recharts";
import React from "react";
import { Card } from "@/components/ui/card";

type ChartProps = {
  data: {
    title: string;
    revenue: number;
  }[];
};

const Chart = ({ data }: ChartProps) => {
  return (
    <Card>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="title"
            stroke="#888888"
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickFormatter={(v) => `$${v}`}
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey="revenue" fill="#0369a1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
