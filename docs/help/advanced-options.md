---
sidebar_position: 5
title: Troubleshooting tools
description: Use the Troubleshooting section in Settings to view sync history, force a full sync, or export a debug report for a bug report.
keywords: [troubleshooting, debug report, sync history, force full sync, sync logs, bug report]
---

# Troubleshooting tools

The last section of Settings, **Troubleshooting**, has three tools for when sync
misbehaves or KashCal closes on its own. To find it, tap the avatar in the top-right
corner, tap **Accounts & Settings**, then scroll to **Troubleshooting**.

## Sync history

**Sync history** lists the sync sessions of the last 48 hours, up to 200 of them. Each
session shows its calendar, how many events were pushed and pulled, and any failures.
Tap a session for details such as its duration, skipped events and warnings.

## Copying or clearing the history

The **Sync History** sheet has two icon buttons at the top:

- The copy button (two overlapping pages) copies the history as text. The text includes
  your calendar names, so check it before you share it.
- The trash can button clears all sessions right away, with no confirmation.

:::note[Sync frequency]
How often background sync runs is set in Settings, under **Sync**, with the
**Sync frequency** row. See [Settings](../features/settings.md#sync).
:::

## Force full sync

**Force full sync** downloads all calendar data from your servers again. KashCal first
asks **Force Full Sync?** Tap **Sync Now** to start, or **Cancel**. Your local changes
are kept.

## Debug report

**Export debug report** makes a text file to send with a
[bug report](./report-a-bug.md):

1. Tap **Export debug report**. A sheet titled **Debug report** lists what the file
   holds.
2. Tap **Share report**, then pick where to send it in Android's share menu, such as
   your email app. **Cancel** closes the sheet without making a file.

The file holds:

- **Why the app closed recently:** each time Android recorded KashCal closing, and
  why, such as a crash, a freeze or low memory.
- **App log:** KashCal's own messages, including crash details.
- **Sync history:** the sessions in **Sync history**, up to 48 hours back.
- **Waiting changes:** how many edits aren't sent to your server yet. For each one that
  failed or that KashCal gave up on, the event's title, its calendar and the error.
- **Setup:** the app and Android version, phone model, language, permissions, battery
  settings, account types, last sync times, and counts of calendars, feeds and events.

KashCal makes the file only when you tap **Share report**, and sends it only where you
send it. Each new report replaces the last one, which stays in KashCal's cache on the
phone. Email addresses, web addresses, IP addresses and tokens in it are masked. Event
titles, calendar names and contact names aren't, so send it by email, not in a public
post.

Send it soon after the problem. The app log keeps only recent activity, so a report
made later can lack the messages from the time of the problem. If the file can't be
made, KashCal says "Couldn't create the debug report".

## When you'd use them

- A change isn't showing up or a calendar seems stuck, and you want a fresh pull:
  **Force full sync**.
- You're chasing a sync problem and want to see what happened: **Sync history**.
- KashCal crashed or a sync keeps failing and you're filing a bug: **Export debug
  report**.
