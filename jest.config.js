export default {
  transform: {},
  // Удаляем extensionsToTreatAsEsm, так как .js уже определен в package.json
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  testEnvironment: 'node'
};