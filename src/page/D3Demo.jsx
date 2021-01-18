import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Phyllotaxis from '@/components/d3/phyllotaxis'
import BasicLine from '@/components/d3/line'
import BasicCurveLine from '@/components/d3/curveline'
import BasicAxis from '@/components/d3/axis'
import BasicArea from '@/components/d3/area'
import ScalePoint from '@/components/d3/scalepoint'
import BasicChart from '@/components/d3/chart'
import ForceLayout from '@/components/d3/forcelayout'
import ForceSimulation from '@/components/d3/forceSimulation'
import JsonCircle from '@/components/d3/json/circle'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cellBorder:{
    '&>div':{
    border: "1px solid"
    }
  },
}));

const D3Deom=(props)=>{
  const cs = useStyles();

  const gridRef = useRef(null)
  const [gridH, setGridH] = useState(undefined)
  const [gridW, setGridW] = useState(undefined)
  const WithPaper = (Comp)=>(
    <Paper className={cs.paper}>
      <Comp width={gridW} height={gridH} />
    </Paper>
  )

  const demos = [
    BasicCurveLine,
    BasicAxis,
    BasicArea,
    ScalePoint,
    BasicChart,
    ForceLayout,
    ForceSimulation,
    JsonCircle,
    Phyllotaxis,
  ]

  const renderDemos = (DemoArray)=>{
    return DemoArray.map((Demo, i)=>(
      <Grid key={i} item sm={4} xs={12}>
        {WithPaper(Demo)}
      </Grid>
    ))
  }

  useEffect(()=>{
    if(gridRef.current){
      setGridW(gridRef.current.clientWidth)
      setGridH(gridRef.current.clientHeight)
    }
  }, [gridRef])
  function FormRow() {
    return (
      <>
        <Grid item sm={4} xs={12}>
          <Paper ref={gridRef} className={cs.paper}>
            <BasicLine width={gridW} height={gridH} />
          </Paper>
        </Grid>
        {renderDemos(demos)}
      </>
    );
  }

  return(
    <div className={cs.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1} className={cs.cellBorder}>
          <FormRow />
        </Grid>
      </Grid>
    </div>)
}

export default D3Deom;
