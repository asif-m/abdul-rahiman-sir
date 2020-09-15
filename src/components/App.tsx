import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TitleContainer from './title-container';
import DonateButtonContainer from './donate-button-container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width:'100vw',
      height:'100vh',
    },
  }),
);


export default function App() {
  const classes = useStyles();
  return (
    <div className ={classes.root}>
      <TitleContainer/>
      <DonateButtonContainer/>
    </div>
  );
}
