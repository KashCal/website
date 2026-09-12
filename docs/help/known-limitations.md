---
sidebar_position: 4
title: Known limitations
description: A few things KashCal doesn't do, on purpose or because of how a server works, so you know what to expect.
---

# Known limitations

A few things KashCal doesn't do, either on purpose or because of how a server works.
Knowing them up front saves a surprise later.

## Invitations depend on your calendar account

Sending and receiving meeting invitations relies on your calendar account supporting
scheduling (the CalDAV scheduling extension). Not every server does, and some do it only
partway:

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
- **Your reply might not reach the organizer on some servers.** A few servers expect the
  app to deliver RSVP replies itself rather than handling it server-side. On those,
  KashCal saves your response but may not get it back to the organizer. Major services
  like iCloud handle this for you.

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

## Contact sync is two-way (beta); tasks and journals aren't synced

KashCal is first an events app: it reads and writes calendar events (the `VEVENT` part
of the calendar standard). It also syncs contacts, now in both directions:

- **Contacts (CardDAV) sync both ways, in beta.** KashCal syncs the contacts on your
  iCloud or CalDAV account with your phone, see [Contact sync](../sync/contacts.md):
  edits, deletes, and photos now travel in both directions. It's a beta while it
  settles, so expect the odd rough edge and report anything that looks off. (Separately,
  it can read birthdays and anniversaries from your phone's contacts, see
  [Contact birthdays](../features/birthdays.md).)
- **Contact sync rides on a calendar account.** KashCal finds your address book from the
  same account you added for your calendars, using standard CardDAV discovery (the
  `/.well-known/carddav` path and your account's principal). If your provider keeps
  contacts somewhere that can't be reached from your calendar account, or offers no
  `/.well-known/carddav` and no CalDAV calendar to derive the location from, KashCal
  won't find your contacts even when your calendars sync fine.
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

## Updates can't cross install sources

KashCal comes from several places, and they don't all sign the app with the same key.
Google Play and F-Droid sign their builds with their own keys; the GitHub Releases,
IzzyOnDroid, and Obtainium APKs share KashCal's own key. Android won't let a build with
one signature update over a build with another, so to switch sources, say from F-Droid
to the GitHub APK, you have to uninstall first, which clears the app's local data.
[Back up](../features/backup-restore.md) before you switch and restore afterward.
Staying on one source updates normally.

---

If something you expected to work isn't listed here and isn't covered in
[Troubleshooting](./troubleshooting.md), then it may be a genuine bug. See
[Before you file a bug](./report-a-bug.md).
