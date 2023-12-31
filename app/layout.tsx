import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Sidebar } from "@/components";
import {
  SupabaseProvider,
  UserProvider,
  ModalProvider,
  ToasterProvider,
} from "@/providers";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify next.js",
  description: "Web Player: Music for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
