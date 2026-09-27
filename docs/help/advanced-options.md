---
sidebar_position: 5
title: Advanced options
description: Open KashCal's hidden advanced menu to force a full sync or view and copy your recent sync history.
keywords: [advanced options, developer options, debug menu, sync history, force full sync, sync logs]
---

# Advanced options

KashCal keeps two diagnostic tools out of the way of everyday use. Use them when sync
misbehaves and you want to see what happened or start over.

## Opening the menu

1. Open **Settings** and scroll to the bottom.
2. Long-press the version line ("KashCal v" followed by the version number) at the bottom.

A sheet titled **Developer Options** opens. A short tap on the version line opens a
short sheet about the app instead, with a **Keep it that way** donation button and a link to
kashcal.onekash.org.

## What's in it

- **Force Full Sync** re-downloads all calendar data from your servers. KashCal first
  asks **Force Full Sync?** Tap **Sync Now** to start, or **Cancel**. Your local changes
  are kept.
- **Sync History** lists the sync sessions of the last 48 hours, up to 200 of them. Each
  session shows its calendar, how many events were pushed and pulled, and any
  failures. Tap a session for details such as its duration, skipped events and
  warnings.

## Copying or clearing the history

The **Sync History** sheet has two icon buttons at the top:

- The copy button (two overlapping pages) copies the history as text. Paste it into a
  [bug report](./report-a-bug.md) for a sync problem. The text includes your calendar
  names, so check it before you share it.
- The trash can button clears all sessions right away, with no confirmation.

:::note[Sync frequency]
How often background sync runs is set in Settings, under **Sync**, with the
**Sync frequency** row. See [Settings](../features/settings.md#sync).
:::

## When you'd use it

- A change isn't showing up or a calendar seems stuck, and you want a fresh pull:
  **Force Full Sync**.
- You're chasing a sync problem and want to see what happened: **Sync History**.
