import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

function SparkLine({ currentColor, id, type, height, width, data, color }) {

  return (
    <SparklineComponent
      id={id}
      height={height}
      type={type}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName='x'
      yName='yval'
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${yval}',
        trackLineSettings : {
          visible: true
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine