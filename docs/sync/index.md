---
sidebar_position: 1
title: Sync & accounts
slug: /sync
description: Connect KashCal to the calendar servers you already use. It speaks CalDAV, the open standard behind iCloud, Nextcloud, Fastmail, and most services.
---

# Sync & Accounts

Your calendars probably live in a few different places already. KashCal connects to
the servers you use and gathers them onto one screen. It speaks **CalDAV**, the open
standard behind most calendar services.

## Ways to bring in calendars

- **iCloud**: connect your Apple calendars. See [iCloud setup](./providers/icloud.md).
- **Any CalDAV server**: Nextcloud, Fastmail, Radicale, Baikal, Zoho, mailbox.org, Stalwart, SOGo, and more. See [CalDAV setup](./providers/caldav.md).
- **Calendar feeds (ICS)**: subscribe to holidays, sports, or school calendars. See [Calendar feeds](./ics-subscriptions.md).
- **Device calendars**: show calendars from other apps already on your phone. See [Device calendars](./device-calendars.md).
- **Import/export files**: bring in or save out `.ics` files. See [Import & export](./import-export.md).

## Before you start

- KashCal works offline-first: you can use it fully before connecting anything.
- Connecting an account is safe. Your password is encrypted on your device and never sent to KashCal (there are no KashCal servers). See [Privacy & Security](../privacy/overview.md).
- Most services work automatically once you enter your details, thanks to automatic server discovery.

## Managing your accounts

Tap the avatar in the top-right corner, then **Accounts & settings**, to manage
connected accounts. (The navigation drawer has a Settings entry too.)

- **See an account's status.** Each connected account shows how many calendars it syncs, and flags any sync trouble.
- **Remove an account.** Open the account and choose **Sign Out**. KashCal asks first, because signing out removes that account's synced calendars from this device. Your events on the server stay put, and anything you made in your local calendar stays on the device.
- **Choose your default calendar.** Under **Event preferences**, tap **Default calendar** to pick where new events go by default.
- **Show or hide calendars.** Toggle individual calendars from the navigation drawer, where they're grouped by account.

How far back sync downloads events applies to all accounts together, as does how often it runs. Both live in **Settings**, under **Notifications & sync** (**Sync lookback** and **Sync frequency**). See [Settings](../features/settings.md#notifications--sync) and [How sync works](./how-sync-works.md).

## Quick links

- [Settings](../features/settings.md): default calendar, sync lookback, appearance
- [How sync works](./how-sync-works.md): what offline-first means and when sync happens
- [Supported servers](./supported-servers.md): the full compatibility list and what each needs
- [Sync troubleshooting](../help/troubleshooting.md): if something isn't syncing
