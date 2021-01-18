import React, { useEffect, useContext} from 'react';
import { withRouter } from 'react-router-dom'
import { AppBar, Toolbar} from '@material-ui/core';
import logo from '@/assets/images/wis-logo-page.png';
import CenterFlexBox from '@/components/CenterFlexBox'
import { makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';

import {Context} from '@/store'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#001529",
    height: theme.appBar.height,
  },
  img:{
    width: '88px',
    height: '32px',
    backgroundSize: 'contain',
  }
}));

const TitleBar = withRouter((props) => {
  const classes = useStyles();

  const [state] = useContext(Context)

  useEffect(()=>{
    const startTime=new Date().getTime();
    return ()=>{
      let prevPath = ''
      if(props.location.pathname){
        prevPath = props.location.pathname
      }
    }
  }, [])
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
        {/*   <MenuIcon /> */}
        {/* </IconButton> */}
        <CenterFlexBox>
          <img className={classes.img} src={logo} alt='logo' />
        </CenterFlexBox>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
})

export default TitleBar
