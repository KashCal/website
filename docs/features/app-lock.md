---
sidebar_position: 8
title: App lock
description: App lock hides your KashCal events until you confirm it's you with your fingerprint, face, or screen lock.
---

# App lock

App lock hides your calendar until you confirm it's you. Anyone who picks up your
phone while it's open sees a lock screen instead of your events.

## What it does

When App lock is on, KashCal opens to a **Locked** screen that covers all your events.
Android's lock prompt appears right away. If you close the prompt, tap the button on
the lock screen to bring it back.

You confirm with your fingerprint, your face, or your screen lock (PIN, pattern or
password). KashCal accepts only biometrics that Android rates as strong. If your
phone's face recognition isn't rated strong, the prompt offers your fingerprint or
screen lock instead.

While KashCal is locked, its preview in the Recents screen is hidden.

## When it locks

- Every time KashCal starts fresh.
- When you come back after KashCal has been in the background for 30 seconds or more.

A quick switch to another app and back, or rotating the phone, doesn't lock it again.
Neither does a trip to KashCal's **Settings** or to an Android settings page that
KashCal opens for you.

## Turn it on

App lock is off by default.

1. Tap the avatar in the top-right of any calendar view to open the
   [account hub](../calendar/navigation.md#the-account-hub).
2. Under **Privacy & Security**, turn on **App lock**.

KashCal confirms:

> App lock on. KashCal will ask you to authenticate next time you open it.

The lock takes effect the next time KashCal starts, or when you come back after 30
seconds or more away. It doesn't lock the screen you're on.

If your phone has no fingerprint, face or screen lock set up, KashCal shows this message
and opens Android's setup screen so you can add one:

> Set up a fingerprint, face, or screen lock in system settings to use App lock.

If your phone can't use any of them, KashCal shows:

> This device can't use App lock.

## Turn it off

Turn off **App lock** in the account hub. Android asks you to confirm it's you first,
so someone holding your phone while KashCal is open can't switch it off. If you
cancel, the lock stays on.

If you remove every fingerprint, face and screen lock from your phone, KashCal stops
asking and opens without a prompt, so you're never locked out.

## Good to know

- App lock controls who can open KashCal on your phone. Your account passwords are
  stored encrypted whether App lock is on or off. See
  [Privacy & Security](../privacy/overview.md).
- The App lock setting isn't included in [settings backups](./backup-restore.md). Each
  phone has its own lock, so you turn it on per phone.

## Related

- [Privacy & Security](../privacy/overview.md): what leaves your device and what doesn't
- [Backup & restore](./backup-restore.md): move your settings to a new device
