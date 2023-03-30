import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { SimpleContainer } from '#/components/SimpleContainer'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '#/components/SocialIcons'
import portraitImage from '#/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Steven Roussey</title>
        <meta
          name="description"
          content="I’m Steven Roussey. Learn more about me here."
        />
      </Head>
      <SimpleContainer className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Steven Roussey.
            </h1>
            <h2 className="mt-2 text-2xl font-medium tracking-tight text-zinc-600 dark:text-zinc-400 sm:text-3xl">
              I live in West Hollywood, CA.
            </h2>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>I am a technologist, investor, mentor, and entrepreneur.</p>
              <p>
                I am a huge fan of technology and software going back to
                childhood when I was figuring out how to calculate IRR of
                investment real estate for my father.
              </p>
              <p>
                Besides learning to code when I was a child, I studied both
                engineering and computer science at university, and tinker on
                side projects despite not having enough time in the day (as fan
                of JS, I worked on Firebug as a side project, used by millions
                of developers before those tools were integrated into all the
                browsers).
              </p>
              <p>
                I have worked at small firms and large firms, started my own
                company, and helped companies grow.
              </p>
              <p>
                I’ve written CMS systems from scratch multiple times; eCommerce
                too. Throw in my own ORM (patents pending and given),
                client/server MVVM framework, and contributions to browser
                developer tools, and call me well rounded. Just not a ninja or
                unicorn. I’m always learning.
              </p>
              <p>
                I have invested in a couple hundred startups, mentored many more
                at an accelerator, and advise entrepreneurs and solo capitalists
                alike.
              </p>
              <p>
                Helping people is more rewarding than a paycheck. Life is
                awesome when you can do both. Working to build teams, products,
                companies, is as fascinating as code.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://linkedin.com/sroussey"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="http://github.com/sroussey"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://twitter.com/sroussey"
                icon={TwitterIcon}
                className="mt-4"
              >
                Follow on Twitter
              </SocialLink>
            </ul>
          </div>
        </div>
      </SimpleContainer>
    </>
  )
}
