---
sidebar_position: 7
title: Device calendars
description: Show the Google, Outlook and work calendars already on your phone next to KashCal's own, and create, edit and delete their events.
---

# Device calendars

Your phone can already hold calendars from other apps: a Google account, an Outlook
account, a work account. KashCal can show those calendars next to its own. This is how
you bring Google and Outlook calendars into KashCal.

Device calendars are off until you turn them on.

## Turn it on

1. Open **Settings**, then tap **Device calendars**.
2. Turn on the **Enable** switch. Android asks for calendar permission. KashCal asks
   to read and to write calendars at the same time.
3. Turn on each calendar you want with the switch on its row. Calendars are grouped
   by account, and all of them start off. The footer counts them, for example
   "2 / 5 enabled".
4. To hide an enabled calendar from your views without turning it off, tap its entry
   in the navigation drawer.

If the permission is missing, the screen shows "Calendar permission required. Tap
Enable to grant access." To look for calendars another app has added since, tap the
refresh icon next to the heading.

## Read and write access

With read permission only, KashCal shows the events but can't change them. The screen
shows **Read-only access** with "Grant write permission to edit device calendar
events" and **Grant**. Tap it to ask for write permission.

Some calendars are read-only whatever you grant, because the app that owns them
allows no changes. Each read-only calendar says why on its row: "Read only (no write
permission)" or "Read only (calendar is read-only)". The quick view of a read-only event offers
**Duplicate** and **Share** instead of **Edit** and **Delete**.

## What you can do with device events

On a writable device calendar you can:

- Create events. Pick the device calendar in the event form.
- Edit events, including one occurrence, this and all future occurrences, or the
  whole series of a repeating event.
- Move a one-time event to another device calendar. A repeating event stays in its
  calendar.
- Delete events, with the same three choices for a repeating event.
- Reply to invitations. See [Invitations](../events/invites.md).
- Add [tags](../events/tags.md#tags-on-device-calendar-events).
- [Import an .ics file](./import-export.md#import-into-a-device-calendar) into the
  calendar.

The ⋮ menu in the event's quick view also has **Duplicate**, **Share as text** and
**Export as .ics**.

KashCal writes these changes to the phone's calendar storage. The app that owns the
calendar, such as Google Calendar sync, sends them to its server.

## Reminders for device events

KashCal sends reminders for device-calendar events too. The **Reminders** switch
("Get notified for device calendar events") is on the **Device calendars** screen,
below the calendar list. It's on by default. See
[Reminders](../events/reminders.md#device-calendar-reminders).

## How this differs from connecting an account

Connecting an [iCloud](./providers/icloud.md) or [CalDAV](./providers/caldav.md)
account makes KashCal sync those calendars with the server itself. **Device
calendars** shows calendars that another app already syncs on your phone. You can
use both at once, and pick whichever fits each calendar.
