
import "./globals.css";
import { AppProvider } from "./context/AppContext";

export const metadata = {
  title: "FindIt - Student Lost and Found",
  description: "A student lost and found application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
