import React from 'react'
import { Card } from '#/components/Card'
import { Section } from '#/components/Section'
import { SimpleLayout } from '#/components/SimpleLayout'
import { Metadata } from 'next'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta = null, href = '#' }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {cta && <Card.Cta>{cta}</Card.Cta>}
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <SimpleLayout
        title="I speak at conferences, events, and online"
        intro="I love to speak when I think I can add an interesting voice to a discussion panel, or to speak about specific technologies or investing."
      >
        <div className="space-y-20">
          <SpeakingSection title="Live Events">
            <Appearance
              href="https://kampevents.com/la-showcase/"
              title="Showcase Los Angeles"
              description="Part of an investor panel for discussing the LA venture ecosystem, then we will take a look at a few startups and pepper them with questions."
              event="KampEvents, March 2023"
              cta="Get tickets"
            />
          </SpeakingSection>
          <SpeakingSection title="Clubhouse">
            <Appearance
              href="#"
              title="How to Pitch to VCs & Angel Investors"
              description="More often on this Saturday morning event than other rooms at other times. You can find me saying the things that others may not. Not recorded!"
              event="PitchClub"
            />
          </SpeakingSection>
          <SpeakingSection title="Conferences">
            {/* <Appearance
              href=""
              title=""
              description="."
              event="DeveloperWeek, SF, 2013"
            /> */}
            <Appearance
              href="https://vimeo.com/showcase/2541003/video/75271334"
              title="Advanced Tips and Tricks for Debugging"
              description="Demonstrating techniques for using Firebug to its fullest potential, and my Illuminations for Developers plugin for specific help with ExtJS."
              event="SechaCon Orlando, March 2013"
              cta="Watch video"
            />
            <Appearance
              href="#"
              title="Keynote"
              description="I spoke about integrating an app store in the MacOS based on missing software when opening a file. Discover and purchase (via PartBank/PartMerchant) were the two main topics for my guest appearance."
              event="Apple WWDC, 1996"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Speaking - Steven Roussey',
  description: 'I speak at conferences, events, and online',
}
