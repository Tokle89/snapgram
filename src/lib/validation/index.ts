import { z } from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "Name must be min 2 characters " }),
  username: z.string().min(2, { message: "Username must be min 2 characters " }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be min 6 characters" }),
});
