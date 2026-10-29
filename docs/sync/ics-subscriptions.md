---
sidebar_position: 6
title: Calendar feeds (ICS subscriptions)
description: Subscribe to ICS calendar feeds in KashCal, such as public holidays, team schedules and sports fixtures, and set how often each one refreshes.
---

import Screenshot from '@site/src/components/Screenshot';

# Calendar feeds (ICS subscriptions)

<Screenshot src="/img/screenshots/add-feed.png" alt="Adding a calendar feed subscription in KashCal" align="right" caption="Paste a feed URL, then set how often it refreshes." />

A calendar feed is a calendar someone else keeps up to date: public holidays, your team's
fixtures, school terms, release dates. Feeds are free, read-only ICS links, not paid
subscriptions.

## Add a holiday calendar

The holiday catalog saves you hunting for a URL:

1. Open Settings → **Calendar feeds (ICS)**.
2. Tap **Add holiday calendar**.
3. Search for your country and tap it.

KashCal checks that the feed can be reached, then subscribes. The catalog has 86 feeds
for 77 countries, and seven countries come in more than one language. Countries you
already follow are marked **Added**. Each holiday calendar is a regular feed and follows
the rules on this page.

:::note[Where these come from]
The holiday calendars come from Mozilla Thunderbird's public holiday feeds, licensed
under CC BY-SA 3.0. KashCal points at those feeds. It doesn't host the calendar data.
:::

## Add any other feed

For a feed that isn't in the holiday catalog, such as a sports schedule or your school's
term dates:

1. Open Settings → **Calendar feeds (ICS)**.
2. Tap **Add ICS Calendar**.
3. Paste the feed's address into **Calendar URL**. It starts with `http://`, `https://`,
   `webcal://` or `webcals://`.
4. Tap **Fetch Calendar**. KashCal downloads the feed and shows how many events it
   found, for example "Found: 42 events". If the feed can't be read, it shows the error
   instead.
5. Check the name KashCal filled in from the feed. To change the color, tap **Color:**.
6. Tap **Add**.

**Add** stays disabled until the fetch succeeds. Every feed starts with a daily
refresh. To change that, edit the feed after you add it (see [How often feeds refresh](#how-often-feeds-refresh)).

If you already follow the same URL, KashCal doesn't add it again and shows "Already
subscribed to this URL".

### webcal:// links

Google Calendar, Apple Calendar and many holiday and sports sites have a Subscribe or
Add to Calendar button that hands your phone a `webcal://` link. Tap one and open it
with KashCal. The add sheet opens with the URL filled in. Tap
**Fetch Calendar**, then **Add**. A `webcal://` address is the same feed as its
`https://` version, so pasting either one gives the same events.

### Feeds on your home network

On Android 17 and newer, apps need your permission to reach devices on your local
network. When a feed's URL points to an address on your own network, or the fetch fails
to connect, the add sheet shows a **Local network access needed** banner. Tap **Allow access** to
grant it, or **Not now** to hide the banner. The banner doesn't block the form. Without
the permission, KashCal can't reach a feed at an address like `192.168.1.10`.

## Add a feed from your account

Your iCloud or CalDAV account can hold calendar feeds you subscribed to in another app.
KashCal lists them so you can add the ones you want:

1. Open Settings → **Calendar feeds (ICS)**.
2. Tap **Add from account**. The button shows when you have an iCloud or CalDAV account
   in KashCal.
3. The sheet has a section for each of those accounts, with its name and a shortened
   email such as `s***@example.com`, and asks each server for its feeds. Each feed
   shows its color, its name and the site that hosts it. A feed the server gave no name
   shows the site instead.
4. Turn on a feed's switch to add it.

The feed is added with the server's name and color, or a color KashCal picks when the
server gave none. It starts with a daily refresh and follows the rules on this page.
KashCal adds it even when the first download fails; the feed's row then shows the error.

A feed's switch is on whenever **Calendar Feeds** has a feed with the same address,
however you added it. Turning the switch off removes every feed with that address at once, with
its events; the sheet has no **Undo**.

A section shows **No calendar feeds found** when the server lists no feed with a web
address KashCal can use. It shows **Couldn't load calendar feeds** when the request fails,
for example when the server can't be reached or refuses the sign-in, or when the server
doesn't answer within 20 seconds. Tap **Retry** to ask that server again. KashCal asks
every time you open the sheet. Feeds you add from it don't depend on the account
afterwards: each one is fetched from its own URL, like any other feed.

## How often feeds refresh

Each feed has its own refresh interval:

- Every hour
- Every 6 hours
- Every 12 hours
- Daily (the default)
- Weekly

To change it, tap the feed's row, pick an interval under **Sync Interval:**, then tap
**Save**.
A holiday calendar rarely changes, so weekly is enough. A feed that changes during the
day suits a shorter interval.

## Feeds are read-only

Events from a feed show up alongside your other calendars. You can't edit them in
KashCal, because they belong to the source feed.

## Manage or remove a feed

Each feed is a row on the **Calendar Feeds** screen:

- Pause a feed: turn off the switch on its row. The row shows **Sync paused**.
  KashCal stops refreshing the feed. Its events stay on your calendar, and their
  reminders still fire. To silence them,
  [mute the feed's calendar](../events/reminders.md#mute-a-calendar). To hide them, turn
  the calendar off in the navigation drawer. Turn the switch back on to refresh the feed.
- Refresh a feed: tap the refresh button on the row to fetch its events without
  waiting for the next scheduled refresh.
- Edit a feed: tap the row to change its name, color or refresh interval.
- Remove a feed: swipe the row left (right in a right-to-left language) to show a red
  **Delete** button, then tap it. KashCal shows "Subscription removed". Tap **Undo** to
  keep the feed. Otherwise, when the message closes, KashCal deletes the feed's calendar
  and its events. One row stays open at a time. Swiping it back or scrolling the list
  closes it without deleting. While it's open, tapping a row, a switch or a refresh
  button only closes it; an add button closes it and opens its sheet. With TalkBack,
  **Delete** is an action on the feed's row.

## Where to find feeds

National holiday services, sports teams, school districts and event sites publish ICS
links. Copy the feed's link and paste it into KashCal.
