'use client';

import Link from "next/link";
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from "next/image";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { subscribeNewsletter } from "@/actions/subscribe-newsletter";

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isPending, startTransition] = useTransition();

  return (
    <section className="bg-brand w-full">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-5 mx-auto py-6">
        <div className="flex flex-col md:w-3/12 md:mt-5">
          <Link href='/' className="flex items-center gap-2.5">
            <div className="relative aspect-[3.45] w-[150px] md:w-[207px]">
              <Image
                src="/logo-footer.png"
                alt="AWES logo"
                fill
              />
            </div>
          </Link>
          <p className="mt-[32px] text-sm text-white">
            American Worldwide Educational Services is your trusted partner, guiding you from being a foreign graduate nurse to joining the U.S. healthcare profession and becoming a U.S. citizen.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-8 md:mt-28 w-full md:w-9/12 justify-between">
          <form className="flex gap-3 items-end"
            onSubmit={(e) => {
              e.preventDefault()
              startTransition(() => {
                subscribeNewsletter(email)
                  .then((data) => {
                    if (data.success)
                      toast.success(data.success);
                    if (data.error)
                      toast.error(data.error);
                    setEmail('');
                  })
                  .catch((error) => {
                    console.error(error);
                    toast.error("An error occurred. Please try again.");
                  })
              });
            }}
          >
            <div className="space-y-10 md:space-y-0 md:grid gap-5 grow">
              <p className="text-sm text-white whitespace-nowrap">
                Subscribe to stay tuned for new and latest updates. Let&apos;s do it!
              </p>
              <div className="flex gap-4">
                <Label htmlFor="email" className="sr-only">Enter your email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Enter your email"
                  placeholder="Enter your email Address"
                  className="rounded-xl shadow-lg h-12"
                />
                <Button variant='brand' size='brand' disabled={isPending}>Subscribe</Button>
              </div>
            </div>
          </form>
          <div className='flex justify-between mt-12 gap-5 md:mt-0'>
            <div className="flex flex-col text-white gap-5">
              <h3 className="text-base font-medium leading-4">Follow us</h3>
              <div className="flex gap-2">
                <div className="rounded-full w-6 h-6 bg-white flex justify-between items-center">
                  <Instagram className='text-black w-4 h-4 mx-auto stroke-[1.2px]' />
                </div>
                <div className="rounded-full w-6 h-6 bg-white flex justify-between items-center">
                  <Facebook className='text-black w-4 h-4 mx-auto stroke-[1.2px]' />
                </div>
                <div className="rounded-full w-6 h-6 bg-white flex justify-between items-center">
                  <Twitter className='text-black w-4 h-4 mx-auto stroke-[1.2px]' />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-white gap-5">
              <h3 className="text-base font-medium leading-4">Call us</h3>
              <p className="text-sm whitespace-nowrap">+1 800 854-36-80</p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-6 md:h-16 w-full' />
      <Separator className='hidden md:block' />
      <div className="flex flex-col-reverse md:flex-row py-6 justify-between gap-5 text-sm text-white max-w-6xl px-5 w-full mx-auto">
        <div className="text-center">©{new Date().getFullYear()} All Rights Reserved</div>
        <div className="flex gap-3 md:gap-5 md:justify-between justify-center">
          <a className="hover:underline">Privacy Policy</a>
          <a className="hover:underline">Terms of Use</a>
          <a className="hover:underline">Sales and Refunds</a>
          <a className="hover:underline">Legal</a>
          <a className="hover:underline">Site Map</a>
        </div>
      </div>
    </section>
  )
}

