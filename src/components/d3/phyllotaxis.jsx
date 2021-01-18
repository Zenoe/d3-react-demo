import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './container.css'
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
    .append('path')
    .attr('d', line);
}

const Phyllotaxis=(props)=>{
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

  const fsmActual = document.createElement('div');
  fsmActual.setAttribute('id', 'fsm_actual');
  document.body.appendChild(fsmActual);
  const $fsmActual = document.querySelector('#fsm_actual');

  let position = {};
  let size = {};

  const fullScreen = (e)=>{
	  const $this = e.currentTarget.parentNode
	  position = $this.getBoundingClientRect();
	  size = {
		  width: window.getComputedStyle($this).width,
		  height: window.getComputedStyle($this).height
	  }
	  $fsmActual.style.position = "fixed";
	  $fsmActual.style.top = `${position.top}px`
	  $fsmActual.style.left = `${position.left}px`
	  $fsmActual.style.height = size.height;
	  $fsmActual.style.width = size.width;
	  $fsmActual.style.margin = $this.style.margin;
	  $fsmActual.style.transition = '1s';

    setTimeout(function(){
      $fsmActual.innerHTML = $this.innerHTML;
      const classes = $this.classList.value.split(' ');
      for (let i = 0; i < classes.length; i+=1) {
        $fsmActual.classList.add(classes[i]);
      }
      $fsmActual.style.height = '100%';
      $fsmActual.style.width = '100%';
      $fsmActual.style.top = '0';
      $fsmActual.style.left = '0';
      $fsmActual.style.margin = '0';
    }, 1);

    setTimeout(function(){
		  $fsmActual.classList.remove('growing');
		  $fsmActual.classList.add('full-screen')
	  }, 1000);

    document.addEventListener('keyup', function (evt) {
      if (evt.keyCode === 27) {
        exitFullScreen($fsmActual)
      }
    });
    // $fsmActual.addEventListener("click", exitFullScreen);
  }

  const exitFullScreen = (curele)=>{
    const $this = curele
	  $this.style.height = size.height;
	  $this.style.width = size.width;
	  $this.style.top = position.top + 'px';
	  $this.style.left = position.left + 'px';
	  $this.style.margin = '0';
	  $this.classList.remove('full-screen');
	  $this.classList.add('shrinking');

	  setTimeout(function(){
		  while($this.firstChild) $this.removeChild($this.firstChild);
		  const classList = $this.classList;
		  while (classList.length > 0) {
			  classList.remove(classList.item(0));
		  }
		  $this.style = '';;
	  }, 1000);
  }
  useEffect(()=>{

  },[])

  useEffect(()=>{
    if(!d3ContainRef){
      return;
    }
    renderline(d3ContainRef.current, data, width, height)
  }, [ d3ContainRef.current ])

  // console.log('wh:', width, height);
  return(
    <div onDoubleClick={fullScreen}>
      <svg width='100%' height='100%' viewBox={`0 0 ${width} ${height}`}>
        <g ref={d3ContainRef} className={cs.path} />
      </svg>
    </div>
  )
}

Phyllotaxis.propTypes={
  width: PropTypes.number,
  height: PropTypes.number,
}

Phyllotaxis.defaultProps = {
  width: 600,
  height: 400,
}

export default Phyllotaxis;
