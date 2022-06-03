import { useState, createContext, useEffect } from "react";
import { ProviderProps, FactContextProps } from "./types";
import { useForm } from "react-hook-form";
import api from "../services/api";

const Context = createContext({} as FactContextProps);

function FactProvider({ children }: ProviderProps) {
  const [randomFact, setRandomFact] = useState([]);
  const [facts, setFacts] = useState([]);
  const [lastPage, setLastPage] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function getRandomFact(maxLength: number) {
    const { data } = await api.get(`fact?max_length=${maxLength}`);
    setRandomFact(data);
  }
  async function getFacts(maxLength: number, numberOfFacts: number) {
      const { data } = await api.get(
        `facts?max_length=${maxLength}&limit=${numberOfFacts}`
      );
      setFacts(data.data);
      setLastPage(data.last_page);
  }

  function onSubmitFact(data : {maxLength: number}): void {
    getRandomFact(data.maxLength);
  }

  function onSubmitListOfFacts(data : {maxLength: number, numberOfFacts: number}): void {
    getFacts(data.maxLength, data.numberOfFacts);
  }

  return (
    <Context.Provider
      value={{
        randomFact,
        facts,
        setFacts,
        setRandomFact,
        onSubmitFact,
        onSubmitListOfFacts,
        register,
        handleSubmit,
        errors,
        isSubmitting,
        lastPage,
        setLastPage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, FactProvider };
