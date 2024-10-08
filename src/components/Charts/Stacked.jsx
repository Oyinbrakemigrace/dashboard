import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryYAxis, stackedPrimaryXAxis } from '../../data/dummy'

function Stacked({ width, height }) {
  return (
    <ChartComponent
      width={width}
      height={height}
      id='charts'
      chartArea={{ border: { width: 0 } }}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {
          stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked