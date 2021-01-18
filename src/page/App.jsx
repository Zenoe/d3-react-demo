/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline";
import Store from '@/store'
import { MuiThemeProvider} from '@material-ui/core/styles';
import XSContainer from '@/layout/XSContainer'
import muiTheme from './theme'
import SignIn from '../components/sign/SignIn'
import BasicLine from '../components/d3/line'
import D3Demo from './D3Demo'

const App=()=>{
  return (
    <Store>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Router>
          <Route path='/afu/d3line/:wisName/:appTag' render={(props)=> <XSContainer comp={BasicLine} {...props} />} />
          <Route path='/afu/demo' render={()=> <XSContainer comp={D3Demo} />} />
          {/* <Route exact path='/afu/signin' component={SignIn} /> */}
          <Route exact path='/afu' component={SignIn} />
        </Router>
      </MuiThemeProvider>
    </Store>

  )
}

export default App;
