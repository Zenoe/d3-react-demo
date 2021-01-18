import React, {useState, useEffect} from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';


const TempAlert=(props)=>{
  const {timeout,severity, title,text} = props
  const [visible, setVisible] = useState(true)
  useEffect(()=>{
    setVisible(true)

    setTimeout(()=>{
      setVisible(false)
    }, timeout)
  }, [])

  return (
    <Alert style={{display: visible? 'flex' : 'none'}} severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {text}
    </Alert>
  )
}

// todo default props
export default TempAlert;
