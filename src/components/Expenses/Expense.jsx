import React, {useState} from 'react'
import './expense.scss'
import expense from '../../data/data.json'

const Expense = () => {

const [graphs, setGraphs] = useState(new Set());

const selectGraph = (graph) => {
    setGraphs(graphs => {
        if(!graphs.has(graph)){
            graphs = new Set(graphs);
            graphs.add(graph)
        }
        else{
            graphs = new Set(graphs)
            graphs.delete(graph)
        }
        return graphs;
    })
}



  let total = 0;
  return (
    <div className="expense">
        <div className="e-wrapper">
            <h3 className="e-wrapper-header">Spending — Last 7 days</h3>
            <div className="e-wrapper-graph">
                    {
                        expense.map((graph, index) => {
                            total += graph.amount;
                            return(
                                <div className={graphs.has(graph) ? "graph graph-active" : "graph"} key={index} onClick={() => selectGraph(graph)} style={{height: `${graph.amount * 3}px`}}>
                                    <div className={graphs.has(graph) ? "amount-info amount-info-active" : "amount-info"}>{graph.amount}</div>
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