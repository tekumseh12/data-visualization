import React from 'react';
import ReactDOM from 'react-dom';
import { BarChart } from "react-d3-components";
import Charts from './charts';
//
//
// // ReactDOM.render(
// //   <div><ChartAT /><ChartLS /><ChartFURL /><ChartBLd /></div>,
// //   document.getElementById('root')
// // );
// ReactDOM.render(
//   <div><Charts /> ></div>,
//   document.getElementById('root')
// );
// function BarChartContainer() {
//   let data = [
//     {
//
//       values: [
//         { x: "SomethingA", y: 10 },
//         { x: "SomethingB", y: 4 },
//         { x: "SomethingC", y: 3 }
//       ]
//     }
//   ];
//   console.log(data)
//   return (
//     <BarChart
//       data={data}
//       width={400}
//       height={400}
//       margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
//     />
//   );
// }


ReactDOM.render(
    <Charts />,
    document.getElementById('root')
)
