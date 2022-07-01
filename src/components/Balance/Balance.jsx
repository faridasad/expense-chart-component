import React from 'react'
import './balance.scss'


const Balance = () => {
  return (
    <div className="balance">
        <div className="balance-text">
            <p>My balance</p>
            <p className="current-balance">$921.48</p>
        </div>
        <div className="circles">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
        </div>
    </div>
  )
}

export default Balance