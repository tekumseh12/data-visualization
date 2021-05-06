import React from 'react';
import WordCloud from 'react-d3-cloud';
import * as d3 from 'd3';
import { BarChart } from "react-d3-components";
import AnimatedBar from "./AnimatedBarHooks";
import AnimatedPieSVG from "./AnimatedPieSVG";

class Charts extends React.Component {
  constructor(props){
    super(props)
    this.state={content: ""};
    this.dataat = [];
    this.datals = [];
    this.datafurl = [];
    this.databldom = [
      {

        values: [
          { x: "", y:  0 },
          { x: "", y: 0 },
          { x: "", y:  0 }
        ]
      }
    ];

    this.fontSizeMapper = word => Math.log2(word.value) * 5;
    this.rotate = word => word.value % 360;
  }
  chartat(src){
    var a = JSON.parse(src)


    for (let i = 0;i<a[0].length;i++){
      this.dataat.push({});
      this.dataat[i]["text"]=a[0][i].text
      this.dataat[i]["value"]= a[0][i].count

    }

  }
  chartls(src){
    var a = JSON.parse(src)


    for (let i =0;i<a[1].length;i++){
      this.datals.push({});
      this.datals[i]["date"]=a[1][i].text
      this.datals[i]["value"]= a[1][i].count
    }

  }
  chartfurl(src){
    var a = JSON.parse(src)
    for (let i =0;i<a[2].length;i++){
      var b=a[2][i].count1
      if (b >= 50){
        this.datafurl.push({})

        this.datafurl[this.datafurl.length-1]["date"]=a[2][i].text
        this.datafurl[this.datafurl.length-1]["value"]= a[2][i].count1
      }
    }
  }
  chartbldom(src){
    var a = JSON.parse(src)


    console.log(this.databldom)
    for (let i =0;i<a[3].length;i++){


      this.databldom[0].values[i]["x"]=a[3][i].range
      this.databldom[0].values[i]["y"]= a[3][i].count


    }

  }
  callAPI() {
    fetch("http://localhost:9000/test")
      .then(src=>src.text())
      .then(src=>{this.chartat(src);this.chartls(src);this.chartfurl(src);this.chartbldom(src);console.log(1);return src})
      .then(src=>this.setState({content:src}))
      .catch(err=>err)

  }

  componentDidMount(){
    this.callAPI()
  }

  render() {
    return (
      // <div>

      <div>

        <center>
        <WordCloud
          data={this.dataat}
          fontSizeMapper={this.fontSizeMapper}
          rotate={this.rotate}
          width={1250}
          height={1000}
        />
        <AnimatedPieSVG
          data={this.datals}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
        <AnimatedPieSVG
          data={this.datafurl}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />

        <BarChart
          data={this.databldom}
          width={300}
          height={200}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
        />
        </center>
        </div>



    );
  }
}


export default  Charts ;
