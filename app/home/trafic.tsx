"use client";
import { ProviderContext } from "@/components/provider";
import { useContext, useEffect, useState } from "react";
import Transaction from "./transaction";

const Trafic = () => {
  const { transactions } = useContext(ProviderContext);
  return (
    <div className="h-full space-y-4">
      <Transaction date="Today" data={transactions} />
      <Transaction
        date="Yesterday"
        data={[
          ["Etherum Node", "Etherum Node", 125.23],
          ["Walmart", "Walmart", -62.76],
          ["Amazon", "Amazon", -21.98],
          ["GHO APY", "GHO APY", 524.62],
        ]}
      />
      <Transaction
        date="Last Wednesday"
        data={[
          ["Nobu", "Nobu", -123.27],
          ["Alice Anderson", "Alice", -87.26],
        ]}
      />
      <Transaction
        date="Sunday 14 January"
        data={[
          ["McDonald's", "McDonald's", -28.14],
          ["Bob William", "Bob William", 25.69],
          ["Uniswap", "Uniswap", -0.14],
        ]}
      />
    </div>
  );
};

export default Trafic;
