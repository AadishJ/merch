"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Buttons() {
    const [selectedBadge, setSelectedBadge] = useState("NEW ARRIVALS");

  const badges = [
    "ALL",
    "WINTERS COLLECTION",
    "NEW ARRIVALS",
    "BEST SELLERS",
    "MEN'S COLLECTION",
    "LUXURY COLLECTION",
  ];

  return (
    <div>
      <div className="m-4 flex gap-2 max-sm:overflow-scroll">
        {badges.map((badge, index) => (
          <Badge className="cursor-pointer"
            key={index}
            variant={selectedBadge === badge ? "default" : "outline"}
            onClick={() => setSelectedBadge(badge)}>
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
}
