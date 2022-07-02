import React, {useState} from 'react'
import './expense.scss'
import expenseData from '../../data/data.json'

const Expense = () => {

const [graphs, setGraphs] = useState(new Set());

const selectGraph = (graph) => {
    setGraphs(graphs => {
        if(!graphs.has(graph)){
            graphs = new Set(graphs);
            graphs.add(graph)
        }
        else if(graphs.has(graph)){
            graphs = new Set(graphs)
            graphs.delete(graph)
        }
        return graphs;
    })
}

const maxAmount = expenseData.reduce((max, graph) => max = max > graph.amount ? max : graph.amount, 0);

let total = 0;

  return (
    <div className="expense">
        <div className="e-wrapper">
            <h3 className="e-wrapper-header">Spending — Last 7 days</h3>
            <div className="e-wrapper-graph">
                    {
                        expenseData.map((graph, index) => {
                            total += graph.amount;
                            return(
                                <div className="graph-col" key={index}>
                                    <div className={graphs.has(graph) ? "amount-info amount-info-active" : "amount-info"}>${graph.amount}</div>
                                    <div className={graphs.has(graph) ? "graph graph-active" : "graph"} data-max={graph.amount === maxAmount ? "max" : ''}  onClick={() => selectGraph(graph)} style={{height: `${graph.amount * 3}px`}}></div>
                                    <div className="day">{graph.day}</div>
                                </div>
                                 
                            )
                        })
                    }  
            </div>
            <div className="e-wrapper-footer">
                <div className="month-total">
                    <p>Total this month</p>
                    <p className="month-expense">${total}</p>
                </div>
                <div className="last-month">
                    <p className="last-month-rate">+2.4%</p>
                    <p>from last month</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expense