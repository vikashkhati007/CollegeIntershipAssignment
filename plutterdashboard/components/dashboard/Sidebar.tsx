'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'

import { BookOpen, GraduationCap, BarChart, UserCircle, Briefcase } from 'lucide-react'

const sidebarItems = [
  { name: 'Learning Progress', href: '/dashboard', icon: BookOpen },
  { name: 'Add Course', href: '/dashboard/courses', icon: GraduationCap },
  { name: 'Add Users', href: '/dashboard/users', icon: Briefcase },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart },
  { name: 'Profile', href: '/dashboard/profile', icon: UserCircle },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="flex md:hidden mr-2 px-0 text-base hover:bg-transparent hover:opacity-75 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[250px]">
          <MobileSidebar pathname={pathname} setIsOpen={setIsOpen} />
        </SheetContent>
      </Sheet>
      <div className="hidden border-r bg-muted md:block w-[250px]">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <GraduationCap className="h-6 w-6" />
              <span className="">Plutter</span>
            </Link>
          </div>
          <ScrollArea className="flex-1 overflow-hidden">
            <div className="flex flex-col gap-2 p-4">
              {sidebarItems.map((item) => (
                <Button
                  key={item.href}
                  asChild
                  variant={pathname === item.href ? 'secondary' : 'ghost'}
                  className="justify-start"
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}

function MobileSidebar({ pathname, setIsOpen }: { pathname: string; setIsOpen: (open: boolean) => void }) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex h-[60px] items-center justify-between px-6 border-b">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <GraduationCap className="h-5 w-5" />
          <span className="">Plutter</span>
        </Link>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent hover:opacity-75"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <ScrollArea className="flex-1 overflow-hidden">
        <div className="flex flex-col gap-2 p-4">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              className="justify-start"
              onClick={() => setIsOpen(false)}
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

