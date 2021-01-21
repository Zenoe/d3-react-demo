// http://bl.ocks.org/sathomas/1ca23ee9588580d768aa
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {makeStyles } from '@material-ui/core/styles';
import FlexBox from '@/components/FlexBox';

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

let simulation
const render = (containerid, width, height)=>{
  const nodes = [
    { x:   width/3, y: height/4, graph: 0 },
    { x: 2* width/3,y:height/4, graph: 0 },
    { x: width/3,   y: height/2, graph: 1 },
    { x: 2*width/3, y: height/2, graph: 1 },

    { x:   width/3, y: 3*height/4, graph:2 },
    { x: 2*width/3, y: 3*height/4, graph:2 }
  ];

  const links = [
    {source: 0, target: 1},
    {source: 2, target: 3},
    {source: 4, target: 5},
  ]

  const chart = d3.select(containerid)
  chart.selectAll('*').remove();
  simulation = d3.forceSimulation(nodes)
                       .force("link", d3.forceLink(links)
                                        .distance((d,i)=>( width* (i+1)/ 3 ))
                                        // .distance((d,i)=>( 4*width/ 5 ))
                              // the higher strength, the more rapidly it go apart(or colide when given negative strength)
                                        .strength((d,i)=> 0.1*(3-i))
                             )


  // simulation.gravity(0)
  const forceX = d3.forceX().strength(0)
  const forceY = d3.forceY(height / 2).strength(0)
  simulation.force('x', forceX)
            .force('y', forceY)

  simulation.force('charge', d3.forceManyBody().strength(d=>{
    if(d.graph === 0){
      return -3
    }
    return -300
  }))


  const link = chart.selectAll('.link')
                    .data(links)
                    .enter()
                    .append('line').attr('class', 'link')

  const node = chart.selectAll('.node')
    .data(nodes)
    .enter().append('circle')
    .attr('class', 'node')
    .attr('r', '10')
    .attr('cx', d=>d.x)
    .attr('cy', d=>d.y)

  simulation.on('tick', ()=>{
    if(simulation.fullSpeed){
      node.attr('cx', (d)=>  d.x )
          .attr('cy', (d)=>  d.y );
      link
        .attr('x1', (d) =>(d.source.x) )
        .attr('y1', (d) =>(d.source.y) )
        .attr('x2', (d) =>(d.target.x) )
        .attr('y2', (d) =>(d.target.y) );
    }else{
      node.transition().ease(d3.easeLinear).duration(400)
          .attr('cx', (d)=>  d.x )
          .attr('cy', (d)=>  d.y );
      link.transition().ease(d3.easeLinear).duration(400)
        .attr('x1', (d) =>(d.source.x) )
        .attr('y1', (d) =>(d.source.y) )
        .attr('x2', (d) =>(d.target.x) )
        .attr('y2', (d) =>(d.target.y) );
    }

    if(!simulation.fullSpeed){
      // stop tick triggered by tick1
      // advance only one step on click
      simulation.stop()
    }

    if(simulation.slowMotion){
      setTimeout(()=>{simulation.restart()}, 400)
    }

  })

  // simulation.on('end', ()=>{
  //   node.attr('r', width/25)
  //       // .attr('cx', (d) =>(d.x) )
  //       // .attr('cy', (d) =>(d.y) );

  //   // link.attr('x1', (d) =>(d.source.x) )
  //   //     .attr('y1', (d) =>(d.source.y) )
  //   //     .attr('x2', (d) =>(d.target.x) )
  //   //     .attr('y2', (d) =>(d.target.y) );
  // })
}

const ForceLayout=(props)=>{
  const d3ContainRef = useRef(null)
  const {width, height} = props

  const cs = useStyles();
  const tick1 = ()=>{
    // each click cause tick to execute,then stop
    simulation.restart();
  }

  const reset1 = ()=>{
    if(simulation){
      simulation.stop()
    }
    render(d3ContainRef.current, 4*width/5-40, height)
  }
  const play1 = ()=>{
    simulation.fullSpeed = true;
    simulation.restart();
  }

  const slow1 = ()=>{
    simulation.slowMotion = true;
    simulation.restart();
  }

  useEffect(()=>{
    if(!d3ContainRef){
      return;
    }
    render(d3ContainRef.current, 4*width/5-40, height)
  }, [ d3ContainRef.current ])

  return(
    <FlexBox>
      <svg width='80%' height='100%'>
        <g ref={d3ContainRef} className={cs.root} />
      </svg>
      <FlexBox width='20%' height='100%'>
        <div width='5%'>
          <button type='button' id='play' onClick={play1}>play</button>
          <button type='button' id='slow' onClick={slow1}>slow</button>
          <button type='button' id='play' onClick={tick1}>tick</button>
          <button type='button' id='reset' onClick={reset1}>reset</button>
        </div>

      </FlexBox>

    </FlexBox>
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
