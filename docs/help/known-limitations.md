---
sidebar_position: 4
title: Known limitations
---

# Known limitations

A few things KashCal doesn't do, either on purpose or because of how a server works.
Knowing them up front saves a surprise later.

## Invitations depend on your calendar account

Sending and receiving meeting invitations works only with calendar accounts that
support scheduling:

- **Local-only calendars** can't send invitations. If you add guests, they're saved
  with the event but not notified:
  > This calendar can't send invitations. Guests are saved but won't be notified.
- **Some accounts don't support inviting people at all**, in which case KashCal tells
  you:
  > Inviting people isn't available on this account
- A few servers have their own quirks around how invitations are delivered. Major
  services generally work well.

## RSVP to a recurring event covers the whole series

When you respond to an invitation for a repeating event, your reply applies to the
entire series, not a single occurrence:

> Your reply applies to the whole series.

This is because not every calendar server supports per-occurrence responses.

## Account passwords don't transfer between devices

For security, your saved passwords are encrypted to your specific device and are not
included in backups. When you switch phones, you re-enter them. See
[Privacy & Security](../privacy/overview.md).

## Background sync is at most every 15 minutes

This is an Android platform limit for background work, not a KashCal choice. Pull to
refresh any time for an immediate sync.

## Calendar feeds are read-only

Events from an [ICS subscription](../sync/ics-subscriptions.md) can't be edited in
KashCal. They belong to the source feed.

---

If something you expected to work isn't listed here and isn't covered in
[Troubleshooting](./troubleshooting.md), then it may be a genuine bug. See
[Before you file a bug](./report-a-bug.md).
