type hasMatchingBracketsParams = {
  testString: string;
};

const hasMatchingBrackets = ({ testString }: hasMatchingBracketsParams) => {
  // return array of all brackets in order
  const justTheBrackets = testString.match(/[<>]/g);
  // if there are no brackets, match function will return null, so we're safe to return true here
  if (!justTheBrackets) {
    return true;
  }
  // if there is an odd number of brackets, or the first bracket is a closing one, or the last bracket is an opening one, we know right away there's a missing match, no further work needed
  if (
    justTheBrackets.length % 2 !== 0 ||
    justTheBrackets[0] === ">" ||
    justTheBrackets[justTheBrackets.length - 1] === "<"
  ) {
    return false;
  }
  let numBracketSetsIncomplete = 0;
  justTheBrackets.map((bracket) => {
    // each open bracket is an incomplete set, each closed bracket is a completed set
    bracket === "<" ? numBracketSetsIncomplete++ : numBracketSetsIncomplete--;
  });
  // if that number is 0 at the end, all brackets have been completed.
  return numBracketSetsIncomplete === 0;
};

export { hasMatchingBrackets };
