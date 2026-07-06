---
sidebar_position: 5
title: Calendar feeds (ICS subscriptions)
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

1. Open **Settings** → **Calendar Feeds**.
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

1. Open **Settings** → **Calendar Feeds** → add a calendar.
2. Paste the feed's URL. It must start with `http://`, `https://`, or `webcal://`:
   > URL must start with http://, https://, or webcal://
3. Choose how often it should refresh.
4. Save.

KashCal checks for an existing subscription so you don't add the same feed twice.

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
edit them in KashCal. They belong to the source feed. To stop following a feed,
remove the subscription (with an undo option if you change your mind):

> Subscription removed

## Where to find feeds

Many organizations publish ICS links: national holidays, your favorite team's
fixtures, school district calendars, and so on. Copy the feed's link and paste it
into KashCal.
