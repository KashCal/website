---
sidebar_position: 5
title: Advanced options
description: Open KashCal's hidden advanced menu to force a full sync or view your recent sync history.
keywords: [advanced options, developer options, debug menu, sync history, force full sync, sync logs]
---

# Advanced options

KashCal keeps a few diagnostic tools tucked away so they don't clutter everyday
use. They're handy when sync is misbehaving and you want to see what happened or
give it a push.

## Opening the menu

1. Open **Settings** and scroll to the very bottom.
2. **Long-press the version number** (the "KashCal v..." line in the footer).

A sheet slides up (labeled **Developer Options** in the app).

## What's in it

- **Force Full Sync.** Re-downloads all calendar data from your servers. Your local
  changes are preserved. Useful if something looks out of date or a calendar seems
  stuck.
- **Sync History.** Shows your most recent sync sessions: how long each took, how many
  events were pushed, pulled, skipped, or failed, and any warnings. KashCal keeps a
  week of history and shows the latest hundred sessions. This is the first place to
  look when sync isn't behaving, and the best thing to attach (with personal details
  removed) when you [report a sync bug](./report-a-bug.md).

:::note[Sync frequency moved]
Choosing how often background sync runs used to live here. It's now a regular
**Sync frequency** row in Settings, under **Notifications & sync**. See
[Settings](../features/settings.md#notifications--sync).
:::

## When you'd use it

Most people never need this menu. Reach for it when:

- A change isn't showing up and you want to force a fresh pull (**Force Full Sync**).
- You're chasing a sync problem and want to see what actually happened (**Sync History**).
