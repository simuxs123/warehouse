import React from 'react'
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
export const PriceHistory = ({priceHistory}) => {
    const price=priceHistory.map(item=>{
        return Number(item.prices)
    })
    const date=priceHistory.map(item=>{
        return item.date
    })
    const options={
        title: {
                text: 'Price changes'
                },
         xAxis: {
        categories: date
    },
        series:[{
            name:"Price changes",
            data:price
        }]
    } 
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options}/> 
        </div>
    )
}
