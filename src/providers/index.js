import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";

export const AppProvider = ({ children }) => {
  return (
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
  );
};
