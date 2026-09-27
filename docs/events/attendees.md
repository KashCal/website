---
sidebar_position: 7
title: Scheduling & invitations
description: Invite people, send meeting invitations, RSVP, and use CalDAV scheduling in KashCal.
keywords: [scheduling, meeting invitations, attendees, RSVP, iTIP, invite]
---

# Scheduling & invitations

You can invite people to your events, and KashCal sends the invitations through
your own calendar account. You can also reply to invitations other people send you.

## Inviting people

In the event form, tap **Add attendees**. In the search box you can:

- Type a name to pick from your contacts. This needs Contacts permission. While KashCal can still ask for it, a banner reads **Suggest people from your contacts**, with **No thanks** and **Allow**.
- Type an email address, then tap the Add row that shows it, or the keyboard's done key.

Until the text in the box is a full email address, the box shows this, even while you
type a contact's name:

> Enter a full email address

Each guest shows as a chip with an ✕. Tap the chip to remove that guest.

When you save, your calendar server sends the invitations.

## Save & notify

When you edit an event, the save button reads **Save & notify** if saving will
send guests an update. That happens when you:

- change the title, location, time or repeat rule of an event with guests
- add a guest
- remove a guest (the removed guest gets a cancellation)

If you change only the notes or the color, the label doesn't change. New events
and device-calendar events never show **Save & notify**. Saving a new event with
guests still sends the invitations.

## Seeing who's coming

The guest list groups people by their response:

- **Going:** accepted
- **Maybe:** tentative
- **Pending:** hasn't responded yet
- **Declined:** said no
- **Delegated:** passed it to someone else

## Responding to invitations

When someone invites you, the event asks **Going?** and you reply **Yes**,
**Maybe**, or **No**. For a repeating event, your reply applies to the whole series:

> Your reply applies to the whole series.

If an occurrence was changed on its own, your reply on it applies to that occurrence only.

You can reply on the event itself, or from [Invites](./invites.md), which lists
every invitation still waiting for your reply.

## When invitations aren't available

KashCal needs an email address for your account to send invitations as the
organizer. When the account has none, the guest row reads:

> Inviting people isn't available on this account

A device calendar with no sync account behind it keeps its data only on your
phone. You can add guests there, but nobody is notified, and the form says so:

> This calendar can't send invitations. Guests are saved but won't be notified.

See [Known limitations](../help/known-limitations.md) for more on which accounts
support invitations.

## Related

- [Invites](./invites.md): invitations waiting on your reply
- [Creating & editing events](./event-form.md): where you add people
- [Known limitations](../help/known-limitations.md): what scheduling can and can't do
