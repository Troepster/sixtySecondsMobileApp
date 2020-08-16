import {SalesSteps} from '../enums/app';

export interface SalesStepsDetails {
  [SalesSteps.GENERAL]: boolean;
  [SalesSteps.OPEN_CALL]: boolean;
  [SalesSteps.PROBE_WITH_QUESTIONS]: boolean;
  [SalesSteps.DEAL_WITH_ISSUES]: boolean;
  [SalesSteps.PRESENT_SOLUTIONS]: boolean;
  [SalesSteps.CLOSE_AND_GAIN_COMMITMENT]: boolean;
}
export type TaskScenario = {
  title: string;
  audience:string;
  situation: string;
  keywords:string;
  salesSteps: SalesStepsDetails;
  allowSalesSteps: boolean;
}

export type TaskScript = {
  [SalesSteps.GENERAL]: string;
  [SalesSteps.OPEN_CALL]: string;
  [SalesSteps.PROBE_WITH_QUESTIONS]: string;
  [SalesSteps.DEAL_WITH_ISSUES]: string;
  [SalesSteps.PRESENT_SOLUTIONS]: string;
  [SalesSteps.CLOSE_AND_GAIN_COMMITMENT]: string;
}

export type Task = {
  id: string;
  scenario: TaskScenario;
  script: TaskScript;
  scenarioCreated: string; // 2020-06-28T05:30:09.516Z
  scenarioUpdated: string; // 2020-06-28T05:30:09.516Z
}
export interface IAppState {
  tasks: Task[]
}
