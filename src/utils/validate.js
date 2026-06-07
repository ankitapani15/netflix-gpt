export const validateForm = (email, password) => {
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isValidPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password,
    );

  if (!isValidEmail) {
    return "Invalid email format";
  }
  if (!isValidPassword) {
    return "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.";
  }
  return null;
};

export const validateName = (name) => {
  const isValidName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  if (!isValidName) {
    return "Invalid name format";
  }
};
