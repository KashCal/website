---
sidebar_position: 8
title: Invites
description: One list of every meeting invitation waiting on your reply, with Yes, Maybe and No on each card.
keywords: [invites, invitations, RSVP, pending invitations, meeting requests]
---

# Invites

Invitations arrive in different places: one by email, one you saw in the week view and
meant to answer, one you forgot. **Invites** puts every invitation still waiting on your
reply into one list.

Tap the avatar in the top-right corner to open the
[account hub](../calendar/navigation.md#the-account-hub), then tap **Invites**. When an
invitation is waiting, a count shows on the row and on the avatar. Above 99 it reads
99+.

## What shows up

An event is on the list when all of these are true:

- You're a guest and haven't replied yet.
- The event has an occurrence in the future. When the last one has passed, the
  invitation leaves the list.
- You're not the organizer. Your own events don't ask you to reply.

With more than one account connected, each invitation is checked against the account
whose calendar holds it. An invitation in your work calendar counts as a work
invitation, even if the same address is also on your personal account.

## Get notified

When a sync brings in an invitation you haven't answered, KashCal posts a notification
with the event title and "From" the organizer, followed by "Tap to respond". Tap it to
open the event and reply there. The notification clears when you reply.

These notifications use their own Android channel, **Event Invitations**. Turn that
channel off in Android's notification settings to stop them without muting reminders.

## Reply

Each card shows the date and time, the event title, who invited you, and the location
if there is one. A colored dot marks the calendar it's in. For events today or
tomorrow, the card shows **Today** or **Tomorrow** in place of the date.

Tap **Yes**, **Maybe** or **No**. KashCal records your answer and the card leaves the
list. KashCal then starts a sync, which sends the reply to your calendar server. For a
repeating event, your reply covers the whole series.

Tapping **No** also cancels the event's reminders, so a meeting you declined won't
alert you later.

When nothing is left, the list shows:

> All caught up

Tap that message to close the list.

## Related

- [Scheduling & invitations](./attendees.md): invite people to your own events
- [Reminders](./reminders.md): alerts for the events you accept
- [Known limitations](../help/known-limitations.md): which accounts support scheduling
