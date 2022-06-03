import { render, screen, waitFor } from "@testing-library/react";
import Card from "./index";

describe("Card Component", () => {
  test("Testa card com Hello Test", async () => {
    const { container } = render(
        <Card>
            Hello test
        </Card>
    );
    expect(container.getElementsByClassName("cardContainer").length).toBe(1);
    expect(container.getElementsByClassName("cardText").length).toBe(1);
    expect(screen.getAllByText("Hello test").length).toBe(1);
  });

});
