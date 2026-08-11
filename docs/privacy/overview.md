---
sidebar_position: 1
title: Privacy & Security
slug: /privacy/overview
description: "How KashCal protects your calendar: no accounts, no tracking, no KashCal servers. Credentials are encrypted on your device and your data stays yours."
---

# Privacy & Security

Your calendar is a record of your life: where you go, who you meet, what's coming up.
KashCal is built to keep that record yours.

:::tip[The short version]
- **No KashCal account, no KashCal servers.** We have nowhere to put your data, and no
  way to reach it.
- **No tracking, no ads, no analytics.** Not a single line of it in the app.
- **Your data stays on your device**, and syncs only with the servers *you* connect.
- **Your passwords are encrypted** on your phone with hardware-backed keys.
- **Everything here is verifiable.** The code is open source, and F-Droid builds it
  from that source.
:::

## Data safety at a glance

App stores publish a "data safety" or privacy label for every app. Here's KashCal's,
in the same terms:

| Question | KashCal's answer |
|----------|------------------|
| **Data collected** | None. KashCal collects no personal data. |
| **Data shared with third parties** | None. |
| **Data sent to KashCal** | None. There are no KashCal servers. |
| **Where your data is stored** | On your device. It syncs only with the calendar servers *you* connect. |
| **Is data encrypted in transit?** | Yes, over HTTPS (see [below](#everything-travels-encrypted)). |
| **Can you delete your data?** | Yes. It all lives on your device, so you can delete it any time. |

## No accounts, no tracking, no KashCal servers

- **No KashCal account** to create. You connect *your* calendar servers, not ours.
- **No analytics, no telemetry, no advertising.** KashCal contains no tracking SDKs
  and collects no usage data. No crash reports are sent anywhere.
- **No KashCal servers exist.** Your data never reaches us, because there is nowhere to
  send it. There is nothing for us to collect, lose, or sell.

## What leaves your phone (and what doesn't)

Your calendars and events are stored in a **secure database on your device** that
other apps can't read. KashCal only talks to the calendar servers **you** connect
(iCloud, Nextcloud, Fastmail, and so on) to sync your events. The only things that
ever leave your phone go to *your* servers:

- Your events (titles, times, locations, notes, attendees) go to your calendar server.
- Your RSVP responses go to the event organizer's server.
- Calendar feeds you subscribe to are fetched directly from the URL you gave.

Nothing else leaves your phone. Contact birthdays, search, insights, and reminders are
all computed **on-device** and never transmitted.

## Everything travels encrypted

KashCal talks to your servers over **encrypted HTTPS**, and any address you enter
defaults to it. Plain `http://` works only if you type it yourself, which you might do
for a self-hosted server on your own network.

## How your passwords are protected

Account passwords are **encrypted on your device** with **AES-256-GCM**, and the
encryption key is held in the **Android Keystore**, which is hardware-backed on devices
that support it. Passwords are never stored in readable form, and they're **excluded
from Android backups**.

Because the key is specific to your device, your saved credentials **can't be lifted
from a backup and used on another phone**. The trade-off is that when you move to a
new device, you re-enter your passwords. That's a deliberate security choice.

## Permissions, and why each is needed

KashCal asks only for what its features require:

| Permission | Why |
|------------|-----|
| **Internet & network state** | Sync your events with your calendar servers, and handle going offline/online |
| **Local network access** | Reach self-hosted CalDAV servers running on your home or office network (Android 17 and newer) |
| **Notifications** | Show event reminders |
| **Exact alarms** | Deliver reminders at the precise minute |
| **Run after restart** | Re-schedule your reminders after a reboot |
| **Vibrate** | Buzz on reminder notifications |
| **Contacts** | Suggest people when inviting attendees, and show birthdays from contacts |
| **Read calendar** | Show calendars from other apps on your phone |
| **Write calendar** | Optionally save or edit events in those device calendars |
| **Biometric** | The optional [App lock](../features/app-lock.md) |

You're asked for sensitive permissions (like Contacts and Notifications) in context,
with a plain explanation, and you can decline. The rest of the app keeps working.

To see them all in one place, open **App permissions** from the
[account hub](../calendar/navigation.md#the-account-hub). It lists every permission
KashCal uses, the reason for each, and a link straight to its system setting, so you
can review or change any of them without hunting through Android's menus.

## Don't take our word for it

Privacy claims are only as good as your ability to check them. KashCal is designed so
you can:

- **Read the code.** KashCal is **free and open source** under the Apache-2.0 license.
  Anyone can read it, verify these claims, and contribute, on
  [GitHub](https://github.com/KashCal/KashCal).
- **Trust the build.** Releases on F-Droid are **compiled from that public source**, so
  the app on your phone matches the code you can read.
- **Watch the network.** Point a network monitor at KashCal and you'll see traffic go
  only to the servers you connected.

:::note[Want the details?]
This page covers the essentials in plain language. For the more comprehensive version,
read the full [Privacy Policy](./privacy-policy.md).
:::
