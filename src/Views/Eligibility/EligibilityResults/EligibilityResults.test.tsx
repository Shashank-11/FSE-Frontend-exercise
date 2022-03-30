import * as React from "react";
import { render } from "@testing-library/react";
import EligibilityResults from "./EligibilityResults";

describe('EligibilityResults', () => {
	it('should render success message', () => {
		const results = {
			eligibleCards: ["C1"]
		}
		const { container } = render(<EligibilityResults results={results} />);
		expect(container.textContent).toMatch('Congratulation! You are eligible for the following:');
	});

	it('should render failure message', () => {
		const results = {
			eligibleCards: []
		}
		const { container } = render(<EligibilityResults results={results} />);
		expect(container.textContent).toMatch('Unfortunately, you are not not eligible for any of the cards right now. Please try again in few weeks.');
	});

	it('should render 2 cards when the results containe 2 cards', () => {
		const results = {
			eligibleCards: ["C1", "C2"]
		}
		const { getAllByTestId } = render(<EligibilityResults results={results} />);
		let comments = getAllByTestId("eligibility-cards");
		expect(comments).toHaveLength(2);
	});
});
