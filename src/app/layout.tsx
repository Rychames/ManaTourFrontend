import { ReactNode } from 'react';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import '../app/styles/globals.css';

export const metadata = {
  title: 'ManaTour',
  description: 'Site de Turismo',
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100 text-gray-800">
        <div className="flex flex-col min-h-screen ">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}