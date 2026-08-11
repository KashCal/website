---
sidebar_position: 1
title: Calendar views
description: "KashCal's seven Android calendar views: month, agenda, day, 3-day, week, full-month, and year, with pinch-to-zoom, drag-to-reschedule, and tag chips."
---

# Calendar views

Some days you want the big picture, some days you want the next hour. KashCal
gives you seven ways to look at your schedule, so you can pick the one that fits.
Switch between them using the **view picker** in the top bar, or from the
navigation drawer.

| View | What it shows |
|------|---------------|
| **Month** | A familiar month grid with dots marking days that have events. Tap a day to see its events in the panel below, then swipe that panel left or right to step day by day. Swipe the grid itself to move between months. |
| **Agenda** | A scrolling list of the next 90 days of events, grouped by date with times. Today and tomorrow are labelled **Today** and **Tomorrow** rather than by date. The top bar shows the month you're currently scrolled to and keeps pace as you move down the list. A week bar sits above the list, and you can collapse it when you want the extra room. |
| **Day** | A single day as an hour-by-hour timeline. Overlapping events sit side by side. |
| **3 Days** | Three days side by side as timelines, a good balance of detail and overview. Tap a day's header to open just that day in Day view; a back press returns you to the span you came from. |
| **Week** | A full seven-day timeline. The header shows the month and week number. Tap a day's header to open just that day in Day view, then press back to return to the week. |
| **Month (Full)** | A month grid where each day grows to show event titles stacked inside the cell, not just dots. |
| **Year** | All twelve months at a glance. Tap any month to jump straight to it, or tap a year in the strip along the top. Swipe to move between years. |

:::tip
There's also an **Insights** view, reachable from the navigation drawer, that shows
analytics about how you spend your time. See [Insights](../features/insights.md).
:::

## Gestures

The timeline views (Day, 3 Days, Week) are built for touch:

- **Pinch to zoom.** Pinch in or out on the timeline to make the hours shorter or taller. KashCal remembers the zoom level and reopens the timeline at the same density next time.
- **Drag to reschedule.** Press and hold a timed event, then drag it to a new time, or sideways to a different day. A short vibration confirms the drag has started. (All-day and read-only events, such as those from a holiday feed, can't be dragged.)
- **Tap an empty slot** to start a new event there, pre-filled to the nearest 15 minutes.
- **Swipe left/right** to move through time. In Day and 3 Days views a swipe moves one day; in Week view it moves a whole week.
- **Tap a "+N more" badge** when a day has more events than fit, to see the full list.
- **Expand the all-day row.** When a day has more all-day events than the strip shows, tap the chevron to expand it and see them all, and again to collapse. KashCal remembers the choice across restarts.

In **Month** and **Year** views, swipe left and right to move between months or
years, and tap a day or month to drill in.

## Tag chips

Events you've labeled with [tags](../events/tags.md) show their colored chips in
the Day, Week, and Agenda views, so you can pick out a `#focus` block or a
`#travel` day at a glance without opening the event.

## Moving around

- **Today.** Tap the Today button to jump back to the current date in any view.
- **Pick a month.** In Month view, tap the month and year in the header to open a quick month-and-year picker.
- **Back where you were.** The Day, 3 Days, and Week timelines remember the hour you were looking at and reopen there after you close the app, instead of resetting to a default hour.
- **Pull to refresh.** Once you've connected an account and are online, pull down on the calendar to sync with your servers right away.

## Landscape and larger screens

KashCal adapts to landscape orientation and larger displays, giving the timeline
views more room to show day columns side by side. Rotate your phone while you're
partway through filling in an event and KashCal keeps what you've typed, rather than
starting the form over.

## Related

- [Widgets](../features/widgets.md): put your calendar on the home screen
- [Search](../features/search.md): find any event fast
- [Tags](../events/tags.md): label events with colored chips
