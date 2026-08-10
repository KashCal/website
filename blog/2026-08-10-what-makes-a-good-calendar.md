---
slug: what-makes-a-good-calendar
title: "What makes a good calendar?"
authors: [kashcal]
tags: [behind-the-scenes, features]
keywords:
  - what makes a good calendar app
  - best calendar app android
  - best free calendar app android
  - open source calendar android
  - material you calendar android
  - natural language calendar android
  - private calendar app android
  - caldav calendar app
  - google calendar alternative
description: "Someone asked us what makes a calendar good. Not a feature list: a good calendar is a pleasure to open, gathers all your calendars in one place, and stays yours."
image: /img/social/blog/what-makes-a-good-calendar.png
---

Someone asked us the other day, "What makes a good calendar?" Not which app, not
which features. Just: what makes one *good*. We started to answer with a list and
stopped, because a list is the easy version of the question and a bad answer to it.
So we sat with it for a while.

Here's the short version of where we landed. You reach for a calendar in small,
unglamorous moments, to jot down that the dishes are your job tonight or that the
dentist moved you to Thursday. A good one makes those moments easier and doesn't add
a chore of its own. Everything below is a version of that idea, and you can see each
part of it in KashCal.

{/* truncate */}

## It's a pleasure to open, not a chore

You'll open your calendar thousands of times this year. It should be a small pleasure
each time, not something you brace for. So a good calendar cares how it looks and how
it moves, because that's most of how it feels to use.

KashCal is built on Material 3 with full **Material You** support, so on Android 12
and newer it takes its colors from your wallpaper and looks like it belongs on your
phone, not ported from something older. It runs edge to edge. Its dark mode is [designed
dark](/features/beautiful-calendar-android), not a washed-out flip of the light one.
Scrolling, pinching, and swiping move the way the rest of your phone does. The small
touches add up: type "lunch" and it finds you a plate, press and drag an event to a
new time, pinch the timeline to stretch the hours to the density you like.

And it gives you the day in whatever shape you need. [Seven
views](/docs/calendar/views), each built for a real job: a readable agenda for the
morning, an hour-by-hour day for a busy one, the whole month when you're planning
ahead, a year when you're looking further out. You switch between them in a tap.

## It gets out of your way

The best calendar is the one you barely have to open. Every time you stop to consult
it is a small tax on the plan you were making. So the good ones fade into the
furniture.

KashCal puts your day where you're already looking: a [home-screen
widget](/docs/features/widgets) that shows today at a glance, so "am I free Thursday?"
is answered without opening anything at all. When you do open the app, it's there
right away, on the day you're on, ready for the next thing. It gets in, does the job,
and leaves you alone.

## It shows you your whole life, not a slice of it

Your days don't live in one place. Family plans are on iCloud, work is on a server
your company runs, holidays came from a link you subscribed to years ago, and
birthdays are hiding in your contacts where you'll forget them until the day after.
A calendar that only knows about one of those isn't showing you your schedule. It's
showing you a corner of it and letting you assume that's all there is.

A good calendar gathers the corners. KashCal puts iCloud, [any CalDAV
server](/docs/sync/supported-servers), the calendars other apps already keep on your
phone, [birthdays from your contacts](/docs/features/birthdays), and [subscribed
feeds](/docs/sync/ics-subscriptions) onto one screen, then gets out of the way. The
point isn't the length of that list. It's that after you connect them once, you stop
holding the running total in your head.

## It lets you write like a person

Nobody thinks in form fields. You think "coffee with Sam tomorrow at 3," and then a
calendar makes you translate that into a title box, a date picker, a start time, an
end time, and a save button. That translation is friction, and friction is where
plans go to die.

A good calendar meets you in plain language. In KashCal you type [*"Coffee with Sam
tomorrow 3pm"*](/docs/events/smart-event-add) and watch it turn into a real event as
you go, the title, the date, and the time each landing where they belong. Type
*"Standup every weekday at 9am"* and it repeats. What matters isn't how clever that is
under the hood. It's that you can catch a plan in the two seconds before it slips your
mind.

## It doesn't live in someone else's cloud

For most calendars, the app on your phone is a window onto an account somewhere else.
Your events live on a company's servers, and the phone shows you a copy. It only
exists because you signed in, and the day you stop signing in, it's empty.

KashCal starts from the other end. Your calendar lives on your device, and it works
with no account at all: install it, start adding events, done. Connect iCloud or a
[CalDAV server](/docs/sync/supported-servers) when you want your events on your other
devices, and KashCal is [offline-first](/docs/sync/how-sync-works) about it, so
everything you do lands on the phone the instant you do it and catches up with your
server later. A plane, a basement, a dead signal, none of it stops you from writing
down a plan. The sync is something you add to a calendar that already works, not the
thing holding it up.

## It's yours

That independence has a quieter payoff. A calendar knows your interviews, your
doctor's appointments, your "lunch??", and who you're seeing on Friday night. That's
about as personal as data gets, and because KashCal has [no account and no servers of
its own](/docs/privacy/overview), there is, quite literally, nowhere for us to send
it. Your events stay on your device and sync only with the servers *you* chose.

Yours to trust, too. Every permission the app asks for is [listed with the reason it
needs it](/docs/privacy/overview#permissions-and-why-each-is-needed), and it asks in
context, when you turn on the feature that needs it, not all at once at the door. The
whole thing is [open source under Apache-2.0](https://github.com/KashCal/KashCal), so
"we don't track you" is something you can check rather than a promise you have to take.

And yours to make your own. Tap the avatar in the corner to open the account hub, set
your [initials](/docs/calendar/navigation#the-account-hub), and under **Make it
yours** dress the app the way you like: light or dark, your [accent
color](/docs/calendar/navigation#the-account-hub) from your Material You wallpaper or a
wheel of 92, even a different [app icon](/docs/calendar/navigation#the-account-hub) on
your home screen. It reads in [67 languages](/docs/features/languages), following
whatever your phone is set to. A calendar you look at every day should feel like it
belongs to you.

## So, what makes a good calendar?

Not the length of a feature list. A good calendar is a pleasure to open, gets out of
your way, shows all of your time in one place, lets you write like a person, doesn't
live in someone else's cloud, and stays yours because it is. Most of that is invisible
when it's done well, which is probably why it's easier to ask the question than to
answer it.

That's what we're building. If you want to see whether we got it right,
[install KashCal](/docs/getting-started/install), it's free, and there's no account in
the way. Then tell us the part we missed, because someone asking a good question is how
this one started.
