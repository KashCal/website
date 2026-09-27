---
sidebar_position: 1
title: Calendar views
description: "KashCal's seven Android calendar views: month, agenda, day, 3-day, week, full-month, and year, with pinch-to-zoom, drag-to-reschedule, and tag chips."
---

# Calendar views

KashCal has seven calendar views. Switch between them in the navigation drawer.
Open the drawer with the menu icon at the top left, or swipe in from the left edge.

| View | What it shows |
|------|---------------|
| **Month** | A month grid with dots on days that have events. Tap a day to list its events below the grid. Swipe that list left or right to step one day at a time. Swipe the grid to change months. In landscape the list sits beside the grid, and on a short landscape screen the grid cells get smaller. |
| **Agenda** | A list of the next 90 days of events, grouped by date. The headers for today and tomorrow add the word, as in "Today · Monday, September 28". The top bar shows the month you've scrolled to. A week bar sits above the list. Tap the month title to collapse or expand it. KashCal remembers the choice. |
| **Day** | One day as an hour-by-hour timeline. Overlapping events sit side by side. A week bar sits above the timeline. Tap the date title to collapse or expand it. It starts expanded, and KashCal remembers the choice. |
| **3 Days** | Three days side by side as timelines. Tap a day's header to open that day in Day view. Press back to return to the three days. |
| **Week** | A seven-day timeline. The top bar shows the month, and the corner left of the day headers shows the week number. Tap a day's header to open that day in Day view. Press back to return to the week. |
| **Month (Full)** | A month grid with event titles stacked inside each day cell, not only dots. Tap a day to open a sheet with its events. |
| **Year** | All twelve months. Tap a month to open it in Month view. Tap a year in the strip at the top, or swipe, to change years. Press back to return to Month view. |

:::tip
The drawer also has **Insights**, which shows how you spend your time. See [Insights](../features/insights.md).
:::

## Gestures

The timeline views (Day, 3 Days, Week) respond to these gestures:

- Pinch to zoom. Pinch in or out on the timeline to make the hours shorter or taller. KashCal remembers the zoom level.
- Drag to reschedule. Press and hold a timed event, then drag it to a new time, or sideways to another day. A short vibration tells you the drag has started. All-day events and read-only events, such as holiday feed events, can't be dragged. When you drop an occurrence of a repeating event, KashCal asks what to move: **This event**, **This and all future**, or **All events**. **This and all future** is greyed out on the first occurrence. Device-calendar events offer only the first two. An occurrence you changed on its own moves without asking.
- Tap an empty slot to start a new event there. The start time snaps to the nearest 15 minutes.
- Swipe left or right to move through time. In Day and 3 Days a swipe moves one day. In Week it moves a whole week.
- Tap a "+N more" badge to see the full list. It shows when more events overlap than fit side by side.
- Expand the all-day row. When a day has more all-day events than the strip shows, tap the chevron to see them all. Tap it again to collapse. KashCal remembers the choice.

Timed events that run past midnight show in the timed grid on each day they cover. To show those lasting 20 hours or more in the all-day strip instead, turn on **Multi-day events in all-day strip** in [Settings > Appearance](../features/settings.md#appearance).

## Tag chips

Events you've labeled with [tags](../events/tags.md) show their colored chips in these places:

- Timeline event blocks in Day, 3 Days and Week, when the block is tall enough. Short blocks hide them.
- The selected day's event list in Month.
- The day sheet in Month (Full).

The Agenda list doesn't show tag chips.

## Moving around

- Go to today. Tap the calendar icon next to the menu icon. It shows today's date.
- Pick a date. Tap the title in the top bar. In Month and Month (Full) it opens **Go to month**. In 3 Days and Week it opens a date picker. In Agenda and Day it collapses or expands the week bar. **Go to date** in the account menu (tap the avatar at the top right) jumps to any date.
- Add an event. Tap the + button. In Day, 3 Days and Week the event starts today at the next hour. With [Smart event add](../events/smart-event-add.md) on, the + button opens the typing box instead. Insights has no + button.
- Reopen where you left off. KashCal opens in the last view you switched to. On first launch that's Month. Insights, and a day opened from a day header, aren't remembered. The Day, 3 Days and Week timelines reopen at the hour you were looking at.
- Pull to refresh. With a connected account and a network connection, pull down on the calendar to sync right away.

## Rotating the phone

Month shows the grid and the day's events side by side in landscape. The timeline
views show the same number of day columns in any orientation. If you rotate while
filling in an event, KashCal keeps what you've typed.

## Related

- [Widgets](../features/widgets.md): put your calendar on the home screen
- [Search](../features/search.md): find any event fast
- [Tags](../events/tags.md): label events with colored chips
