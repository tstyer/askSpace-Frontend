beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("expo-font", () => ({
  useFonts: () => [true],
}));

jest.mock("expo-splash-screen", () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));