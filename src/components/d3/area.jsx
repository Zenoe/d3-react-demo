import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {xScale, yScale} from '@/util/utils'
import {makeStyles } from '@material-ui/core/styles';

const d3=require('d3');

const useStyles = makeStyles((theme)=>({
  path: {
    fill: '#ddd',
    // stroke: '#222',
  },

}));

const renderarea = (containerid, data)=>{
  const areaGenerator = d3.area()

  const area = areaGenerator(data)
  d3.select(containerid)
    .append('path')
    .attr('d', area);
}

const BasicArea=(props)=>{
  const d3ContainRef = useRef(null)
  const {width, height} = props

  var points = [
    [0, 80],
    [100, 100],
    [200, 30],
    [300, 50],
    [400, 40],
    [500, 80]
  ];

  const cs = useStyles();

  const scaledPoints = points.map(pt=>([xScale(d3,points,width)(pt[0]), yScale(d3, points, height, 10, 30)(pt[1])]))
  useEffect(()=>{
    if(!d3ContainRef){
      return;
    }
    renderarea(d3ContainRef.current, scaledPoints)
  }, [ d3ContainRef.current ])

  return(
    <svg width='100%' height='100%'>
      <g ref={d3ContainRef} className={cs.path} />
    </svg>
  )
}

BasicArea.propTypes={
  width: PropTypes.number,
  height: PropTypes.number,
}

BasicArea.defaultProps = {
  width: 600,
  height: 400,
}

export default BasicArea;
