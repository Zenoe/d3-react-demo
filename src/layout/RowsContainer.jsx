import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
  root: props => (
    {
    '& > *':{
      marginBottom: theme.spacing(1),
      borderRadius: 4,
      border: props.border || '1px solid transparent',
    },
    // todo
    // '& > div:hover':{
    //   border: props.hoverBorderStyles || 'inherit',
    // }
  }
  )
}));

const RowsContainer=(props)=>{
  const classes = useStyles(props);
  const {children} = props;
  return (
    <Box className={classes.root}>
      {children}
    </Box>
  )
}

export default RowsContainer
