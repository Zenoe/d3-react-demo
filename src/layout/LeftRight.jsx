import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import FlexBox from '@/components/FlexBox';

const useStyles = makeStyles((theme)=> ({
  root: props => {
    const outsideClass = props.cls || {}
    return (
      {
        ...outsideClass,
        '& :first-child':{
          width: '50%',
          // flexGrow: 1,
          marginRight: theme.spacing(props.gap || 1)
        },
        '& :last-child':{
          width: '50%',
        },
      }
    )
  }
}));

const LeftRight=(props)=>{
  const {children} = props;
  if(!children || children.length !== 2){
    console.error('LeftRight should have exactly 2 children');
    return null;
  }
  const classes = useStyles(props);
  return (
    <FlexBox className={classes.root}>
      {children[0]}
      {children[1]}
    </FlexBox>
  )
}

// LeftRight.propTypes={
//   gap: PropTypes.number,
//   lrender: PropTypes.func.isRequired,
//   rrender: PropTypes.func.isRequired,
// }

export default LeftRight
