---
sidebar_position: 3
title: Supported servers
description: KashCal connects to CalDAV servers, including iCloud, Nextcloud, Fastmail, Radicale, Baikal, SOGo and Zoho, and to Google and Outlook through your phone.
---

# Supported servers

KashCal connects to calendar services that speak CalDAV, the open calendar standard.
iCloud has its own sign-in screen. Every other CalDAV service connects through the
[CalDAV setup](./providers/caldav.md), which tries the usual paths of common
servers.

## Compatibility at a glance

| Service | How to connect | What you'll need |
|---------|----------------|------------------|
| iCloud | [iCloud guide](./providers/icloud.md) | Apple ID and an app-specific password (not your Apple ID password) |
| Nextcloud | [CalDAV guide](./providers/caldav.md) | Server address, username and an app password |
| Fastmail | [CalDAV guide](./providers/caldav.md) | Server address, username and an app password |
| Radicale | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| Baikal | [CalDAV guide](./providers/caldav.md) | Server address, username, password (Digest authentication supported) |
| Zoho | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| mailbox.org | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| Posteo | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| Stalwart | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| SOGo | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| Infomaniak | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| Davis | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| Purelymail | [CalDAV guide](./providers/caldav.md) | Server address, username, password |
| Any other CalDAV server | [CalDAV guide](./providers/caldav.md) | Server address, username, password |

:::tip[Automatic discovery]
For most servers, enter the main server address, like `nextcloud.example.com`, and
KashCal finds your calendars. If it doesn't, enter the full CalDAV URL from your
provider. If your service offers app passwords, use one instead of your main
password. You can revoke it without changing your main password.
:::

## Google and Outlook

KashCal doesn't sign in to Google or Outlook accounts. If the Google or Outlook app on
your phone syncs those calendars, KashCal shows them next to your other calendars
through [Device calendars](./device-calendars.md). Device calendars are off until you
turn them on. You don't sign in again.

## Meeting invitations

Sending and receiving meeting invitations depends on your server. Local calendars
can't send invitations. Some servers, SOGo and mailbox.org among them, save your guests
without sending them the invitation. See
[Known limitations](../help/known-limitations.md#invitations-depend-on-your-calendar-account)
before you rely on invitations for an important meeting.

## Self-hosted and local servers

For a server you run yourself, such as Baikal or Radicale, type `http://` in the
server address to use plain HTTP. For a self-signed certificate, turn on **Trust
insecure connection** for that account. On Android 17 and later, a server on your
home network also needs local network access. See the
[CalDAV setup guide](./providers/caldav.md#self-hosted-servers-http-or-self-signed-certificates).

## Don't see your service?

If your provider supports CalDAV, connect it through the
[CalDAV setup](./providers/caldav.md). If it doesn't work, check
[Sync troubleshooting](../help/troubleshooting.md), then
[report it](../help/report-a-bug.md).
