---
sidebar_position: 5
title: Contact sync (CardDAV)
description: "Sync the contacts on your iCloud or CalDAV account with your phone in KashCal, both ways: names, numbers, emails and photos. Two-way sync is in beta."
---

# Contact sync

If your calendar account also keeps your contacts, KashCal can sync them with your
phone's address book, in both directions.

This works with accounts that serve contacts over CardDAV, the contacts
counterpart to CalDAV. iCloud offers it, and so do CalDAV servers such as Nextcloud.

## Turning it on

1. Open **Settings**, tap **Calendar accounts**, then tap the account.
2. In the sync section, below the **Calendar** switch, find the **Contacts** row ("Sync this
   account's contacts") with its **Beta** badge. It shows on every iCloud and CalDAV
   account, whether or not the server offers CardDAV.
3. Switch it on. The first time, Android asks for permission to read and write your
   contacts. Contact sync needs both. If you don't grant both, the switch stays off.
4. KashCal starts the first sync right away and shows "Syncing contacts for
   _account_" in the account sheet.

The contacts go into your phone's own address book. They show up in your Contacts
app, in the dialer and in other apps that read contacts, not only inside KashCal.

## What comes across

Contact sync carries these parts of a contact:

- Names, including phonetic spellings, nicknames, prefixes and suffixes
- Phone numbers and email addresses, each with its label (home, work, mobile, or a
  custom one)
- Postal addresses
- Job title, role, company and department
- Instant-messaging handles
- Related people, such as a spouse, parent or friend
- Websites, notes and the groups a contact belongs to
- Birthdays and anniversaries
- Contact photos

## Two-way sync (beta)

Contact sync runs both ways and is marked **Beta** in the app. On your phone, edit a
synced contact, delete one or change its photo, and KashCal sends the change to your
server at the next sync. Changes made on the server, or in another app signed in to
the same account, come down to your phone at the next sync.

If an edit lands wrong on the server, [report it](../help/report-a-bug.md).

## When contacts sync

- On the same schedule as calendar sync, set by **Sync frequency** in
  [Settings](../features/settings.md#sync). With **Manual only**, contacts sync only
  when you ask.
- When you pull down to refresh on a calendar view.
- When you tap **Sync Now** in the account sheet.

## If the permission is turned off

If you turn off KashCal's Contacts permission in Android settings while contact sync
is on, contacts stop syncing. After the next contact sync, or when you tap **Sync Now**,
the account sheet shows "Contacts permission is off. Grant access to keep contacts
syncing." with a **Grant access** button. Tap it to grant the permission again.

## Turning it off

Switch the **Contacts** row off and KashCal removes that account's contacts from your
phone. The account sheet tells you what happened:

- Removed: "Device contacts for _account_ removed"
- Kept because another login shares them: if another login for the same address
  still syncs those contacts, KashCal leaves them in place: "Contact sync off for
  _account_. Contacts stay because another login still syncs them."
- Permission missing: if the Contacts permission is off, KashCal can't confirm the
  removal: "Contact sync off for _account_, but some device contacts may remain. Check
  the Contacts permission."

## Related

- [How sync works](./how-sync-works.md): offline-first, and when sync happens
- [Birthdays](../features/birthdays.md): show contact birthdays as calendar events
- [Privacy & Security](../privacy/overview.md): what leaves your phone
