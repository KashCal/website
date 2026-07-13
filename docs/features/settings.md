---
sidebar_position: 2
title: Settings
description: Where to change KashCal's appearance, event defaults, sync, and privacy options, and what each setting does.
---

# Settings

Most of KashCal works without touching a single setting. But when you want to change how the week starts, how times show up, or how far back sync reaches, it's all in one place.

Open the navigation drawer (swipe from the left edge, or tap the menu icon) and tap **Settings**. The screen is grouped into sections, described below in the order they appear. You can also search settings from the top of the screen.

## Calendars

- **Calendar Accounts:** connect iCloud or a CalDAV server, and manage the accounts you already have. See [Sync & Accounts](../sync/index.md).
- **Birthdays & Anniversaries:** show birthdays and anniversaries from your contacts. See [Birthdays](./birthdays.md).
- **Calendar Feeds (ICS):** subscribe to holiday, sports, or school calendars by URL. See [Calendar feeds](../sync/ics-subscriptions.md).
- **Device Calendars:** show calendars from other apps already on your phone. See [Device calendars](../sync/device-calendars.md).

## Appearance

- **Theme:** choose the app's light or dark face:
  - **System default** follows your phone's light or dark setting and switches automatically when your phone does.
  - **Light** and **Dark** pin the app to that appearance regardless of the system setting.
- **Accent color:** choose the color KashCal is built around. This is separate from the light/dark Theme above, and it recolors both the app and your home-screen widgets.
  - **Automatic** follows your device's Material You wallpaper colors on Android 12 and newer, and is the default.
  - Or pick your own: twelve curated swatches for a quick choice, plus a wheel of 92 named colors for something specific. **KashCal Teal** is the app's own palette, and the fallback when Material You isn't available. Whatever you pick, KashCal keeps text readable on top of it, in light and dark.
- **App Icon:** choose the icon KashCal wears on your home screen. Keep the default, or switch to the **Supporter** icon, a gold card with a heart, to show you've chipped in (or [would like to](https://kashcal.onekash.org/donate)). The supporter icon comes two ways: one keeps the KashCal name, and one shows a discreet **Calendar** name instead. Changing the icon may restart the app, and notifications always use the default icon and name.
- **Event Emojis:** when on, KashCal shows an emoji next to an event based on its title (a cake for a birthday, a plane for a flight). Turn it off for a plainer list.
- **Time Format:** 12-hour, 24-hour, or follow the system. The row shows a live example of the current format.
- **Start Week On:** whether your week begins on the system default, Monday, Sunday, or Saturday. This changes every calendar grid at once.
- **Week Numbers:** show the ISO week number alongside the month grid.
- **Show declined events:** keep events you've declined visible, shown dimmed with a strikethrough, instead of hiding them.
- **Widget Event Limit:** how many events each day shows in the home-screen widgets. The default is 5.

:::note[Material You colors]
With **Accent color** set to **Automatic**, KashCal picks up your **Material You** wallpaper colors on Android 12 and newer. Pick any other accent and KashCal uses that color instead, on both the app and your widgets.
:::

## Creating events

- **Default Calendar:** where new events are created unless you pick another. Tap to choose from any of your calendars, grouped by account. This row shows up once you have at least one calendar.
- **Default Event Length:** how long a new event runs before you change it. The default is 30 minutes.
- **Default Alerts:** the reminder added to a new event automatically. The default is 15 minutes before.
- **Quick Event Add:** turns on the natural-language capture box, so you can type "Coffee with Kash tomorrow 3pm" and get a real event. See [Quick Add](../events/quick-add.md).
- **Suggest event titles:** offers title suggestions as you type in the event form. On by default.
- **Notifications:** tap to grant notification permission so your reminders can actually alert you. See [Reminders](../events/reminders.md).

## Sync

- **Sync Lookback:** how far into the past and future to download events. The default is one year each way. Widen it if you need older history on the device.

See [How sync works](../sync/how-sync-works.md) for what happens during a sync.

## Backup & Restore

Export your local events to an `.ics` file, back up your settings, and import or restore them on a new device. See [Backup & restore](./backup-restore.md).

## Privacy

- **App lock:** require your fingerprint, face, or screen lock to open KashCal. Off by default. See [App lock](./app-lock.md).

## Related

- [App lock](./app-lock.md): put a curtain over your calendar
- [Reminders](../events/reminders.md): notifications that survive a reboot
- [Sync & Accounts](../sync/index.md): connect and manage your calendars
- [Backup & restore](./backup-restore.md): move to a new device
