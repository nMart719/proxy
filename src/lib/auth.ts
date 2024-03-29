import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/services/db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }
        const user = await db.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!user) {
          return null;
        }

        const passwordValid = await compare(
          credentials.password,
          user.password
        );

        if (!passwordValid) {
          return null;
        }

        return {
          id: `${user.id}`,
          username: user.username,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log("SEssion", session, token);
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
        };
      }
      return token;
    },
  },
};
