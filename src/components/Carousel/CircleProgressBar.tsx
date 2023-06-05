import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircleProgressBar({ rate }: { rate: number }) {
  const pourcentage = Number((rate * 10).toFixed());
  const colorsRate = {
    good: " #14b8a6",
    average: "#f9cb22",
    low: "#aa3838",
  };
  const textRender = pourcentage === 0 ? "NC" : `${pourcentage}%`;

  //Couleur du cercle selon la note
  const pathColor = (rateMovie: number) => {
    if (rateMovie >= 70) {
      return colorsRate.good;
    }
    if (rateMovie < 70 && rateMovie >= 50) {
      return colorsRate.average;
    }
    if (rate < 40) return colorsRate.low;
  };

  return (
    <CircularProgressbar
      styles={buildStyles({
        pathColor: pathColor(pourcentage),
        strokeLinecap: "butt",
        textColor: "white",
        trailColor: "#d6d6d6",
        backgroundColor: "black",
      })}
      background={true}
      value={pourcentage}
      text={textRender}
    />
  );
}

export default CircleProgressBar;
