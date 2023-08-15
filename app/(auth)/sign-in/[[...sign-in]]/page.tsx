import { SignIn } from "@clerk/nextjs";
import Image from 'next/image'
import { dark } from '@clerk/themes'

export default function Page() {
  return (
    <main className="flex flex-col w-full lg:flex-row h-screen">
      <section className="flex-1 flex justify-center items-center lg:h-screen">
        <Image 
          src="/assets/logo.svg"
          alt="logo"
          width={300}
          height={300}
        />
      </section>
      <section className="flex-1 flex flex-col justify-center items-center border-blue-500 lg:h-screen">
        <div className="flex flex-col gap-4">
          <h1 className="text-heading1-bold ">Threads.</h1>
          <p className="text-heading3-bold leading-loose">Stitching Ideas, One Tweet at a Time</p>
        </div>
        <SignIn 
          appearance={{
            baseTheme: dark,
            layout: {
              helpPageUrl: "https://clerk.com/support",
              privacyPageUrl: "https://clerk.com/privacy",
              termsPageUrl: "https://clerk.com/terms",
              socialButtonsPlacement: "bottom"
            },
            variables: {
              colorPrimary: "#877EFF",
              },
            elements: {
              header: {
                display: "none",
              },
              card : {
                backgroundColor: "transparent",
              },
            }
          }}
        />
      </section>
    </main>
  )
}