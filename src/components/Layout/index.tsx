import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex h="100vh" w="100vw" direction="column" alignItems="center">
      <Box>{children}</Box>
    </Flex>
  );
}
