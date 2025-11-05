import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "demo@user.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 🔒 Hardcoded demo user
        const user = {
          id: "1",
          name: "Demo User",
          email: "demo@user.com",
          password: "demo123",
        };

        if (
          credentials.email === user.email &&
          credentials.password === user.password
        ) {
          return user; // ✅ successful login
        } else {
          return null; // ❌ invalid
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
