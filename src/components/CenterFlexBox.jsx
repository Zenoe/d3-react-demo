import Box from '@material-ui/core/Box';

import {withStyles} from '@material-ui/core/styles';

const CenterFlexBox = withStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
  },
}))(Box);

export default CenterFlexBox;
