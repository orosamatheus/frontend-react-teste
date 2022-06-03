import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { FactProvider } from "../../contexts/fact";
import Form from "./index";
import api from "../../services/api";

jest.mock("../../services/api");

describe("Form Component", () => {
  test("Layout com lista", () => {
    const { container } = render(
      <FactProvider>
        <Form isListOfFacts />
      </FactProvider>
    );
    expect(container.getElementsByClassName("form").length).toBe(1);
    expect(container.getElementsByClassName("box").length).toBe(2);
    expect(container.getElementsByClassName("numberInput").length).toBe(2);
    expect(container.getElementsByClassName("button").length).toBe(1);
  });

  test("Layout sem lista", () => {
    const { container } = render(
      <FactProvider>
        <Form />
      </FactProvider>
    );
    expect(container.getElementsByClassName("form").length).toBe(1);
    expect(container.getElementsByClassName("box").length).toBe(2);
    expect(container.getElementsByClassName("numberInput").length).toBe(1);
    expect(container.getElementsByClassName("button").length).toBe(1);
  });

  test("Ação do botão para layout sem lista", async () => {
    render(
      <FactProvider>
        <Form />
      </FactProvider>
    );

    const input = screen.getByTestId("factField");
    fireEvent.input(input, { target: { value: 20 } });

    const form = screen.getByTestId("submitForm");
    fireEvent.submit(form);

    await waitFor(() => form);

    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            fact: "A cat can jump 5 times as high as it is tall.",
            length: 45,
          },
        ],
      })
    );
    await act(() => Promise.resolve());

    const getSpy = jest.spyOn(api, "get");

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(getSpy).toHaveBeenCalledWith("fact?max_length=20");
  });

  test("Ação do botão para layout com listas", async () => {
    render(
      <FactProvider>
        <Form isListOfFacts/>
      </FactProvider>
    );

    const maxLengthInput = screen.getByTestId("factField");
    fireEvent.input(maxLengthInput, { target: { value: 40 } });

    const numberOfFactsInput = screen.getByTestId("factsField");
    fireEvent.input(numberOfFactsInput, { target: { value: 5 } });

    const form = screen.getByTestId("submitForm");
    fireEvent.submit(form);

    await waitFor(() => form);

    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          data: [
            {
              fact: "A cat can jump 5 times as high as it is tall.",
              length: 40,
            },
            {
              fact: "A cat can jump 5 times as high as it is tall.",
              length: 40,
            },
            {
              fact: "A cat can jump 5 times as high as it is tall.",
              length: 40,
            },
            {
              fact: "A cat can jump 5 times as high as it is tall.",
              length: 40,
            },
            {
              fact: "A cat can jump 5 times as high as it is tall.",
              length: 40,
            },
          ],
          last_page: 2
        },
      })
    );
    await act(() => Promise.resolve());

    const getSpy = jest.spyOn(api, "get");

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(getSpy).toHaveBeenCalledWith("facts?max_length=40&limit=5");
  });
});
