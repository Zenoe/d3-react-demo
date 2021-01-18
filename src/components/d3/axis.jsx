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

function renderXYAxis(containerid,  width, height){
  const margin = ({top: 10, right: 30, bottom: 40, left: 30})
  const svg = d3.select(containerid)
  function renderAxis(scale, orient){
    let axis
    if(orient === 'bottom'){
      axis = d3.axisBottom(scale).ticks(5)
      svg.append("g")
         .attr("transform",  `translate(0,${height - margin.bottom})`)
         .call(axis)
    }else{
      axis = d3.axisLeft(scale).ticks(5)
      svg.append("g")
         .attr("transform",  `translate(${margin.left}, 0)`)
         .call(axis)
    }
  }


  const yScale = d3.scaleLinear()
             .domain([0, 1])
             .range([height - margin.bottom, margin.top])

  const xScale = d3.scaleLinear()
             .domain([0, 1])
             .range([margin.left, width - margin.right])

  const powScale = d3.scalePow().exponent(2).domain([1,16]).range([ margin.left, width-margin.right ])
  // renderAxis(xScale, 'bottom')
  renderAxis(powScale, 'bottom')
  renderAxis(yScale, 'left')

}

const BasicAxis=(props)=>{
  const d3ContainRef = useRef(null)
  const {width, height} = props

  useEffect(()=>{
    if(!d3ContainRef){
      return;
    }
    renderXYAxis(d3ContainRef.current, width, height)
  }, [ d3ContainRef.current ])

  return(
    <svg ref={d3ContainRef} width='100%' height='100%' />
  )
}

BasicAxis.propTypes={
  width: PropTypes.number,
  height: PropTypes.number,
}

BasicAxis.defaultProps = {
  width: 600,
  height: 400,
}

export default BasicAxis;
