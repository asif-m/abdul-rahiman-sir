import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DonateButton from './donate-button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     display:'flex',
     alignItems: 'flex-end',
     justifyContent: 'center'
    },
  }),
);


export default function DonateButtonContainer() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <DonateButton amount={200} color={'primary'}/>
        <DonateButton amount={500} color={'primary'}/>
        <DonateButton amount={1000} color={'primary'}/>
        <DonateButton amount={5000} color={'primary'}/>
        <DonateButton amount={10000} color={'primary'}/>
        <DonateButton isOther={true} color={'secondary'}/>     
    </div>
  );
}
