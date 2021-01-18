import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {xScale, yScale} from '@/util/utils'
import {makeStyles } from '@material-ui/core/styles';

const d3=require('d3');

const useStyles = makeStyles((theme)=>({
  path: {
    fill: 'none',
    stroke: '#222',
  },

}));

const rendercurveline = (containerid, data)=>{
  const lineGenerator = d3.line()
                          .curve(d3.curveCardinal)

  const  line = lineGenerator(data)
  d3.select(containerid)
    .append('path')
    .attr('d', line);
}

const BasicLine=(props)=>{
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

  // curve part would overflow without margin
  // const marginTop = 10
  // const marginBottom = 30

  const scaledPoints = points.map(pt=>([xScale(d3,points,width)(pt[0]), yScale(d3, points, height, 10, 30)(pt[1])]))
  useEffect(()=>{
    if(!d3ContainRef){
      return;
    }
    rendercurveline(d3ContainRef.current, scaledPoints)
  }, [ d3ContainRef.current ])

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
