import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Card } from '#/components/Card'
import { SimpleLayout } from '#/components/SimpleLayout'
import { Metadata } from 'next'
import clsx from 'clsx'

const investments = [
  {
    name: 'Shippo',
    description:
      'Shippo is a shipping API that makes it easy to integrate shipping into your e-commerce platform, which I did with Weebly at a later date.',
    link: { href: 'http://shippo.com/', label: 'shippo.com' },
    type: 'Angel',
  },
  {
    name: 'Grove Collaborative',
    description:
      'Seed investment when they were shipping from a closet sized space on Union St in SF. Now doing over $250m/year in revenue. They are a direct to consumer company that sells natural and organic products.',
    link: { href: 'http://grove.co/', label: 'grove.co' },
    type: 'Angel',
  },
  {
    name: 'Unpopular Ventures',
    description:
      'I love Unpopular’s view on picking young companies, and grateful to have been presented and invested in some of their best deals.',
    type: 'Syndicate',
  },
  {
    name: 'First Check Ventures',
    description:
      'I love Ali’s choices on young companies in South America, and grateful to have been presented and invested in some of their best deals.',
    type: 'Syndicate',
  },
  {
    name: 'Naval Ravikant Rolling Funds',
    description:
      'From the founder of AngelList, these funds get some wild and crazy access to things I don’t see anywhere else.',
    link: { href: 'http://angel.co/', label: 'angel.co' },
    type: 'Fund',
  },
  {
    name: 'Boost VC',
    description:
      'My favorite accellerator, and place where I was a mentor for many years, of couse I would invest here as well.',
    link: { href: 'http://boost.vc/', label: 'boost.vc' },
    type: 'Fund',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <SimpleLayout
      title="A sample of the things I have invested in"
      intro="I’ve invested in over a hundred companies over the years, and I’ve learned a lot about what makes a good investment, and how to pick the right companies. Luck is a big part of it, but there are ways to increase your odds."
    >
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {investments.map((investment) => (
          <Card as="li" key={investment.name}>
            <div className="relative -mx-2">
              <span
                className={clsx(
                  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs',
                  investment.type == 'Syndicate'
                    ? 'bg-red-100 text-red-800'
                    : investment.type == 'Angel'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                )}
              >
                {investment.type}
              </span>
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={investment.link?.href || '#'}>{investment.name}</Card.Link>
            </h2>
            <Card.Description>{investment.description}</Card.Description>
            {investment.link && (
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{investment.link.label}</span>
              </p>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
export const metadata: Metadata = {
  title: 'Investments',
  description: 'A sample of the things I have invested in.',
}
