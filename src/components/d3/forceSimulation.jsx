import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {makeStyles } from '@material-ui/core/styles';

const d3=require('d3');

const useStyles = makeStyles((theme)=>({
  root:{
      '&>.node': {
        fill: '#ccc',
        stroke: '#aad',
        strokeWidth: 2,
      },

      '&>.link': {
        stroke: '#777',
        strokeWidth: 2,
      }
  }
}));

const render = (containerid, width, height)=>{
  const roleScale = d3.scaleOrdinal()
                    .range(["#75739F", "#41A368", "#FE9922"])
  // const sampleData = d3.range(100).map((d,i) => ({r: 10 - i * .5}))
  const sampleData = d3.range(10).map(() => ({r: 2, value: 200 + d3.randomNormal()() * 50}))

  const manyBody = d3.forceManyBody().strength(10)
  const center = d3.forceCenter().x(width/2).y(height/2)

  const simulation = d3.forceSimulation(sampleData)
  simulation.force("charge", manyBody)
     .force("center", center)
     .nodes(sampleData)
     .on("tick", updateNetwork)
     .force("collision", d3.forceCollide(d => d.r))
     .force("y", d3.forceY(100))
     .force("x", d3.forceX(d=>d.value).strength(3))
  d3.select(containerid)
    .selectAll("circle.force")
    .data(sampleData)
    .enter()
    .append("circle")
    .classed("force", true)
    .style("fill", (d, i) => roleScale(i))
    .attr("r", d => d.r)
  function updateNetwork() {
    d3.selectAll("circle.force")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
  }
}

const ForceLayout=(props)=>{
  const d3ContainRef = useRef(null)
  const {width, height} = props

  const cs = useStyles();

  useEffect(()=>{
    if(!d3ContainRef){
      return;
    }
    render(d3ContainRef.current, width-40, height)
  }, [ d3ContainRef.current ])

  return(
    <svg width='100%' height='100%'>
      <g ref={d3ContainRef} className={cs.root} />
    </svg>
  )
}

ForceLayout.propTypes={
  width: PropTypes.number,
  height: PropTypes.number,
}

ForceLayout.defaultProps = {
  width: 600,
  height: 400,
}

export default ForceLayout;
