import React from "react";

const PageInfo = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <h1 className="font-bold ml-5 text-2xl underline">
          SIP Calculator – Systematic Investment Plan Calculator
        </h1>
      </div>
      <p className="mb-3 text-black ml-5 mr-5 mt-4">
        Prospective investors can think that SIPs and mutual funds are the same.
        However, SIPs are merely a method of investing in mutual funds, the
        other method being a lump sum. A SIP calculator is a tool that helps you
        determine the returns you can avail when parking your funds in such
        investment tools. Systematic Investment Plan or SIP is a process of
        investing a fixed sum of money in mutual funds at regular intervals.
        SIPs usually allow you to invest weekly, quarterly, or monthly.
      </p>
      <h1 className="font-bold ml-5 text-2xl flex justify-center underline">
        What is a SIP Calculator?
      </h1>
      <p className="mb-3 text-black ml-5 mr-5 mt-4">
        A SIP calculator is a simple tool that allows individuals to get an idea
        of the returns on their mutual fund investments made through SIP. SIP
        investments in mutual funds have become one of the most popular
        investment options for millennials lately.
      </p>
      <p className="mb-3 text-black ml-5 mr-5 mt-4">
        These mutual fund sip calculators are designed to give potential
        investors an estimate on their mutual fund investments. However, the
        actual returns offered by a mutual fund scheme varies depending on
        various factors. The SIP calculator does not provide clarification for
        the exit load and expense ratio (if any).
      </p>
      <p className="mb-3 text-black ml-5 mr-5 mt-4">
        This calculator will calculate the wealth gain and expected returns for
        your monthly SIP investment. Indeed, you get a rough estimate on the
        maturity amount for any of your monthly SIP, based on a projected annual
        return rate.
      </p>
      <h1 className="font-bold ml-5 text-2xl flex justify-center underline">
        How can a SIP return calculator help you?
      </h1>
      <p className="mb-3 text-black ml-5 mr-5 mt-4">
        SIPs are a more lucrative mode of investing funds compared to a lump sum
        amount according to several mutual fund experts. It helps you become
        financially disciplined and create a habit of savings that can benefit
        you in the future.
      </p>
      <p className="mb-3 text-black ml-5 mr-5 mt-4">
        A SIP calculator online is a beneficial tool, which shows the estimated
        returns you will earn after the investment tenure.
      </p>
      <h1 className="font-bold ml-5 text-2xl flex justify-center underline">
        How do SIP calculators work?
      </h1>
      <p className="mb-3 text-black ml-5 mr-5 mt-4">
        A SIP plan calculator works on the following formula –
      </p>
      <p className="mb-3 text-black ml-5 mr-5 mt-4">
        M = P × ({"[1 + i]^n – 1"} / i) × (1 + i).
      </p>
      <p className="mb-3 text-black ml-5 mr-5 mt-4">
        In the above formula –
        <ol>M is the amount you receive upon maturity.</ol>
        <ol>P is the amount you invest at regular intervals.</ol>
        <ol>n is the number of payments you have made.</ol>
        <ol>i is the periodic rate of interest.</ol>
        <ol>
          Take for example you want to invest Rs. 1,000 per month for 12 months
          at a periodic rate of interest of 12%.
        </ol>
        <ol>then the monthly rate of return will be 12%/12 = 1/100=0.01</ol>
        <ol>Hence, M = 1000 × ({"[1 + 0.01]^12 – 1"} / 0.01) × (1 + 0.01).</ol>
        <ol>which gives Rs 12,809 Rs approximately in a year.</ol>
        <ol>
          The rate of interest on a SIP will differ as per market conditions. It
          may increase or decrease, which will change the estimated returns.
        </ol>
      </p>
    </div>
  );
};

export default PageInfo;
