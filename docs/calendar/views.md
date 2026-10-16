---
sidebar_position: 1
title: Calendar views
description: "KashCal's eight Android calendar views: month, agenda, day, 3-day, week, planner, full-month and year, with pinch-to-zoom and drag-to-reschedule."
---

# Calendar views

KashCal has eight calendar views. Switch between them in the navigation drawer.
Open the drawer with the menu icon at the top left, or swipe in from the left edge.

| View | What it shows |
|------|---------------|
| **Month** | A month grid with dots on days that have events. Tap a day to list its events below the grid. Swipe that list left or right to step one day at a time. Swipe the grid to change months. In landscape the list sits beside the grid, and on a short landscape screen the grid cells get smaller. |
| **Agenda** | A list of the next 90 days of events, grouped by date. The headers for today and tomorrow add the word, as in "Today · Monday, September 28". The top bar shows the month you've scrolled to. A week bar sits above the list. Tap the month title to collapse or expand it. KashCal remembers the choice. |
| **Day** | One day as an hour-by-hour timeline. A week bar sits above the timeline, with its dates in the same places as the Week view's day headers. Tap the date title to collapse or expand it. It starts expanded, and KashCal remembers the choice. |
| **3 Days** | Three days side by side as timelines. Tap a day's header to open that day in Day view. Press back to return to the three days. |
| **Week** | A seven-day timeline. The top bar shows the month, and the corner left of the day headers shows the week number. Tap a day's header to open that day in Day view. Press back to return to the week. |
| **Planner** | One week as seven day boxes plus a **Different this week** box, two columns on a phone held upright and four in landscape or on a wide screen. The top bar shows the month of the week's first day. See [Planner](#planner). |
| **Month (Full)** | A month grid with each day's events listed inside its cell, one line each, as many as the cell fits. Multi-day events run as one bar across their days. Titles are cut at the cell's edge, and a count such as +2 in the corner stands for the rest. Tap anywhere in a day to open a full-height sheet with its events. Pinch to make everything in the cells bigger or smaller; KashCal remembers the size. Past events are faded, and so are the numbers of past days other than the selected one. |
| **Year** | All twelve months. Tap a month to open it in Month view. Tap a year in the strip at the top, or swipe, to change years. Press back to return to Month view. |

:::tip
The drawer also has **Insights**, which shows how you spend your time. See [Insights](../features/insights.md).
:::

## Planner

