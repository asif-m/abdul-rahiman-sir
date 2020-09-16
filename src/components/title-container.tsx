import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Image from '../images/home.jpeg'; // Import using relative path


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width:'100vw',
      height:'65vh',
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    title:{
        color: 'white',
        margin: '20px',
        fontSize: '48px',
        textAlign: 'center',
        backgroundColor: 'darkred',
        borderRadius: '10px',
        border: '1px solid darkred',
        padding: '10px',
    }
  }),
);


export default function TitleContainer() {
  const classes = useStyles();
  return (
    <div className ={classes.root}>
        <h1 className={classes.title}>
            Let's help build a house for someone, who helped us build our Career.
        </h1>
    </div>
  );
}
