const SinglyLinkedList = require("./singlyLinkedList");

describe("SinglyLinkedList", () => {
  test("should create a list with 5 items insert at the beginning", () => {
    const list = new SinglyLinkedList();

    list
      .insertAtBeginning(1)
      .insertAtBeginning(2)
      .insertAtBeginning(3)
      .insertAtBeginning(4)
      .insertAtBeginning(5);

    expect(list.length()).toEqual(5);

    expect(list.value).toEqual({
      value: 5,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: { value: 1, next: { value: null, next: null } },
          },
        },
      },
    });
  });

  test("should create a list with 5 items insert at the end", () => {
    const list = new SinglyLinkedList();

    list
      .insertAtEnd(1)
      .insertAtEnd(2)
      .insertAtEnd(3)
      .insertAtEnd(4)
      .insertAtEnd(5);

    expect(list.length()).toEqual(5);

    expect(list.value).toEqual({
      value: 1,
      next: {
        value: 2,
        next: { value: 3, next: { value: 4, next: { value: 5, next: null } } },
      },
    });
  });

  test("should return true for the search", () => {
    const list = new SinglyLinkedList();

    list
      .insertAtEnd(1)
      .insertAtEnd(2)
      .insertAtEnd(3)
      .insertAtEnd(4)
      .insertAtEnd(5);

    expect(list.search(3)).toBeTruthy();
  });

  test("should delete the first item at the beginning list", () => {
    const list = new SinglyLinkedList();

    list
      .insertAtEnd(1)
      .insertAtEnd(2)
      .insertAtEnd(3)
      .insertAtEnd(4)
      .insertAtEnd(5);

    list.deleteAtBeginning();

    expect(list.length()).toEqual(4);
    expect(list.search(1)).toBeFalsy();
    expect(list.value).toEqual({
      value: 2,
      next: { value: 3, next: { value: 4, next: { value: 5, next: null } } },
    });
  });

  test("should delete the last item in the list", () => {
    const list = new SinglyLinkedList();

    list
      .insertAtEnd(1)
      .insertAtEnd(2)
      .insertAtEnd(3)
      .insertAtEnd(4)
      .insertAtEnd(5);

    list.deleteAtEnd();

    expect(list.length()).toEqual(4);
    expect(list.search(5)).toBeFalsy();
    expect(list.value).toEqual({
      value: 1,
      next: { value: 2, next: { value: 3, next: { value: 4, next: null } } },
    });
  });

  test("should log all the items in the list", () => {
    const list = new SinglyLinkedList();

    list
      .insertAtEnd(1)
      .insertAtEnd(2)
      .insertAtEnd(3)
      .insertAtEnd(4)
      .insertAtEnd(5);

    const logger = jest.spyOn(console, "log").mockImplementation(() => {});

    list.transversal();

    expect(logger).toBeCalledWith(`[Node_Value]: 1`);
    expect(logger).toBeCalledWith(`[Node_Value]: 2`);
    expect(logger).toBeCalledWith(`[Node_Value]: 3`);
    expect(logger).toBeCalledWith(`[Node_Value]: 4`);
    expect(logger).toBeCalledWith(`[Node_Value]: 5`);
  });
});
