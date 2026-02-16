"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    name: "Mo",
    total: 6,
  },
  {
    name: "Tu",
    total: 3,
  },
  {
    name: "We",
    total: 9,
  },
  {
    name: "Th",
    total: 5,
  },
  {
    name: "Fr",
    total: 2,
  },
  {
    name: "Sa",
    total: 6,
  },
  {
    name: "Su",
    total: 2,
  },
];

export const DashboardChart = () => {
  return (
    <Card className="col-span-1 shadow-sm border-none bg-white">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Hours Activity</CardTitle>
        <p className="text-xs text-muted-foreground">+3% Increase Than Last Week</p>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}h`}
            />
             <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
             />
            <Bar
              dataKey="total"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
