---
slug: kashcal-agenda-90-days-timeline-memory
title: "Ninety days ahead, and a timeline that remembers"
authors: [kashcal]
tags: [releases, announcements]
keywords:
  - kashcal release notes
  - kashcal changelog
  - android calendar agenda view
  - calendar timeline zoom android
  - agenda month header android
  - android calendar 90 day view
description: "KashCal 2026.07.13 widens the agenda to 90 days, adds a scroll-aware month header, remembers your timeline zoom across restart, and fixes the month view."
image: /img/social/home.png
---

Your agenda finally learned to read the room. Day in, day out, its top bar proudly announced "Agenda," heroically confirming that the agenda screen was, against all odds, the agenda screen. Thank you, brave label. It has now been reassigned.

{/* truncate */}

## The agenda knows what month it is

The top of the [agenda](/docs/calendar/views) now shows the month you're actually looking at, and keeps pace as you scroll, so August rolls into September without you wondering where the summer went. It's the same month header the week and month views use, now doing an honest day's work over here too.

And there's more of it to scroll: **ninety days ahead instead of thirty**, because your future has a way of arriving whether we render it or not. A full quarter, in one list, no swiping to the next screen to find out what October is holding.

## A timeline that remembers

The day, 3-day, and week timelines have been persuaded to stop having amnesia. Pinch to zoom the hours in or out to the density you like, and it now **stays exactly where you left it** after you close the app, rather than resetting to the default overnight and pretending the two of you never met.

It restores the zoom and the scroll position together, so you reopen at the same time of day, at the same size. This is per-device UI comfort, so it isn't dragged along in your settings backup, it just makes the phone in your hand feel like the one you were using yesterday.

## Back from 1969

The month and full-month views had a charming habit of opening in **December 1969** if you arrived from the agenda without tapping a day first. Lovely for nostalgia, useless for dentist appointments. It now opens in the current month, having been gently reminded which decade we are all living in.

## Everything in this release

- Agenda now shows the next 90 days of events instead of 30
- The agenda top bar shows the current month and updates as you scroll, replacing the static "Agenda" title
- The day, 3-day, and week timelines remember your pinch-to-zoom hour height across app restart
- Fixed the month and full-month views opening on December 1969 when no day was selected yet

No confetti this release, just a calendar that stops tripping over its own feet. Sweating the small stuff is our whole personality.

Want the flashy bits instead? [Take the KashCal Challenge](/blog/kashcal-challenge): find the one thing your old calendar can't do, tag **#KashCal**, and dare a friend to match it.
