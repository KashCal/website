---
sidebar_position: 1
title: Smart event add (natural language)
description: "Type an event the way you'd say it, and KashCal's natural-language smart event add parses the title, date, time, recurrence, location, and #tags."
---

import QuickAddDiagram from '@site/src/components/QuickAddDiagram';
import Screenshot from '@site/src/components/Screenshot';

# Smart event add

<Screenshot src="/img/screenshots/Quick-Event-Add.png" alt="Typing a natural-language event in KashCal" align="right" caption="KashCal reads what you type." />

Type an event the way you'd say it out loud, and KashCal sorts out the rest. As
you type, it shows a live preview of what it understood (the title, date, time,
and more), so you can watch it get things right before you save.

## Turning it on

This is off until you turn it on. Open Settings, find **Smart event add** under
**Event preferences**, and switch it on. From then on, the **+** button opens the
typing box instead of the full form in the Month, Month (Full), Agenda, and Year
views. In the Day, 3 Days, and Week timelines, **+** still opens the form, because
those views place the event on the grid at a specific time.

Each time the box opens it shows a different example as its placeholder ("Coffee
tomorrow at 3pm", "Standup every weekday at 9am"), which is the fastest way to get a
feel for what it understands.

Here's how KashCal breaks down what you type:

<QuickAddDiagram />

## What you can type

KashCal understands many kinds of phrases, and you can combine them freely in one
sentence.

### Dates

- **Relative:** `today`, `tomorrow`, `yesterday`, `day after tomorrow`
- **Weekdays:** `Monday`, `next Friday`, `this Wednesday`, `last Tuesday`
- **Specific dates:** `March 15`, `15 January`, `15 of March 2027`
- **Numeric dates:** `3/15/2027`, `2027-01-15`

### Times

- **Exact:** `3pm`, `3:30 PM`, `15:30`, `at 10 15`
- **Time ranges:** `2pm to 4pm`
- **Casual:** `morning`, `afternoon`, `evening`, `night`, `tonight`
- **Spoken style:** `quarter past 10`, `half past 3`, `quarter to 5`

### Duration

- `for 30 minutes`, `for 2 hours`, `for 1.5 hours`

### "In" and "ago" offsets

- `in 2 hours`, `in 3 days`, `in 1 week`
- `2 hours ago`, `3 days ago`

### Recurrence

- `daily`, `weekly`, `biweekly`, `monthly`, `yearly`
- `every day`, `every 2 weeks`, `every 3 months`
- `every Monday`, `every weekday`, `every weekend`
- **Ordinal weekday of the month:** `every 2nd Tuesday`, `first Monday of every month`,
  or `last Friday of the month` (handy for a meeting that lands on the last weekday,
  whether that's the 4th or 5th)
- **Last day of the month:** `last day of the month`, `last day of every month`
- End conditions like `until December` or `5 times`

Saying something is on `the 2nd Tuesday of this month` (rather than *every* month)
creates a single event on that date, not a repeat.

### Location

- Anything after **at** becomes the location: `Lunch at Olive Garden`,
  `Meeting at Conference Room B`

### Tags

- Put `#` in front of a word to add it as a tag: `Lunch with Sam #social`,
  `Deep work #focus`. You can add several, and KashCal keeps the rest of the
  phrase as the event. See [Tags](./tags.md).

### Notes

- Everything after a space and `//` becomes the event's note:
  `Call plumber tomorrow 3pm // ask about the leak under the sink`. KashCal only
  reads the part *before* the `//` for the date, time, and location, so words in
  the note never move your event. The space before `//` means pasted links like
  `https://…` are left alone.

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
| `Deep work 2pm #focus` | "Deep work", today at 2:00 PM, tagged #focus |
| `Team sync last Thursday of the month` | "Team sync", the last Thursday of each month |
| `Rent last day of every month` | "Rent", on the last day of every month |
| `Call Sam 4pm // ask about the invoice` | "Call Sam", today at 4:00 PM, with a note |

## The live preview

While you type, KashCal shows what it parsed:

- the **title** (with an emoji if it recognizes one),
- the **date** (shown as Today / Tomorrow or a full date),
- the **time range**, or "All day" if you didn't give a time,
- the **location**, and
- the **recurrence**, if any.

If something looks off, keep editing and the preview updates instantly. When
you're happy, save it. Need more control? Tap **More options** to open the full
[event form](./event-form.md) with everything you've typed already filled in.

The box starts as a single line and grows to three as you type, then scrolls, so a
long note after `//` never pushes the preview off screen. Entries are capped at 500
characters, and a counter appears once you're near the limit rather than only at it.

## Related

- [Creating & editing events](./event-form.md): the full editor
- [Search](../features/search.md): find an event later
