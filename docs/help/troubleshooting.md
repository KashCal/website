---
sidebar_position: 3
title: Troubleshooting
---

# Troubleshooting

Most snags have a quick fix. Here are the common ones. If none of these sort it out,
see [Before you file a bug](./report-a-bug.md).

## Sync isn't working

**Try an immediate sync first.** Pull down on any calendar view to force a sync.

**Check the basics:**

- Are you online? KashCal queues changes while offline and sends them when you reconnect.
- Is background sync set to **Manual only** in Settings? If so, it won't sync on its own.
- Is sync limited to **Wi-Fi only**? If so, it won't sync on mobile data.

**For iCloud:** make sure you used an **app-specific password**, not your normal Apple
password. If you recently changed your Apple password, generate a new app-specific one.
See [iCloud setup](../sync/providers/icloud.md).

**For CalDAV servers:** double-check the server address, username, and password. If
your provider offers an **app password**, use that. See [CalDAV setup](../sync/providers/caldav.md).

**Self-hosted server?** If it uses plain HTTP or a self-signed certificate, enable
**Trust insecure connection** for that account.

**Still off?** Try **Force Full Sync** in Settings to re-download everything (your
local changes are preserved).

## Some events are missing

- Check the **sync lookback** setting. Events older than your chosen window aren't downloaded.
- Make sure the calendar is **shown** (toggled on) in the navigation drawer.

## Reminders aren't firing

- Grant **notification permission** to KashCal.
- If asked, allow **exact alarms** so reminders arrive on time.
- Some devices aggressively limit background apps. Check your phone's battery
  settings and allow KashCal to run in the background, so reminders aren't delayed.
- Aggressive battery optimizers on Samsung, Xiaomi, Oppo, OnePlus, and others can
  kill background work and stop reminders from firing. Disable battery optimization
  for KashCal in Android Settings > Apps > KashCal > Battery. See
  [dontkillmyapp.com](https://dontkillmyapp.com) for vendor-specific guidance.
- After a reboot, KashCal re-schedules reminders automatically; give it a moment after restart.

## Invitations aren't being sent

Sending invitations needs an account that supports scheduling. Local-only calendars
can't notify guests. See [Known limitations](./known-limitations.md).

## A calendar feed isn't updating

- Check the feed's **refresh interval**. A feed set to "Weekly" only updates weekly.
- Confirm the feed URL still works in a browser.
- Feed events are read-only; edits have to come from the source.

## I lost my events after reinstalling

Events come from your connected accounts. After reinstalling, re-add your accounts and
they'll sync back. To restore your **settings**, use a [settings backup](../features/backup-restore.md).

## Capturing logs for a bug report

KashCal has no built-in logging yet, but you can capture logs with
[Logcat Reader](https://f-droid.org/packages/com.dp.logcatapp) from F-Droid:

1. Open Logcat Reader, then Filter, then set "Tag contains" to
   `CalProviderRepo OR DisplayEventRepo OR CalProviderManager`.
2. Start recording.
3. Open KashCal and reproduce the issue.
4. Stop recording, then Save or Share, and attach the file to your issue.

Logcat Reader needs a one-time `adb shell pm grant com.dp.logcatapp android.permission.READ_LOGS`
to see KashCal's logs. The app walks you through it.
