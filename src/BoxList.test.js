import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, color = "gray", height = "10", width = "10") {
  const backgroundColorInput = boxList.getByLabelText("Background Color");
  const heightInput = boxList.getByLabelText("Height");
  const widthInput = boxList.getByLabelText("Width");

  fireEvent.change(backgroundColorInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });

  const submitButton = boxList.getByText("Add new box");

  fireEvent.click(submitButton);
}

test("renders BoxList without crashing", () => {
  render(<BoxList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
}); 

test("adds a new box to the list", () => {
  const boxList = render(<BoxList />);

  // expect no boxes to be there
  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  // add a new box
  addBox(boxList);

  // expect a box to be there (with appropraite styling), with the text "X"
  const removeButton = boxList.getByText("X");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
    background-color: gray;
    width: 10px;
    height: 10px;
  `);

  // expect form to have reverted back to initial state of empty strings
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

test("removes a box from the list", () => {
  const boxList = render(<BoxList />);
  addBox(boxList);

  // expect a box to be on the page
  expect(boxList.queryByText("X")).toBeInTheDocument();

  // click the remove button and expect it to be gone
  const removeButton = boxList.getByText("X");
  fireEvent.click(removeButton);
  expect(boxList.queryByText("X")).not.toBeInTheDocument();
});
