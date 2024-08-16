import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";
import React from "react";

type Props = {
  label: string;
  value: number;
  shouldFormat?: boolean;
};

const DataCard = ({ label, value, shouldFormat }: Props) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between space-y-0 flex-row pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {shouldFormat ? formatPrice(value) : value}
        </div>
      </CardContent>
    </Card>
  );
};

export default DataCard;
