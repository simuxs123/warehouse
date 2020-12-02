import React from 'react'
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
export const QuantityHistory = ({quantityHistory}) => {
    const amount=quantityHistory.map(item=>{
        return Number(item.quantityAmount)
    })
    const action=quantityHistory.map(item=>{
        return item.action+" "+item.date
    })
    const options={
        title: {
                text: 'Quantity changes'
                },
         xAxis: {
        categories: action
    },
        series:[{
            name:"Quantity changes",
            data:amount
        }]
    } 
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options}/> 
        </div>
    )
}