export enum EJobType {
  FIXED = "FIXED",
  HOURLY = "HOURLY",
}

export enum EJobStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  FILLED = "FILLED",
}

export enum EApplicationStatus {
  PENDING = "PENDING",
  REVIEWED = "REVIEWED",
  SHORTLISTED = "SHORTLISTED",
  REJECTED = "REJECTED",
  HIRED = "HIRED",
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

export type TJobApplication = {
  id: string;
  jobId: string;
  freelancerId: string;
  coverNote: string;
  status: EApplicationStatus;
  aiMatchScore?: number;
  aiNote?: string;
  proposedBudget: number;
};
