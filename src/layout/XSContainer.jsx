/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
  root: {
    padding: 0,
    },
}));

const ExpandContainer = withStyles((theme) => ({
  maxWidthXs: {
    maxWidth: '480px',
  },
}))(Container);

const XSContainer=(props)=>{
  const classes = useStyles(props);

  const {comp, ...rest} = props
  const params = rest.match ? rest.match.params : {}
  return (
    <ExpandContainer className={classes.root} maxWidth="lg">
      <props.comp {...params} />
    </ExpandContainer>
  )
}

export default XSContainer;
