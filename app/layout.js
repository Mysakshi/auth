import { Inter } from "next/font/google";
import { Session } from "next-auth";
import "./globals.css";
import AuthProvider from '@/components/AuthProvider'; // Adjust the path as needed

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, session }) { // Accept session as a prop
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
