/* eslint-disable @next/next/no-head-element */

import RootStyleRegistry from "./RootStyleRegistry";

import localFont from '@next/font/local'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import './style/Global.css'

const spotifyFont = localFont({
  src: './assets/fonts/GothamBook.ttf',
})

const spotifyFontMedium = localFont({
  src: './assets/fonts/GothamMedium.ttf',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={spotifyFont.className}>
      <body>
        <RootStyleRegistry>
          {children}
          </RootStyleRegistry>
        </body>
    </html>
  );
}
