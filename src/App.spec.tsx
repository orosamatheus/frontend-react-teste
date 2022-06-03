import App from "./App";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { FactProvider } from "./contexts/fact";
import api from "./services/api";

jest.mock("./services/api");

describe("Página Principal", () => {
  test("Layout Inicial", () => {
    const { container } = render(
      <FactProvider>
        <App />
      </FactProvider>
    );
    expect(container.getElementsByClassName("tabs").length).toBe(1);
    expect(container.getElementsByClassName("tabList").length).toBe(1);
    expect(container.getElementsByClassName("tab").length).toBe(2);
    expect(container.getElementsByClassName("tabPanels").length).toBe(1);
    expect(container.getElementsByClassName("tabPanel").length).toBe(2);
  });

  test("Ação do botão para layout sem lista", async () => {
    render(
      <FactProvider>
        <App />
      </FactProvider>
    );

    const input = screen.getAllByTestId("factField")[1];
    fireEvent.input(input, { target: { value: 20 } });

    const form = screen.getAllByTestId("submitForm")[0];
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

  test("Ação do botão para layout com lista", async () => {
    render(
      <FactProvider>
        <App />
      </FactProvider>
    );

    const input = screen.getAllByTestId("factField")[1];
    fireEvent.input(input, { target: { value: 20 } });

    const numberOfFactsInput = screen.getByTestId("factsField");
    fireEvent.input(numberOfFactsInput, { target: { value: 5 } });

    const form = screen.getAllByTestId("submitForm")[1];
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
          last_page: 2,
        },
      })
    );
    await act(() => Promise.resolve());

    const getSpy = jest.spyOn(api, "get");

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(getSpy).toHaveBeenCalledWith("facts?max_length=20&limit=5");
  });

});
