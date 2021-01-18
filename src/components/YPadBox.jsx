import Box from '@material-ui/core/Box';

import {withStyles} from '@material-ui/core/styles';

const YPadBox = withStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))(Box);

export default YPadBox;
