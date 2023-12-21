import { FC } from "react";
import { ComplaintStatus } from "../../../typings";

export interface IStatusLabelProps {
  children: ComplaintStatus;
}

const style = {
  borderRadius: "4px",
  padding: "3px 6px",
  color: "white",
  fontWeight: "bold",
};

export const StatusLabel: FC<IStatusLabelProps> = ({ children }) => {
  const getLabelStyle = (children: string) => {
    switch (children) {
      case ComplaintStatus.SUBMITTED:
        return { backgroundColor: "#007bff", color: "white" };
      case ComplaintStatus.IN_PROGRESS:
        return { backgroundColor: "#ffc107", color: "black" };
      case ComplaintStatus.RESOLVED:
        return { backgroundColor: "#28a745", color: "white" };
      case ComplaintStatus.CLOSED:
        return { backgroundColor: "#6c757d", color: "white" };
      case ComplaintStatus.REJECTED:
        return { backgroundColor: "#dc3545", color: "white" };
      default:
        return { backgroundColor: "#f8f9fa", color: "black" };
    }
  };

  const labelStyle = getLabelStyle(children);

  return (
    <span
      style={{
        ...labelStyle,
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default StatusLabel;
