import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import LabelValue from './label-value';
import GPayIcon from '../../images/gpay.png'; // Import using relative path
import UPIIcon from '../../images/upi.png'; // Import using relative path

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    value:{
      fontWeight: 'bold',
    },
    gPay:{
      backgroundImage: `url(${GPayIcon})`,
      backgroundPosition: 'center', 
      backgroundSize: 'contain', 
      backgroundRepeat: 'no-repeat',
      width: '64px',
      height: '32px',
    },
    upi:{
      backgroundImage: `url(${UPIIcon})`,
      backgroundPosition: 'center', 
      backgroundSize: 'contain', 
      backgroundRepeat: 'no-repeat',
      width: '64px',
      height: '32px',
    }
  }),
);


export default function AccountDetails() {
  const classes = useStyles();
  
  return (
      <div>
        <table>
          <tbody>
          <LabelValue label={'Account number'} value={'50100358785121'}/>
          <LabelValue label={'IFSC'} value={'HDFC0004012'}/>
          <LabelValue label={'Account Name'} value={'Rameeza Daughter of Abdul Rahiman Sir'}/>
          <LabelValue label={'Branch'} value={'HDFC Deralakatte'}/>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={classes.gPay}></div>
  
            </td>
            <td>
              <span className={classes.value}>+91 93535 73541</span>
            </td>
          </tr>
          

          <tr>
            <td>
              <div className={classes.upi}></div>
            </td>
            <td>
              <span className={classes.value}>
            9353573541@ybl
            </span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
  );
}
