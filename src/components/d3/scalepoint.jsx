import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {makeStyles } from '@material-ui/core/styles';

const d3=require('d3');

const useStyles = makeStyles((theme)=>({
  path: {
    fill: 'orange'
  },

}));

const render = (containerid, data, width, height)=>{
  const pointScale = d3.scalePoint()
                          .domain(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'])
                          .range([0, width])

  d3.select(containerid)
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', d=>pointScale(d.day))
    .attr('cy', height/2)
    .attr('r', 24)
    .append('text')
    .text(d=>d.value)
    .attr('dx', -10)//positions text towards the left of the center of the circle
    .attr('dy',4)
}

const ScalePoint=(props)=>{
  const d3ContainRef = useRef(null)
  const {width, height} = props

  var points = [
    {day : 'Mon', value: 10},
    {day : 'Tue', value: 40},
    {day : 'Wed', value: 30},
    {day : 'Thu', value: 60},
    {day : 'Fri', value: 30}
  ];

  const cs = useStyles();

  useEffect(()=>{
    if(!d3ContainRef){
      return;
    }
    render(d3ContainRef.current, points, width-40, height)
  }, [ d3ContainRef.current ])

  return(
    <svg width='100%' height='100%'>
      <g ref={d3ContainRef} className={cs.path} />
    </svg>
  )
}

ScalePoint.propTypes={
  width: PropTypes.number,
  height: PropTypes.number,
}

ScalePoint.defaultProps = {
  width: 600,
  height: 400,
}

export default ScalePoint;
