import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import CenterFlexBox from '@/components/CenterFlexBox'

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ImgDiv from '@/components/ImgDiv'
// import Link  from '@material-ui/core/Link';
import { Link } from "react-router-dom";
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root:{
    padding: theme.spacing(1),
  },

  link:{
    fontWeight: 400,
    opacity: '60%',
    color: theme.palette.text.primary,
  }
}));

const renderCrumbs = (props)=>{
  const {crumbs} = props;
  const cs = useStyles(props);

  return crumbs.map((crumb, idx)=>{
    const imgjsx = crumb.imgsrc ? <ImgDiv src={crumb.imgsrc} /> : null
    if(crumbs.length !== idx+1){
      return(
        <Link key={idx} color="inherit" to={crumb.href} style={{ textDecoration: 'none' }}>
          <CenterFlexBox>
            {imgjsx}
            <Typography variant="h2" className={cs.link}>
              {crumb.title}
            </Typography>
          </CenterFlexBox>
        </Link>
      )
    }
    return (
      <Box key={idx} display='flex'>
        {imgjsx}
        <Box>
          <Typography variant="h2">{crumb.title}</Typography>
        </Box>
      </Box>
    )
  })
}

const BreadCrumbsPiece=(props)=>{
  const cs = useStyles(props);

  return (
    <Box className={cs.root}>
      <Breadcrumbs>
        {renderCrumbs(props)}
      </Breadcrumbs>
    </Box>
  )
}

export default BreadCrumbsPiece;
