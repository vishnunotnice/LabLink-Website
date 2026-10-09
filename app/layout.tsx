import type { Metadata } from "next";
import "./globals.css";
import "./monochrome.css";
import "./refinements.css";
import "./theme-visibility.css";

export const metadata: Metadata = {
  title: "LabLink — Cybersecurity Lab & Private Network Management",
  description: "LabLink is a Python-powered cybersecurity infrastructure toolkit combining WireGuard networking, device enrollment, Docker labs, and network management.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
