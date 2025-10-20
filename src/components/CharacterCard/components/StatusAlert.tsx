import style from "./StatusAlert.module.css";

interface StatusAlertProps {
  status: string;
}

type Status = "Alive" | "Dead" | "unknown";

export const StatusAlert = ({ status }: StatusAlertProps) => {
  const statusStyle = {
    Alive: style.alive,
    Dead: style.dead,
    unknown: style.unknown,
  };

  const statusLabel = {
    Alive: "VIVO",
    Dead: "MUERTO",
    unknown: "DESCONOCIDO",
  };

  return (
    <div className={`${style.statusContainer}`}>
      <div className={`${style.statusLed}  ${statusStyle[status as Status]}`}></div>
      <span>{statusLabel[status as Status]}</span>
    </div>
  );
};
