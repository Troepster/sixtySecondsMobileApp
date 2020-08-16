import {SalesSteps} from '../enums/app';

export default {
  [SalesSteps.OPEN_CALL]: {
    shortTitle: 'Open Call',
    longTitle: 'Opening a Sales Call',
    behaviour: 'The ability of a representative to set up and create the best possible early engagement with a customer to ensure a successful sales call. Their ability to clearly articulate the purpose and value of their visit and the agenda they are proposing.'
  },
  [SalesSteps.PROBE_WITH_QUESTIONS]: {
    shortTitle: 'Probe with Questions',
    longTitle: 'Probing with Questions',
    behaviour: 'The ability of a representative to craft and utilise a variety of quality probing questions designed to better understand their customers and establish their needs.'
  },
  [SalesSteps.PRESENT_SOLUTIONS]: {
    shortTitle: 'Present Solution',
    longTitle: 'Presenting Solutions',
    behaviour: 'The ability of a representative to effectively articulate and communicate the relevant solutions (through Features & Benefits), that meet the customer\'s specific needs.'
  },
  [SalesSteps.DEAL_WITH_ISSUES]: {
    shortTitle: 'Deal with Issues',
    longTitle: 'Dealing with Issues',
    behaviour: 'The ability of a representative to identify, understand and respond appropriately to an objection raised by a customer.'
  },
  [SalesSteps.CLOSE_AND_GAIN_COMMITMENT]: {
    shortTitle: 'Close and gain commitment',
    longTitle: 'Closing and gaining commitment',
    behaviour: 'The ability of a representative to know when to \'close a call\' and gauge the customers intent to commit.'
  },
  [SalesSteps.GENERAL]: {
    shortTitle: 'General',
    longTitle: 'General',
    behaviour: 'Please provide us with your script in this field.'
  },
}
