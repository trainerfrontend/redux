import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../components/common/Input';

describe("<Input /> component", () => {
    it.skip("render the Input", () => {
        render(<Input />)
    })
    it.skip("render the Input element with type", () => {
        render(<Input type="text" />);
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toHaveAttribute("type", "text");
    })
    it.skip("render the Input element with classname", () => {
        render(<Input />);
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toHaveAttribute("class", "border-2");
    })
    it.skip("render the Input element with name prop", () => {
        render(<Input name="fullname" />);
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toHaveAttribute("name", "fullname");
    })
    it("Input component with props", () => {
        render(<Input type="text" name="fullname" />);
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toHaveAttribute("name", "fullname");
        expect(inputElement).toHaveAttribute("class", "border-2");
        expect(inputElement).toHaveAttribute("type", "text");
    })
    it("render the Input element with handler event", () => {
        const mockHandler = jest.fn();
        render(<Input name="fullname" handler={mockHandler} />);
        const inputElement = screen.getByRole("textbox");

        fireEvent.change(inputElement, { target: { value: "test value" } })
        expect(inputElement.value).toBe("test value")
    })
})