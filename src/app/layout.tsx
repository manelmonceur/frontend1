import SessionProvider from '@/components/provider/SessionProvider';
import { ChakraProvider } from '@chakra-ui/react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <SessionProvider>{children}</SessionProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
