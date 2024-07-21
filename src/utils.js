export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};
