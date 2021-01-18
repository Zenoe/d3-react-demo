import React, {Component} from 'react';

const d3=require('d3');

const red = '#eb6a5b';
const blue = '#52b6ca';

const margin = {top: 10, right: 30, bottom: 30, left: 50}
const width = 460 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

class BasicArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      highs: '', // svg path command for all the high temps
      // d3 helpers
      xScale: null,
      yScale: null,
      // lineGenerator: d3.line(),
    };
  }



  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing
  //   const {data} = nextProps;
  //   const {xScale, yScale, lineGenerator} = prevState;

  //   // data has changed, so recalculate scale domains
  //   const timeDomain = d3.extent(data, d => d.date);
  //   const tempMax = d3.max(data, d => d.high);
  //   xScale.domain(timeDomain);
  //   yScale.domain([0, tempMax]);

  //   // calculate line for lows
  //   lineGenerator.x(d => xScale(d.date));
  //   lineGenerator.y(d => yScale(d.low));
  //   const lows = lineGenerator(data);
  //   // and then highs
  //   lineGenerator.y(d => yScale(d.high));
  //   const highs = lineGenerator(data);

  //   return {lows, highs};
  // }

  componentDidMount(){
    d3.csv('https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv',
           (d)=>{
             return {date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value}
           }).then(data=>{
             console.log(data);
             const xScale = d3.scaleTime()
                   .domain(d3.extent(data, function(d) { return d.date; }))
                   .range([ 0, width ]);
             const yScale = d3.scaleLinear()
                       .domain([0, d3.max(data, function(d) { return +d.value; })])
                       .range([ height, 0 ]);

             const highs = d3.area()
                     .x(function(d) { return xScale(d.date) })
                     .y0(yScale(0))
                     .y1(function(d) { return yScale(d.value) })(data)

             // console.log('highs', highs);

             this.xAxis = d3.axisBottom().scale(xScale)
                       .tickFormat(d3.timeFormat('%b'));

             this.yAxis = d3.axisLeft().scale(yScale)
                       .tickFormat(d => `${d}℉`);

             this.setState({
               xScale,
               yScale,
               highs,
             })
           })
  }

  componentDidUpdate() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {

    const {highs} = this.state;
    return (
      <svg width={width} height={height}>
        <path d={highs} fill='#cce5df' stroke={red} strokeWidth='2' />
        <g>
          <g ref='xAxis' transform={`translate(0, ${height - margin.bottom})`} />
          <g ref='yAxis' transform={`translate(${margin.left}, 0)`} />
        </g>
      </svg>
    );
  }
}


export default BasicArea;
