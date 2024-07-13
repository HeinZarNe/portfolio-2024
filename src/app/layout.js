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
      <body className={classNames(roboto.className, "bg-[#000] ")}>
        <div className="max-w-screen-3xl mx-auto tracking-wide [word-spacing:3px] relative text-[#faf9f6]  bg-[#111111]">
          <div className=" bg-noise noise" />
          {children}
        </div>
      </body>
    </html>
  );
}
