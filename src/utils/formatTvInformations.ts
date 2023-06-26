export const formatTvStatus = (status: string) => {
  if (!status) return "Non communiqué";

  switch (status) {
    case "Returning Series":
      return "Émission renouvelée";
    case "Ended":
      return "Émission terminée";
    default:
      return "Non communiqué";
  }
};

export const formatTvType = (type: string) => {
  if (!type) return "Non communiqué";

  switch (type) {
    case "Scripted":
      return "Émission scénarisée";
    case "Miniseries":
      return "Émission mini-série";
    default:
      return "Non communiqué";
  }
};