The Planner shows a week the way a paper weekly planner does: a box for each day, with its events listed inside. It starts on your **Start week on** day, set in [Settings > Appearance](../features/settings.md#appearance).

- A timed event shows its time above its title, such as 4:30–6 pm, or 16:30–18:00 in 24-hour time. All-day events show as colored bands at the top of the box. With **Multi-day events in all-day strip** on, so do timed events of 20 hours or more that cross midnight. Past, declined and cancelled events are faded, as in the other views.
- A box shows the events that fit and counts the rest, such as +3 in its corner. When the next event is a timed one and one more line fits, it shows on that line as its start time and title.
- A moved occurrence of a repeating timed event shows where it was next to its time, such as "was 5 pm", "was Tue", or a date when it came from another week.
- Today or a later day with no events shows **Free day**, with a sun above it when the box has room.
- Tap an event, or the count, to open a sheet with all of that day's events. Tap empty space in a box to open the event form on that day, starting at the top of the current hour. In a box showing a count, the space around the events opens the sheet too.
- Tap a day's header to open that day in Day view. Press back to return to the same week.
- Swipe left or right to change weeks. Tap the title in the top bar to pick a date.
- Pinch to make everything in the boxes bigger or smaller. KashCal remembers the size.

### Different this week

The eighth box lists what breaks the usual pattern of the week:

- The events shown as bands, except ones that repeat every day or every week, and edited occurrences that kept their day.
- Occurrences of a repeating event moved to another time or day.
- Cancelled events.

Events you declined aren't listed. In the current week only today and later days count. When nothing differs, the box says "The usual week." Lines that don't fit are left out without a count; each is also in its day's box. Tap a line to open the events of its first day in the week.

## Events in the timeline

In Day, 3 Days and Week:

- An event's title wraps over as many lines as its block has room for, and is cut at the last line, without "…". The location takes the lines left below it. The time comes next when a line is still left and the whole time range fits on one line. Week uses smaller text so more of each title fits.
- When an event starts while earlier ones are still on, and each of them shows at least its first title line above it, the later event is drawn on top of it, indented a quarter of the column, up to two levels deep. The earlier event's text stops where the later one begins. Otherwise the events sit side by side: up to two in 3 Days and Week, up to five in Day.
- Events fade once they end, along with declined and cancelled events. All-day events fade after their day.
- At the default zoom and closer, a faint dashed line marks each half hour.

## Gestures

The timeline views (Day, 3 Days, Week) respond to these gestures:

- Pinch up and down to zoom. Spread or close two fingers vertically to make the hours taller or shorter. KashCal remembers the zoom level.
- Pinch sideways to change views. Spread two fingers sideways over a day: Week opens 3 Days starting on that day, and 3 Days opens that day in Day. Close them to go back: Day opens 3 Days starting on its day, and 3 Days opens the week that holds the day under your fingers. The columns stretch or squeeze by up to a tenth as you pinch. If you let go before your fingers have spread or closed far enough, the view stays as it was. The view you land in is the one KashCal opens in next time.
- Drag to reschedule. Press and hold a timed event, then drag it to a new time, or sideways to another day. A short vibration tells you the drag has started. All-day events and read-only events, such as holiday feed events, can't be dragged. When you drop an occurrence of a repeating event, KashCal asks what to move: **This event**, **This and all future**, or **All events**. **This and all future** is greyed out on the first occurrence. Device-calendar events offer only the first two. An occurrence you changed on its own moves without asking.
- Tap an empty slot to start a new event there. The start time snaps to the nearest 15 minutes.
- Swipe left or right to move through time. In Day and 3 Days a swipe moves one day. In Week it moves a whole week.
- Tap a "+N more" badge (+N in Week) to see the full list. It shows when more events overlap than fit side by side.
- Expand the all-day row. When a day has more all-day events than the strip shows, tap the chevron, or any empty space in the strip, to show up to three rows. A +N count in a day's corner opens the rest. Tap again to collapse. KashCal remembers the choice.
- With TalkBack, each day column reads its date. Double-tap it to start a new event on that day at the current time.

Timed events that run past midnight show in the timed grid on each day they cover. To show those lasting 20 hours or more in the all-day strip instead, turn on **Multi-day events in all-day strip** in [Settings > Appearance](../features/settings.md#appearance).

## Tag chips

Events you've labeled with [tags](../events/tags.md) show their colored chips in these places:

- Timeline event blocks in Day, 3 Days and Week, when the block is tall enough. Short blocks hide them.
- The selected day's event list in Month.
- The day sheet in Month (Full) and the Planner.

The Agenda list doesn't show tag chips.

## Moving around

- Go to today. Tap the calendar icon next to the menu icon. It shows today's date.
- Pick a date. Tap the title in the top bar. In Month and Month (Full) it opens **Go to month**. In 3 Days, Week and Planner it opens a date picker. In Agenda and Day it collapses or expands the week bar. **Go to date** in the account menu (tap the avatar at the top right) jumps to any date.
- Add an event. Tap the + button. In Day, 3 Days, Week and Planner the event starts today at the next hour. With [Smart event add](../events/smart-event-add.md) on, the + button opens the typing box instead. Insights has no + button.
- Reopen where you left off. KashCal opens in the last view you switched to, from the drawer or with a sideways pinch. On first launch that's Month. Insights, and a day opened from a day header, aren't remembered. The Day, 3 Days and Week timelines reopen at the hour you were looking at.
- Pull to refresh. With a connected account and a network connection, pull down on the calendar to sync right away.

## Rotating the phone

Month shows the grid and the day's events side by side in landscape. The timeline
views show the same number of day columns in any orientation. On a phone, the Planner
shows its boxes in four columns in landscape instead of two. If you rotate while
filling in an event, KashCal keeps what you've typed.

## Related

- [Widgets](../features/widgets.md): put your calendar on the home screen
- [Search](../features/search.md): find any event fast
- [Tags](../events/tags.md): label events with colored chips
