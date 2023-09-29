import { render, screen } from '@testing-library/react';
import Input from '../components/common/Input';

describe("<Input /> component", () => {
    it("render the Input", () => {
        render(<Input />)
    })
    it("render the Input element with type", () => {
        render(<Input type="text" />);

    })
})