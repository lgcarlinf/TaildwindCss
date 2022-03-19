export const validateInput = (input) => {
  const { name, owner, email, alta, sintomas } = input;
  let errors = {};

  if (!name.length > 0) {
    errors.name = "El campo es requerido";
  } else if (!owner.length > 0) {
    errors.owner = "El campo  es requerido";
  } else if (!email.trim()) {
    errors.email = "El campo es requerido";
  } else if (!alta.trim()) {
    errors.alta = "El campo es requerido";
  } else if (!sintomas.trim()) {
    errors.sintomas = "El campo es requerido";
  }

  return errors;
};
