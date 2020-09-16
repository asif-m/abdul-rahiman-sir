import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import BorderLinearProgress from './border-linear-progress';
import FundsData from "../funds-data";
import {getCurrencyFormatter, getPercent} from '../services/format-helper';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        marginLeft:'30px',
        marginRight:'30px',
        marginTop:'20px',
    },
  }),
);


export default function ProgressTillNow() {
  const classes = useStyles();
  const {date, collected, goal} = FundsData;
  const percent  = getPercent(collected, goal);
  return (
      <div className={classes.root}>
          <div>
            Funds collected until {date} : <strong>{getCurrencyFormatter(collected)}</strong> ({percent.toFixed(1)}%)
          </div>
      <div >        
        <BorderLinearProgress variant="determinate" value={percent} />
    </div>
    </div>
  );
}
