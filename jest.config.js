module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
