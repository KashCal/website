---
sidebar_position: 3
title: Home-screen widgets
description: KashCal's five home-screen widgets (agenda, week, month, date and upcoming) show your events without opening the app, with their own theme and accent.
---

import WidgetMock from '@site/src/components/WidgetMock';

# Home-screen widgets

The best calendar is the one you don't have to open. KashCal has five home-screen
widgets. To add one, long-press your home screen, choose Widgets, and find KashCal.

<WidgetMock />

| Widget | What it shows |
|--------|---------------|
| **Today's Agenda** | Today's events in a list, all-day events first. When the day is empty, it shows "No events today" and "+ Add event"; tap it to add an event. Tap the "+ n more" line to open today in KashCal. |
| **Week View** | Today and the next six days. Tap an empty day to add an event on that day, or a day's "more" line to open that day in KashCal. |
| **Month View** | A month grid. When the widget is tall enough, each day names its events, like the in-app month view: a timed event is a tinted pill with its title, an all-day event a solid chip (tinted when it's marked free). When it's short, days show colored dots instead. The widget picks titles or dots from its height and your font size. A month with too many events to draw as titles shows dots. There is no setting. Single-letter day names run across the top, and today has a filled marker. With **Show week numbers** on, a week-number column runs down the left. |
| **Date** | Today's date, styled like an app icon. It starts as a 1x1 icon and becomes a date card with the full weekday and month when you make it bigger. Tap it to open today in KashCal. |
| **Upcoming** | The events of the next ten days, skipping empty days. It holds up to 100 rows. When the days don't all fit, the last row says how many days are left out; tap it to open today in KashCal. |

Past events and cancelled events show dimmed and struck through in the agenda and week
widgets. The upcoming widget leaves out events that have ended and shows cancelled ones
dimmed and struck through. The widgets include events from [device calendars](../sync/device-calendars.md)
you've turned on in KashCal.

## Tapping a widget

- Tap an event in the agenda, week or upcoming widget to open it in KashCal.
- Tap + on the agenda, week, month or upcoming widget to add an event. It opens
  the event form at the next full hour, or Smart event add when you've turned on
  **Smart event add** in Settings.
- Tap the refresh button on the agenda, week or upcoming widget to start a sync. The
  button dims for a moment to show KashCal took the tap.
- Tap the header title on the agenda, week or upcoming widget to open today in KashCal.
- Tap a day's header in the week or upcoming widget to open that day in KashCal.

## Using the month widget

- Page through months with the ‹ › arrows.
- Tap the month title to go back to the current month. On the current month, the
  title opens today in KashCal.
- In titles mode, each line of event titles in a week has two events you can tap to
  open: the first multi-day bar and the first single-day event. Other multi-day bars
  open the day where they start in that week. Other single-day events don't respond to
  a tap.
  Tap a day's empty space or its +n marker to open that day in KashCal.
- In dots mode, tap a day to open that day in KashCal.

The month widget follows **Show week numbers** and **Start week on** in Settings. When
you change either, the widget updates.

:::tip[Pick the right widget from the picker]
On Android 15 and newer, each widget previews as itself in the system widget picker,
so the agenda shows a sample day, the month shows a grid, and so on. You can tell them
apart before you place one.
:::

## Keeping widgets current

Widgets redraw:

- when you add, change or delete an event in one of KashCal's calendars
- after an account sync that brings changes
- at midnight
- when the time zone or the phone's clock changes
- when you change a widget setting, the app's accent, the time format or the week settings
- about every 30 minutes, as Android schedules it

## Colors and theme, together or apart

By default your widgets follow the app's look. A calendar on your home screen can
read differently from the one in your hand, so the widgets also have their own
settings. Both are in the [account hub](../calendar/navigation.md#the-account-hub), under
**Make it yours**:

- **Widget theme:** **Follow app** matches the app's light or dark look. **Light** or
  **Dark** keeps the widgets in that look whatever the app or your phone uses.
- **Widget accent:** **Follow app** matches the app's accent. **Automatic** uses your
  wallpaper's Material You colors. You can also pick a swatch from the grid (the first
  is **KashCal Teal**), or tap **More colors** for wheels with 92 named colors. Every widget recolors to
  match, including the + button.

## Two lines, or one

By default the list widgets fit each event on one line: a color bar, the start time
and the title. To see when events end, turn on **Detailed widget rows** in Settings,
under **Appearance**. Each event then takes two lines: the title on top and its start
and end time below. The time follows your 12- or 24-hour setting. This applies to the
agenda, week and upcoming widgets.

## How many events show

**Widget event limit** in Settings, under **Appearance**, sets how many events the
agenda and week widgets show per day: 3, 5, 8, 10 or 15. The default is 5. Extra
events collapse into a "more" line. The upcoming widget doesn't use this limit.

## Related

- [Calendar views](../calendar/views.md): the same views, in the app
- [Settings](./settings.md): widget event limit, detailed rows and week settings
