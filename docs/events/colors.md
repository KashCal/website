---
sidebar_position: 5
title: Event colors
description: Give individual events their own color in KashCal, blue for work, green for personal, red for deadlines, so your week reads at a glance.
---

import Screenshot from '@site/src/components/Screenshot';

# Event colors

<Screenshot src="/img/screenshots/Event-Color-Picker.png" alt="KashCal event color picker" align="right" caption="The quick palette, plus a full color browser." />

An event takes its calendar's color unless you give it its own. Use colors to
sort your week by type, for example blue for work, green for personal and red for
deadlines.

## Choosing a color

In the event form, tap the **Event color** row. A grid opens below the row, inside the
form, and any other open picker closes:

- The first swatch is the calendar default. Pick it to make the event follow its calendar's color.
- The other 11 swatches cover red, orange, yellow, two greens, teal, two blues, purple, pink and gray.
- Tap a swatch to apply it. The grid closes.

For more choices, tap **More colors**. It opens a browser of 92 named colors on
two wheels in the same place: turn the left wheel to pick a color family and the right
wheel to pick a color. The top shows a preview with the color's name and hex code. Tap
**Done** to apply it, or **Back** to return to the grid. The phone's Back closes the
wheels first, then the grid, without changing the color.

The row then shows the color's name for a grid color or **Saddle Brown**, **Custom**
for any other color, or **Event color** when the event uses the calendar default.

You can't change the color of an event someone else organizes and invited you to.

## Calendar colors

iCloud and CalDAV calendars use the color set on the server and pick up changes when
they sync. Device calendars use the color their sync app sets.

To recolor one of these calendars, do it on the server or in the app that owns it. You
set the colors of [offline calendars](../sync/offline-calendars.md#rename-recolor-or-export-a-calendar),
[calendar feeds](../sync/ics-subscriptions.md) and
[contact birthdays](../features/birthdays.md#color-and-reminders) in KashCal. The
built-in **Local** calendar starts gray, and a calendar you create starts with a color
KashCal picks.

## How colors sync

KashCal sends an event's color to your CalDAV server as a standard web color
name, or as a hex code for a color outside the 92. It reads the same values back
from the server. If the server doesn't store event colors, KashCal keeps the color
you set on your phone.

## Related

- [Creating & editing events](./event-form.md): set a color while you edit
- [Calendar views](../calendar/views.md): where colors show up
