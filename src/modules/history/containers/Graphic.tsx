import React from 'react'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryLine, VictoryScatter } from 'victory'

export const Graphic = () => {
  return (
    <VictoryChart>
      <VictoryGroup offset={20} colorScale={'qualitative'}>
        <VictoryBar
          data={[
            { x: 1, y: 6 },
            { x: 2, y: 7 },
            { x: 3, y: 21 },
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 5 },
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 7 },
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
          ]}
        />
      </VictoryGroup>
      <VictoryGroup
        data={[
          { x: 1, y: 6 },
          { x: 2, y: 7 },
          { x: 3, y: 21 },
        ]}
        color="blue"
      >
        <VictoryLine />
        <VictoryScatter size={6} symbol="star" />
      </VictoryGroup>
    </VictoryChart>
  )
}
