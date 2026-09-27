---
sidebar_position: 1
title: Smart event add (natural language)
description: "Type an event the way you'd say it, and KashCal's natural-language smart event add parses the title, date, time, recurrence, location, and #tags."
---

import QuickAddDiagram from '@site/src/components/QuickAddDiagram';
import Screenshot from '@site/src/components/Screenshot';

# Smart event add

<Screenshot src="/img/screenshots/Quick-Event-Add.png" alt="Typing a natural-language event in KashCal" align="right" caption="KashCal reads what you type." />

Type an event the way you'd say it, and KashCal fills in the details. As you type, a
preview shows what it understood: the title, date, time and more. Check it, then save.

## Turn it on

Smart event add is off until you turn it on. Tap **Accounts & Settings** in the
[account hub](../calendar/navigation.md#the-account-hub), then switch on
**Smart event add** under **Event preferences**.

With it on, the + button opens the typing box in every calendar view, including the
Day, 3 Days and Week timelines. To open the full form at a set time in a timeline, tap an
empty slot on the grid.

The box shows a random example as its placeholder, such as "Coffee tomorrow at 3pm" or
"Standup every weekday at 9am".

Here's how KashCal breaks down what you type:

<QuickAddDiagram />

## Other ways in

With Smart event add on, these open the typing box too. With it off, they open the full
[event form](./event-form.md).

- The **Create new event** [app shortcut](../calendar/navigation.md#app-shortcuts)
  (**New Event** when the launcher shortens it), from a long-press on the KashCal icon.
- The **Add event** [Quick Settings tile](../calendar/navigation.md#quick-settings-tile).
- The + on the **Today's Agenda**, **Upcoming**, **Week View** or **Month View**
  [home-screen widget](../features/widgets.md).

Sharing text to KashCal from another app opens the typing box with the text filled in,
whether or not Smart event add is on. The first link in the text becomes the location,
unless the text gives one with `at`. Editing the text drops the link. Text longer than
500 characters opens the full form instead: the first line (up to 80 characters)
becomes the title, the first link becomes the location, and the whole text goes in the
note.

## What you can type

Combine any of these in one sentence.

### Dates

- Relative: `today`, `tomorrow`, `yesterday`, `day after tomorrow`
- Weekdays: `Monday`, `next Friday`, `this Wednesday`, `last Tuesday`
- Specific dates: `March 15`, `15 January`, `15 of March 2027`
- Numeric dates: `3/15/2027`, `2027-01-15`

A numeric date such as `5/10/2026`, where either number could be the month, follows
your phone's language and region: 5 October where the day comes first, May 10 where
the month does. A date with dots, such as `5.10.2026`, is always day first.

If you don't type a date, the event goes on the day you have selected. In the Day,
3 Days and Week views, and for text shared from another app, it goes on the current
day.

### Times

- Exact: `3pm`, `3:30 PM`, `15:30`, `at 10 15`
- Ranges: `2pm to 4pm`
- Parts of the day: `morning`, `afternoon`, `evening`, `night`, `tonight`
- Spoken: `quarter past 10`, `half past 3`, `quarter to 5`

### Duration

- `for 30 minutes`, `for 2 hours`, `for 1.5 hours`

### "In" and "ago" offsets

- `in 2 hours`, `in 3 days`, `in 1 week`
- `2 hours ago`, `3 days ago`

### Recurrence

- `daily`, `weekly`, `biweekly`, `monthly`, `yearly`
- `every day`, `every 2 weeks`, `every 3 months`
- `every Monday`, `every weekday`, `every weekend`
- A weekday of the month: `every 2nd Tuesday`, `first Monday of every month`, or
  `last Friday of the month`, which lands on the last Friday whether that's the 4th or
  the 5th
- The last day of the month: `last day of the month`, `last day of every month`
- An end: `until December` or `5 times`

`the 2nd Tuesday of this month` (this month, not every month) creates one event on that
date, not a repeat.

### Location

- Words after `at` that aren't a date or time become the location:
  `Lunch at Olive Garden`, `Meeting at Conference Room B`

### Tags

- Put `#` in front of a word to add it as a tag: `Lunch with Sam #social`,
  `Deep work #focus`. You can add more than one. The tags don't end up in the title.
  See [Tags](./tags.md).

### Notes

- Everything after a space and `//` becomes the event's note:
  `Call plumber tomorrow 3pm // ask about the leak under the sink`. KashCal reads only
  the part before the `//` for the date, time and location, so words in the note don't
  move your event. Because the space is required, links such as `https://…` stay
  whole.

<QuickAddDiagram example={{
  typed: 'Team lunch 2nd Tuesday of the month 12pm at Nios // bring the quarterly deck',
  rows: [
    {label: 'Title', value: '🍽️ Team lunch'},
    {label: 'When', value: 'Next 2nd Tuesday · 12:00 PM'},
    {label: 'Where', value: 'Nios'},
    {label: 'Repeats', value: 'Monthly on the 2nd Tuesday'},
    {label: 'Note', value: 'bring the quarterly deck'},
  ],
}} />

## Examples

| You type | KashCal creates |
|----------|-----------------|
| `Coffee with Kash tomorrow 3pm` | "Coffee with Kash", tomorrow at 3:00 PM |
| `Standup every weekday at 9am` | "Standup", repeating every weekday at 9:00 AM |
| `Lunch with Sam Friday 12:30 for 1 hour` | "Lunch with Sam", this Friday 12:30-1:30 PM |
| `Book club every Tuesday until December` | "Book club", weekly on Tuesday, ending in December |
| `Dentist in 2 weeks at 10am` | "Dentist", two weeks out at 10:00 AM |
| `Deep work 2pm #focus` | "Deep work", 2:00 PM on the selected day, tagged #focus |
| `Team sync last Thursday of the month` | "Team sync", the last Thursday of each month |
| `Rent last day of every month` | "Rent", on the last day of every month |
| `Call Sam 4pm // ask about the invoice` | "Call Sam", 4:00 PM on the selected day, with a note |

## The live preview

While you type, the preview shows:

- the title, with an emoji in front when KashCal recognizes one and **Event emojis** is
  on in Settings,
- the date (**Today**, **Tomorrow**, **Yesterday**, or the date),
- the time range, or **All day** if you didn't give a time,
- the location,
- the note,
- the repeat pattern, and
- the tags, as chips.

The preview updates as you type. Tap **Save**, or the keyboard's Done key, to
create the event. KashCal saves it to your default calendar with your default alert
and jumps to its date. If your default calendar is a device calendar, **Save** opens the
full form instead. For more control, tap **More options** to open the full
[event form](./event-form.md) with what you typed filled in.

The box starts as one line and grows to three as you type, then scrolls, so a long
note doesn't push the preview off screen. Entries are capped at 500 characters. A
counter appears at 450 characters.

## Related

- [Creating & editing events](./event-form.md): the full event form
- [Settings](../features/settings.md#event-preferences): the default calendar and alerts
- [Search](../features/search.md): find an event later
