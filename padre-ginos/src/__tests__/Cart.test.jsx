import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";

test("snapshot with nothing in cart", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});

// usefull use case for snapshot testing is to test an object with a lot of properties
// coming from an API
test("lol", () => {
  expect({
    id: "calabrese",
    name: "The Calabrese Pizza",
    category: "Supreme",
    description: "lol pizza from Calabria",
    image: "/public/pizzas/calabrese.webp",
    size: { S: 12.25, M: 16.25, L: 20.25 },
  }).toMatchSnapshot();
});
