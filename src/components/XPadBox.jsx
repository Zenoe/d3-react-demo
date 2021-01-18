import Box from '@material-ui/core/Box';

import {withStyles} from '@material-ui/core/styles';

const XPadBox = withStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}))(Box);

export default XPadBox;
