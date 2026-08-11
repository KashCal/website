---
sidebar_position: 6
title: Calendar feeds (ICS subscriptions)
description: Subscribe to ICS calendar feeds in KashCal, public holidays, team schedules, sports fixtures, and pick how often each one refreshes.
---

import Screenshot from '@site/src/components/Screenshot';

# Calendar feeds (ICS subscriptions)

<Screenshot src="/img/screenshots/ICS-Subscription.png" alt="Adding a calendar feed subscription in KashCal" align="right" caption="Paste a feed URL and pick how often it refreshes." />

Follow the calendars someone else keeps up to date: public holidays, your team's
fixtures, school terms, release dates, and more. These are free, read-only ICS
links, not paid subscriptions.

## Add a holiday calendar

The quickest way to get started is the built-in holiday catalog, so you don't have to
hunt for a URL:

1. Open Settings → **Calendar feeds (ICS)**.
2. Tap **Add holiday calendar**.
3. Search for your country and tap it to subscribe.

KashCal ships a catalog of national holiday calendars for many countries (some in
more than one language). Countries you're already subscribed to are marked **Added**.
Each one is a regular calendar feed, so it stays up to date on its own and follows all
the behavior below.

:::note[Where these come from]
The holiday calendars come from Mozilla Thunderbird's public holiday feeds, licensed
under CC BY-SA 3.0. KashCal only points at those feeds; it doesn't host the calendar
data itself.
:::

## Add any other feed

For a feed that isn't in the holiday catalog (a sports schedule, your school's term
dates, and so on):

1. Open Settings → **Calendar feeds (ICS)** → add a calendar.
2. Paste the feed's URL. It must start with `http://`, `https://`, or `webcal://`:
   > URL must start with http://, https://, or webcal://
3. Choose how often it should refresh.
4. Save.

KashCal checks for an existing subscription so you don't add the same feed twice.

### webcal:// links work too

Many sites offer a **Subscribe** or **Add to Calendar** button that hands your
device a `webcal://` link (Google Calendar, Apple Calendar, and lots of holiday
and sports feeds do this). KashCal is webcal compatible: tap one of those links
and it opens with the URL already filled in, so you just pick a refresh interval
and save. `webcal://` is the same feed as its `https://` version, just a
different label, so pasting either one works and previews the same events.

## How often feeds refresh

Pick the refresh interval that suits the feed:

- **Every hour**
- **Every few hours**
- **Daily**
- **Weekly**

A holiday calendar rarely changes, so **Weekly** is plenty; a frequently updated
feed might warrant **Daily** or hourly.

## Feeds are read-only

Events from a subscription show up alongside your other calendars, but you can't
edit them in KashCal. They belong to the source feed.

## Manage or remove a feed

Everything lives on the **Settings** → **Calendar Feeds** list, where each feed is a
single row:

- **Pause a feed** without deleting it: flip the switch on the row off. Its events
  stay hidden until you turn it back on, and the row shows **Sync paused**.
- **Refresh now:** tap the refresh button on the row to pull the latest events
  straight away, instead of waiting for the next scheduled check.
- **Edit a feed:** tap the row to change its name, color, or refresh interval.
- **Remove a feed:** swipe the row left. If you change your mind, tap **Undo** on the
  confirmation before it disappears:

> Subscription removed

## Where to find feeds

Many organizations publish ICS links: national holidays, your favorite team's
fixtures, school district calendars, and so on. Copy the feed's link and paste it
into KashCal.
