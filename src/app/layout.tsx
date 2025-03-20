import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/ToggleBtn";
import PageTransition from "@/components/PageTreansition";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashkan Sadeghi | Frontend Developer",
  description:
    "Portfolio showcasing web development projects and skills by Ashkan Sadeghi",

  keywords: [
    "frontend developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Ashkan Sadeghi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashkan2077.vercel.app/",
    title: "Ashkan Sadeghi | Frontend Developer",
    description: "Portfolio showcasing web development projects and skills",
    images: [
      {
        url: "/images/ashkan.jpg",
        width: 1200,
        height: 630,
        alt: "Ashkan Sadeghi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashkan Sadeghi | Frontend Developer",
    description: "Portfolio showcasing web development projects and skills",
    images: ["/images/ashkan.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${lato.variable} antialiased min-h-screen`}>
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
