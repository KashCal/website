---
sidebar_position: 6
title: Backup & restore settings
---

# Backup & restore settings

KashCal can tuck your **settings** into a file and bring them back later. Handy for
setting up a new phone, or for keeping a safety net before you experiment with
options.

## What's in a backup

A backup is a single **JSON file** containing:

- **Your preferences**: things like first day of the week, time format, default
  event length, default reminders, theme, sync settings, widget event limit, and
  your birthday/anniversary preferences.
- **Your calendar feed subscriptions**: the ICS feeds you've added, with their
  names, colors, and refresh intervals.

## What's *not* in a backup (on purpose)

- **Account passwords**: your iCloud and CalDAV credentials are encrypted to your
  specific device and are never written to the backup. On a new phone, you re-enter
  them. This is a deliberate safety measure (see [Privacy & Security](../privacy/overview.md)).
- **Device calendar selections**: these refer to calendars specific to one phone.
- **App lock setting**: it's tied to your device's biometric/lock.
- **Behind-the-scenes state**: like last-sync times.

## Back up

Open **Settings** → **Back up settings** to save the JSON file:

> Save KashCal configuration to a JSON file

## Restore

Open **Settings** → **Restore settings**, pick your backup file, and confirm. KashCal
shows you which version and date the backup came from before restoring, and confirms
when it's done:

> Restore complete

After restoring on a new device, add your calendar accounts again to bring your
events back via sync.
