import React from "react";
import Counter from "./Counter";
import { render , fireEvent } from "@testing-library/react";
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

test('Changing input values correctly', () => {
    const {getByTestId} = render(<Counter />)
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl , {
        target : {
            value : "5"
        }
    })

    expect(inputEl.value).toBe("5")
})

test('click on plus button add 1 to counter', () => {
    const {getByTestId} = render(<Counter />)
    const addbtnEl = getByTestId('add-btn')
    const counterEl = getByTestId("counter")


    fireEvent.click(addbtnEl)
    expect(counterEl.textContent).toBe("1")
})

test('click on subtract button subtract 1 to counter', () => {
    const {getByTestId} = render(<Counter />)
    const subtractbtnEl = getByTestId('subtract-btn')
    const counterEl = getByTestId("counter")


    fireEvent.click(subtractbtnEl)
    expect(counterEl.textContent).toBe("-1")
})

test('changing input value and clicking add btn', () => {
    const {getByTestId} = render(<Counter />)
    const addbtnEl = getByTestId('add-btn')
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl , {
        target: {
            value : "5"
        }
    })


    fireEvent.click(addbtnEl)
    expect(counterEl.textContent).toBe("5")
})

test('changing input value and clicking subtract btn', () => {
    const {getByTestId} = render(<Counter />)
    const subtractbtnEl = getByTestId('subtract-btn')
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl , {
        target: {
            value : "5"
        }
    })


    fireEvent.click(subtractbtnEl)
    expect(counterEl.textContent).toBe("-5")
})

test('counter contains correct color', () => {
    const {getByTestId} = render(<Counter />)
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")
    const addbtnEl = getByTestId('add-btn')
    const subtractbtnEl = getByTestId('subtract-btn')

    
    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl , {
        target: {
            value : "50"
        }
    })

    fireEvent.click(addbtnEl)
    fireEvent.click(addbtnEl)
    expect(counterEl.className).toBe("green")
    fireEvent.click(addbtnEl)
    expect(counterEl.className).toBe("green")

    fireEvent.click(subtractbtnEl)
    fireEvent.click(subtractbtnEl)

    expect(counterEl.className).toBe("")

    fireEvent.click(subtractbtnEl)
    fireEvent.click(subtractbtnEl)
    fireEvent.click(subtractbtnEl)
    fireEvent.click(subtractbtnEl)
    expect(counterEl.className).toBe("red")





    
})





