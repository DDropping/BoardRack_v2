import React from "react";

import PostSteps from "@components/createPost/PostSteps";
import { renderWithProviders, screen } from "../../testUtils";

it("renders the three post-creation steps", () => {
  renderWithProviders(<PostSteps step={0} handleStepChange={() => {}} />);

  expect(screen.getByText("Create New Post")).toBeInTheDocument();
  expect(screen.getByText("Optional Details")).toBeInTheDocument();
  expect(screen.getByText("Publish Post")).toBeInTheDocument();
});

it("marks the current step as active", () => {
  const { container } = renderWithProviders(
    <PostSteps step={1} handleStepChange={() => {}} />
  );

  const items = container.querySelectorAll(".ant-steps-item");
  expect(items).toHaveLength(3);
  expect(items[1].className).toMatch(/ant-steps-item-process/);
});
