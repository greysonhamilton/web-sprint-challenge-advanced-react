import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />);

    const header = screen.findByText(/checkout form/i);
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {

    const firstName = screen.findByLabelText(/first/i);
    const lastName = screen.findByLabelText(/last/i);
    const addy = screen.findByLabelText(/address/i);
    const city = screen.findByLabelText(/city/i);
    const state = screen.findByLabelText(/state/i);
    const zip = screen.findByLabelText(/zip/i);

    fireEvent.change(firstName, {target: {value: 'Greyson'}});
    fireEvent.change(lastName, {target: {value: 'Hamilton'}});
    fireEvent.change(addy, {target: {value: '1B Ilford Place'}});
    fireEvent.change(city, {target: {value: 'Thornlie'}});
    fireEvent.change(state, {target: {value: 'Western Australia'}});
    fireEvent.change(zip, {target: {value: '6108'}});

    const checkout = screen.findByLabelText(/checkout/i);
    fireEvent.click(checkout);

    expect(screen.findByText(/greyson/i)).toBeInTheDocument();
    expect(screen.findByText(/hamilton/i)).toBeInTheDocument();
    expect(screen.findByText(/ilford/i)).toBeInTheDocument();
    expect(screen.findByText(/thornlie/i)).toBeInTheDocument();
    expect(screen.findByText(/australia/i)).toBeInTheDocument();
    expect(screen.findByText(/6108/i)).toBeInTheDocument();

    expect(screen.getByText(/you have orderd some plants!/i)).toBeInTheDocument();

    expect(screen.getByText(/your new green friends will be shipped to/i)).toBeInTheDocument();

});
