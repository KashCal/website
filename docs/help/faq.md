---
sidebar_position: 2
title: FAQ
description: Short answers to common KashCal questions, from whether it's free to how sync, accounts, contacts and privacy work.
---

import FaqSchema from '@site/src/components/FaqSchema';

# Frequently asked questions

<FaqSchema items={[
  {question: 'Is KashCal free? Is there a catch?', answer: "Yes, it's free and open source under the Apache-2.0 license. There's no paid tier, no ads, and no account to create. A donation is optional and never required, and nothing in the app is locked behind it."},
  {question: 'Do I need to create a KashCal account?', answer: 'No. KashCal has no accounts and no servers. You connect your own calendar accounts (like iCloud or Nextcloud), and you can use the app fully offline with a local calendar even without connecting anything.'},
  {question: 'Does KashCal track me or sell my data?', answer: "No. KashCal has no analytics, no telemetry and no advertising. KashCal itself sends your events only to the calendar servers you connect. Android's own backup can include KashCal's database."},
  {question: 'Which calendar services does it work with?', answer: 'iCloud and any CalDAV server: Nextcloud, Fastmail, Radicale, Baikal, Zoho, mailbox.org, Stalwart, SOGo, and more.'},
  {question: 'Does it work with Google Calendar or Outlook?', answer: 'Yes, through your phone. Google removed third-party CalDAV access and Outlook does not expose CalDAV, so both come in as device calendars: let the Google or Outlook app sync those calendars to your phone, then turn on device calendars in KashCal settings.'},
  {question: 'Is KashCal on the Google Play Store?', answer: 'Yes. KashCal is on Google Play, and also on F-Droid, IzzyOnDroid, Obtainium, and GitHub Releases. It is the same free, open-source, no-account app on every channel.'},
  {question: 'Does KashCal support CardDAV, tasks, or attachments?', answer: "CardDAV (contacts): yes, both ways, in beta. Contact sync syncs the contacts on your iCloud or CardDAV account with your phone's address book. For calendars, KashCal handles events only (VEVENT). It doesn't do VTODO tasks, journals or attachments, and it skips calendars that hold only VTODO or VJOURNAL items during sync."},
  {question: 'Why will my iCloud password not work?', answer: 'iCloud requires an app-specific password, not your normal Apple password. Create one at account.apple.com and use that to connect.'},
  {question: 'Can I use KashCal offline?', answer: 'Yes, it is offline-first. You can view and edit events with no connection, and your changes sync when the phone is back online.'},
  {question: 'Why is background sync not more frequent than 15 minutes?', answer: 'That is an Android system limit for background work. It is the shortest automatic interval the platform allows. You can always pull down to refresh for an immediate sync.'},
  {question: 'What Android version do I need?', answer: 'Android 12 or newer. KashCal targets Android 17.'},
  {question: 'How do I move to a new phone?', answer: "Back up your settings and restore them on the new phone. Add your calendar accounts again: the backup doesn't hold accounts or passwords, by design. Your events come back with sync. Export your Local calendar and import the file on the new phone, and select your device calendars again if you use them."},
]} />

## Is KashCal free? Is there a catch?

Yes, it's free and open source under the Apache-2.0 license. There's no paid tier, no
ads and no account to create. If you want to chip in, a [donation](/donate) helps
keep the releases coming. It's never required, and nothing in the app is locked behind
it.

## Do I need to create a KashCal account?

No. KashCal has no accounts and no servers of its own. You connect your *own* calendar
accounts, such as iCloud or Nextcloud. Or you use the Local calendar offline without
connecting anything.

## Does KashCal track me or sell my data?

No. KashCal has no analytics, no telemetry and no advertising. KashCal itself sends
your events only to the calendar servers you connect. Android's own backup can include
KashCal's database. For everything that leaves the phone, see
[Privacy & Security](../privacy/overview.md).

## Which calendar services does it work with?

iCloud and CalDAV servers: Nextcloud, Fastmail, Radicale, Baikal, Zoho, mailbox.org,
Stalwart, SOGo and others. See [Supported servers](../sync/supported-servers.md).

## Does it work with Google Calendar or Outlook?

Yes, through your phone. KashCal connects directly to iCloud and CalDAV servers.
Google removed third-party CalDAV access, and Outlook and Microsoft 365 don't expose
CalDAV at all (they use Exchange ActiveSync and Microsoft Graph). So both come in as
device calendars:

1. Let the Google or Outlook app sync your calendars to the phone.
2. In KashCal, open **Settings**, then tap **Device calendars**.
3. Turn on **Enable** and allow calendar access.
4. Turn on the calendars you want.

