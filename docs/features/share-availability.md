---
sidebar_position: 11
title: Share availability
description: Send someone your free times as plain text. Pick a window and your working hours, and KashCal works out the gaps from your visible calendars.
keywords: [share availability, free times, when are you free, scheduling, free busy]
---

# Share availability

Answering "when are you free?" normally means reading your own calendar and typing
the gaps out by hand. KashCal does that part. Pick how far ahead to look and what
counts as your working hours, and it writes out your free blocks as plain text you
can paste into any chat.

Open the [account hub](../calendar/navigation.md#the-account-hub) by tapping the
avatar in the top-right corner, then tap **Share availability**.

## Setting the window

Two controls shape the answer:

- **Window:** how many days ahead to look, from 1 to 14. The default is 7. Below the
  slider, **Through &lt;date&gt;** names the last day you've included, so you don't have
  to count.
- **Working hours:** the span of each day to consider, shown as a strip of the whole
  24 hours with your hours highlighted and the rest dimmed. Drag either end; it moves
  in half-hour steps. The default is 9:00 AM to 5:00 PM, and the caption reads out the
  length ("8 hour window"). The span can't be shorter than an hour.

There's also **All-day events as busy**. It's off by default, so a birthday or an
out-of-office marker doesn't wipe out your whole day. Turn it on and any day covered
by an all-day event drops out of the summary entirely.

Your choices are remembered, so the sheet opens the way you left it.

## What gets counted

KashCal looks at events in the calendars you currently have **visible**, which means
you control the answer by toggling calendars in the navigation drawer. Hide your work
calendar and you're sharing your personal availability. Synced calendars and
[device calendars](../sync/device-calendars.md) both count, as long as they're showing.

- Events marked as **free** rather than busy don't block a slot.
- Only gaps of **an hour or more** are offered, so you don't send someone a list of
  fifteen-minute slivers.
- Today is trimmed to now, so you never offer a time that has already passed. If the
  rest of today falls outside your working hours, today drops out.

## The result

A preview appears in the sheet as a chat bubble, showing exactly what the other
person will see:

```text
Free over the next 7 days (9:00 AM – 5:00 PM):

Mon Jul 27: 9:00 AM – 11:00 AM, 2:00 PM – 5:00 PM
Tue Jul 28: 11:30 AM – 5:00 PM

Shared from KashCal
```

Days with no free time are left out rather than listed as empty.

Tap **Share** to hand it to the Android share sheet, so it goes wherever you send
things: a message, an email, a note to yourself. It's plain text, so there's nothing
for the recipient to install or open.

Times follow your **Time format** setting, so a 24-hour clock shares 24-hour times.

If nothing in the range qualifies, the preview says so and **Share** stays disabled,
so there's no way to send an empty summary by accident:

> No free blocks of at least an hour in the selected range.

## Related

- [Scheduling & invitations](../events/attendees.md): invite people and collect replies
- [Insights](./insights.md): where your time actually goes
- [Calendar views](../calendar/views.md): show and hide calendars
