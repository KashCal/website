---
sidebar_position: 6
title: Tags
description: "Label events with colored tag chips in KashCal: add them in the form or by typing #tag, manage their color and name in one place, and carry them across your devices."
---

import Screenshot from '@site/src/components/Screenshot';

# Tags

Calendars sort your events by which account they live in. Tags let you label them
by what they *are*: `#focus`, `#dentist`, `#standup`, `#travel`. A tag shows up as
a small colored chip on the event, so you can spot a kind of event at a glance
across your week.

## Adding tags

You can add a tag two ways:

- **In the [event form](./event-form.md).** Type a name into the tag field and
  confirm it, or pick one from the suggestions. Suggestions are ranked by how
  often and how recently you've used each tag, so the ones you reach for most sit
  first.
- **In [Smart event add](./smart-event-add.md).** Type `#` in front of a word anywhere in your
  phrase, like `Lunch with Sam #social`, and KashCal takes the `#social` as a tag
  while the rest becomes the event. You can add several, and a tags-only entry
  like `#work` is fine too.

The title field also offers an inline `#` autocomplete: start typing `#` in the
title and KashCal suggests your existing tags.

## Where tags show up

Once an event has tags, its chips appear in the **day**, **week**, and **agenda**
views, and in the event's quick view when you tap it open. Open the full event and
the tags are listed there as well.

If you'd rather the tag row sit above your notes than below, use the row's **⋮**
menu in the form to move it. KashCal remembers your choice.

## Managing your tags

Tags have a home of their own. Open **Manage tags** from the
[account hub](../calendar/navigation.md#the-account-hub) to see every tag you've used,
each with:

- **Change color:** pick the chip color from the palette.
- **Rename:** fix a typo or reword a tag. Renaming rewrites the tag across every event
  that carries it, not just the label on your screen, and on CalDAV accounts it pushes
  the new name up to your server so your other devices catch up instead of drifting.
  Rename a tag onto a name that already exists and the two **merge** into one.
- **Delete:** remove a tag from the list. This only clears it from the manager; your
  events keep their labels. A quick **Undo** appears in case you change your mind.

## Tags on device-calendar events

Tags aren't limited to KashCal's own calendars. Events from your
[device calendars](../sync/device-calendars.md) (Google, Outlook, and the like) can
carry tags too: add and remove them in the event form, and see them as chips on the
card and in the quick view. They're stored in the standard **categories** field, so
they travel with the event, though some device calendars may not preserve them.

## How tags are matched and stored

- **Case-insensitive, first-casing wins.** `Work` and `work` are the same tag.
  Whichever spelling you used first is the one KashCal keeps and shows, so your
  tag list doesn't fracture into near-duplicates.
- **Up to 64 characters,** and no commas.
- **Stored as standard calendar categories,** which is why they travel with the event
  when it syncs.

## Related

- [Creating & editing events](./event-form.md): the full event form
- [Smart event add](./smart-event-add.md): type `#tag` inline
- [Calendar views](../calendar/views.md): where chips appear
