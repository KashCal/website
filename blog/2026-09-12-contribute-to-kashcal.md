---
slug: contribute-to-kashcal
title: "Come build KashCal with us"
authors: [kashcal]
tags: [behind-the-scenes]
keywords:
  - contribute to kashcal
  - open source calendar android
  - contribute to open source android app
  - kashcal github
  - ai assisted open source contribution
  - open source caldav calendar
description: "KashCal has always been built for the people who use it. Now we have turned that same care toward the people who want to help build it: a browsable map of the code, and a workflow for AI-assisted contributions."
image: /img/social/blog/contribute-to-kashcal.png
---

KashCal is stubborn about exactly one thing: it answers to the person holding the phone and nobody else. This week we aimed that same stubbornness at a new audience, the people who want to help build it.

{/* truncate */}

Open source only works if people can actually get in. A repository can be public and still be a locked room: hundreds of files, an architecture that lives only in its authors' heads, and a newcomer left to reverse-engineer the whole thing before changing a single line. Plenty of good ideas never make it past that door. So we spent some time on the door.

## A map you can ask questions

The hardest part of a first contribution usually isn't writing the code. It's working out where the code lives and why it's arranged the way it is: which layer owns a sync operation, where an event turns into a row in the database, what on earth an "occurrence" is.

There is now a [browsable guide to how KashCal fits together](https://deepwiki.com/KashCal/KashCal) that you can read like a wiki and, better, ask questions of in plain language. "How does recurrence expansion work?" gets you an answer with the actual files to open, instead of an afternoon of grep. You can learn the neighborhood before you start moving furniture.

## A workflow for building with AI

A lot of contributions now arrive with an AI in the passenger seat, and that's fine by us. What isn't fine is code that was generated, glanced at, and thrown over the wall untested. The difference between the two is process, not talent.

So for anyone contributing with AI, we recommend [devloop](https://github.com/KashZod/devloop): a test-driven, review-gated workflow that has the assistant write a failing test first, build against the project's own architecture rules, and run an independent review pass before the work is called done. It's the difference between a change that happens to compile and one that holds up. Not required, strongly suggested.

## The rest of the on-ramp

The [contributor guide](https://github.com/KashCal/KashCal/blob/main/CONTRIBUTING.md) got a plain-language refresh: the setup steps that were quietly a version behind, a sketch of the architecture, and a pull-request checklist that names the things which actually get a change bounced here, like hardcoded text that should be a translatable string, or a screen reaching past the layers it's meant to. Nothing exotic. Just the house rules, written down, so you're not guessing at them.

## Why bother

KashCal is a calendar built for the people who use it: no ads, no account, and [nowhere to send your data even if we wanted to](/docs/privacy/overview). A calendar like that improves fastest when the people improving it aren't lost on arrival. If you've ever wanted to fix the one thing that bugs you, teach it your language, or add support for your server, the door is open now, and there's a map inside.

[Come build with us.](https://github.com/KashCal/KashCal)
