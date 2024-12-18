import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import styles from '@/app/css/util.module.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
})

export const metadata = {
  title: "Genome Center",
  description: "Genome Center is a highly capable library of Jashore University od Science and Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased overflow-x-hidden`}
      >
        <nav className={styles.nav}>

        </nav>
        {children}
        
      </body>
    </html>
  );
}
