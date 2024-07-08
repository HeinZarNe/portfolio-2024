import { Roboto } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Hein Zar Ne",
  description: "A frontend website developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(roboto.className, "bg-stone-200 ")}>
        <div className="max-w-screen-3xl mx-auto   bg-slate-50">{children}</div>
      </body>
    </html>
  );
}
