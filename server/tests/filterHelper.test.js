const filterByTerm = require('../app/helpers/filterByTerm');

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.google.com/" },
      { id: 2, url: "https://www.amazon.co.uk/" },
      { id: 3, url: "https://en.wikipedia.org/" }
    ];

    const output = [{ id: 3, url: "https://en.wikipedia.org/" }];

    expect(filterByTerm(input, "wikipedia")).toEqual(output);

  });
});
