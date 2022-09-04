export const getLoadStep = (width) => {
if (width >=1280) {
  return 3;
}
return 2;
};

export const getInitialCount = (width) => {
  if (width >= 1280) {
    return 12;
  }

  if (width >=768) {
    return 8;
  }
  return 5;
};
