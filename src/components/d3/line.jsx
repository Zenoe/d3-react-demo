import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {makeStyles } from '@material-ui/core/styles';

const d3=require('d3');

const useStyles = makeStyles((theme)=>({
  path: {
    fill: 'none',
    stroke: '#222',
  },

}));

const renderline = (containerid, data, width, height)=>{
  const xScale = d3.scaleLinear().domain([0,data.length]).range([0,width])
  const yScale = d3.scaleLinear().domain([0,d3.max(data, d=>d.value)]).range([height,0])
  const lineGenerator = d3.line()
                          .x(function(d,i){
                            return xScale(i)
                          })
                          .y(function(d){
                            return yScale(d.value)
                          })



  const  line = lineGenerator(data)
  d3.select(containerid)
  // .append('svg')
  // .attr("width", width)
  // .attr("height", height)
  // .append('g')
  // .attr("transform", "translate(20,0)")
    .append('path')
  // .attr('fill', 'none')
  // .attr('stroke', '#999')
    .attr('d', line);
}

const BasicLine=(props)=>{
  const d3ContainRef = useRef(null)
  const {width, height} = props
  const data = [
    {value: 10},
    {value: 50},
    {value: 30},
    {value: 40},
    {value: 20},
    {value: 70},
    {value: 50}
  ]

  const cs = useStyles();

  useEffect(()=>{
    if(!d3ContainRef){
      return;
    }
    renderline(d3ContainRef.current, data, width, height)
  }, [ d3ContainRef.current ])

  // console.log('wh:', width, height);
  return(
    <svg width='100%' height='100%'>
      <g ref={d3ContainRef} className={cs.path} />
    </svg>
  )
}

BasicLine.propTypes={
  width: PropTypes.number,
  height: PropTypes.number,
}

BasicLine.defaultProps = {
  width: 600,
  height: 400,
}

export default BasicLine;
