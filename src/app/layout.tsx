import type { Metadata } from 'next';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import EmailButton from './components/layout/ButtonEmail';

export const metadata: Metadata = {
  title: 'Elina Rosato | Software Engineer',
  description: 'Software Engineer Portfolio',
  icons: {
    icon: '/studio-favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
          <body className={`root-body bg-almost-white`}>
            <Header />
            <EmailButton />
            <main className="pt-15">
              {children}
            </main>
            <Footer />
          </body>
        </html>
      );
}