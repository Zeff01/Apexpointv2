export type TMessageStatus = "standby" | "loading" | "success" | "error";

export const validateInputs = (
  inputs: Record<string, string>
): Record<string, boolean> => {
  const validationResults: Record<string, boolean> = {};

  for (const key in inputs) {
    if (Object.prototype.hasOwnProperty.call(inputs, key)) {
      const value = inputs[key].trim();
      const isValid = value !== "";
      validationResults[key] = isValid;
    }
  }

  return validationResults;
};

export const validateForm = (
  validationResults: Record<string, boolean>
): boolean => {
  return Object.values(validationResults).every((isValid) => isValid);
};
