import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    token: string;
  }

  interface Session {
    user: User;
    token: string;
    error?: string;
  }

  interface JWT {
    token: string;
  }
}
