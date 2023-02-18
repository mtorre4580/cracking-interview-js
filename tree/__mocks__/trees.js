const treeA = {
  value: "A",
  right: {
    value: "B",
    right: {
      value: "C",
      right: null,
      left: {
        value: "E",
        right: null,
        left: null,
      },
    },
    left: {
      value: "D",
      right: {
        value: "F",
        right: null,
        left: null,
      },
      left: null,
    },
  },
  left: null,
};

const treeB = {
  value: 25,
  left: {
    value: 15,
    left: {
      value: 10,
      left: {
        value: 4,
        right: null,
        left: null,
      },
      right: {
        value: 12,
        left: null,
        right: null,
      },
    },
    right: {
      value: 22,
      left: {
        value: 18,
        left: null,
        right: null,
      },
      right: {
        value: 24,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 50,
    left: {
      value: 35,
      left: {
        value: 31,
        left: null,
        right: null,
      },
      right: {
        value: 44,
        left: null,
        right: null,
      },
    },
    right: {
      value: 70,
      left: {
        value: 66,
        right: null,
        left: null,
      },
      right: {
        value: 90,
        left: null,
        right: null,
      },
    },
  },
};

const treeWithBTS = {
  value: 40,
  left: {
    value: 30,
    left: {
      value: 25,
      left: null,
      right: null,
    },
    right: {
      value: 35,
      left: null,
      right: null,
    },
  },
  right: {
    value: 50,
    left: {
      value: 45,
      left: null,
      right: null,
    },
    right: {
      value: 60,
      left: null,
      right: null,
    },
  },
};

module.exports = {
  treeA,
  treeB,
  treeWithBTS,
};
