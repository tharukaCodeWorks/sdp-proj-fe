import { ComplaintPriority } from "../../enum";

export interface ICreateComplaintRequest {
  divisionId: string;
  title: string;
  description: string;
  priority: ComplaintPriority;
}
