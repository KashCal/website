---
sidebar_position: 3
title: Supported servers
---

# Supported servers

If your calendar service speaks **CalDAV**, the open calendar standard, KashCal can
connect to it. Popular services are recognized for you and have their own setup
guides. Everything else connects through the general
[CalDAV setup](./providers/caldav.md).

## Compatibility at a glance

| Service | How to connect | What you'll need |
|---------|----------------|------------------|
| **iCloud** | [iCloud guide](./providers/icloud.md) | Apple ID + an **app-specific password** (not your normal Apple password) |
| **Nextcloud** | [CalDAV guide](./providers/caldav.md) | Server address, username, and an **app password** |
| **Fastmail** | [CalDAV guide](./providers/caldav.md) | Server address, username, and an **app password** |
| **Radicale** | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| **Baikal** | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| **Zoho** | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| **mailbox.org** | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| **Stalwart** | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| **SOGo** | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| **Any other CalDAV server** | [CalDAV guide](./providers/caldav.md) | Server address, username, password |

:::tip[Automatic discovery]
For most servers you can enter the main address (like `nextcloud.example.com`)
and KashCal finds the right calendar path for you. If a service offers
**app-specific passwords** or **app passwords**, use one of those rather than your
main account password. It's safer and often required.
:::

## Google and Outlook

Google Calendar and Outlook don't offer the kind of CalDAV access KashCal connects
to directly. The good news: if the Google or Outlook app on your phone already syncs
those calendars, KashCal can show them right alongside everything else through
[Device calendars](./device-calendars.md). You see and manage them in one place,
without a separate sign-in.

## A note about meeting invitations

Sending and receiving meeting invitations (iTIP scheduling) depends on your server.
Most major CalDAV services support it. A few have quirks, and local-only calendars
can't send invitations at all. See [Known limitations](../help/known-limitations.md)
for the details before you rely on invitations for an important meeting.

## Self-hosted and local servers

If you run your own server (such as Baikal or Radicale) over plain HTTP or with a
self-signed certificate, KashCal has an option to **Trust insecure connection** for
that account. It's meant for self-hosted and local setups, not for production services.
See the [CalDAV setup guide](./providers/caldav.md).

## Don't see your service?

If your provider supports CalDAV, it will very likely work through the
[general CalDAV setup](./providers/caldav.md). If you hit trouble, check
[Sync troubleshooting](../help/troubleshooting.md) first.
