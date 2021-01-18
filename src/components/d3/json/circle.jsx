import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import FlexBox from '@/components/FlexBox';
import {makeStyles } from '@material-ui/core/styles';

import jsondata from './data.json'

const d3=require('d3');

const useStyles = makeStyles((theme)=>({
  path: {
    stroke: '#222',
  },

}));

// drag data object use x, y property
// draggable object should position at where its x,y property indicate to be properly dragged
// in this case, abnormal things happen when dragging any circle
// cause the circles do not stay at the normal place required by dd convention
const drag = ()=>{
  function dragstarted(event, d) {
    console.log('dragstarted', event, d);
    d3.select(this).raise().attr("stroke", "black");
  }

  function dragged(event, d) {
    d3.select(this).attr("cx", d.x = event.x).attr("cy", d.y = event.y);
  }

  function dragended(event, d) {
    d3.select(this).attr("stroke", null);
  }

  return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
}
const render = (containerid, nodes, width, height)=>{
  const chart = d3.select(containerid)
  // d3.json(jsonfile, (json)=>{

  // const ele = chart.selectAll("g circle")
  // or
  const ele = chart.selectAll("g")
                   .data(nodes)
  const xScale = d3.scaleLinear().domain(d3.extent(nodes,(d=>d.x))).range([0, width/2 - d3.max(nodes, d=>d.r)])

  const eleEnter = ele.enter().append("g").attr("transform", d=>(`translate(${xScale(d.x)}, ${height/2})`))

  const rScale = d3.scaleLinear().domain(d3.extent(nodes,(d=>d.r))).range([10, height/8])
  eleEnter.append('circle')
          .attr('r', d=>rScale(d.r))
          .attr('stroke', 'none')
          .attr('fill', 'purple')
          .call(drag())

  eleEnter.append('text').attr('dx', d=>(-2)).text(d=>d.label)
}

const renderForcedBall = (containerid, width, height) => {
  const chart = d3.select(containerid)
  const node = [{'x': 225, 'y': 100, 'id': 'first'}]
  const simulation = d3.forceSimulation(node);

  const dragstarted = (e, d)=> {
    simulation.restart();
    simulation.alpha(1.0);
    d.fx = e.x;
    d.fy = e.y;
  }
  const dragged = (e, d)=>{
    d.fx = e.x;
    d.fy = e.y;
  }
  const dragended = (e, d)=>{
    d.fx = null
    d.fy = null
    simulation.alphaTarget(0.1)
  }

  simulation.force('xAxis', d3.forceX(width/2))
  simulation.force('yAxis', d3.forceY(height/2))

  const circleNode = chart.selectAll('circle').data(node)
       .enter().append('circle')
       .attr('r', 30).attr('cx', width/2).attr('y', height/2)
       .attr('fill', 'black').attr('opacity', 0.3)
       .call(d3.drag()
               .on('start', dragstarted)
               .on('drag', dragged)
               .on('end', dragended))

  function ticked(){
    circleNode.attr("cx", d=>(d.x))
              .attr("cy", d=>(d.y))
  }

 simulation.on("tick",ticked);
}

const CircleText=(props)=>{
  const d3ContainRef = useRef(null)
  const d3ContainRef1 = useRef(null)

  const {width, height} = props

  useEffect(()=>{
    if(!d3ContainRef){
      return;
    }
    // render(d3ContainRef.current, 'data.json')
    render(d3ContainRef.current, jsondata.nodes, width, height)
  }, [ d3ContainRef.current ])

  useEffect(()=>{
    if(!d3ContainRef1){
      return;
    }
    renderForcedBall(d3ContainRef1.current, width/2, height)
  }, [ d3ContainRef1.current ])

  return(
    <FlexBox>
      <svg ref={d3ContainRef} width='50%' height='100%' />
      <svg ref={d3ContainRef1} width='50%' height='100%' />
    </FlexBox>
  )
}

CircleText.propTypes={
  width: PropTypes.number,
  height: PropTypes.number,
}

CircleText.defaultProps = {
  width: 600,
  height: 400,
}

export default CircleText;
