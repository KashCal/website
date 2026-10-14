---
sidebar_position: 4
title: Reminders
description: Get an alert before an event starts. Add up to five reminders per event in KashCal, with separate timing for all-day events.
---

# Reminders

A reminder is an Android notification that tells you an event is coming up.

## Add a reminder

In the event form, tap the alerts row (the bell). It lists the event's alerts, or
**None**. Each event can have up to five alerts.

1. Tap **Add Alert**. KashCal adds an alert and opens a picker for it.
2. Tap a preset chip. The picker closes with that lead time set.
3. Or turn the **days**, **hrs** and **min** wheels to set any lead time, then tap
   **Done**. The minute wheel moves in 5-minute steps.

On a timed event, the new alert starts at 15 minutes before, and the chips are 15m,
30m, 1h and 1d. Set all wheels to 0 for an alert at the start time.

All-day events have no start time, so their chips fire at 9 AM:

- 9AM: 9 AM on the day of the event
- 1d: 9 AM the day before
- 2d: 9 AM two days before
- 1w: 9 AM a week before

Tap an alert to change it. Tap the ✕ on its row to remove it. **Add Alert**
disappears once an event has five.

An event synced from another app can carry more than five alerts. The form shows the
first five, and a line under them says how many aren't shown.

## Alerts on invitations

On an event you were invited to, you can't change the details, but you can set your
own alerts. They stay on this phone and aren't sent to the organizer or your server.

## When a reminder fires

The notification shows the event title, its time, and its location if it has one. For
an all-day event it shows Today, Tomorrow or "In 3 days" in place of a time. Tap
it to open the event. It has two actions:

- **Snooze** reminds you again in 15 minutes.
- **Dismiss** clears it.

You can't change the 15-minute snooze. If you turn on notification snoozing in
Android's notification settings, Android adds its own snooze with other lengths.

KashCal schedules your reminders again after the phone restarts and after the app
updates. A reminder that fired before a restart is gone: Android clears notifications
when the phone restarts, and KashCal doesn't show a fired reminder again. To be
reminded more than once, add more alerts to the event.

## Default reminders

Each event you create starts with a default alert. **Timed event alert** sets it for events
with a start time (15 minutes before, unless you change it). **All-day event alert**
sets it for all-day events (9 AM the day before, unless you change it). Both are in
Settings under **Event preferences**; see
[Settings](../features/settings.md#event-preferences). Each setting holds one alert. You can
change or remove the alert on any single event, or add more.

## Notification permission

On Android 13 and later, reminders need notification permission. When you save an
event with an alert from the event form and the permission isn't granted, Android asks
for it. If you said no once before, KashCal shows this first:

> KashCal needs notification permission to remind you about upcoming events.

To grant it later, open the [account hub](../calendar/navigation.md#the-account-hub),
then **App permissions**.

KashCal schedules reminders as exact alarms, so they arrive on the minute. Android
grants this when you install KashCal. On Android 12 and 12L you can turn it off under
"Alarms & reminders" in Android's app settings; KashCal then uses inexact alarms, which
Android can deliver a few minutes late.

## Mute a calendar

To stop one calendar's notifications without hiding it, open **Settings** and tap
**Calendar notifications**, the last row under **Calendars & accounts**. The sheet lists
every calendar KashCal shows, each with a switch:

- your accounts' calendars, grouped by account, and calendar feeds, under
  **Calendar Feeds**,
- birthdays and anniversaries, under **Contacts**,
- the device calendars you turned on, under **Device calendars**, grouped by account,
- KashCal's own calendars, under **Offline**, last.

All switches start on. A calendar you turn off is muted: it still shows on your calendar
and keeps syncing, but it sends no reminders, no invitation notifications and no change
notifications. Changes to a muted iCloud or CalDAV calendar still appear in
[Recent changes](../sync/how-sync-works.md#recent-changes). In the
[navigation drawer](../calendar/navigation.md#the-navigation-drawer), a muted calendar has a
bell-off icon after its name.

The Settings row shows **All calendars**, or how many calendars are muted, for example
"2 muted". Turn a calendar back on and its reminders that are still ahead come back. A
reminder whose time passed while the calendar was muted doesn't arrive late.

Hiding a calendar in the drawer doesn't stop its reminders. In the sheet, a hidden
calendar's row says **Hidden**.

If KashCal can't show notifications, a note at the top of the sheet says why, with a
button to fix it: **Enable** when notification permission is missing, **Open Settings**
when KashCal's notifications or its **Event Reminders** channel are off in Android's
settings.

## Device calendar reminders

If you show calendars from other apps on your phone (see
[Device calendars](../sync/device-calendars.md)), KashCal also sends reminders for
their events. Reminders due at the same moment all show. If a reminder arrives late,
KashCal also shows the others that came due in the meantime.

In **Calendar notifications**, the **Device calendars** heading has its own switch. It
shows once you've turned on at least one device calendar, and it's on by default. Turn it
off to silence all device calendars, including ones you turn on later. Their rows grey out
and keep their own switches, so turning it back on restores them.

## Related

- [Creating & editing events](./event-form.md): set a reminder while you edit
- [Settings](../features/settings.md#event-preferences): the default reminders for new events
- [Calendar feeds](../sync/ics-subscriptions.md): a paused feed's reminders still fire
