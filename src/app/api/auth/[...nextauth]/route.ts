import bcryptjs from "bcryptjs";
import dbConnect from "@/dbConnect/dbConnect";
import User from "@/modals/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import Admin from "@/modals/Admin";
import Credentials from "next-auth/providers/credentials";

// mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
        role: {},
      },
      async authorize(credentials, req) {
        const formEmail = credentials?.email as string;
        const plainPassword = credentials?.password as string;
        const role = credentials?.role as string;
        // connect to the database
        await dbConnect();
        // find the email address
        if (role === "admin") {
          const isAdminExist = await Admin.findOne({
            email: formEmail,
          });
          if (!isAdminExist) {
            return null;
          }
          // validate the password
          const isValidPassword = await bcryptjs.compare(
            plainPassword,
            isAdminExist?.password
          );
          if (!isValidPassword) {
            return null;
          }
          return {
            id: isAdminExist?._id,
            name: isAdminExist?.name || "Anonymous",
            email: isAdminExist?.email,
            role: "admin",
          };
        }
        if (role === "user") {
          const isUserExist = await User.findOne({
            email: formEmail,
          });
          if (!isUserExist) {
            return null;
          }
          // validate the password
          const isValidPassword = await bcryptjs.compare(
            plainPassword,
            isUserExist?.password
          );
          if (!isValidPassword) {
            return null;
          }
          return {
            id: isUserExist?._id,
            name: isUserExist?.name || "Anonymous",
            email: isUserExist?.email,
            role: "user",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, user, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token?.id,
          role: token?.role,
        },
      };
    },
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// hello@sandipandas.net
// A@$d34asdf#$
