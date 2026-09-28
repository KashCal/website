---
sidebar_position: 2
title: How sync works
description: "KashCal is offline-first: your changes save on the phone at once and sync with your CalDAV servers in the background. Here's when and how."
---

# How sync works

KashCal is offline-first. Every change saves on your phone at once, and KashCal
sends it to your server in the background.

## What works offline

With no connection, you can:

- View your events, as of the last sync
- Create, edit and delete events
- Change settings

KashCal saves each change on your phone and queues it. When you're back online, it
sends the queue to your server. If you pull down to refresh while offline, KashCal
shows:

> You're offline. Changes will sync when you're back online.

## When sync happens

- When you open KashCal, and each time you come back to it from another app.
- After every change to an event in an iCloud or CalDAV calendar. KashCal sends
  the change right away, or as soon as you're back online.
- When you pull to refresh: pull down on any calendar view.
- From a widget: tap the refresh button on the Today's Agenda, Week View or
  Upcoming widget.
- In the background, on the **Sync frequency** schedule in
  [Settings](../features/settings.md#sync). With **Manual only**, background sync
  stops.

Servers don't push changes to KashCal. A change made elsewhere appears at the next
of these syncs.

Sync on open runs quietly. Pull to refresh shows a spinner. The status strip at the
top of the calendar ("Syncing calendars…") appears for the first sync of a new
account and for a Force Full Sync, and ends with "Sync complete" or "Sync failed"
and the reason. If any sync started while KashCal is open finishes but some
calendars fail, the strip shows "Sync complete with errors", even for a quiet sync.

## What changed

When a sync brings in changes from the server, a message at the bottom of the screen
sums them up, for example "New event: Team lunch", "3 events updated" or "5 calendar
updates". Tap **View** to open the **Sync Changes** sheet and see each change.

## Incremental and full sync

To save battery and data, KashCal fetches only what changed since the last sync. When a
server can't answer that, KashCal compares the whole calendar with the server on its
own.

To force a full download, open the [Advanced options](../help/advanced-options.md)
menu (long-press the version number at the bottom of Settings) and tap **Force Full
Sync**. KashCal asks first:

> This will re-download all calendar data from the server. Local changes will be
> preserved.

Tap **Sync Now** to start. When the sync ends, a notification reports the result.

The same menu has **Sync History**, which lists the sync sessions of the last 48
hours.

## How far KashCal syncs

KashCal downloads all future events, up to the year 2100. For the past, it keeps one year by default. Set
this with **Sync lookback** in [Settings](../features/settings.md#sync). Widening the
lookback starts a full sync to fetch the older events. Narrowing it removes one-time
events from your accounts and calendar feeds that ended before the new lookback.
Repeating events and their changed occurrences stay, as do events with changes not yet
sent, events in local calendars, and birthdays and anniversaries. The server keeps its
copies. A feed that lists changed occurrences without their repeating event is the
exception: those occurrences go when the earliest original date among them is before the
new lookback. A calendar feed adds its older events back the next time it downloads a
changed feed, and an account adds an older event back if it changes on the server.

## When your change and the server's copy differ

If the event changed on the server after your last sync, the server refuses your
change. KashCal then fetches the server's copy and applies your changes to it: each
detail you changed (the time, the title, a guest you added or removed) takes your
value, and everything else keeps the server's, such as a guest's reply or an edit made
on another device. If the server refuses that version too, KashCal replaces your
change with the server's version. If the event was deleted on the server, KashCal
deletes it on your phone too. If KashCal can't get the server's
version for three syncs, it drops your change and shows a notification. When one
event is affected, the notification names it:

> Local changes to "Team lunch" were lost due to sync conflict. Server version will be
> used.

A change that can't reach the server for 30 days is dropped the same way, and a
notification tells you.

## If something goes wrong

KashCal retries a failed sync on its own and waits longer between each try. If some
events can't be read from the server, a notification says "Some events couldn't be
synced" and names the calendar. For a connection that won't sync, see
[Sync troubleshooting](../help/troubleshooting.md).
