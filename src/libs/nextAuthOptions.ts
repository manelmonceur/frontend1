import { NextAuthOptions } from "next-auth";
import axios from "@/utils/axios";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      async authorize(credentials, req) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACK_URI}/auth/signin`,
            { ...credentials }
          );

          const { _id, firstName, lastName, email, token } = response.data;

          return { id: _id, firstName, lastName, email, token };
        } catch (err: any) {
          throw new Error(err.response?.data?.message ?? "Unknown error");
        }
      },
    }),
  ],

  callbacks: {
    jwt: async (data) => {
      const { account, token, user } = data;

      // Initial sign in
      if (account && user) {
        return { token: user.token, user };
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user as any;
      session.token = token.token as string;

      return session;
    },
  },

  pages: {
    signIn: "/api/auth/sigin",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
