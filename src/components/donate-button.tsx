import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {getCurrencyFormatter} from '../services/format-helper';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin:'10px',
    },
  }),
);


export default function DonateButton({amount, color, isOther}:any) {
  const classes = useStyles();
  function getPayURL(){
    if(isOther ){
      return 'upi://pay?pa=9353573541@ybl&pn=RehmanSir&tid=2073094533&tr=AnyAmount&tn=Help to Build a House&cu=INR&url=https://myteacher.tech/success.php&mode=05&orgid=000000';  
    }
    return 'upi://pay?pa=9353573541@ybl&pn=RehmanSir&tid=1845809089&tr=Donor'+amount+'&am='+amount+'&tn=Help to Build a House&cu=INR&url=https://myteacher.tech/success.php&mode=05&orgid=000000';
  }
  function getCurrency(){
    if(isOther ){
      return 'Other';
    }
    return getCurrencyFormatter(amount);
  }
  return (
      <div className ={classes.root}>
        <Button variant="contained" color={color} href={getPayURL()} size={'large'}>
        {getCurrency()}
        </Button>
    </div>
  );
}
