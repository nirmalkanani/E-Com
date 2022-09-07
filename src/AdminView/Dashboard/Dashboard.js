import React, { useState } from 'react'
import ProductsChart from '../DashbordCharts/ProductsChart'

const Dashboard = () => {
  return (
    <div className='container-fluid py-5'>
      <div className="row ms-2">
        <div className="col-lg-6">
          <div className="products-chart">
            <ProductsChart/>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  )
}

export default Dashboard