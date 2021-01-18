import React from 'react';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({

}));
const SectionHeader=({name})=>{
  const cs = useStyles();
  return (
    <Box my={1}><Typography variant="h1">{name}</Typography></Box>
  )
}

export default SectionHeader;
