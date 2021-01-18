import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import CenterFlexBox from '@/components/CenterFlexBox'
// import {LightenDarkenColor} from '@/util/utils'
// import { green } from '@material-ui/core/colors';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import PrimaryCheckbox from '@/components/PrimaryCheckbox'

const useStyles = makeStyles((theme)=>({
  root:props=>{
    return(
      {
        backgroundColor: theme.palette.background.secondary,
      }
    )
  },
  acText:{
    flexGrow: 1,
    color: '#000000',
    fontSize: '9px',
    opacity: '40%',
  },
  macText:{
    fontWeight: 500,
    fontSize:12,
    flexGrow: 1,
  },
  infoText: props=>{
    return({
      color:'red'
    })
  }
}));

const CheckBoxText=(props)=>{
  // const [checked, setChecked] = React.useState(true);
  const {handleChange, checked, mac, name, infoText} = props;

  const cs = useStyles(props);
  return (
    <CenterFlexBox className={cs.root}>
      <PrimaryCheckbox
        inputProps={{mac}}
        checked={checked}
        onChange={handleChange}
        /* inputProps={{ 'aria-label': 'primary checkbox' }} */
      />
      <Box className={cs.acText}>AC</Box>
      <Box className={cs.macText}>{mac}</Box>
      <Box className={cs.acText}>{name}</Box>
      <Box className={cs.infoText}>{infoText}</Box>
    </CenterFlexBox>

  )
}

CheckBoxText.propTypes={
  // checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  // infoText: PropTypes.string,
  mac: PropTypes.string.isRequired,
}

export default CheckBoxText;
