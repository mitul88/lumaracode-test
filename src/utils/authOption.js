import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

console.log(process.env.GOOGLE_CLIENT_ID);

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
