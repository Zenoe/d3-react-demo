import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import XPadBox from '@/components/XPadBox'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root:props=>{
    return(
      {
        width: props.width,
        display: 'flex',
        backgroundColor: theme.palette.background.secondary,
        borderRadius:4,
      }
    )
  },
  keyText: props=>{
    return (
      {
        flexGrow: 1,
        fontSize: props.keyTextFont || '12px',
        opacity: '60%',
        wordBreak: 'keep-all',
      }
    )
  },
  valueText: props =>{
    return (
      {
        textAlign: 'right',
      }
    )
  }

}));

const KVDiv=(props)=>{
  const {keyText, value} = props;
  const cs = useStyles(props);
  return (
    <XPadBox className={cs.root}>
      <Box className={cs.keyText}><Typography>{keyText}</Typography></Box>
      <Box className={cs.valueText}><Typography variant="caption">{value}</Typography></Box>
    </XPadBox>
  )
}

KVDiv.propTypes={
  keyText: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  // width: PropTypes.string,
}

KVDiv.defaultProps = {
  value: 0,
  // width: '100%',
}

export default KVDiv;
