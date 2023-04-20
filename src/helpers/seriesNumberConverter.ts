export const seriesNumberConverter = (seasons: number) => {
  if(seasons === 1) {
    return `${seasons} sezon`
  } else if(seasons > 1 && seasons < 5) {
    return `${seasons} sezony`
  } else {
    return `${seasons} sezonów`
  }
};