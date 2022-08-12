export const removeUndefinedFromObject = (object: Object) => {
  const filteredEntries = Object.entries(object).filter(
    ([_, value]) => value !== undefined
  );

  return Object.fromEntries(filteredEntries);
};
