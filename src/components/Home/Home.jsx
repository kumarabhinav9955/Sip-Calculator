import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import PageInfo from "../PageInfo/PageInfo";

const Home = () => {
  const [monthlyInvestment, setMonthlyInvestement] = useState(500);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [timePeriod, setTimePeriod] = useState(10);
  const [totalInvested, setTotalInvested] = useState(500);
  const [estimatedReturns, setEstimatedReturns] = useState("");
  const [totalValue, setTotalValue] = useState(0);
  useEffect(() => {
    calculateSip(monthlyInvestment, expectedReturn, timePeriod);
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  const handleMonthlyChange = (e, newValue) => {
    setMonthlyInvestement(newValue);
    calculateSip(newValue, expectedReturn, timePeriod);
  };
  const handleMonthlyReturn = (e, newValue) => {
    setExpectedReturn(newValue);
    calculateSip(monthlyInvestment, newValue, timePeriod);
  };
  const handleTimePeriod = (e, newValue) => {
    setTimePeriod(newValue);
    calculateSip(monthlyInvestment, expectedReturn, newValue);
  };
  const calculateSip = (P, r, years) => {
    const rate = r / 12 / 100;
    const n = years * 12;

    const investedAmount = P * n;
    const maturityValue = P * ((Math.pow(1 + rate, n) - 1) / rate) * (1 + rate);
    const returns = maturityValue - investedAmount;

    setTotalInvested(investedAmount.toFixed(2));
    setEstimatedReturns(returns.toFixed(2));
    setTotalValue(maturityValue.toFixed(2));
  };

  return (
    <>
      <div className="flex justify-center mt-10 ">
        <h1 className="text-black text-3xl font-extrabold">
          Welcome to SIP Plan Predictor
        </h1>
      </div>
      <div className="border border-black ml-20 mr-20 mt-5 min-h-[auto] min-w-[60vw] p-8 rounded-lg">
        <div className="flex justify-between">
          <div className="font-bold">Monthly Investment</div>
          <div className="border border-black rounded-md px-2 py-1">
            ₹<span className="ml-2">{monthlyInvestment}</span>
          </div>
        </div>
        <div className="mt-10">
          <Slider
            value={monthlyInvestment}
            min={0}
            max={1000000}
            step={500}
            aria-label="Monthly Investment"
            onChange={handleMonthlyChange}
          />         
        </div>
        <div className="flex justify-between">
          <div className="font-bold mt-3">Expected Return (p.a)</div>
          <div className="border border-black rounded-md px-2 py-1">
            <span>{expectedReturn}</span>%
          </div>
        </div>
        <div className="mt-10">
          <Slider
            value={expectedReturn}
            min={0}
            max={30}
            step={0.1}
            aria-label="Expected Return"
            onChange={handleMonthlyReturn}
          />
        </div>

        <div className="flex justify-between">
          <div className="font-bold mt-3">Time Period (in years)</div>
          <div className="border border-black rounded-md px-2 py-1">
            <span>{timePeriod}</span> Yr
          </div>
        </div>
        <div className="mt-10">
          <Slider
            value={timePeriod}
            min={1}
            max={30}
            step={1}
            aria-label="Time Period"
            onChange={handleTimePeriod}
          />
        </div>

        <div className="flex justify-between">
          <div className="font-bold mt-3">Total Invested</div>
          <div className="border border-black rounded-md px-2 py-1">
            ₹<span>{totalInvested}</span>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div className="font-bold mt-3">Est. Return</div>
          <div className="border border-black rounded-md px-2 py-1">
            ₹<span>{estimatedReturns}</span>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div className="font-bold mt-3">Total Value</div>
          <div className="border border-black rounded-md px-2 py-1">
            ₹<span>{totalValue}</span>
          </div>
        </div>
      </div>
      <PageInfo />
    </>
  );
};

export default Home;
