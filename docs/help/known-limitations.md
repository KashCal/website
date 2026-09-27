---
sidebar_position: 4
title: Known limitations
description: What KashCal doesn't do, on purpose or because of how a server works, so you know what to expect.
---

# Known limitations

KashCal leaves some things out on purpose. Others depend on how your server works.
This page lists both.

## Invitations depend on your calendar account

Sending and receiving meeting invitations needs a calendar account that supports
scheduling (the CalDAV scheduling extension). Not every server supports it, and some
support only part of it:

- KashCal's own Local calendar can't invite people. Neither can an account when
  KashCal finds no email address for you on it, such as a server login like `alice`
  on a server that reports no address. In place of the guest list, the event form
  shows this, except when you edit a repeating event:
  > Inviting people isn't available on this account
- A calendar on your phone that no sync app manages (a local device calendar) keeps
  the guests you add but can't notify them. The event form shows:
  > This calendar can't send invitations. Guests are saved but won't be notified.

  Tap the close button on the notice to hide it.
- A few servers accept guests but never deliver the invitation. SOGo and mailbox.org
  are the ones we've seen. They save your guests without sending anyone an email, and
  they don't report this back, so KashCal can't warn you in advance. The guests are on
  the event, but nobody is notified. Other calendar apps behave the same way: when a
  server won't deliver, sending the invite is up to you. iCloud delivers invitations.
- Your reply might not reach the organizer on some servers. A few servers expect the
  app to deliver RSVP replies itself. On those, KashCal saves your answer, but the
  organizer might not get it. iCloud delivers replies for you.

## RSVP to a recurring event covers the whole series

When you answer an invitation to a repeating event, your reply applies to the whole
series, not one occurrence. KashCal shows:

> Your reply applies to the whole series.

This is because not every calendar server supports per-occurrence responses. An
occurrence that the organizer changed on its own is the exception: your reply to it
applies to that occurrence only, and the notice doesn't show.

## Account passwords don't transfer between devices

Your saved passwords are encrypted with a key that stays on your phone. They aren't
included in Android backups or in a KashCal settings backup. On a new phone, you sign
in again. See [Privacy & Security](../privacy/overview.md).

## Background sync runs at most every 15 minutes

This is an Android limit for background work, not a KashCal choice. Pull down on a
calendar view to sync right away.

## Calendar feeds are read-only

You can't edit events from an [ICS subscription](../sync/ics-subscriptions.md) in
KashCal. They belong to the source feed.

## Contact sync is two-way (beta); tasks and journals aren't synced

KashCal is an events app first. It reads and writes calendar events (the `VEVENT` part
of the calendar standard). It also syncs contacts in both directions:

- Contacts (CardDAV) sync both ways, in beta. KashCal syncs the contacts on your
  iCloud or CalDAV account with your phone: edits, deletes and photos go in both
  directions. See [Contact sync](../sync/contacts.md). It's a beta, so report anything
  that looks wrong. Separately, KashCal can read birthdays and anniversaries from your
  phone's contacts. See [Contact birthdays](../features/birthdays.md).
- Contact sync rides on a calendar account. KashCal finds your address book from the
  account you added for your calendars. For a CalDAV account other than Zoho's
  zoho.com service, it looks up your email domain's CardDAV service in DNS (an SRV
  record), or else starts from your calendar server's address. Then it tries the standard `/.well-known/carddav` path and your
  account's principal. If your provider keeps contacts on a server that none of these
  lead to, KashCal won't find your contacts, even when your calendars sync.
- No tasks or to-dos (VTODO), journals or attachments. KashCal skips calendars that
  hold only tasks or journal entries when it syncs, so they don't show up empty.

This keeps the app focused and fast.

## Google and Outlook connect through your phone, not directly

KashCal connects to iCloud and CalDAV servers directly. Google and Microsoft don't
offer that kind of access. Google removed third-party CalDAV access, and Outlook and
Microsoft 365 don't offer CalDAV at all. So both come in through
**Device calendars** instead. If the Google or Outlook app syncs those calendars to
your phone, KashCal can show them, and edit them when the calendar allows it. Device
calendars are off until you turn them on in Settings. See
[Device calendars](../sync/device-calendars.md) and the
[FAQ](./faq.md#does-it-work-with-google-calendar-or-outlook).

## Views are the seven built in

KashCal has Month, Agenda, Day, 3 Days, Week, Month (Full) and Year views, plus
Insights. There's no multi-month grid (like a 3- or 6-month view). KashCal uses the
Gregorian calendar only, with no other calendar systems (such as Hijri or lunar).

## Updates can't cross install sources

KashCal comes from Google Play, F-Droid, IzzyOnDroid, Obtainium and GitHub Releases,
and they don't all sign the app with the same key.
Google Play and F-Droid sign their builds with their own keys. The GitHub Releases,
IzzyOnDroid and Obtainium APKs share KashCal's own key. Android won't install an
update signed with a different key. To switch sources, say from F-Droid to the GitHub
APK, you have to uninstall first, which deletes the app's data on your phone.

Before you switch:

1. [Back up your settings](../features/backup-restore.md).
2. Events in the Local calendar aren't on a server or in a settings backup.
   [Export them to .ics](../sync/import-export.md#export-to-ics).

After you install from the other source, restore the backup, import the .ics file and
add your accounts again. If you use device calendars, pick them again.

Staying on one source updates normally.

---

If something you expected to work isn't listed here or in
[Troubleshooting](./troubleshooting.md), it may be a bug. See
[Before you file a bug](./report-a-bug.md).
