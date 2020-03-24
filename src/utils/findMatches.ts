export const findMatches = (wordToMatch: string, arr: any[], key: string) => {
  const regex = new RegExp(wordToMatch, 'gi');
  return arr.filter((item: {}) => item[key].match(regex));
};
