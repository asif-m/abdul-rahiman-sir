import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
    },
    value:{
        fontWeight: 'bold',
    }
  }),
);


export default function LabelValue({label, value}:any) {
  const classes = useStyles();
  
  return (
      <tr>
          <td>
            <span className={classes.label}>{label}:</span>
            </td>
            <td>
            <span className={classes.value}>{value}</span>
            </td>
        </tr>     
  );
}
