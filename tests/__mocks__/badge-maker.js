module.exports = {
  makeBadge: jest.fn((format) => `<svg>${format.label}: ${format.message}</svg>`)
};