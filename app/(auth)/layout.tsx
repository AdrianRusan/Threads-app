import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

import '../globals.css'
import { ThemeProvider } from '../theme-provider';
import { ThemeSwitcher } from '../../components/shared/ThemeSwitcher';

export const metadata = {
    title: 'Threads',
    description: 'A Next.js 13 Meta Threads Application'
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ 
    children 
} : { 
    children: React.ReactNode 
}) {
    return  (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} dark:bg-dark-1 dark:text-light-1 bg-light-1 text-dark-1` }>
                    <div className="w-full flex justify-center items-center min-h-screen dark:bg-dark-1 dark:text-light-1 bg-light-1 text-dark-1">
                        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                            <ThemeSwitcher />
                            {children}
                        </ThemeProvider>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}
