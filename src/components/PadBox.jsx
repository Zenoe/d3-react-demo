import Box from '@material-ui/core/Box';

import {withStyles} from '@material-ui/core/styles';

const PadBox = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.primary,
  },
}))(Box);

export default PadBox;
