module.exports = ({ platform }, defaults) => {
  return {
    entry: `./index.js`,
    output: {
      ...defaults.output,
      filename: `index.bundle`,
    },
  }
};
