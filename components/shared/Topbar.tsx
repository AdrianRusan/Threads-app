import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignOutButton, OrganizationSwitcher } from '@clerk/nextjs';
import { dark } from '@clerk/themes'
import { ThemeSwitcher } from './ThemeSwitcher';

function Topbar() {
    return (
        <nav className="topbar">
            <Link href="/home" className="flex items-center gap-4">
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
                <p className="text-heading3-bold dark:text-light-1 text-dark-1 max-xs:hidden">Threads</p>
            </Link>

            <div className='flex-1 flex justify-center items-center'>
                <ThemeSwitcher />
            </div>

            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                <OrganizationSwitcher 
                    appearance={{
                        baseTheme: dark,
                        elements: {
                            organizationSwitcherTrigger: "py-2 px-4"
                        }
                    }}
                />
            </div>
        </nav>
    )
}

export default Topbar;