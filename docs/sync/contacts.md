---
sidebar_position: 5
title: Contact sync (CardDAV)
description: "Mirror the contacts on your iCloud or CalDAV account onto your phone with KashCal: names, numbers, emails, and photos, kept current every sync, read-only for now."
---

# Contact sync

Your calendar account usually keeps your contacts too. KashCal can bring those onto
your phone, so the people on your server sit in your address book next to everyone
else, and stay current every time the account syncs.

This works for accounts that carry contacts over **CardDAV**, the contacts counterpart
to CalDAV, which today means **iCloud** and general **CalDAV** servers such as
Nextcloud.

## Turning it on

1. Open the account from **Settings**, and look under the **Sync** heading, just below
   the calendar-sync switch, for a **Contacts** row, described as "Sync this account's
   contacts to your phone." It appears only for accounts that can carry contacts.
2. Switch it on. The first time, KashCal asks for the contacts permission it needs to
   write them to your phone, using Android's standard permission prompt.
3. Grant it, and the first sync fills in the rest. You'll see a brief confirmation that
   contacts are syncing for that account.

The contacts land in your phone's own address book, so they show up in your Contacts
app, in the dialer, and anywhere else that reads them, not only inside KashCal.

## What comes across

The mirror keeps the detail you filed a contact under, not just a name and number:

- **Names**, including phonetic spellings, nicknames, and prefixes and suffixes
- **Phone numbers and email addresses**, each with its label (home, work, mobile, or
  a custom one you named)
- **Postal addresses**
- **Job title, role, and company**
- **Websites, notes, and the groups** a contact belongs to
- **Birthdays and anniversaries**
- **Contact photos**

## One direction, for now

Contact sync is a **one-way, read-only mirror**: it reads your server and writes to
your phone, never the other way. Nothing you change in your phone's address book
reaches back and edits the contacts on your account, so there's no risk of the app
rewriting your server-side contacts. Two-way editing may come in a later release;
read-only is the safe half to ship first.

Because the app doesn't sync contacts back, edit a synced contact on the server (or in
its own app, like iCloud) and the change flows down at the next sync.

## Turning it off

Switch the **Contacts** row back off and KashCal removes that account's contacts from
your phone as cleanly as they arrived. It tells you what happened:

- **Removed.** "Device contacts for _account_ removed."
- **Kept, because they're shared.** If a second login for the same address is still
  syncing those contacts, KashCal leaves them in place and says so, rather than pulling
  them out from under the other account.
- **Check the permission.** If contacts permission has since been switched off, KashCal
  can't confirm the removal and tells you some may remain until you grant it again.

## Keeping contacts current

Contacts refresh on the same schedule as your calendar, and a **pull-to-refresh** on
any calendar view now picks up contacts too, so a swipe down grabs someone added on the
server right away instead of waiting for the next scheduled sync.

## Related

- [How sync works](./how-sync-works.md): offline-first, and when sync happens
- [Birthdays](../features/birthdays.md): show contact birthdays as calendar events
- [Privacy & Security](../privacy/overview.md): your contacts stay on your device
