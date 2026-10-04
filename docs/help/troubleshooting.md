---
sidebar_position: 3
title: Troubleshooting
description: Fixes for common problems in KashCal, from sync and reminders to accounts and missing events.
---

# Troubleshooting

Fixes for the common problems. If none of these solve yours, see
[Before you file a bug](./report-a-bug.md).

## Sync isn't working

Start with a sync right away: pull down on a calendar view. Pull to refresh works when
you're online and have an iCloud or CalDAV account connected.

Then check the basics:

- Are you online? KashCal queues your changes while you're offline and sends them when
  you reconnect.
- Is **Sync frequency** set to **Manual only** in Settings? If so, KashCal syncs only
  when you ask.

For iCloud, sign in with an app-specific password, not your normal Apple password. If
you changed your Apple password, generate a new app-specific one. See
[iCloud setup](../sync/providers/icloud.md).

For CalDAV servers, check the server address, username and password. If your provider
offers an app password, use that. See [CalDAV setup](../sync/providers/caldav.md).

For a self-hosted server:

- Plain HTTP: type `http://` at the start of the server address.
- Self-signed certificate: turn on **Trust insecure connection** when you sign in.
- A server on your home network, on Android 17 and later: allow local network access.

See [Self-hosted servers](../sync/providers/caldav.md#self-hosted-servers-http-or-self-signed-certificates).

To see what happened, open **Sync History** in
[Advanced options](./advanced-options.md). It lists the sync sessions of the last 48
hours and any failures.

Still wrong? Tap **Force Full Sync** in the same menu, then **Sync Now**. KashCal
downloads everything again and keeps your local changes.

## Some events are missing

- Check **Sync lookback** in [Settings](../features/settings.md#sync). KashCal
  doesn't download events older than that window.
- Make sure the calendar is shown: its checkbox in the navigation drawer is on.
- Calendars from Google, Outlook and other apps on your phone come in through
  [Device calendars](../sync/device-calendars.md). They stay off until you turn them on
  and pick each calendar.
- [Contact birthdays](../features/birthdays.md) missing? Some phones, Realme among
  them, don't share with other apps the birthdays of contacts saved only on the phone,
  even though their contacts app shows them. Save the contact to a synced account,
  such as your Google account, and the birthday appears in KashCal.

## Reminders aren't firing

- Grant notification permission. Open the
  [account hub](../calendar/navigation.md#the-account-hub), then **App permissions**.
- Turn off battery optimization for KashCal, in Android Settings > Apps > KashCal >
  Battery. Samsung, Xiaomi, Oppo and OnePlus phones cut off background work, which
  stops reminders from firing. [dontkillmyapp.com](https://dontkillmyapp.com) has steps
  for each brand.
- Reminders are exact alarms and arrive on the minute. On Android 12 and 12L, check
  that "Alarms & reminders" is on for KashCal in Android's app settings; with it off,
  KashCal uses inexact alarms, which Android can deliver late while the phone is idle.
- After a restart, KashCal schedules your reminders again on its own.

See [Reminders](../events/reminders.md).

## Invitations aren't being sent

Sending invitations needs an account that supports scheduling. The Local calendar,
and an account with no email address for you, can't invite people. A local device
calendar keeps guests but can't notify them. Some servers, SOGo and mailbox.org among
them, save your guests without notifying them. See
[Known limitations](./known-limitations.md#invitations-depend-on-your-calendar-account).

## A calendar feed isn't updating

- Check the feed's refresh interval. A feed set to **Weekly** updates once a week.
- Check that the feed isn't paused. A paused feed shows **Sync paused** on its row.
  Turn on its switch to resume it.
- If the last refresh failed, the row shows the error in red.
- Tap the refresh button on the feed's row to fetch it right away.
- Open the feed URL in a browser to check that it still works.
- Feed events are read-only. Changes have to come from the source.

See [Calendar feeds](../sync/ics-subscriptions.md).

## I lost my events after reinstalling

Events from your accounts live on your servers. After you reinstall, add your accounts
again and the events sync back. Events in the Local calendar aren't on a server or in a settings backup.
[Export them to .ics](../sync/import-export.md#export-to-ics) before you uninstall. To
restore your settings and feeds, use a [settings backup](../features/backup-restore.md).

## Capturing logs for a bug report

For a sync problem, copy your Sync History:

1. Open Settings, scroll to the bottom and long-press the version line
   (**KashCal v...**).
2. Tap **Sync History**.
3. Tap the copy button at the top of the sheet, then paste the text into your issue.

The text includes your calendar names, so check it before you post it. See
[Advanced options](./advanced-options.md#copying-or-clearing-the-history).

For a problem with device calendars, capture Android's logs with
[Logcat Reader](https://f-droid.org/packages/com.dp.logcatapp) from F-Droid:

1. Open Logcat Reader, then Filter, then set "Tag contains" to
   `CalProviderRepo OR DisplayEventRepo OR CalProviderManager`.
2. Start recording.
3. Open KashCal and reproduce the problem.
4. Stop recording, then Save or Share, and attach the file to your issue.

Logcat Reader needs a one-time `adb shell pm grant com.dp.logcatapp android.permission.READ_LOGS`
to see KashCal's logs. The app walks you through it.
