---
sidebar_position: 3
title: Your first few minutes
description: KashCal works the moment you open it, with no setup or sign-up. Find your way around and start with the local calendar on your device.
---

# Your first few minutes

KashCal works the moment you open it. There's no setup and no sign-up.

## You start with a local calendar

KashCal comes with a calendar stored on your device. It shows as **Local** in the
navigation drawer. You can create events in it without connecting an account.

KashCal doesn't sync the local calendar anywhere. If Android backup is on for your
phone, Android's backup includes KashCal's data. To add more calendars like it, open
**Settings** and tap **Offline calendars**. See [Offline calendars](../sync/offline-calendars.md).

## Where are your calendars?

If nothing is set up yet, KashCal opens with a full-height sheet that asks
**Where are your calendars?** Nothing set up means no iCloud or CalDAV account, no
calendar feed, no contact birthdays, device calendars off and no events in KashCal.
Pick one:

- **iCloud** opens the iCloud sign-in in Settings.
- **CalDAV server** opens the CalDAV sign-in, for Nextcloud, Fastmail, Radicale and
  other servers.
- **On this device** opens the Device calendars screen, for the Google, Outlook and
  other calendars already on your phone. See [Device calendars](../sync/device-calendars.md).
- **Use offline calendar** closes the sheet. You start with the local calendar.

Closing the sign-in, or going back from Device calendars, returns you to the calendar.
So does a finished iCloud sign-in. After a CalDAV sign-in, tap **Done** on the sheet
that confirms it.

Any choice, or swiping the sheet down, tapping outside it or pressing back, closes the
sheet for good. Add other accounts later from **Accounts & Settings**, described next.

## Add a calendar account (optional)

To bring in calendars you already have (iCloud, Nextcloud, Fastmail and others), tap
the round avatar in the top-right corner, then **Accounts & Settings**. You can also
open **Settings** from the navigation drawer. See [Sync & Accounts](../sync/index.md)
for step-by-step guides.

## Create your first event

Tap the + button and fill in the event form. The button is in every calendar
view. Insights doesn't have it.

To type an event the way you'd say it, like *"Lunch with Sam Friday 12:30 for 1
hour"*, turn on **Smart event add** in Settings under **Event preferences**. It's off
until you turn it on. KashCal then works out the date, time and duration as you type.
See [Smart event add](../events/smart-event-add.md).

## Find your way around

- Switch views from the navigation drawer. Tap the menu icon or swipe in from the left
  edge.
- Jump to today by tapping the calendar icon showing today's date, next to the menu
  icon.
- Search from the magnifier in the top bar, or long-press the app icon on your home
  screen and pick **Search**.
- Show or hide calendars from the navigation drawer.

See [Navigation & shortcuts](../calendar/navigation.md) for the rest.

## Turn on reminders

On Android 13 and later, reminders need Android's notification permission. The event
form asks for it the first time you save an event with a reminder; the other places
that ask are listed in [Reminders](../events/reminders.md). Smart event add doesn't ask. Android shows its own permission prompt, and the event saves
whatever you answer.

If you deny it once, KashCal explains why before asking again:

> KashCal needs notification permission to remind you about upcoming events.

Tap **Enable** to see Android's prompt again, or **Not Now** to skip it. You can change
the permission later in your phone's settings, or from **App permissions** in the
account hub. Android 12 doesn't ask, because notifications are allowed by default there.

Your events can have reminders before you save one from the form, for example after
you sync an account or import a file. If KashCal has never asked for the permission and
reminders are due in the next 7 days, a **Reminders are off** banner shows above the
calendar, with **Turn on** to ask for it. See
[The "Reminders are off" banner](../events/reminders.md#the-reminders-are-off-banner).

## What's new after an update

After an update that comes with release notes, KashCal shows a sheet with a page for
each note. Swipe, or tap **Next** and **Back**, to move between pages; on the last page
**Next** becomes **Done**. A page about a feature can show **Find it in** with where to
find it. Tap **Skip**, swipe the sheet down or tap outside it to close it early. It stays
closed until the next release with notes. It doesn't show on first launch, and it
waits while the **Where are your calendars?** sheet is open.

## Next steps

- [Calendar views and gestures](../calendar/views.md)
- [Connect your calendars](../sync/index.md)
- [Adjust your settings](../features/settings.md): week start, time format, event defaults
- [Browse all features](../features/index.md)
