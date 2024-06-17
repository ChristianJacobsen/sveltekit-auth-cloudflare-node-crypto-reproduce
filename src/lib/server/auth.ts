import { SvelteKitAuth } from "@auth/sveltekit";
import Credentials from "@auth/sveltekit/providers/credentials";

export const { handle, signIn, signOut } = SvelteKitAuth({
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log("jwt", token, user);
      if (user && user.id) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      console.log("session", session, token);
      if (token && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      authorize: async () => {
        return { id: "1", email: "test@example.com" };
      },
    }),
  ],
  secret: "f5405fdfb8f0d0d828a54f4b64d1a85b444409b9c50d22b52be16cea633cb185",
  trustHost: true,
});
