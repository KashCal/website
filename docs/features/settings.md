---
sidebar_position: 2
title: Settings
description: Where to change KashCal's appearance, event defaults, sync, and privacy options, and what each setting does.
---

# Settings

Most of KashCal works without touching a single setting. But when you want to change how the week starts, how times show up, or how far back sync reaches, it's all in one place.

Tap the avatar in the top-right corner to open the [account hub](../calendar/navigation.md#the-account-hub), then tap **Accounts & Settings**. The screen is grouped into sections, described below in the order they appear.

## How the Settings screen works

Three things make the screen quick to read:

- **Rows show their current value on the right.** You can read your whole setup at a glance instead of opening each row to check what it's set to. Rows that are only on or off, like **Show week numbers**, use a switch instead.
- **Tapping a row opens a picker from the bottom of the screen.** Choices slide up as a sheet rather than unfolding as a menu on top of everything, so you always see the full list of options.
- **Search covers rows and section headers.** Type in **Search settings…** at the top. Matching rows are filtered down and the matched text is highlighted, in both the row's label and its value. Matching a section header surfaces that whole group, so "appearance" finds every setting under that header even when no individual row contains the word.

With a screen reader, each picker is announced as a group of radio buttons, so you hear which option is currently selected before you change it.

## Calendars & accounts

- **Calendar accounts:** connect iCloud or a CalDAV server, and manage the accounts you already have. See [Sync & Accounts](../sync/index.md).
- **Birthdays & anniversaries:** show birthdays and anniversaries from your contacts. See [Birthdays](./birthdays.md).
- **Calendar feeds (ICS):** subscribe to holiday, sports, or school calendars by URL. See [Calendar feeds](../sync/ics-subscriptions.md).
- **Device calendars:** show calendars from other apps already on your phone. The row shows how many are enabled. See [Device calendars](../sync/device-calendars.md).

## Appearance

:::note[Theme, accent color, and app icon moved]
Personalization now lives in the **account hub**, not here. Tap the avatar in the
top-right of any calendar view and look under **Make it yours** for **Theme**,
**Accent color**, and **App icon**. See [The account hub](../calendar/navigation.md#the-account-hub).
:::

- **Time format:** 12-hour, 24-hour, or follow the system. Each choice in the picker shows a sample time in that format, so you can see the difference before committing to it.
- **Start week on:** whether your week begins on the system default, Monday, Sunday, or Saturday. This changes every calendar grid at once.
- **Widget event limit:** how many events each day shows in the home-screen widgets. Choose 3, 5, 8, 10, or 15. The default is 5 per day.
- **Show week numbers:** show the ISO week number alongside the month grid.
- **Show declined events:** keep events you've declined visible, shown dimmed with a strikethrough, instead of hiding them.
- **Event emojis:** when on, KashCal shows an emoji next to an event based on its title (a cake for a birthday, a plane for a flight). On by default; turn it off for a plainer list.

:::note[Material You colors]
With **Accent color** set to **Automatic**, KashCal picks up your **Material You** wallpaper colors on Android 12 and newer. Pick any other accent and KashCal uses that color instead, on both the app and your widgets.
:::

## Event preferences

- **Default calendar:** where new events are created unless you pick another. Tap to choose from any of your calendars, grouped by account. This row shows up once you have at least one calendar.
- **Default event length:** how long a new event runs before you change it. The default is 30 minutes.
- **Timed event alert:** the reminder added automatically to a new event that has a start time. The default is 15 minutes before.
- **All-day event alert:** the reminder added automatically to a new all-day event. All-day alerts fire at 9 AM (09:00), so this setting picks the day rather than the time: the day of the event, the day before, and so on. The sheet says so at the top.
- **Smart event add:** turns on the natural-language capture box, so you can type "Coffee with Kash tomorrow 3pm" and get a real event. Off by default. See [Smart event add](../events/smart-event-add.md).
- **Suggest event titles:** offers title suggestions as you type in the event form, ranked by how often and how recently you've used them. On by default.

:::note[Setting a custom alert]
Both rows offer a list of presets plus **Custom**, which swaps in a scrolling
duration wheel with a **Back** control to return to the presets.

The wheel commits only when you tap **Done**, so scrolling it doesn't close the sheet
or change anything on its own. If you open **Custom** and tap **Done** without
scrolling, your existing alert is kept exactly as it was, including an unusual value
synced from another app that doesn't line up with the wheel's steps.
:::

## Notifications & sync

- **Notifications:** tap to grant notification permission, so your reminders can alert you. The row shows whether it's enabled. See [Reminders](../events/reminders.md).
- **Sync frequency:** how often KashCal syncs in the background. Choose 15 or 30 minutes, 1, 6, 12, or 24 hours, or **Manual only** to sync only when you ask. The default is every hour, and 15 minutes is the shortest interval Android allows for background work.
- **Sync lookback:** how far into the past to download events, from 3 months up to **All events**. The default is one year. Widen it if you need older history on the device.

See [How sync works](../sync/how-sync-works.md) for what happens during a sync.

## Backup & restore

- **Export Local calendar:** save your local events to an `.ics` file.
- **Back up settings:** write your preferences out to a file.
- **Import events from file:** bring in events from an `.ics` file.
- **Restore settings:** read your preferences back from a backup file.

See [Backup & restore](./backup-restore.md) for what's included and what isn't.

## Privacy

- **App lock:** require your fingerprint, face, or screen lock to open KashCal. Off by default. See [App lock](./app-lock.md).

## Related

- [App lock](./app-lock.md): put a curtain over your calendar
- [Reminders](../events/reminders.md): notifications that survive a reboot
- [Sync & Accounts](../sync/index.md): connect and manage your calendars
- [Backup & restore](./backup-restore.md): move to a new device
