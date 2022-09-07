import React, { useState } from 'react'
import Chart from "react-apexcharts";

const ProductsChart = () => {

    const [state, setstate] = useState(
        {
            options: {
                colors: ['#000000'],

                chart: {
                    id: "basic-bar",
                    toolbar: {
                        show: false
                    },
                    dropShadow: {
                        enabled: true,
                        top: 20,
                        left: 0,
                        blur: 2,
                        opacity: 0.10
                    },
                },
                xaxis: {
                    categories: ["Jan 15", "Jan 16", "jan 17", "Jan 18", "Jan 19", "Jan 20", "Jan 21", "Jan 22", "Jan 23", "Jan 24", "Jan 25", "Jan 26"]
                },
                yaxis: {
                    categories: [0, 100, 200, 300, 400, 500]
                },
                stroke: {
                    curve: 'smooth',
                },
            },
            series: [
                {
                    name: "Score",
                    data: [50, 150, 80, 200, 100, 350, 40, 300, 190, 400, 250, 400]
                }
            ],

            legend: {
                position: "right",
                verticalAlign: "top",
                containerMargin: {
                    left: 35,
                    right: 60
                }
            },
            responsive: [
                {
                    breakpoint: 1000,
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: false
                            }
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]

        }
    )

    return (
        <div className="product_chart bg-white rounded shadow p-3 w-100">
            <div className="chart-title"><h3>Products Sales</h3></div>
            <Chart
                    options={state.options}
                    series={state.series}
                    type="line"
                    width='100%'
                    height='160%'
                />
        </div>
    )
}

export default ProductsChart