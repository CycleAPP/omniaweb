'use server';

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Email inválido"),
  company: z.string().min(2, "Ingresa el nombre de la empresa"),
  phone: z
    .string()
    .min(7, "Teléfono inválido")
    .max(20, "Teléfono inválido"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export const initialContactState = initialState;

export async function submitContact(
  _prevState: ContactFormState = initialState,
  formData: FormData,
): Promise<ContactFormState> {
  void _prevState;

  try {
    const parsed = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
    });

    if (!parsed.success) {
      const fieldErrors = Object.entries(parsed.error.flatten().fieldErrors).reduce(
        (acc, [key, value]) => {
          if (value && value.length > 0) {
            acc[key] = value[0] ?? "Campo inválido";
          }
          return acc;
        },
        {} as Record<string, string>,
      );

      return {
        success: false,
        message: "Corrige los campos marcados.",
        errors: fieldErrors,
      };
    }

    // Simular persistencia/envío. Reemplazar con Resend o base de datos real.
    console.log("Nuevo lead Omnia", parsed.data);
    await new Promise((resolve) => setTimeout(resolve, 400));

    return {
      success: true,
      message: "¡Gracias! Un especialista de Omnia te contactará en minutos.",
    };
  } catch (error) {
    console.error("Error registrando lead", error);
    return {
      success: false,
      message: "Ocurrió un problema al enviar. Intenta de nuevo en un momento.",
    };
  }
}
