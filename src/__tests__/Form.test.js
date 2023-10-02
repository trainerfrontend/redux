import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from '../components/global/Form';

describe("<Form/>", () => {
    test("Render <Form />", () => {
        render(<Form />)
        const labelElement = screen.getByText("Enter your Name");
        expect(labelElement).toBeInTheDocument();
    })
    test("Render <Form />", () => {
        render(<Form />)
        const labelElement = screen.getByText("Enter your email");
        expect(labelElement).toBeInTheDocument();
    })
    test("Handles form submission", async () => {
        const { getByLabelText, getByText } = render(<Form />)

        fireEvent.change(getByLabelText("Enter your Name"), {
            target: { name: "fullname", value: "John" }
        })

        fireEvent.change(getByLabelText("Enter your email"), {
            target: { name: "email", value: "john@gmail.com" }
        });

        fireEvent.submit(getByText('submit'))
        // const formData = screen.getByText('{ "fullname": "John", "email": "john@gmail.com" }')
        expect(getByText('{"fullname":"John","email":"john@gmail.com"}')).toBeInTheDocument();


    })

})