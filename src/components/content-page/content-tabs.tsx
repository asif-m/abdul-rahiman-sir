import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {a11yProps, TabPanel} from './tab-panel';
import AccountDetails from './account-details';
import WhyAreWeDoing from './why-are-we-doing';
import ContactUs from './contact-us';
import VerifyTransaction from './verify-transaction';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      minWidth: 200
    },
  }));

  enum CONTENT_TAB_INDEX {
    AccountDetails = 0,
    WhyAreWeDoing =1,
    ContactUs =2,
    VerifyYourTransaction =3
  }
  
export default function ContentTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event:any, newValue:any) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Account details" {...a11yProps(CONTENT_TAB_INDEX.AccountDetails)} />
          <Tab label="Why/How" {...a11yProps(CONTENT_TAB_INDEX.WhyAreWeDoing)} />
          <Tab label="Contact us" {...a11yProps(CONTENT_TAB_INDEX.ContactUs)} />
          <Tab label="Verify your transaction" {...a11yProps(CONTENT_TAB_INDEX.VerifyYourTransaction)} />
        </Tabs>
        <TabPanel value={value} index={CONTENT_TAB_INDEX.AccountDetails}>
          <AccountDetails/>
        </TabPanel>
        <TabPanel value={value} index={CONTENT_TAB_INDEX.WhyAreWeDoing}>
          <WhyAreWeDoing/>
        </TabPanel>
        <TabPanel value={value} index={CONTENT_TAB_INDEX.ContactUs}>
          <ContactUs/>
        </TabPanel>   
        <TabPanel value={value} index={CONTENT_TAB_INDEX.VerifyYourTransaction}>
          <VerifyTransaction/>
        </TabPanel>        
      </div>
    );
  }