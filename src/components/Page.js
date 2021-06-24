import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BdayText from './BdayText'
import Hotpics from './Hotpics'
import Bdaybutton from './Bdaybutton'
import { red } from '@material-ui/core/colors';

export default function CenteredGrid() {


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <BdayText></BdayText>
        </Grid>
        <Grid item xs={5}>
          <Hotpics></Hotpics>
        </Grid>
      </Grid>
    </div>
  );
}