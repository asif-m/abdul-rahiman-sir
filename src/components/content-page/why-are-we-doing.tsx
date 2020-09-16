import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
  }),
);


export default function WhyAreWeDoing() {
  const classes = useStyles();
  
  return (
      <div className ={classes.root}>
        <h1>Why?</h1>
        <div>
        As you are aware, we have lost one of our Gem from the teaching fraternity. <br/>
        He was our beloved EC/TC HoD, had served PA College of Engineering in various capacities for a very long time, has been instrumental in molding the career of many students, and has been a guide to many of us.<br/><br/>
        What you may not be aware of, is the fact that his new house just began construction, his family currently staying in a rented house, his children are still studying and would find it difficult to pay the rent.<br/><br/>
        On the occasion of Teacher's day, as a goodwill gesture, a gift from the PACE Alumni family, we are beginning a fundraiser. <br/><br/>
        The proceeds of this will go towards constructing his new house and supporting the future of his children.<br/>
        We earnestly appeal to each one of you reading this message to generously contribute towards this fundraiser. <br/>
        </div>

        <h1>How?</h1>
        <div>
          Members of PACE alumni contacted the Late Abdul Rahiman's sir's family. And these the things we agreed upon.<br/>
          - The family have no objection in raising the fund <br/>
          - Collection has to be limited to student fraternity only and should not be in any kind of social media other than Students whatsapp group . <br/>
          - Bank account has been created in one of the Sir's Daughter's name . Signature and document has been collected for the same. <br/>
          - We have seen the site and can share the position if anyone wants to know individually.<br/>
          - Sir's  elder brother was very particular of the fact that Sir had led life full of dignity and self respect and had requested us to make sure it is not compromised in anyway.<br/>
          - <strong>So we decided to do the fundraising only within PACE alumni / Beary's IT alumni, and their families. This should not be circulated outside this group.</strong><br/>
        </div>
    </div>
  );
}
