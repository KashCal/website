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

When the import finishes, a message counts what happened, for example "3 added, 1
updated". It also counts events cancelled, already up to date, skipped or failed, when
there are any.

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

### Invitations and files you import again

KashCal matches each event in the file with the calendar you import into, by the
event's unique ID:

- An event the calendar doesn't have yet is added, unless the file marks it cancelled.
  If another calendar of the same account already holds it, a plain file adds a copy
  under a new ID, and an invitation is skipped. All offline calendars count as one account.
- In an [offline calendar](./offline-calendars.md), a newer version of an event it holds (by the file's
  sequence number, then its timestamp) from the same organizer updates it. The same or
  an older version changes nothing.
- In a synced or device calendar, an event it already holds stays as the calendar has
  it.

Importing the same file twice doesn't add a second copy.

An invitation file, one an organizer sends, keeps its organizer and guests, so you can
[reply to it](../events/invites.md) like an invitation that arrived by sync. A
cancellation file cancels the meeting, or the one occurrence it names, when the calendar
holds it. On a synced calendar, a cancellation of a meeting you organize is skipped:
cancel it from the event instead. A reply to an invitation adds nothing.

The preview lists what the import will change before you tap **Import**, for example
"This updates Team lunch" or "This cancels Team lunch, organized by alex@example.com",
how many events are already up to date, and what it skips and why. When you import an
invitation into a calendar that syncs, a note warns that the sender of the file can't be
verified. Other notes say when answering may notify the organizer, or when you're the
organizer and guests may get the invitation again. Offline calendars and device
calendars that stay on the phone get no notes, because nothing is sent from them.

## Export to .ics

To export a whole calendar:

1. Open **Settings**. Under **Backup & restore**, tap **Export calendars**.
2. A sheet lists every calendar KashCal keeps on the phone: your iCloud and CalDAV
   calendars, calendar feeds, birthdays and anniversaries, and offline calendars, in the
   same groups and order as the navigation drawer. Hidden calendars are listed too. Each
   row shows how many events the calendar holds.
3. Tap a calendar. KashCal writes its events to an `.ics` file and opens Android's share
   sheet, so you can save the file or send it.

The sheet stays open, so you can export one calendar after another. Swipe it
down or press Back to close it. A calendar with no events is greyed out and shows "No
events". While a file is being made, the other rows don't respond. If that takes more
than a moment, the row shows "Preparing…" and the other rows dim. If the file can't be
made, "Couldn't create the file." shows under the row, with **Try Again**.

Device calendars aren't in the list. Export a device calendar from the app that owns it,
or export its events one at a time.

You can also export an offline calendar from its own sheet. See
[Offline calendars](./offline-calendars.md#rename-recolor-or-export-a-calendar).

To export one event, open it, tap the menu, and choose **Export as .ics**. This works
for device calendar events too.

### What an exported file holds

Each event goes into the file with its repeat rule, its changed and deleted
occurrences, its reminders and its guests. An invitation keeps its organizer, each guest
and each guest's answer, yours included, on the series and on every changed occurrence,
so importing the file again brings them back. Event details KashCal doesn't show, such
as a structured location or meeting data from the app that made the event, are written
back as KashCal received them from the server or the file. Device calendar events export without guests.

## Import vs. subscribe

Importing copies events once into a calendar you can edit. For a feed that keeps
updating itself, such as holidays or sports, use a
[calendar feed subscription](./ics-subscriptions.md).
