import Head from 'next/head'
import React from 'react'
import { Card } from '#/components/Card'
import { Section } from '#/components/Section'
import { SimpleLayout } from '#/components/SimpleLayout'

// const ToolsSection: React.FC<{
//   title: string
//   children: React.ReactNode
// }> = ({ children, ...props }) => {
const ToolsSection = ({ children, ...props }) => {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href = '', children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Steven Roussey</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M2 Max, 64GB RAM (2023)">
              Super powerful, super portable, and super expensive. Still, it’s
              worth it. I can run ML models on my laptop and yet have something
              small that travels well.
            </Tool>
            <Tool title='LG 5K 27" monitors'>
              I love the 5K resolution. It’s quite crisp and great for coding
              sessions and large excel spreadsheets. However, it has huge
              burn-in problems. I recommend 5K, but not these monitors.
            </Tool>
            <Tool title="Apple Magic Keybord with TouchID">
              TouchID on the keyboard when docked at at my desk is a game
              changer. I can’t imagine going back to typing in my password
              constantly.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              Simple and powerful. I’ve tried a lot of other editors but I
              actually love this one.
            </Tool>
            <Tool title="Github Copilot">
              I’m giving this one a try. It’s not perfect but it’s pretty useful
              so far. It helped me write this page!
            </Tool>
            <Tool title="TypeScript">
              JavaScript is my favorite language but TypeScript makes it even
              better. Even works well with React and NextJS. I wish it were used
              in the ML world.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
