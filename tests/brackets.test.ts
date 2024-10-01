import { hasMatchingBrackets } from "../src/brackets";
import { expect } from "chai";

describe("brackets in strings", () => {
  it("should return true for <>", () => {
    expect(hasMatchingBrackets({ testString: "<>" })).to.be.true;
  });
  it("should return false for ><", () => {
    expect(hasMatchingBrackets({ testString: "><" })).to.be.false;
  });
  it("should return false for <<>", () => {
    expect(hasMatchingBrackets({ testString: "<<>" })).to.be.false;
  });
  it("should return false for <>>", () => {
    expect(hasMatchingBrackets({ testString: "<>>" })).to.be.false;
  });
  it("should return false for <>>>", () => {
    expect(hasMatchingBrackets({ testString: "<>>>" })).to.be.false;
  });
  it("should return false for <>><", () => {
    expect(hasMatchingBrackets({ testString: "<>><" })).to.be.false;
  });
  it('should return true for ""', () => {
    expect(hasMatchingBrackets({ testString: '""' })).to.be.true;
  });
  it("should return true for <abcxyz>", () => {
    expect(hasMatchingBrackets({ testString: "<abcxyz>" })).to.be.true;
  });
});
