---
sidebar_position: 1
title: Sync & accounts
slug: /sync
description: Connect KashCal to the calendar servers you already use. It speaks CalDAV, the open standard behind iCloud, Nextcloud, Fastmail, and most services.
---

# Sync & Accounts

KashCal connects to the calendar servers you already use and shows their calendars on
one screen. It speaks CalDAV, the open standard behind iCloud, Nextcloud, Fastmail
and other calendar services.

## Ways to bring in calendars

- iCloud: connect your Apple calendars. See [iCloud setup](./providers/icloud.md).
- Any CalDAV server: Nextcloud, Fastmail, Radicale, Baikal, Zoho, mailbox.org, Stalwart, SOGo, Infomaniak, Davis, Purelymail and others. See [CalDAV setup](./providers/caldav.md).
- Contacts (CardDAV, beta): sync the contacts on your iCloud or CalDAV account with your phone, both ways. See [Contact sync](./contacts.md).
- Calendar feeds (ICS): subscribe to holiday, sports or school calendars. See [Calendar feeds](./ics-subscriptions.md).
- Device calendars: show calendars from other apps on your phone. See [Device calendars](./device-calendars.md).
- Import/export files: bring in or save out `.ics` files. See [Import & export](./import-export.md).

## Before you start

- KashCal is offline-first. You can use it fully before you connect anything.
- Your password is encrypted on your device and never sent to KashCal. There are no KashCal servers. See [Privacy & Security](../privacy/overview.md).
- For a CalDAV account you enter a server address, username and password. KashCal finds the calendars on the server itself. See [CalDAV setup](./providers/caldav.md).

## Managing your accounts

Tap the avatar in the top-right corner, then **Accounts & Settings**, then
**Calendar accounts**. The navigation drawer has a **Settings** entry too. Each account
row shows how many calendars it syncs and flags sync trouble. Tap an account to open its
sheet:

- To rename the account, tap its name at the top of the sheet. The **Rename Account** sheet opens.
- To turn calendar sync off or on, use the **Calendar** switch ("Sync this account's calendars").
- To sync contacts, use the **Contacts** switch. See [Contact sync](./contacts.md).
- To sync right away, tap **Sync Now**. While a sync runs, the sheet shows **Syncing…**.
- To pick up calendars you added on the server, tap **Discover New Calendars**. If it
  finds any, the calendar count shows how many are new.
- To update your password, tap **Change Password**.
- To remove the account, tap **Sign Out**. KashCal asks first, because signing out removes that account's synced calendars from this device. Your events on the server stay there, and events in your local calendar stay on the device.

After a failed sync, the sheet shows how many attempts failed and when the last
successful sync was, or "Never synced".

Two more settings live outside the account sheet:

- To choose where new events go, open Settings, and under **Event preferences** tap **Default calendar**.
- To show or hide a calendar, turn it on or off in the navigation drawer, where calendars are grouped by account.

How far back sync downloads events, and how often it runs, apply to all accounts
together. Both are in **Settings**, under **Sync** (**Sync lookback** and **Sync frequency**). See [Settings](../features/settings.md#sync) and [How sync works](./how-sync-works.md).

## Quick links

- [Settings](../features/settings.md): default calendar, sync lookback, appearance
- [How sync works](./how-sync-works.md): what offline-first means and when sync happens
- [Supported servers](./supported-servers.md): the full compatibility list and what each needs
- [Sync troubleshooting](../help/troubleshooting.md): if something isn't syncing
