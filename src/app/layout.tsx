import "./globals.css";
import Link from "next/link";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ko">
      <body>
        <header className="bg-sky-400">
          <nav>
            <ul className="flex space-x-20 text-white">
              <li><Link href='/'>홈</Link></li>
              <li><Link href='/champions'>챔피언 목록</Link></li>
              <li><Link href='/items'>아이템 목록</Link></li>
              <li><Link href='/rotation'>로테이션 정보</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
