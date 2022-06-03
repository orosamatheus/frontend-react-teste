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
import { useContext } from "react";
import { Context } from "../../contexts/fact";

export default function Form({ isListOfFacts }: FormProps) {
  const {
    handleSubmit,
    onSubmitFact,
    onSubmitListOfFacts,
    register,
    isSubmitting,
  } = useContext(Context);

  const submitFunction = isListOfFacts
    ? handleSubmit(onSubmitListOfFacts)
    : handleSubmit(onSubmitFact);

  return (
    <form className="form" data-testid="submitForm" onSubmit={submitFunction}>
      <Flex className="box" gap="5" justify="center" align="center">
        <FormControl>
          <FormLabel htmlFor="maxLength">Tamanho do fato: </FormLabel>
          <NumberInput className="numberInput">
            <NumberInputField
              min={0}
              data-testid="factField"
              name="maxLength"
              id="maxLength"
              {...register("maxLength")}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        {isListOfFacts ? (
          <FormControl>
            <FormLabel htmlFor="numberOfFacts">Quantidade de fatos: </FormLabel>
            <NumberInput className="numberInput">
              <NumberInputField
                data-testid="factsField"
                min={0}
                id="numberOfFacts"
                name="numberOfFacts"
                {...register("numberOfFacts")}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        ) : null}
      </Flex>
      <Flex justify="center" className="box">
        <Button
          className="button"
          colorScheme="twitter"
          variant="solid"
          type="submit"
          mt={4}
          size="lg"
          isLoading={isSubmitting}
        >
          Buscar
        </Button>
      </Flex>
    </form>
  );
}
