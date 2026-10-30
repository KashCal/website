---
sidebar_position: 7.5
title: Offline calendars
description: Calendars that stay on your phone and never sync. Create, rename, recolor, delete and export them in KashCal, with no account.
---

# Offline calendars

Offline calendars are KashCal's own calendars. They stay on your phone and never sync to a
server. KashCal starts with one, **Local**, and you can add more, for example one for trips
and one for a project.

In the navigation drawer and in the event form's calendar list they come last, under
**Offline**.

KashCal keeps offline calendars in its own private storage, not in Android's shared calendar
storage. Other apps on your phone can't read them, even apps with calendar permission, and
they don't show in other calendar apps or their widgets. They leave the phone only in
Android's own backup and phone-to-phone transfer, when you share or export an event or a
calendar, when you move or copy an event to a calendar that syncs, or when
[automatic calendar backup](../features/backup-restore.md#automatic-calendar-backup) saves
them to a folder in a cloud storage app. The files that backup saves sit in the folder you
chose, where other apps that can open that folder can read them.

## Open the list

Open **Settings**, then tap **Offline calendars** under **Calendars & accounts**. The row's
subtitle reads "Calendars that stay on this phone" until you add a calendar, then it counts
them.

The screen lists each offline calendar in alphabetical order, with its color and how many
events it holds. A repeating event counts once. The calendar new events go to by default has a tinted row,
and TalkBack reads "Default" for it.

Above the list, a line reads "Swipe a calendar to delete it." Tap the ⓘ next to it to read
why to export: offline calendars aren't on a server, and a settings backup doesn't include
events.

## Create a calendar

1. Tap **New calendar** below the list.
2. Type a name. The cursor starts in **Name** with the keyboard up.
3. Keep the color KashCal picked at random, or tap the **Color:** row and pick another. A
   swatch, or **Done** after **More colors**, picks it and closes the palette.
4. Tap **Create**, or the keyboard's Done key.

Each offline calendar needs its own name. Case and spaces at either end don't count, so
"trips" and "Trips " both match "Trips". KashCal then says, with the name you typed, "An
offline calendar named "trips" already exists" under the field and keeps the
sheet open. The built-in calendar's name counts in the language your phone shows it in.

Two names also can't differ only in characters a file name leaves out, because each
calendar has its own [backup file](../features/backup-restore.md#files-and-copies). KashCal
keeps letters, numbers and hyphens and treats spaces as hyphens, so "Work!" and "Work-" both
clash with "Work". It then says "Too similar to "Work". Choose a different name." with the
other calendar's name. A name made only of other characters, such as emoji, is allowed.

You can also create one while you edit an event: tap the calendar row in the event form, then
**New offline calendar** at the end of the **Offline** group. The new calendar becomes the
event's calendar, and what you typed in the form stays.

## Rename, recolor or export a calendar

Tap a calendar in the list. A sheet opens with its name at the top:

- **Rename**: the row turns into a name field. Tap the check mark or the keyboard's Done
  key to save, or the ✕ to keep the old name. The same name rules apply as when you create
  a calendar.
- **Color**: a palette opens below the row. Tap a color, or pick one with **More colors**
  and **Done**, and the calendar takes it at once and the palette closes. Its events that
  have no color of their own follow it.
- **Export calendar**: closes the sheet and opens Android's share sheet with the calendar as
  an `.ics` file. It's greyed out while the calendar has no events. See
  [Import & export](./import-export.md#export-to-ics).

The built-in **Local** calendar has no **Rename** and can't be deleted. Its sheet has an ⓘ
that says so.

## Delete a calendar

1. Swipe the calendar's row left (right in a right-to-left language) to show **Delete**.
   With TalkBack, use the row's action named after the calendar, for example "Delete
   Trips".
2. Tap **Delete**. The row turns into a confirmation in place.
3. For a calendar with events, tick the box with its event count, for example "Also delete
   12 events", then tap **Delete**. **Delete** stays greyed out until the box is ticked. For
   an empty calendar, tap **Delete**.

Deleting removes the calendar and its events for good, with no undo, and cancels their
reminders. If it was your default calendar, **Local** becomes the default. TalkBack announces
the deletion. Tap **Cancel** to keep the calendar.

To keep a copy first, export the calendar. Files that automatic calendar backup saved for it
stay in the backup folder.

## What offline calendars can't do

- They can't send meeting invitations. See
  [Known limitations](../help/known-limitations.md).
- A KashCal settings backup doesn't include them. To keep a copy, turn on
  [automatic calendar backup](../features/backup-restore.md#automatic-calendar-backup). To
  move them to another phone, export each one, or copy the backup files, create the
  calendars there, and import each file into its calendar.

## Related

- [Import & export](./import-export.md): bring events in from an `.ics` file, or save a
  calendar to one
- [Event colors](../events/colors.md): give single events their own color
- [Settings](../features/settings.md): every row on the Settings screen
