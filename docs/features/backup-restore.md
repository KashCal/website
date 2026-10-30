---
sidebar_position: 7
title: Backup & restore
description: Back up your offline calendars to a folder on a schedule, and save your KashCal settings, feeds and tag colors to a JSON file.
---

# Backup & restore

KashCal has two kinds of backup:

- Automatic calendar backup saves each offline calendar as an `.ics` file in a folder you
  choose, on a schedule you set.
- A settings backup saves your settings, feeds and tag colors to one JSON file when you ask.
  It holds no events. Use it to set up a new phone, or to keep a copy before you change a
  lot of options.

Events on your iCloud and CalDAV accounts live on their servers. They come back when you
add your accounts again.

## Automatic calendar backup

Automatic calendar backup copies your [offline calendars](../sync/offline-calendars.md)
into a folder on your phone. It saves every offline calendar, the built-in **Local** one
included, whether it's shown or hidden. Synced calendars, feeds, birthdays and device
calendars aren't saved. It's off until you choose a folder.

### Turn it on

1. Open **Settings**. Under **Backup & restore**, tap **Automatic calendar backup**.
2. Tap **Choose folder**. Android's folder picker opens. Pick or create a folder, for
   example in Documents. Android doesn't let apps use the top of storage or the Download
   folder itself.
3. Allow KashCal to use the folder.

Backup turns on, and the first backup runs at once. If KashCal can't use the folder, or
can't create files in it, the sheet says so and asks you to choose another one. You can set
**Frequency** and **Copies to keep** before you choose a folder.

The picker also lists folders from cloud storage apps on your phone. If you pick one, that
app stores the files, and its own sync uploads them.

### When backups run

**Frequency** sets how often a backup runs. The default is every 12 hours. You can choose
from 1 hour to 30 days.

1. Tap **Frequency**. A picker opens in the sheet.
2. Tap 12 hours, 1 day or 7 days, or turn the days and hours wheels.
3. Tap **Done**.

**Done** is greyed out below 1 hour ("Choose at least 1 hour.") and above 30 days
("Choose 30 days or less."). Tap **Frequency** again to close the picker without a change.

After the backup that runs when you turn it on, the next one waits a full interval. Backups
run in the background about that often, as Android schedules it. Android holds back
background work when the phone is idle or KashCal hasn't been opened for a while, so a
backup can run late. To back up straight away, tap **Back up now**. It shows while backup
is on.

### Files and copies

Each calendar has its own file, named after the calendar: `Trips.ics` for a calendar named
Trips. KashCal keeps letters, numbers and hyphens, turns spaces into hyphens, leaves out
other characters and stops at 50 characters, so "Trips 2027!" becomes `Trips-2027.ics`. The
built-in calendar is always `Local.ics`, in every language. A name with nothing left, such
as one made only of emoji, becomes `calendar-` followed by a number. When two names would
give the same file name, ignoring capitals, each gets a hyphen and a number added, such as
`Work-17.ics`. The built-in calendar keeps `Local.ics`. The sheet lists each offline calendar under
**Offline calendars** with its file name.

Each backup saves every calendar again, changed or not. Before it overwrites a calendar's
file, it keeps the previous file as a dated copy, such as `Trips_20271003T091500Z.ics`.
The date and time are when that file was last written, in UTC, or the time of the backup
when the folder doesn't say.

**Copies to keep** sets how many files each calendar keeps, the newest one included. The
default is 3, and you can choose from 1 to 30. With 1, KashCal keeps no dated copies. When
a calendar has more copies than the count, the oldest are deleted.

- Tap the plus button to keep more. The count changes at once.
- Tap the minus button to keep fewer. If that would delete copies already in the folder,
  KashCal asks first in place, for example "Deletes 2 older copies. This can't be
  undone." When it can't read the folder to count them, it asks the same way. Tap
  **Delete** to go ahead, or **Cancel**.

While backup is on, changing the count runs a backup at once, which deletes the copies
beyond it.

A calendar with no events is skipped, and its file in the folder stays as it was. The sheet
shows "No events, nothing saved" next to its file name. When you rename or delete a
calendar, its old files stay in the folder. A renamed calendar saves to a file with its
new name.

KashCal overwrites its files at each backup, so changes made to them in other apps don't
last.

### Restore a calendar from its file

