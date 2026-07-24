---
sidebar_position: 2
title: CalDAV (Nextcloud, Fastmail & more)
description: "Connect any CalDAV server to KashCal on Android: Nextcloud, Fastmail, Radicale, Baikal, Zoho, and more. Automatic server discovery included."
---

import Screenshot from '@site/src/components/Screenshot';

# Connecting a CalDAV server

<Screenshot src="/img/screenshots/CalDAV-Account.png" alt="KashCal CalDAV account sign-in screen" align="right" caption="Server address, username, and password." />

This is the one path that connects just about any CalDAV calendar service, including
Nextcloud, Fastmail, Radicale, Baikal, Zoho, mailbox.org, Stalwart, SOGo, and more.

## Add the account

1. Open Settings → **Calendar accounts** → **Add CalDAV**.
2. Fill in:
   - **Server URL**: for example, `nextcloud.example.com`. If you leave off
     `https://`, KashCal adds it for you.
   - **Username**: your account username for that service.
   - **Password**: your password, or better, an **app password** if the service
     offers one (see below).
   - **Display Name** *(optional)*: a friendly name shown in Settings. If you leave
     it blank, KashCal names it after the server.
3. Sign in. KashCal automatically finds your calendars.

## Use an app password where possible

Services like **Nextcloud** and **Fastmail** let you create a dedicated **app
password** for connecting other apps. Use one instead of your main password. It's
safer and, for some services, required. Look in your provider's security settings to
generate one.

## Automatic discovery

You usually only need the main server address. KashCal probes the standard CalDAV
locations to find your calendars automatically, so you rarely need to know the exact
calendar path.

If you do have a full CalDAV URL from your provider, you can enter that too.

## Self-hosted servers (HTTP or self-signed certificates)

If you run your own server over plain `http://`, or with a self-signed TLS
certificate, switch on **Trust insecure connection** (labeled "For self-signed
certificates or local HTTP servers").

Use this only for self-hosted or local setups. For public services, always keep the
secure `https://` connection.

### Servers on your home network

On **Android 17 and newer**, apps need your permission before they can reach devices
on your local network. When you enter an address that looks like it's on your own
network, KashCal shows a banner in the sign-in screen:

> This server looks like it's on your local network. Allow local network access so
> KashCal can connect to it.

Tap **Allow access** and the connection goes through. It's a banner rather than a
blocking dialog, so you can carry on filling in the form and grant it when you're
ready. Without it, a server at an address like `192.168.1.10` can't be reached, which
otherwise looks like an unexplained connection failure.

## Provider-specific tips

- **Nextcloud**: use an app password from *Settings → Security → Devices & sessions*. The address is usually your Nextcloud domain.
- **Fastmail**: create an app password scoped to calendars (CalDAV) in your Fastmail settings.
- **Baikal / Radicale**: often self-hosted, so you may need the "Trust insecure connection" option for local or self-signed setups.
- **Zoho, mailbox.org, Stalwart, SOGo**: enter your normal server address and credentials, and KashCal recognizes these services and adjusts automatically.

## Managing or removing the account

Tap the account under Settings → **Calendar accounts** to open its details, where you can:

- **Sync Now** to pull the latest changes immediately.
- **Change Password** if you rotated your password or app password.
- **Sign Out** to disconnect the account. KashCal asks you to confirm first.

## Trouble connecting?

- Confirm the server address is correct and reachable from your phone.
- If your provider offers app passwords, make sure you're using one.
- For self-hosted servers, check whether you need "Trust insecure connection".
- See [Sync troubleshooting](../../help/troubleshooting.md).
