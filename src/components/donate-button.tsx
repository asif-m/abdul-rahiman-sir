import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin:'10px',
    },
  }),
);


export default function DonateButton({amount, label, color}:any) {
  const classes = useStyles();
  function getPayURL(){
    return `upi://pay?pa=9353573541@ybl&amp;pn=RehmanSir&amp;tid=1208177374&amp;tr=Donor{$amount}&amp;am={$amount}&amp;tn=Help to Build a House&amp;cu=INR&amp;url=https://myteacher.tech/success.php&amp;mode=05&amp;orgid=000000`;
  }
  return (
      <div className ={classes.root}>
        <Button variant="contained" color={color} href={getPayURL()} size={'large'}>
            {label}
        </Button>
    </div>
  );
}
