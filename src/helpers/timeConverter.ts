export const timeConverter = (fullMinutes: number) => {
  const hours = Math.floor(fullMinutes / 60);
  const minutes = fullMinutes % 60;

  if(hours === 0) {
    return `${minutes} min`
  } else {
    return `${hours} godz. ${minutes} min`;
  }
};