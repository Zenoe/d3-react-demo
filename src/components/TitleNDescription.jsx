import React from 'react';
import SectionHeader from '@/components/SectionHeader'

import Typography from '@material-ui/core/Typography';
import {renderOrNot} from '@/util/uiUtil'

import YPadBox from '@/components/YPadBox'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({

  preWrap: {
    whiteSpace: 'pre-wrap'
  }
}));

const TitleNDescription=({title, description})=>{
  const cs = useStyles();

  return (
    <>
      <SectionHeader
        name={title}
      />
      {renderOrNot(description,
                   <YPadBox>
                     <Typography className={cs.preWrap} variant="body1">
                       {description}
                     </Typography>
                   </YPadBox>
                  )}
    </>
  )
}

export default TitleNDescription;
