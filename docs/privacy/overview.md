---
sidebar_position: 1
title: Privacy & Security
slug: /privacy/overview
description: "How KashCal protects your calendar: no accounts, no tracking, no KashCal servers. Credentials are encrypted on your device and your data stays yours."
---

# Privacy & Security

KashCal's guiding principle is simple: **for you, not your data.** It's built so your
calendar stays yours.

## No accounts, no tracking, no KashCal servers

- **No KashCal account** to create. You connect *your* calendar servers, not ours.
- **No analytics, no telemetry, no advertising.** KashCal contains no tracking SDKs
  and collects no usage data.
- **No KashCal servers exist.** There is literally nowhere for your data to be sent
  to us, so there's nothing for us to collect.

## Where your data lives

Your calendars and events are stored in a **secure database on your device** that
other apps can't read. KashCal only talks to the calendar servers **you** connect
(iCloud, Nextcloud, Fastmail, and so on) to sync your events. The only things sent
over the network go to *your* servers:

- Your events (titles, times, locations, notes, attendees) go to your calendar server.
- Your RSVP responses go to the event organizer's server.

Nothing else leaves your phone.

## How your passwords are protected

Account passwords are **encrypted on your device** using strong, modern encryption
(AES-256), with the encryption key held in the **Android Keystore**, which is
hardware-backed on devices that support it. Passwords are never stored in readable form.

Because the key is specific to your device, your saved credentials **can't be lifted
from a backup and used on another phone**. The trade-off is that when you move to a
new device, you re-enter your passwords. That's a deliberate security choice.

## Permissions, and why each is needed

KashCal asks only for what its features require:

| Permission | Why |
|------------|-----|
| **Internet & network state** | Sync your events with your calendar servers, and handle going offline/online |
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

## Open source

KashCal is **free and open source** under the Apache-2.0 license. Anyone can read the
code, verify these claims, and contribute, on
[GitHub](https://github.com/KashCal/KashCal). Builds on F-Droid are compiled from
that public source.

## The detailed policy

Read the full [Privacy Policy](./privacy-policy.md).
