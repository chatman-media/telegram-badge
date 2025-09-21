// Setup file for Jest tests
afterEach(() => {
  jest.clearAllTimers();
  jest.restoreAllMocks();
});

// Export empty object to ensure .d.ts file is not empty
export {};
