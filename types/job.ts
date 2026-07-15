export enum EJobType {
  FIXED = "FIXED",
  HOURLY = "HOURLY",
}

export enum EJobStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  FILLED = "FILLED",
}

export type TJob = {
  id: string;
  employerId: string;
  title: string;
  description: string;
  skillsRequired: string[] | string;
  budget: number;
  jobType: EJobType;
  status: EJobStatus;
  aiEnhanced: boolean;
};
