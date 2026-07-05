---
sidebar_position: 2
title: How sync works
---

# How sync works

KashCal is **offline-first**. Everything you do lands instantly on your device, and
KashCal quietly catches up with your servers in the background. You rarely have to
think about sync at all.

## What works offline

Even with no connection, you can:

- View all your events (from the last time you synced)
- Create, edit, and delete events
- Subscribe to and manage settings

Your changes are saved on your device right away and queued. The next time you're
online, KashCal sends them to your server automatically. If you're offline when you
make a change, you'll see:

> You're offline. Changes will sync when you're back online.

## When sync happens

KashCal syncs in several ways:

- **Pull to refresh**: pull down on any calendar view to sync immediately.
- **In the background**: on a schedule you can adjust (the shortest automatic interval Android allows is 15 minutes), or set to **Manual only**. The frequency control lives in [Advanced options](../help/advanced-options.md).
- **When your connection returns**: pending changes go out as soon as you're back online.

You control how far back in history to download, and how often background sync runs.

KashCal polls on a schedule; there's no server push. Changes made on the server show
up at the next scheduled sync, or right away when you pull down to refresh.

## Incremental and full sync

To save battery and data, KashCal normally fetches only what's **changed** since the
last sync. Occasionally a server needs a complete refresh, which KashCal handles
automatically. You can also start one yourself with **Force Full Sync**:

> This will re-download all calendar data from the server. Local changes will be
> preserved.

## How far KashCal syncs

By default KashCal keeps about a year of past events and looks far into the future,
so your history and upcoming plans are both covered. You can adjust how far back to
sync in Settings.

## If something goes wrong

Sync failures are reported clearly and retried automatically with sensible backoff.
For a connection that won't sync, see [Sync troubleshooting](../help/troubleshooting.md).
