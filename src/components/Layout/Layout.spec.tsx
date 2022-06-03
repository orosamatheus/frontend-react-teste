import { render, screen, waitFor } from "@testing-library/react";
import Layout from "./index";

describe("Layout Component", () => {
  test("Testa layout com Hello Test", async () => {
    const { container } = render(
        <Layout>
            Hello test
        </Layout>
    );
    expect(container.getElementsByClassName("layoutContainer").length).toBe(1);
    expect(container.getElementsByClassName("layoutBox").length).toBe(1);
    expect(screen.getAllByText("Hello test").length).toBe(1);
  });

});
