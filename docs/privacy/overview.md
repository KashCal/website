---
sidebar_position: 1
title: Privacy & Security
slug: /privacy/overview
description: "How KashCal protects your calendar: no KashCal account, no tracking, no KashCal servers, and passwords encrypted on your device."
---

# Privacy & Security

Your calendar is a record of your life: where you go, who you meet, what's coming up.
KashCal is built to keep that record yours.

:::tip[The short version]
- No KashCal account and no KashCal servers. We have nowhere to put your data, and no
  way to reach it.
- No tracking, no ads, no analytics. The app contains none of it.
- Your data lives on your device. KashCal syncs it only with the servers and feeds
  you connect.
- Your passwords are encrypted on your phone with a key held in the Android Keystore.
- You can check all of this. The code is open source, and F-Droid builds it from that
  source.
:::

## Data safety at a glance

App stores publish a "data safety" or privacy label for every app. Here's KashCal's,
in the same terms:

| Question | KashCal's answer |
|----------|------------------|
| Data collected | None. KashCal collects no personal data. |
| Data shared with third parties | None. |
| Data sent to KashCal | None. There are no KashCal servers. |
| Where your data is stored | On your device, and on the calendar and contact servers you connect. |
| Is data encrypted in transit? | Yes, over HTTPS, unless you type an `http://` address yourself (see [below](#everything-travels-encrypted)). |
| Can you delete your data? | Yes. Remove an account to delete its data from your phone, or uninstall KashCal to delete all of it. Data on your own servers stays under your control there. |

## No accounts, no tracking, no KashCal servers

- There is no KashCal account to create. You connect your own calendar servers, not ours.
- No analytics, no telemetry, no advertising. KashCal contains no tracking SDKs and
  collects no usage data. It sends no crash reports.
- No KashCal servers exist. Your data never reaches us, because there is nowhere to
  send it. There is nothing for us to collect, lose, or sell.

## What leaves your phone (and what doesn't)

Your calendars and events are stored in a database inside KashCal's private app
storage, which other apps can't read. KashCal connects only to these places:

- Your calendar server (iCloud, Nextcloud, Fastmail, and so on). Your events go there:
  titles, times, locations, notes and guests. Your RSVP answers go there too.
- Your contact server, if you turn on [contact sync](../sync/contacts.md). KashCal
  downloads the account's contacts and sends back the changes you make to them on
  your phone. It fetches contact photos only from the same domain as that server.
- The feeds you subscribe to, fetched from the URL you gave. A holiday calendar you add
  from the built-in list is fetched from thunderbird.net, which hosts those feeds.
- A certificate authority's server, in one case: when your server's HTTPS certificate
  is missing an intermediate certificate, KashCal downloads that certificate from the
  address named in the server's certificate.

Other paths are Android's, not KashCal's own connections:

- When you type a location of 5 or more characters, including a letter, in the event
  form, KashCal asks Android's geocoding service for address suggestions. Your phone's system provider
  answers that request.
- If you turn on [device calendars](../sync/device-calendars.md), events you save to
  a Google, Outlook or work calendar are synced by the app that owns that calendar.
- Contacts you sync go into your phone's address book, where other apps with
  Contacts permission can read them.
- Android's own backup includes KashCal's event database and settings. Your passwords
  are left out.
- Tapping a link opens your browser. KashCal's help, privacy and donate links go to
  kashcal.onekash.org, the license link under the holiday list goes to
  creativecommons.org, and the report button on a database error goes to GitHub.
  Tapping an address with no maps app installed opens openstreetmap.org.

Contact birthdays, search, Insights and reminders are all computed on your device.

## Everything travels encrypted

KashCal talks to your servers over HTTPS. A server address you enter without `http://`
or `https://` becomes `https://`, and `webcal://` feed links open over HTTPS. Plain
`http://` works only if you type it yourself, which you might do for a self-hosted
server on your own network.

For a server with a self-signed certificate, you can turn on
**Trust insecure connection** when you add a CalDAV account. KashCal then accepts any certificate and any
hostname from that server without checking them, so turn it on only for a server you
control.

## How your passwords are protected

Account passwords are encrypted on your device with AES-256-GCM. The encryption key is
held in the Android Keystore, which is hardware-backed on devices that support it.
Passwords are never stored in readable form, and they're left out of Android backups.

Because the key is specific to your device, your saved credentials can't be lifted
from a backup and used on another phone. The trade-off is that when you move to a
new device, you re-enter your passwords. That's a deliberate security choice.

## Permissions, and why each is needed

KashCal asks only for what its features require:

| Permission | Why |
|------------|-----|
| Internet & network state | Sync your events with your calendar servers, and handle going offline and online |
| Local network access | Reach self-hosted CalDAV servers on your home or office network (Android 17 and newer) |
| Notifications | Show event reminders, invitations and sync status |
| Exact alarms | Deliver reminders at the right minute |
| Run after restart | Reschedule your reminders after a reboot |
| Foreground service and wake lock | Let a sync finish in the background, with a progress notification while it runs |
| Vibrate | Buzz on reminder notifications |
| Read contacts | Suggest people when you add guests, show contact birthdays, and read contacts for contact sync |
| Write contacts | Save your account's contacts to your phone's address book, for contact sync |
| Read calendar | Show calendars from other apps on your phone |
| Write calendar | Create, edit and delete events in those device calendars |
| Read and write sync settings | Register KashCal's accounts with Android's sync system, and ask a device calendar's own app to sync |
| Biometric | The optional [App lock](../features/app-lock.md) |

KashCal asks for Notifications, Contacts, Calendars and Local network when you use a
feature that needs them. You can decline, and the rest of the app keeps working.

To review them in one place, open **App permissions** from the
[account hub](../calendar/navigation.md#the-account-hub). It lists the four
permissions Android asks you about: Notifications, Contacts, Calendars and Local
network. Notifications shows from Android 13, and Local network from Android 17. The
info button on each row explains why KashCal asks. A granted permission shows
**Allowed**, and tapping its row opens its system setting. Otherwise, tap **Allow** to
grant it.

## Don't take our word for it

Privacy claims are only as good as your ability to check them. You can:

- Read the code. KashCal is free and open source under the Apache-2.0 license.
  Anyone can read it, check these claims, and contribute, on
  [GitHub](https://github.com/KashCal/KashCal).
- Check the build. Releases on F-Droid are compiled from that public source, so the
  app on your phone matches the code you can read.
- Watch the network. Point a network monitor at KashCal and you'll see traffic go
  only to the places listed [above](#what-leaves-your-phone-and-what-doesnt).

:::note[Want the details?]
This page covers the essentials in plain language. For the formal version, read the
full [Privacy Policy](./privacy-policy.md).
:::
