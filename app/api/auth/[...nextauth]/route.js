import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

import User from "@/models/user"; // Assuming "User" should be imported, not "users"
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            return session;
        }, // Added comma here

        async signIn({ account, profile, user, credentials }) {
            try {
                await connectToDB();
                const checkEmail = await User.find({ email: user.email }); // Corrected "User" to "User"
                
                if (checkEmail.length == 0) {
                    await User.insertMany({ name: user.name, email: user.email }); // Corrected "user" to "User"
                }
            } catch (error) {
                console.log(error); // Corrected "e" to "error"
            }
        } // No comma needed here as this is the last function
    }
});

export {handler as GET, handler as POST}
