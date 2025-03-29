import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        url: "https://github.cs.adelaide.edu.au/login/oauth/authorize",
        params: { scope: "read:user user:email" },
      },
      token: "https://github.cs.adelaide.edu.au/login/oauth/access_token",
      userinfo: "https://github.cs.adelaide.edu.au/api/v3/user",
    }),
    /*     CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", password: "nexthauth" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null, an error will be displayed advising the user to check their details.
          return null;

          // You can also reject this callback with an Error, which will send the user to the error page with the error message as a query parameter.
        }
      },
    }), */
  ],
  // Using default login pages properties from NextAuth
};
