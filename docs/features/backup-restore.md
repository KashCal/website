---
sidebar_position: 7
title: Backup & restore settings
description: Save your KashCal settings, feeds and tag colors to a JSON file and restore them on the same phone or a new one.
---

# Backup & restore settings

KashCal saves your settings to a file and reads them back later. Use it to set up a new
phone, or to keep a copy before you change a lot of options. A backup holds settings,
not events. Your events come back when you add your accounts again.

## What's in a backup

A backup is one JSON file. Its name is `kashcal-backup-` followed by the date and
time. It holds:

- Your preferences: calendar view and display options, time format, first day of
  the week, event defaults and default reminders, sync settings, theme and accent
  color, widget theme and accent color, widget options, notification sound and
  vibration, Smart event add and title suggestions, and the birthday and anniversary
  switches and reminders (not their calendar colors).
- Share availability settings: the number of days, your working hours, and whether
  all-day events count.
- Your avatar initials.
- Tag colors: each tag you gave a color, with its name.
- Your calendar feeds: each ICS feed's address, name, color, refresh interval,
  whether it's paused, and its username if it has one.
- The device calendars switches: whether device calendars and their reminders are
  on.

## What's not in a backup

- Account passwords. Your iCloud and CalDAV credentials are encrypted for this phone
  and never go in the file. On a new phone you sign in again. See
  [Privacy & Security](../privacy/overview.md).
- Feed passwords. A feed's username comes back. On a new phone you enter its password again.
- Which device calendars you picked. Those IDs belong to one phone.
- Your default calendar. It points to a calendar on this phone, so you pick it
  again after a restore.
- The **App lock** setting. Each phone has its own lock.
- Events. They live on your accounts, or in the Local calendar. To move Local
  events, [export them to .ics](../sync/import-export.md#export-to-ics).
- Internal state, such as last-sync times and which tips you've seen.

## Back up

1. Open **Settings**.
2. Under **Backup & restore**, tap **Back up settings** ("Save KashCal configuration to
   a JSON file").
3. Pick where to save the file.

## Restore

1. Open **Settings**.
2. Under **Backup & restore**, tap **Restore settings** and pick your backup file.
3. KashCal shows **Restore backup?** with the KashCal version and the time the backup
   was made, plus what it will import. Tap **Restore**.
4. KashCal shows **Restore complete** when it's done.

What a restore changes:

- Each setting in the file replaces the one on the phone.
- Feeds merge with the ones you have. A feed with the same address is updated from the
  file. A feed that isn't on the phone is added. No feed is removed.
- Tag colors from the file are applied. A tag that isn't on the phone is added.

If the backup turned on device calendars, the success message reminds you to select
your device calendars again.

KashCal refuses a file it can't read and shows **Restore failed** with the reason, such
as a backup made by a newer version of KashCal.

After restoring on a new phone, add your calendar accounts again. Your events come
back with the first sync.

## Related

- [Import & export](../sync/import-export.md): move events in and out as .ics files
- [Settings](./settings.md): every setting and its default
