import { FC } from "react";

export interface IPriorityLabelProps {
  priority: string;
}

export const PriorityLabel: FC<IPriorityLabelProps> = ({ priority }) => {
  const style = {
    borderRadius: "4px",
    padding: "3px 6px",
    color: "white",
    fontWeight: "bold",
  };

  switch (priority) {
    case "LOW":
      return <span style={{ ...style, backgroundColor: "green" }}>Low</span>;
    case "MEDIUM":
      return (
        <span style={{ ...style, backgroundColor: "orange" }}>Medium</span>
      );
    case "HIGH":
      return <span style={{ ...style, backgroundColor: "red" }}>High</span>;
    case "CRITICAL":
      return (
        <span style={{ ...style, backgroundColor: "purple" }}>Critical</span>
      );
    default:
      return <span style={{ ...style, backgroundColor: "gray" }}>Unknown</span>;
  }
};
