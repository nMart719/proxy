import "./globals.css";
import { NotistackProvider } from "./components/NotistackProvider";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Proxy</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <SessionProvider session={session}>
          <NotistackProvider>
            <main>{children}</main>
          </NotistackProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