Device calendars are off until you do this. See [Device calendars](../sync/device-calendars.md).

## How can I contribute?

You can improve the documentation, review translations, or send pull requests for
issues and feature requests. Read the
[Code of Conduct](https://github.com/KashCal/KashCal?tab=coc-ov-file#readme) and
the [Contribution guidelines](https://github.com/KashCal/KashCal?tab=contributing-ov-file)
to get started.

## How do I report a security vulnerability?

Report it privately through
[GitHub Security Advisories](https://github.com/KashCal/KashCal/security/advisories/new),
not in a public issue. The [security policy](https://github.com/KashCal/KashCal?tab=security-ov-file)
has the details.

## Is there a roadmap?

Yes. Follow what's planned on the
[public roadmap](https://github.com/orgs/KashCal/projects/5). Post general questions
and ideas in [GitHub Discussions](https://github.com/orgs/KashCal/discussions).

## Is KashCal on the Google Play Store?

Yes. You can [get KashCal on Google
Play](https://play.google.com/store/apps/details?id=org.onekash.kashcal), and it's
also on [F-Droid, IzzyOnDroid, Obtainium, and GitHub
Releases](../getting-started/install.md). It's the same free, open-source, no-account
app on every channel, with no ads or trackers added anywhere.

## Why do builds from different sources have different signatures?

Each channel signs with a different key. F-Droid signs its builds with its own key,
Google Play re-signs with a Google-managed key (Play App Signing), and GitHub Releases
use the upstream key (the cert SHA-256 is published in the
[README](https://github.com/KashCal/KashCal#readme)). Android won't install a build
over one signed with another key. To switch sources, uninstall first, and uninstalling
clears everything stored only on the phone. Back up your settings and export your
Local calendar as .ics before you switch. To verify the GitHub APK, use
[AppVerifier](https://github.com/soupslurpr/AppVerifier) or Obtainium with the cert
SHA-256 from the README.

## Does KashCal support CardDAV, tasks, or attachments?

CardDAV (contacts): yes, both ways, in beta. [Contact sync](../sync/contacts.md) syncs
the contacts on your iCloud or CardDAV account with your phone's address book: names,
numbers, emails and photos. Edits and deletions on the phone go back to the account.

For calendars, KashCal handles events only (VEVENT). It doesn't do VTODO tasks,
journals or attachments. It skips calendars that hold only VTODO or VJOURNAL items
during sync.

## Can I use Syncthing instead of a CalDAV server?

No. To carry your setup to another phone, [back up your settings](../features/backup-restore.md),
which include your ICS feeds, and restore them there. To bring Local events along,
[export them as .ics](../sync/import-export.md#export-to-ics) and import the file.

## Why won't my iCloud password work?

iCloud requires an app-specific password, not your normal Apple password. See the
[iCloud setup guide](../sync/providers/icloud.md).

## Can I use KashCal offline?

Yes, it's offline-first. You can view and edit events with no connection. Your
changes sync when the phone is back online. See [How sync works](../sync/how-sync-works.md).

## Where are my events stored?

In a database in KashCal's private storage on your phone. Events on a connected
account also live on that account's server. If Android backup is on, your phone's
backup includes that database too. See [Privacy & Security](../privacy/overview.md).

## Why isn't my background sync more frequent than 15 minutes?

Android doesn't run periodic background work more often than every 15 minutes, so
that's the shortest automatic interval. Pull down to refresh to sync right away.

## What Android version do I need?

Android 12 or newer. KashCal targets Android 17. If you self-host, reaching a CalDAV
server on your own network needs the
[local network permission](../sync/providers/caldav.md#servers-on-your-home-network)
on Android 17.

## How do I get reminders to work?

Allow KashCal to send notifications. When you save an event with a reminder from the
event form and the permission isn't granted, KashCal asks for it. KashCal doesn't ask
for an alarm permission: Android grants exact alarms to it at install. See
[Reminders](../events/reminders.md).

## Can I send meeting invitations?

Yes, when your calendar account supports scheduling. Local-only calendars can't send
them, and some accounts don't support inviting people at all. Some servers, SOGo and
mailbox.org among them, save your guests without notifying them. See
[Known limitations](./known-limitations.md).

## How do I move to a new phone?

1. [Back up your settings](../features/backup-restore.md) and restore them on the new
   phone.
2. Add your calendar accounts again. The backup doesn't hold accounts or passwords, by
   design. Your events come back with sync.
3. [Export your Local calendar](../sync/import-export.md#export-to-ics) and import the
   file on the new phone.
4. If you use device calendars, select them again.
