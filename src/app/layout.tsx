import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/ToggleBtn";
import PageTransition from "@/components/PageTreansition";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ashkan Sadeghi",
  description: "Ashkan Sadeghi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable}  ${poppins.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "solarized-theme", "vibrant-theme"]}
        >
          <PageTransition>
            {children}
            <div className="fixed bottom-8 right-8 z-20 flex flex-row justify-center items-center">
              <ModeToggle />
            </div>
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
