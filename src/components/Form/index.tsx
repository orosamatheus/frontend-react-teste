import {
  Flex,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";

import { FormProps } from "./types";

export default function Form({ isListOfFacts }: FormProps) {
  return (
    <form>
      <Flex gap="5" justify="center" align="center">
        <FormControl>
          <FormLabel>Tamanho do fato: </FormLabel>
          <NumberInput min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        {isListOfFacts ? (
          <FormControl>
            <FormLabel>Quantidade de fatos: </FormLabel>
            <NumberInput min={0}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        ) : null}
      </Flex>
      <Flex justify="center">
        <Button colorScheme='twitter' variant="solid" type="submit" mt={4} size="lg">
          Buscar
        </Button>
      </Flex>
    </form>
  );
}
