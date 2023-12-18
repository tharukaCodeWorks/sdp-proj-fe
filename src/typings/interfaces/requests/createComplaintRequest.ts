export interface ICreateComplaintRequest {
  divisionId: string;
  title: string;
  description: string;
  priority?: number;
}
