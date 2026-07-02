---
sidebar_position: 1
title: iCloud
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

1. Go to [appleid.apple.com](https://appleid.apple.com).
2. Sign in with your Apple ID.
3. Open **Sign-In and Security**.
4. Choose **App-Specific Passwords**.
5. Click **Generate**, then copy the password.

The password looks like `xxxx-xxxx-xxxx-xxxx`, 16 characters. (Dashes are
optional when you enter it.)

## Add the account in KashCal

1. Open the navigation drawer → **Settings** → add an account → **iCloud**.
2. Enter your **Apple ID** (your `name@icloud.com` address).
3. Paste the **app-specific password** you just created.
4. Sign in.

That's it. KashCal connects to iCloud automatically. Apple sometimes routes you to
a regional server behind the scenes, and KashCal handles that for you, so you don't
have to worry about server addresses.

## Trouble signing in?

- Make sure you're using an **app-specific password**, not your normal password.
- Double-check the Apple ID is the full email address.
- If you recently changed your Apple password, generate a fresh app-specific password.
- See [Sync troubleshooting](../../help/troubleshooting.md) for more.