Open **Settings**, tap **Import events from file**, and pick the calendar's file. See
[Import an .ics file](../sync/import-export.md#import-an-ics-file) for how the import
treats events the calendar already holds.

### Turn it off or change the folder

- Turn off the switch at the top of the sheet to stop backups. The files stay in the
  folder, and KashCal remembers the folder, so turning the switch on again needs no picker
  and runs a backup at once.
- Tap **Change** next to **Folder** to pick another folder. The first backup there runs at
  once. The files in the old folder stay.

Under the switch, the sheet shows when the last backup ran, how many calendars failed in
it, or "Backing up…" while one runs. The **Automatic calendar backup** row in Settings
shows **Off**, or how often and to which folder, such as "Every 12 hours · Documents".

### When a backup fails

The sheet and the Settings row show the problem:

- The folder can't be reached, for example after it was moved, deleted or disconnected,
  or KashCal lost access to it. The sheet says "Can't reach" with the folder name.
- The folder doesn't take files: "Can't save files in" with the folder name.
- A calendar couldn't be saved. Its line reads "Couldn't save. Will try again at the next
  backup.", and the Settings row counts the calendars that failed.

For either folder problem, the Settings row reads "Can't reach the backup folder". Tap
**Choose again** under the message in the sheet to pick the folder again or another one.

Scheduled backups also post a **Calendar backup failed** notification. A backup you start
from the sheet shows its problem only in the sheet. When a scheduled backup finds KashCal
lost access to the folder, or the folder doesn't take files, it notifies you at once. For
other problems KashCal waits until two backups in a row have failed, so a cloud folder
that's offline once doesn't notify you. You get one notification per problem. Tap it to
open the backup sheet. A backup that succeeds removes it, and so does turning backup off.

The notifications use their own channel, **Automatic calendar backup**. KashCal doesn't ask
for notification permission here. While backup is on and KashCal's notifications or that
channel are off, the sheet says it can't notify you. Tap **Open settings** to turn them on,
or **Not now** to hide the note. It stays hidden for that reason until KashCal sees
notifications on again when you open the sheet.

### Not carried to another phone

The folder access KashCal holds belongs to this phone. Android backup, phone-to-phone
transfer and a settings backup all leave out the automatic backup settings. On a new phone,
automatic backup starts off until you choose a folder.

## Settings backup

A settings backup holds settings, not events.

### What's in a settings backup

A backup is one JSON file. Its name is `kashcal-backup-` followed by the date and
time. It holds:

- Your preferences: calendar view and display options, time format, first day of
  the week, event defaults and default reminders, sync settings, theme and accent
  color, widget theme and accent color, widget options, notification sound and
  vibration, Smart event add and title suggestions, and the birthday and anniversary
  switches and reminders (not their calendar colors).
- Share availability settings: the number of days, your working hours, and whether
  all-day events count.
- Your avatar initials.
- Tag colors: each tag you gave a color, with its name.
- Your calendar feeds: each ICS feed's address, name, color, refresh interval,
  whether it's paused, and its username if it has one.
- The device calendars switches: whether device calendars are on, and the switch on the
  **Device calendars** heading in **Calendar notifications**.

### What's not in a settings backup

- Account passwords. Your iCloud and CalDAV credentials are encrypted for this phone
  and never go in the file. On a new phone you sign in again. See
  [Privacy & Security](../privacy/overview.md).
- Feed passwords. A feed's username comes back. On a new phone you enter its password again.
- Which device calendars you picked. Those IDs belong to one phone.
- Which calendars you muted, one by one, in **Calendar notifications**.
- Your default calendar. It points to a calendar on this phone, so you pick it
  again after a restore.
- The **App lock** setting. Each phone has its own lock.
- Events. They live on your accounts, or in your offline calendars.
- Your offline calendars themselves, with their names and colors. To move them and their
  events, [export each calendar to .ics](../sync/import-export.md#export-to-ics), or use
  the files [automatic calendar backup](#automatic-calendar-backup) saves.
- Your automatic calendar backup settings.
- Internal state, such as last-sync times, zoom levels and which tips you've seen.

### Back up your settings

1. Open **Settings**.
2. Under **Backup & restore**, tap **Back up settings** ("Save KashCal configuration to
   a JSON file").
3. Pick where to save the file.

### Restore your settings

1. Open **Settings**.
2. Under **Backup & restore**, tap **Restore settings** and pick your backup file.
3. KashCal shows **Restore backup?** with the KashCal version and the time the backup
   was made, plus what it will import. Tap **Restore**.
4. KashCal shows **Restore complete** when it's done.

What a restore changes:

- Each setting in the file replaces the one on the phone.
- Feeds merge with the ones you have. A feed with the same address is updated from the
  file. A feed that isn't on the phone is added. No feed is removed.
- Tag colors from the file are applied. A tag that isn't on the phone is added.

If the backup turned on device calendars, the success message reminds you to select
your device calendars again.

KashCal refuses a file it can't read and shows **Restore failed** with the reason, such
as a backup made by a newer version of KashCal.

After restoring on a new phone, add your calendar accounts again. Your events come
back with the first sync.

## Related

- [Import & export](../sync/import-export.md): move events in and out as .ics files
- [Settings](./settings.md): every setting and its default
