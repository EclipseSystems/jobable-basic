import { createSwapy, type Swapy } from 'swapy'
import { useEffect, useRef, useState } from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { PageTitle } from "@/components/pageTitle"
import "@/components/swapy.css"

export default function Dashboard() {
  const [enableDash, setEnableDash] = useState(false)
  const handleClick = () => {
    setEnableDash(enableDash ? false : true)
  }

  const container = useRef(null)
  const swapy = useRef<Swapy | null>(null)

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current, {
        animation: 'dynamic',
        enabled: enableDash
      })
    }
    return () => {
      swapy.current?.destroy()
    }
  })

  return (
    <>
      <PageTitle title={'Dashboard'} padding={false} />
      <div className={'w-full h-full space-y-4'}>
        <Button
          variant={enableDash ? 'outline' : 'default'}
          className={'cursor-pointer'}
          onClick={handleClick}
        >
          {enableDash ? 'Exit editing' : 'Edit layout'}
        </Button>

        {/* Container */}
        <div className={'space-y-2'} ref={container}>
          <div data-swapy-slot="a">
            <div className={'w-50 h-full rounded-xl'} data-swapy-item="a">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div data-swapy-slot="b">
            <div className={'w-50 h-full rounded-xl'} data-swapy-item="b">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}