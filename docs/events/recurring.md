---
sidebar_position: 3
title: Recurring events
description: Set daily, weekly, monthly, yearly or custom repeats in KashCal, and change or delete one occurrence, this and future, or the whole series.
---

# Recurring events

A daily habit, a Friday standup, the second Tuesday of every month: set the pattern
once and KashCal fills in every occurrence.

## Set up a repeat

In the event form, tap the repeat row. On a new event it reads **Does not repeat**.
Pick one of the choices:

- **Never**, **Daily**, **Weekly**, **Monthly** or **Yearly**.
- **Custom**, for any interval. Set **Repeat every** from 1 to 99, then pick **Day**,
  **Week**, **Month** or **Year**. Every two weeks is **Custom**, 2, **Week**.

For **Weekly** (or a custom interval in weeks), pick the days under **On days**.

For **Monthly** (or a custom interval in months), pick a **Pattern**:

- "On day" and a number, such as the 15th.
- **On last day of month**.
- A weekday position, such as "On the 2nd Tuesday". Under **Which**, pick 1st, 2nd,
  3rd, 4th or last. Under **Weekday**, pick the day. "Last" covers a meeting on the
  last Friday, whether that's the 4th or 5th Friday of the month.

Under **Ends**, choose when the repeat stops:

- **Never** repeats with no end.
- **On date** stops after a date you pick.
- **After** a number of **occurrences** stops after that many.

You can also type a repeating event with [Smart event add](./smart-event-add.md), such
as *"Standup every weekday at 9am"*.

## Change or delete one occurrence or the whole series

When you save a change to a repeating event, delete one, or drag one to a new time,
KashCal asks which occurrences it applies to. The sheet is titled **Save changes to**,
**Delete** or **Move**, and offers:

- **This event**: only the occurrence you opened.
- **This and all future**: this occurrence and every later one.
- **All events**: the whole series. On **Delete** it's shown in red.

So you can move this week's meeting and leave the rest alone, or change the time of
every future meeting at once.

A choice that doesn't apply stays on the sheet, greyed out:

- On the first occurrence, **This and all future** is greyed out, because it would mean
  the same as **All events**.
- On an occurrence you've already changed on its own, only **This event** is available.
- If you changed the repeat rule, **This event** is greyed out, because a single
  occurrence can't carry a rule. **All events** is also greyed out unless you're
  editing the first occurrence. To change the pattern from a later occurrence onward,
  use **This and all future**.

When you drag an occurrence of an event from a
[device calendar](../sync/device-calendars.md), the **Move** sheet leaves out
**All events**.

:::note[How a single-occurrence change is stored]
When you change one occurrence of a repeating event, KashCal stores it as an exception
linked to the series. The rest of the series stays as it was and keeps syncing.

The change stays a single change. KashCal sends it to your server as a change to that
one occurrence, tagged with the date and time of the occurrence it replaces. It doesn't
turn into a duplicate or a separate event on the next sync.

The reverse works too. If you delete that changed occurrence from another app or
device, the next sync removes KashCal's copy, once the server marks the occurrence as
excluded from the series.
:::

## Related

- [Creating & editing events](./event-form.md): the full event form
- [Reminders](./reminders.md): reminders on repeating events
