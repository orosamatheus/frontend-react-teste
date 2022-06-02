export interface ProviderProps {
    children: React.ReactElement
}

export interface FactContextProps{
    facts: Array;
    setFacts: React.Dispatch<React.SetStateAction<Array>>;
    randomFact: Array;
    setRandomFact:React.Dispatch<React.SetStateAction<Array>>
    onSubmitListOfFacts(data: {maxLength: number, numberOfFacts: number}): void;
    onSubmitFact(data: {maxLength: number}): void;
    handleSubmit: any;
    register: any;
    errors: any;
    isSubmitting: any;
    lastPage: number,
    setLastPage:React.Dispatch<React.SetStateAction<number>>
}
