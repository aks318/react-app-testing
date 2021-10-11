import React from "react";
import Counter from "./Counter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"


test('Header renders correctly with text', () => {
    const {getByTestId} = render(<Counter />)
    const headerEl = getByTestId("header")

    expect(headerEl.textContent).toBe("My Counter")
})

test('Counter initially starts with text 0', () => {
    const {getByTestId} = render(<Counter />)
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
})

test('input contains initial value of 1', () => {
    const {getByTestId} = render(<Counter />)
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")
})

test('add button renders with +', () => {
    const {getByTestId} = render(<Counter />)
    const addBtn = getByTestId("add-btn")

    expect(addBtn.textContent).toBe("+")
})

test('Subtract button renders with -', () => {
    const {getByTestId} = render(<Counter />)
    const subtractBtn = getByTestId("subtract-btn")

    expect(subtractBtn.textContent).toBe("-")
})


