import React from "react";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("expo-font", () => ({
  useFonts: () => [true],
}));
