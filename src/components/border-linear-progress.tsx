import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 25,
      borderRadius: 15,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 15,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);

  export default BorderLinearProgress;