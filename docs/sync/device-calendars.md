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
2. Turn on **Show device calendars**. Android asks for calendar permission. KashCal asks
   to read and to edit your calendars in the same request.
3. Turn on each calendar you want with the switch on its row. Calendars are grouped
   by account, and all of them start off. Until you turn one on, the screen says "Pick
   calendars to show." The **Device calendars** row in Settings counts the ones you
   turned on, for example "2 enabled".
4. To hide an enabled calendar from your views without turning it off, tap its entry
   in the navigation drawer.

The switch stays off while KashCal doesn't have the permission. If you refuse and
Android won't ask again, turning the switch on opens KashCal's page in Android
settings instead. Allow calendar access there and go back: the switch turns on.

To look for calendars another app has added since, tap the refresh icon next to the
heading. When the phone holds no calendars, the screen says "No calendars found."

## Read-only calendars

A calendar is read-only when the app that owns it allows no changes. Its row says
"Read only (calendar is read-only)". The quick view of a read-only event offers
**Duplicate** and **Share** instead of **Edit** and **Delete**. So does every device
event when KashCal can read your calendars but not edit them.

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

KashCal sends reminders for device-calendar events too. To silence all of them, or one
calendar, open **Settings** and tap **Calendar notifications**. See
[Reminders](../events/reminders.md#device-calendar-reminders).

## How this differs from connecting an account

Connecting an [iCloud](./providers/icloud.md) or [CalDAV](./providers/caldav.md)
account makes KashCal sync those calendars with the server itself. **Device
calendars** shows calendars that another app already syncs on your phone. You can
use both at once, and pick whichever fits each calendar.

Device calendars work in one direction. KashCal doesn't copy the events of its own
calendars (Local, iCloud, CalDAV, feed and birthday calendars) into the phone's calendar storage, so other apps and launcher widgets
that read that storage don't see them. Use [KashCal's widgets](../features/widgets.md)
for those calendars.
