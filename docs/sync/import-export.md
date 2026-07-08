---
sidebar_position: 7
title: Import & export (.ics files)
---

# Import & export

Sometimes you just need a file. KashCal reads and writes standard `.ics` calendar
files, which is handy for moving events in or out, or keeping a copy of a calendar.

## Import an .ics file

1. Open **Settings** → **Import** and pick an `.ics` file from your device.
2. KashCal shows a preview of the events it found, with titles, dates, and locations.
3. Choose which calendar to import into (it must be a writable calendar).
4. Confirm the import.

If some events can't be imported, KashCal tells you how many succeeded and how many
failed:

> Imported 42 events, 3 failed.

Common reasons an import won't start:

- **No writable calendars**: you need at least one calendar you can add to.
- **File not found or cannot be read.**
- **Invalid calendar file format.**

## Export to .ics

To export your whole local calendar:

1. Open **Settings** and tap **Export Local calendar**.
2. KashCal writes its events to an `.ics` file and opens the system share sheet, so
   you can save it or send it anywhere.

If the calendar has no events, there's nothing to export:

> No events to export.

To export a single event instead, open the event and choose **Export as .ics** from
its menu.

## Import vs. subscribe

Importing copies events **once** into a calendar you can edit. If you instead want a
feed that keeps updating itself (like holidays or sports), use a
[calendar feed subscription](./ics-subscriptions.md).
