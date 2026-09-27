---
sidebar_position: 2
title: Settings
description: Where to change KashCal's appearance, event defaults, sync and backup options, and what each setting does.
---

# Settings

KashCal works without changing any setting. When you want to change how the week starts, how times show, or how far back sync reaches, the options are on one screen.

Tap the avatar in the top-right corner to open the [account hub](../calendar/navigation.md#the-account-hub), then tap **Accounts & Settings**. The screen has five sections, described below in the order they appear.

## How the Settings screen works

- Picker rows show their current value on the right. On and off options use a switch.
- Tapping a picker row opens a sheet from the bottom of the screen with every option. Tapping an option saves it and closes the sheet.
- Some switch rows have an info button (ⓘ). Tap it to read what the setting does. It doesn't flip the switch.
- To search, tap the search icon in the top bar and type in **Search settings…**. The list keeps only rows whose label or value matches, and highlights the match. A query that matches a section header keeps that whole section, so "appearance" finds every row under **Appearance**. If nothing matches, the screen says so.
- Press Back once to clear the query, and again to close the search bar. If the keyboard is open, the first Back closes the keyboard.

With a screen reader, each picker is announced as a group of radio buttons, so you hear which option is selected before you change it.

## Calendars & accounts

- **Calendar accounts:** connect iCloud or a CalDAV server, and manage the accounts you have. See [Sync & Accounts](../sync/index.md).
- **Birthdays & anniversaries:** show birthdays and anniversaries from your contacts. See [Birthdays](./birthdays.md).
- **Calendar feeds (ICS):** subscribe to holiday, sports or school calendars by URL. See [Calendar feeds](../sync/ics-subscriptions.md).
- **Device calendars:** show calendars from other apps on your phone. Once you turn them on, the row shows how many are enabled. See [Device calendars](../sync/device-calendars.md).

## Appearance

Theme, accent color, app icon and widget colors live in the account hub, not here. See [Settings in the account hub](#settings-in-the-account-hub).

- **Time format:** **System default**, **12-hour** or **24-hour**. Each choice shows the current time in that format. The default is **System default**.
- **Start week on:** **System default**, **Sunday**, **Monday** or **Saturday**. This changes every calendar grid. The default is **System default**, which follows your phone's region.
- **Widget event limit:** how many events each day shows in the home-screen widgets. Choose 3, 5, 8, 10 or 15. The default is 5 per day.
- **Detailed widget rows:** show each event on two lines in the list widgets, the title above its start and end time, instead of one compact line. Off by default. See [Widgets](./widgets.md#two-lines-or-one).
- **Show week numbers:** add a week-number column to the Month view and the month widget. Weeks are counted from your **Start week on** day, using your region's rule for the first week of the year. Off by default.
- **Multi-day events in all-day strip:** in Day, 3 Days and Week, show a timed event that crosses midnight and lasts 20 hours or more in the all-day strip at the top, instead of in the timed grid. Off by default.
- **Show declined events:** keep events you've declined on your calendar, dimmed with a strikethrough, instead of hiding them. Off by default.
- **Event emojis:** put an emoji before an event's title based on its words, such as 🎂 for "Birthday" or ✈️ for "Flight", in the calendar views and in the agenda, week and upcoming widgets (the month widget shows plain titles). Titles that already contain an emoji stay plain. So do titles with words such as funeral, surgery, divorce or layoff. On by default.

## Event preferences

- **Default calendar:** where new events go unless you pick another. Tap to choose from the calendars you can write to, grouped by account. Read-only calendars, such as feeds, aren't listed.
- **Default event length:** how long a new event runs. Choose 15 minutes, 30 minutes, 1 hour or 2 hours. The default is 30 minutes.
- **Timed event alert:** the reminder added to a new event that has a start time. The default is 15 minutes before.
- **All-day event alert:** the reminder added to a new all-day event. The presets are **No reminder**, **Day of event**, 1 day before, 2 days before and 1 week before. Each preset alert fires at 9 AM (09:00). The sheet says so at the top. The default is 1 day before, at 9 AM.
- **Smart event add:** turns on the natural-language capture box, so you can type "Coffee with Kash tomorrow 3pm" and get an event. Off by default. See [Smart event add](../events/smart-event-add.md).
- **Suggest event titles:** as you type a title in the event form, suggests titles you've used before, ranked by how often and how recently you used them. On by default.

**Default calendar** and both alert rows show once you have at least one calendar.

:::note[Setting a custom alert]
Both alert rows offer a list of presets plus **Custom**, which swaps in a scrolling
duration wheel with a **Back** control to return to the presets.

The wheel commits only when you tap **Done**, so scrolling it doesn't close the sheet
or change anything on its own. If you open **Custom** and tap **Done** without
scrolling, your existing alert stays as it was, including a value synced from
another app that doesn't line up with the wheel's steps.

For all-day events, the wheel sets a time before the start of the event's day, so a
custom all-day alert can fire at a time other than 9 AM.
:::

## Sync

Notification permission, which reminders need, is on the **App permissions** screen in the account hub. See [Reminders](../events/reminders.md).

- **Sync frequency:** how often KashCal syncs in the background. Choose 15 or 30 minutes, 1, 6, 12 or 24 hours, or **Manual only** to sync only when you ask. The default is every hour. 15 minutes is the shortest interval Android allows for background work.
- **Sync lookback:** how far into the past to sync events. Choose 3 months, 6 months, 1 year, 2 years, 5 years or **All events**. The default is one year. Widen it if you need older history on the phone.

See [How sync works](../sync/how-sync-works.md) for what happens during a sync.

## Backup & restore

- **Export Local calendar:** save your local events to an `.ics` file.
- **Back up settings:** save your KashCal configuration to a JSON file.
- **Import events from file:** add events from an `.ics` file to a calendar you can write to.
- **Restore settings:** read your configuration back from a backup file.

See [Backup & restore](./backup-restore.md) for what's included and what isn't.

## Settings in the account hub

These settings are in the [account hub](../calendar/navigation.md#the-account-hub), not on the Settings screen:

- Under **Make it yours**: **Theme**, **Accent color**, **App Icon**, **Widget theme** and **Widget accent**. See [Widgets](./widgets.md#colors-and-theme-together-or-apart) for the widget colors.
- Under **Privacy & Security**: the **App lock** switch and the **App permissions** screen. See [App lock](./app-lock.md).

:::note[Material You colors]
With **Accent color** set to **Automatic**, KashCal uses your wallpaper's Material You colors. Pick any other accent and the app uses that color instead. Widgets use the app's accent while **Widget accent** is set to **Follow app**, the default.
:::

At the bottom of the Settings screen, tap the KashCal version line to open a short sheet about the app. The line is hidden while you search.

## Related

- [App lock](./app-lock.md): put a curtain over your calendar
- [Reminders](../events/reminders.md): notifications that survive a reboot
- [Sync & Accounts](../sync/index.md): connect and manage your calendars
- [Backup & restore](./backup-restore.md): move to a new device
