import React from 'react'

import Image from 'next/image'
import { Card } from '#/components/Card'
import { SimpleLayout } from '#/components/SimpleLayout'
import logoPrivicyPal from '#/images/logos/privicypal-color.svg'
import logoFirebug from '#/images/logos/firebug.webp'
import logoEmbarc from '#/images/logos/embarc.png'
import logoIlluminations from '#/images/logos/i4d128.png'
import logoWeebly from '#/images/logos/weebly.svg'
import { Metadata } from 'next'

const projects = [
  {
    name: 'Weebly E-Commerce',
    description:
      'Created technology to empower SMBs to build their own e-commerce stores (now Square/Block e-commerce). Implemented a new product catalog system, inveentory system, checkout system, etc.',
    link: { href: 'http://weebly.com/', label: 'weebly.com' },
    logo: logoWeebly,
  },
  {
    name: 'Weebly Platform',
    description:
      'Weebly Platform allowed third parties to integrate with Weebly to build their own apps. I built the core infrastructure for the platform, including the API, the developer portal, and the app store.',
    link: { href: 'http://weebly.com/', label: 'weebly.com' },
    logo: logoWeebly,
  },
  {
    name: 'Embarc',
    description:
      'Pulling public information together about funding in the startup and venture capital ecosystem. Work in progress.',
    link: { href: 'https://embarc.com', label: 'embarc.com' },
    logo: logoEmbarc,
  },
  {
    name: 'PrivicyPal',
    description:
      'Helping users take control of their own data and privacy. Connected with password managers, Google, Facebook, Twitter, etc. Pulled and parsed GDPR data. No longer available.',
    link: { href: 'https://www.privicy.com', label: 'privicy.com' },
    logo: logoPrivicyPal,
  },
  {
    name: 'Firebug',
    description:
      'The story of Firefox and Firebug are synonymous with the rise of the web. We fought the good fight and changed how developers inspect HTML and debug JS in the browser. Firebug ushered the Web 2.0 era. No longer available as integrated into most browsers.',
    link: { href: 'https://getfirefox.com', label: 'getfirefox.com' },
    logo: logoFirebug,
  },
  {
    name: 'Illuminations',
    description:
      'Illuminations for Developers was an extension to Firebug (and later Chrome) that brought in JS Frameworks into the debugger. Worked with ExtJS, EmberJS, and BackboneJS. Later replicated by most frameworks themselves. No longer available.',
    logo: logoIlluminations,
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
      title="Things I’ve built trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I had a large hand in the development. "
    >
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link?.href || '#'}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            {project.link && (
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve built trying to put my dent in the universe.',
}
