import React  from 'react';
import DateRange from "@material-ui/icons/DateRange";

import { IconButton, InputAdornment } from "@material-ui/core";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import moment from "moment";
import MomentUtils from '@date-io/moment';
import 'moment/locale/zh-cn'


import { makeStyles, } from '@material-ui/core/styles';

/*
 *
 */


const useStyles = makeStyles((theme)=>({
  picker:{
    flexGrow: 1,
    margin: theme.spacing(1)
  },
}));
function MaterialdDateTime({handleDateChange, format, value, type}) {
  // const [selectedDate, handleDateChange] = useState(new Date());
  moment.locale('cn')

  const locale = 'cn'

  const cs = useStyles();
  const renderComp = ()=>{
    const defFormat = format || "yyyy-MM-DD hh:mm:ss"
    // const defValue = value || selectedDate
    const commonprops={
      format: defFormat,
      value,
    }
    if(type === 'date'){
      return (
        <DatePicker
          {...commonprops}
          onChange={handleDateChange}
        />
      )
    }
    if(type === 'time'){
      return (
        <TimePicker
          {...commonprops}
          onChange={handleDateChange}
          /* minutesStep={60} */
        />
      )
    }
    return(
      <DateTimePicker
        className={cs.picker}
        ampm={false}
        disablePast
        /* label="选择日期和小时" */
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <DateRange />
              </IconButton>
            </InputAdornment>
          ),
        }}
        /* inputVariant="outlined" */
        {...commonprops}
        onChange={handleDateChange}
        minutesStep={60}
      />
    )
  }
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={locale}>
      {renderComp()}
    </MuiPickersUtilsProvider>
  );
}

export default MaterialdDateTime;
