import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
  }),
);


export default function ContactUs() {
  const classes = useStyles();
  
  return (
      <div className ={classes.root}>
        We are Alumni of the PA college of Engineering. <br/><br/>

        If you want to be a leader in helping us achieve the fundraising goal (₹50,00,000) we have set, you could join the following whatsApp group : <strong><a href="https://chat.whatsapp.com/J19Rj9ugT2oBFXVzU7qnNv">https://chat.whatsapp.com/J19Rj9ugT2oBFXVzU7qnNv</a></strong> <br/>
    </div>
  );
}
