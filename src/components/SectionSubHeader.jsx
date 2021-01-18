import React from 'react';
import Box from '@material-ui/core/Box';

import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root:{
    fontWeight: 400,
    opacity: '60%',
    fontSize: theme.font.size.subTitle,
  }
}));
const SectionSubHeader=({name})=>{
  const cs = useStyles();
  return (
    <Box my={1} className={cs.root}>{name}</Box>
  )
}

export default SectionSubHeader;
