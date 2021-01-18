import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import FlexBox from '@/components/FlexBox';
import List from '@material-ui/core/List';
import {makeStyles } from '@material-ui/core/styles';

const d3=require('d3');

const useStyles = makeStyles((theme)=>({
  root: {
    // fill: 'orange'
      "&>.bar":{
      fill: '#4f009e'
    },
    "&>.label":{
      fill: '#4f009e'
    }
  },
  List: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '&>li':{
      border: '1px solid',
      borderRadius: '4px',
      marginBottom: '4px',
      padding: '4px',
    }
  },

}));

const MARGINS = { top: 20, bottom: 40 }
let x
let y

const renderChart = (containerid, data, width, height)=>{
  const chart = d3.select(containerid)
  chart .selectAll('.bar')
        .data(data, d=>d.id)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.value))
        .attr('x', d=>x(d.region))
        .attr('y', d=>y(d.value)-MARGINS.bottom)

  chart.selectAll('.label')
       .data(data, d=>d.id).enter().append('text').text(d=>d.value)
    .attr('x', d=>x(d.region) + x.bandwidth() / 2)
    .attr('y', d=>y(d.value) - MARGINS.bottom)
    .attr('text-anchor', 'middle')
    .classed('label', true)

  // chart.exit().remove()
  chart.selectAll('.bar').data(data, d=>d.id).exit().remove()
  chart.selectAll('.label').data(data, d=>d.id).exit().remove()
}

const render = (containerid, data, width, height)=>{
  x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
  y = d3.scaleLinear().range([ height, MARGINS.bottom+ MARGINS.top ]);
  x.domain(data.map(d=>d.region))
  y.domain([ 0, d3.max(data, d=>d.value) ])

  const chart = d3.select(containerid)
  renderChart(containerid, data, width, height)

  chart.append('g').
    call(d3.axisBottom(x).tickSizeOuter(0)).
    attr('color', '#4f0093').
    attr('transform', `translate(0, ${height - MARGINS.bottom})`)
}

var DUMMY_DATA = [
    {id: 'd1' , region: 'usa', value: 40},
    {id: 'd2' , region: 'india', value: 30},
    {id: 'd3' , region: 'china', value: 50},
    {id: 'd4' , region: 'germany', value: 60},
  ];

let selectedData = DUMMY_DATA
let unselectedIds = []
const renderDataItem = (containerid, chartContainerid,  data, width, height )=>{
  const listItems = d3.select(containerid)
                      .selectAll('li')
                      .data(data)
                      .enter()
                      .append('li')
  listItems.append('span').text(d=>d.region)
  listItems.append('input').attr('type', 'checkbox').attr('checked', true)
           .on('change', ( e, d )=>{
             if(unselectedIds.indexOf(d.id) === -1){
               unselectedIds.push(d.id)
             }else{
               unselectedIds = unselectedIds.filter(id=>id !== d.id)
             }
             selectedData = DUMMY_DATA.filter(dd=>unselectedIds.indexOf(dd.id) === -1)
             renderChart(chartContainerid, selectedData, width, height)
           })
}

const BasicChart=(props)=>{
  const d3ContainRef = useRef(null)
  const d3ContainRef1 = useRef(null)
  const {width, height} = props

  const cs = useStyles();

  useEffect(()=>{
    if(!d3ContainRef){
      return;
    }
    render(d3ContainRef.current, DUMMY_DATA, ( width-40 ) / 2, height)
  }, [ d3ContainRef.current ])

  useEffect(()=>{
    if(!d3ContainRef){
      return;
    }
    renderDataItem(d3ContainRef1.current, d3ContainRef.current, DUMMY_DATA, width, height)
  }, [ d3ContainRef1.current ])

  return(
    <FlexBox>
      <svg width='50%' height='100%'>
        <g ref={d3ContainRef} className={cs.root} />
      </svg>

      <div width='50%' height='100%'>
        <List ref={d3ContainRef1} className={cs.List} />
      </div>
    </FlexBox>
  )
}

BasicChart.propTypes={
  width: PropTypes.number,
  height: PropTypes.number,
}

BasicChart.defaultProps = {
  width: 600,
  height: 400,
}

export default BasicChart;
