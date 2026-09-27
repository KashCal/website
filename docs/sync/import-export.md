---
sidebar_position: 8
title: Import & export (.ics files)
description: KashCal reads and writes standard .ics calendar files, so you can move events in or out and keep a portable copy of a calendar.
---

# Import & export

KashCal reads and writes standard `.ics` calendar files. Use them to move events in or
out, or to keep a copy of a calendar.

## Import an .ics file

1. Open **Settings**. Under **Backup & restore**, tap **Import events from file**, and
   pick an `.ics` file.
2. KashCal shows a preview of the events it found, with titles, dates and locations.
3. Choose the calendar to import into. The list shows only calendars you can write to.
4. Tap **Import**. For a file with one event, the sheet is titled **Add Event** and the
   button is **Add**.

When the import finishes, KashCal shows how many events it added, for example
"Imported 42 events".

Events in the file that have no reminder get your default alerts, the same as events
you create in KashCal. Reminders set in the file are kept.

### Open or share a file into KashCal

Open an `.ics` file from your file manager or an email attachment and choose KashCal,
or share the file to KashCal from another app. The same import preview opens.

### Import into a device calendar

The calendar list can also show writable calendars from other apps on your phone:

- From Settings, it shows every writable device calendar once KashCal has calendar
  permission.
- From a file you open or share into KashCal, it shows only the device calendars you
  turned on. See [Device calendars](./device-calendars.md).

### When an import doesn't start

KashCal shows an error instead of the preview when:

- the file can't be read,
- the file isn't a valid calendar file, or
- the file has no events.

If you have no calendar you can write to, the preview shows "No writable calendars
available" and **Import** stays disabled.

### Repeating events and files from other apps

A repeating event arrives as one linked series. Occurrences that were changed on their
own land as exceptions attached to the series, the same way they would if you'd edited
them in KashCal.

Some apps export events with a missing or empty unique ID. KashCal gives each of those
events its own ID, so they import as separate events and aren't folded into one series.

Every imported event gets a fresh ID. Importing the same file twice adds a second copy
and doesn't overwrite the first.

## Export to .ics

To export your whole local calendar:

1. Open **Settings**. Under **Backup & restore**, tap **Export Local calendar**.
2. KashCal writes the calendar's events to an `.ics` file and opens the system share
   sheet, so you can save the file or send it.

If the calendar has no events, KashCal shows "No events to export" and writes no file.

To export one event, open it, tap the menu, and choose **Export as .ics**. This works
for device calendar events too.

## Import vs. subscribe

Importing copies events once into a calendar you can edit. For a feed that keeps
updating itself, such as holidays or sports, use a
[calendar feed subscription](./ics-subscriptions.md).
