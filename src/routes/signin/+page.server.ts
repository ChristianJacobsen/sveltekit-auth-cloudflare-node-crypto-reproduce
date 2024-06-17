import { signIn } from "$lib/server/auth";
import type { Actions } from "./$types";
export const actions = {
  default: signIn,
} as const satisfies Actions;
