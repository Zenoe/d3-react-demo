import React from 'react';
import Box from '@material-ui/core/Box'
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({

  imgdiv:props=>{
    return ({
      backgroundImage:`url(${props.src})`,
      float: 'left',
      width: '24px',
      height: '24px',
      backgroundSize: 'contain'
    })
  },

}));
const ImgDiv = (props)=>{
  const cs = useStyles(props);
  return (
    <Box className={cs.imgdiv} />
  )
}

export default ImgDiv
