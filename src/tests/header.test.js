import React from "react"; 
import { render } from "@testing-library/react"
import HeaderComponent from "../components/headerComponent";

describe("HeaderComponent", () => {
    it("render the header correctly", () => {
        const { asFragment } = render(<HeaderComponent />);
        expect(asFragment()).toMatchSnapshot();
    })
})