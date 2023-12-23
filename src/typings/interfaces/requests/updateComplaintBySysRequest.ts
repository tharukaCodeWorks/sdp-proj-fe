export interface IUpdateComplaintBySysRequest {
  divisionId: number;
  departmentId: number;
  status: number;
  complaintId: number;
  assignedUserId?: number|string;
}
