---
sidebar_position: 1
title: iCloud
description: Connect your iCloud calendars to KashCal on Android. Set up two-way sync with an Apple ID and an app-specific password, shared family calendars included.
---

import Screenshot from '@site/src/components/Screenshot';

# Connecting iCloud

<Screenshot src="/img/screenshots/Sync-with-iCloud.png" alt="KashCal iCloud sign-in screen" align="right" caption="Sign in with your Apple ID and an app-specific password." />

KashCal talks to your iCloud calendars directly. No bridge app, no workaround.

## You need an app-specific password

iCloud does **not** accept your normal Apple ID password in third-party apps. You
need an **app-specific password**, which Apple generates for you. KashCal will
remind you of this if you try your regular password:

> iCloud requires an app-specific password. Your regular Apple ID password won't
> work here.

App-specific passwords are safer. They let you sign in without sharing your main
Apple password, and you can revoke one at any time without changing your real
password.

## Create an app-specific password

1. Go to [account.apple.com](https://account.apple.com) and sign in with your Apple ID.
2. Open **Sign-In and Security**.
3. Choose [App-Specific Passwords](https://support.apple.com/102654).
4. Click **Generate**, then copy the password.

The password looks like `xxxx-xxxx-xxxx-xxxx`, 16 characters. (Dashes are
optional when you enter it.)

## Add the account in KashCal

1. Open Settings → **Calendar accounts** → **Add iCloud**.
2. Enter your **Apple ID** (your `name@icloud.com` address).
3. Paste the **app-specific password** you just created.
4. Sign in.

That's it. KashCal connects to iCloud automatically. Apple sometimes routes you to
a regional server behind the scenes, and KashCal handles that for you, so you don't
have to worry about server addresses.

## Managing or removing the account

Tap the account under Settings → **Calendar accounts** to open its details, where you can:

- **Sync Now** to pull the latest changes immediately.
- **Change Password** if you generated a new app-specific password.
- **Sign Out** to disconnect the account. KashCal asks you to confirm first.

## Trouble signing in?

- Make sure you're using an **app-specific password**, not your normal password.
- Double-check the Apple ID is the full email address.
- If you recently changed your Apple password, generate a fresh app-specific password.
- See [Sync troubleshooting](../../help/troubleshooting.md) for more.
