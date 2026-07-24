---
sidebar_position: 6
title: Tags
description: "Label events with colored tag chips in KashCal, add them in the form or by typing #tag as you enter an event, shown across day, week, and agenda views."
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

## How tags are matched and stored

- **Case-insensitive, first-casing wins.** `Work` and `work` are the same tag.
  Whichever spelling you used first is the one KashCal keeps and shows, so your
  tag list doesn't fracture into near-duplicates.
- **Up to 64 characters,** and no commas.
- **Stored as standard calendar categories,** which is why they travel with the event
  when it syncs.

## What tags don't do (yet)

Tags work on the events KashCal syncs itself: your iCloud and other
[CalDAV](../sync/supported-servers.md) calendars, plus local calendars. Events from
[device calendars](../sync/device-calendars.md) can't carry tags, so KashCal hides the
tag row on those rather than letting a tag you add quietly disappear.

## Related

- [Creating & editing events](./event-form.md): the full event form
- [Smart event add](./smart-event-add.md): type `#tag` inline
- [Calendar views](../calendar/views.md): where chips appear
