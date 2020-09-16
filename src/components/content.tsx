import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DonateButtonContainer from './donate-button-container';
import ContentTabs from './content-page/content-tabs';
import ProgressTillNow from './progress-till-now';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        //display: 'flex',
      },
  }),
);


export default function Content() {
  const classes = useStyles();
  return (
    <div className ={classes.root}>
      <ProgressTillNow/>
      <DonateButtonContainer/>
      <ContentTabs/>
    </div>
  );
}
