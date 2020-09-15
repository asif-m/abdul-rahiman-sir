import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //background:'yellow'
    },
  }),
);


export default function DonateButtonContainer() {
  const classes = useStyles();
  return (
    <div className ={classes.root}>

        asif

    </div>
  );
}
