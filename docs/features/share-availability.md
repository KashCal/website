---
sidebar_position: 11
title: Share availability
description: Send someone your free times as plain text. Pick a window and your working hours, and KashCal works out the gaps from your visible calendars.
keywords: [share availability, free times, when are you free, scheduling, free busy]
---

# Share availability

Answering "when are you free?" means reading your calendar and typing out the gaps
by hand. KashCal does that part. Pick how far ahead to look and what counts as your
working hours, and it writes out your free blocks as plain text you can paste into
any chat.

Open the [account hub](../calendar/navigation.md#the-account-hub) by tapping the
avatar in the top-right corner, then tap **Share availability**.

## Setting the window

Two controls shape the answer:

- **Window:** how many days to look at, from 1 to 14, counting the current day. The
  default is 7. Next to the Window heading, above the slider, a "Through" caption
  names the last day included, so you don't have to count.
- **Working hours:** the span of each day to consider, shown as a strip of the whole
  24 hours with your hours highlighted and the rest dimmed. Drag either end; it moves
  in half-hour steps. The default is 9:00 AM to 5:00 PM, and the caption reads out the
  length ("8 hour window"). The span can't be shorter than an hour.

There's also **All-day events as busy**. It's off by default, so a birthday or an
out-of-office marker doesn't wipe out your whole day. Turn it on and any day covered
by a busy all-day event drops out of the summary.

KashCal saves your choices, so the sheet opens the way you left it. Tap **Done** to
close it.

## What gets counted

KashCal looks at events in the calendars you have visible, so you control the answer
by showing and hiding calendars in the navigation drawer. Hide your work calendar and
you're sharing your personal availability. Every visible calendar counts: local,
synced, feed and birthday calendars, and [device calendars](../sync/device-calendars.md)
you've turned on.

- Events marked as free rather than busy don't block a slot.
- Only gaps of an hour or more are offered, so you don't send someone a list of
  fifteen-minute slivers.
- On the current day, KashCal starts at the current time, so you never offer a time
  that has passed. If the rest of the day falls outside your working hours, the day
  drops out.

## The result

A preview appears in the sheet as a chat bubble, showing the text the other person
gets:

```text
Free over the next 7 days (9:00 AM – 5:00 PM):

Mon Jul 27: 9:00 AM – 11:00 AM, 2:00 PM – 5:00 PM
Tue Jul 28: 11:30 AM – 5:00 PM

Shared from KashCal
```

Days with no free time are left out rather than listed as empty.

Tap **Share** to hand it to the Android share sheet, so it goes wherever you send
things: a message, an email, a note to yourself. It's plain text, so the recipient has
nothing to install or open.

Times follow your **Time format** setting, so a 24-hour clock shares 24-hour times.

If nothing in the range qualifies, the preview says so and **Share** stays off, so
you can't send an empty summary by accident:

> No free blocks of at least an hour in the selected range.

## Related

- [Scheduling & invitations](../events/attendees.md): invite people and collect replies
- [Insights](./insights.md): where your time goes
- [Calendar views](../calendar/views.md): show and hide calendars
