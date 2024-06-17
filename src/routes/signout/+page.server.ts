import { signOut } from "$lib/server/auth";
import type { Actions } from "./$types";
export const actions = {
  default: signOut,
} as const satisfies Actions;
