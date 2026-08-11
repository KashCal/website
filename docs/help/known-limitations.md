---
sidebar_position: 4
title: Known limitations
description: A few things KashCal doesn't do, on purpose or because of how a server works, so you know what to expect.
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
- **A few servers accept guests but never deliver the invitation.** Some CalDAV
  servers (SOGo and mailbox.org are the ones we've seen) save your guests without
  sending anyone an email, and they don't report this back, so KashCal can't warn you
  in advance. The guests are on the event, but they aren't notified. This matches how
  other calendar apps behave: when a server won't deliver, sending the invite is up to
  you. Major services like iCloud generally deliver as expected.

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

## Contacts sync one way; tasks and journals aren't synced

KashCal is first an events app: it reads and writes calendar events (the `VEVENT` part
of the calendar standard). It also mirrors contacts, but only in one direction for now:

- **Contacts (CardDAV) are read-only.** KashCal can mirror the contacts on your iCloud
  or CalDAV account down onto your phone, see [Contact sync](../sync/contacts.md), but
  it doesn't push your phone-side edits back up to the server yet. Two-way editing may
  come later. (Separately, it can read birthdays and anniversaries from your phone's
  contacts, see [Contact birthdays](../features/birthdays.md).)
- **No tasks or to-dos (VTODO), journals, or attachments.** Calendars that contain
  only tasks or journal entries are skipped during sync rather than shown as empty.

This keeps the app focused and fast.

## Google and Outlook connect through your phone, not directly

KashCal talks to iCloud and CalDAV servers directly, but neither Google nor Microsoft
offers that kind of access anymore. Google removed third-party CalDAV access, and
Outlook and Microsoft 365 don't expose CalDAV at all. So both come in through the
**Device calendars** bridge instead: if the Google or Outlook app already syncs those
calendars to your phone, KashCal can show and edit them. See
[Device calendars](../sync/device-calendars.md) and the
[FAQ](./faq.md#does-it-work-with-google-calendar-or-outlook).

## Views are the seven built in

KashCal offers month, agenda, day, 3-day, week, full-month, and year views, plus
Insights. There's no multi-month grid (like a 3- or 6-month view) and no
non-Gregorian calendar system (such as Hijri or lunar). The Gregorian calendar is the
only one available.

---

If something you expected to work isn't listed here and isn't covered in
[Troubleshooting](./troubleshooting.md), then it may be a genuine bug. See
[Before you file a bug](./report-a-bug.md).
