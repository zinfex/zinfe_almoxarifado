import { z, ZodError } from "zod";

function validarEmail(email) {
  const emailSchema = z.string().email();

  try {
    emailSchema.parse(email);
    return null;
  } catch (error) {
    if (error instanceof ZodError) {
      return "Formato de email inválido";
    }
    return "Formato de email inválido";
  }
}

export default validarEmail;
