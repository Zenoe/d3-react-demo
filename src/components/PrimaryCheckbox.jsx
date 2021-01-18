import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles} from '@material-ui/core/styles';

const PrimaryCheckbox = withStyles(theme => ({
  root: {
    color: theme.palette.primary.light,
    // '&checked': {
    //   color: green[600]
    // },
  },
  checked: {},
}))((props) => <Checkbox color="default" {...props} />);

export default PrimaryCheckbox
