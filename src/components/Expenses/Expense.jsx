import React, { useState } from "react";
import "./expense.scss";
import expenseData from "../../data/data.json";

const Expense = () => {
  const [selectedBars, setSelectedBars] = useState([]);

  const maxAmount = expenseData.reduce(
    (max, graph) => (max = max > graph.amount ? max : graph.amount),
    0
  );

  return (
    <div className="expense">
      <div className="e-wrapper">
        <h3 className="e-wrapper-header">Spending — Last 7 days</h3>
        <div className="e-wrapper-graph">
          {expenseData.map((graph, index) => {
            return (
              <div className="graph-col" key={index}>
                <div
                  className={
                    selectedBars?.includes(graph)
                      ? "amount-info amount-info-active"
                      : "amount-info"
                  }
                >
                  ${graph.amount}
                </div>
                <div
                  className={
                    selectedBars?.includes(graph)
                      ? "graph graph-active"
                      : "graph"
                  }
                  data-max={graph.amount === maxAmount ? "max" : ""}
                  onClick={() => {
                    setSelectedBars((prev) =>
                      prev.find((b) => b.id === graph.id)
                        ? prev.filter((g) => g.id !== graph.id)
                        : [...prev, graph]
                    );
                  }}
                  style={{ height: `${graph.amount * 3}px` }}
                ></div>
                <div className="day">{graph.day}</div>
              </div>
            );
          })}
        </div>
        <div className="e-wrapper-footer">
          <div className="month-total">
            <p>Total this month</p>
            <p className="month-expense">$478.33</p>
          </div>
          <div className="last-month">
            <p className="last-month-rate">+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;
