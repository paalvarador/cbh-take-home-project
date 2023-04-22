const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal 'ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa' when given input 1", () => {
    const trivialKey = deterministicPartitionKey(1);
    expect(trivialKey).toBe("ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '73fb266a903f956a9034d52c2d2793c37fddc32077898f5d871173da1d646fb80bbc21a0522390b75d3bcc88bd78960bdb73be323ad5fc5b3a16089992957d3a' when given input 3", () => {
    const trivialKey = deterministicPartitionKey(3);
    expect(trivialKey).toBe("73fb266a903f956a9034d52c2d2793c37fddc32077898f5d871173da1d646fb80bbc21a0522390b75d3bcc88bd78960bdb73be323ad5fc5b3a16089992957d3a");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal 'c74bd95b8555275277d4e941c73985b4bcd923b36fcce75968ebb3c5a8d2b1ac411cfae4c2d473bff59a2b7b5ea220f0ac7bb8c880afb32f1b4881d59cc60d85' when given input 3", () => {
    const trivialKey = deterministicPartitionKey(5);
    expect(trivialKey).toBe("c74bd95b8555275277d4e941c73985b4bcd923b36fcce75968ebb3c5a8d2b1ac411cfae4c2d473bff59a2b7b5ea220f0ac7bb8c880afb32f1b4881d59cc60d85");
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns the literal 'ef06a520512e1efd66d7ecabdd33f1e799a01c11c9ac3d4dd5d0638925c7189823c3614a5361c0f03b1b690ec36925ac7163758d0d88357c3c6fcc0e5546c932' when given input 'Pablo'", () => {
    const trivialKey = deterministicPartitionKey("Pablo");
    expect(trivialKey).toBe("ef06a520512e1efd66d7ecabdd33f1e799a01c11c9ac3d4dd5d0638925c7189823c3614a5361c0f03b1b690ec36925ac7163758d0d88357c3c6fcc0e5546c932");
  });
});







