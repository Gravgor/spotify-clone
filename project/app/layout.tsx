/* eslint-disable @next/next/no-head-element */

import RootStyleRegistry from "./RootStyleRegistry";

import localFont from '@next/font/local'
import Navbar from "./components/Navbar";

const spotifyFont = localFont({
  src: './components/assets/fonts/GothamBook.ttf',
})

const spotifyFontMedium = localFont({
  src: './components/assets/fonts/GothamMedium.ttf',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={spotifyFont.className}>
      <head></head>
      <body>
        <RootStyleRegistry>
          <Navbar/>
        </RootStyleRegistry>
        <RootStyleRegistry>
          {children}
          </RootStyleRegistry>
        </body>
    </html>
  );
}
