---
sidebar_position: 3
title: Recurring events
---

# Recurring events

Some things come back around. A daily habit, a Friday standup, the second Tuesday
of every month. KashCal handles all of them, so you set the pattern once and forget
about it.

## Setting up a repeat

In the event form, tap **Repeat** and choose how often the event recurs:

- **Daily, Weekly, Biweekly, Monthly, Yearly**, or a **custom interval** (for example, every 3 weeks).
- For **weekly** events, pick which days of the week it lands on.
- For **monthly** events, choose **on a day of the month** (like the 15th) or **on a weekday position** (like the second Tuesday).

You can also set when the repeat **ends**:

- **Never** repeats indefinitely.
- **On a date** stops after a date you choose.
- **After a number of times** stops after a set count of occurrences.

You can also create recurring events directly with [Quick Add](./quick-add.md), for
example *"Standup every weekday at 9am"*.

## Editing or deleting one occurrence vs. the whole series

When you change or delete a repeating event, KashCal asks what you mean. The exact
wording depends on what you're doing:

- **Editing:** "This event", "This and all future", or "All events".
- **Deleting:** the same scope choices, with "All events" styled as the destructive option.
- **Dragging to reschedule:** "This event", "This and all future", or "All events". For events from a device calendar, only "This event" and "This and all future" are offered.

This lets you move *this week's* meeting without disturbing the rest of the
series, or change the time for *every* future meeting at once.

:::note
If you change a single occurrence of a repeating event, KashCal records it as an
exception to the series and keeps it linked to the original, so the rest of the
series stays intact and continues to sync correctly.
:::

## Related

- [Creating & editing events](./event-form.md): edit a single occurrence or the whole series
- [Reminders](./reminders.md): reminders on repeating events
