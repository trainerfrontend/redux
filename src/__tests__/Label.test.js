import Label from "../components/common/Label";
import { render, screen } from '@testing-library/react';

describe("<Label> component", () => {
    it.skip("Label component should render", () => {
        render(<Label />);
    });
    test("Label component should have prop: labelname", () => {
        render(<Label labelName="Enter your name" />);
        const labelElement = screen.getByText(/Enter your name/i);
        expect(labelElement).toBeInTheDocument();
    });
    it.skip("Label component should have label role", () => {
        render(<Label />);
        const labelElement = screen.getByRole('label');
        expect(labelElement).toBeInTheDocument();
    });
})