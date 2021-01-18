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
  const nodes = [
    { x:   width/3, y: height/2 },
    { x: 2*width/3, y: height/2 }
  ];

  const links = [
    {source: 0, target: 1}
  ]

  const chart = d3.select(containerid)
  const simulation = d3.forceSimulation(nodes)
                  .force("link", d3.forceLink(links).distance(width/2))

  const link = chart.selectAll('.link')
                    .data(links)
                    .enter()
                    .append('line').attr('class', 'link')

  const node = chart.selectAll('.node')
    .data(nodes)
    .enter().append('circle')
    .attr('class', 'node')
    .attr('r', '10')

  simulation.on('end', ()=>{
    node.attr('r', width/25)
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });

    link.attr('x1', function(d) { return d.source.x; })
        .attr('y1', function(d) { return d.source.y; })
        .attr('x2', function(d) { return d.target.x; })
        .attr('y2', function(d) { return d.target.y; });
  })
}

const ForceLayout=(props)=>{
  const d3ContainRef = useRef(null)
  const {width, height} = props

  const numNodes = 100;
  const nodes = d3.range(numNodes).map((d,i)=>({radius: Math.random()*25, category: i%3}))

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
