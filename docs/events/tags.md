---
sidebar_position: 6
title: Tags
description: "Label events with colored tag chips in KashCal. Add them in the form or with #tag, and rename, recolor or remove them in one place."
---

import Screenshot from '@site/src/components/Screenshot';

# Tags

Calendars group your events by where they're stored. Tags label them by what they
are: `#focus`, `#dentist`, `#standup`, `#travel`. A tag shows as a small colored chip
on the event, so you can pick out one kind of event across your week.

## Adding tags

You can add a tag three ways:

- In the [event form](./event-form.md): tap **New tag** (or the + after your
  tags), then type a name or pick one from the list. The list shows your 20 most
  recently used tags, newest first. Typing filters it, and the last row, Create "…",
  adds the name you typed.
- In the title field: type `#` at the end of the title and KashCal suggests your existing
  tags, plus a Create "…" row for a name you haven't used. Pick one and it moves out of
  the title into the event's tags.
- In [Smart event add](./smart-event-add.md): put `#` in front of a word, like
  `Lunch with Sam #social`. KashCal takes `#social` as a tag and the rest becomes the
  event. You can add more than one tag, and a tags-only entry like `#work` works too. A
  Smart event add tag is one word of letters, digits, `-` or `_`, and it has to come
  before any `//` note.

## Where tags show up

An event's tags show as chips in the quick view when you tap the event, and in the
tag row of the event form. For the calendar views that show chips, see
[Tag chips](../calendar/views.md#tag-chips).

The tag row sits below the notes in the form. To move it above the notes, tap the
⋮ at the end of the row and choose **Move above notes**. KashCal keeps that
choice for every event.

## Managing your tags

Open **Manage tags** from the [account hub](../calendar/navigation.md#the-account-hub)
to see every tag you've used. Each tag has these actions:

- **Change color:** pick the chip color.
- **Rename:** change the tag's name on every event in KashCal's own calendars that
  carries it. On iCloud and CalDAV accounts, KashCal uploads the changed events so
  your other devices get the new name. Renaming a tag to a name that already exists
  merges the two into one tag.
- **Delete:** removes the tag from this list only, and its custom color goes with it.
  Your events keep the tag. An **Undo** button appears for a moment after you delete.

Renaming doesn't change tags on device-calendar events.

## Tags on device-calendar events

Events in your [device calendars](../sync/device-calendars.md) can carry tags too. Add
and remove them in the event form, and see them as chips on the event and in the
quick view.

KashCal stores these tags in a field of the Android calendar that CalDAV sync apps on
your phone read as the event's categories. On a calendar synced by such an app, the
tags reach your server. Other device calendars, such as Google calendars, keep the
tags on your phone only, and some don't keep them at all.

A tag on a device-calendar event joins **Manage tags** only when you add it in KashCal
and save the event. Tags that arrive from another app or your server show on their
events but aren't listed. KashCal reads device calendars from the phone's calendar
storage and keeps no copy of their events.

If the account offers CalDAV, connect it [directly](../sync/providers/caldav.md). Then
the tags on its synced events are listed in **Manage tags**, and you can rename and
merge them.

## How tags are matched and stored

- Case doesn't matter. `Work` and `work` are the same tag. KashCal keeps the
  spelling you used first, so your list doesn't fill up with near-duplicates.
- Length and characters. A tag can be up to 64 characters and can't contain a
  comma.
- Standard format. On iCloud and CalDAV accounts, tags are stored as the event's
  calendar categories, so they sync with the event.

## Related

- [Creating & editing events](./event-form.md): the full event form
- [Smart event add](./smart-event-add.md): type `#tag` inline
- [Calendar views](../calendar/views.md#tag-chips): the views that show chips
