---
sidebar_position: 2
title: FAQ
description: Quick answers to the most common KashCal questions, from whether it's free to how sync, accounts, and privacy work.
---

import FaqSchema from '@site/src/components/FaqSchema';

# Frequently asked questions

<FaqSchema items={[
  {question: 'Is KashCal free? Is there a catch?', answer: "Yes, it's free and open source under the Apache-2.0 license. There's no paid tier, no ads, and no account to create. A donation is optional and never required, and nothing in the app is locked behind it."},
  {question: 'Do I need to create a KashCal account?', answer: 'No. KashCal has no accounts and no servers. You connect your own calendar accounts (like iCloud or Nextcloud), and you can use the app fully offline with a local calendar even without connecting anything.'},
  {question: 'Does KashCal track me or sell my data?', answer: 'No. There is no analytics, no telemetry, and no advertising. Your data stays on your device and your own calendar servers.'},
  {question: 'Which calendar services does it work with?', answer: 'iCloud and any CalDAV server: Nextcloud, Fastmail, Radicale, Baikal, Zoho, mailbox.org, Stalwart, SOGo, and more.'},
  {question: 'Does it work with Google Calendar or Outlook?', answer: 'Yes, through your phone. Google removed third-party CalDAV access and Outlook does not expose CalDAV, so both come in through the Device Calendar bridge: if the Google or Outlook app already syncs those calendars to your phone, KashCal shows them.'},
  {question: 'Is KashCal on the Google Play Store?', answer: 'Yes. KashCal is on Google Play, and also on F-Droid, IzzyOnDroid, Obtainium, and GitHub Releases. It is the same free, open-source, no-account app on every channel.'},
  {question: 'Does KashCal support CardDAV, tasks, or attachments?', answer: 'No. KashCal is events-only (VEVENT). It does not do CardDAV (contacts) or VTODO tasks and attachments. Calendars that contain only VTODO or VJOURNAL resources are skipped during sync.'},
  {question: 'Why will my iCloud password not work?', answer: 'iCloud requires an app-specific password, not your normal Apple password. Create one at account.apple.com and use that to connect.'},
  {question: 'Can I use KashCal offline?', answer: 'Yes, it is offline-first. You can view and edit events with no connection, and changes sync automatically when you are back online.'},
  {question: 'Why is background sync not more frequent than 15 minutes?', answer: 'That is an Android system limit for background work. It is the shortest automatic interval the platform allows. You can always pull down to refresh for an immediate sync.'},
  {question: 'What Android version do I need?', answer: 'Android 12 or newer. KashCal targets Android 17, the current release.'},
  {question: 'How do I move to a new phone?', answer: 'Back up your settings, restore them on the new device, and re-add your calendar accounts (passwords are not transferred, by design). Your events come back via sync.'},
]} />

## Is KashCal free? Is there a catch?

Yes, it's free and open source under the Apache-2.0 license. There's no paid tier, no
ads, and no account to create. If you want to chip in, a [donation](/donate) helps
keep the releases coming. It's never required, and nothing in the app is locked behind
it.

## Do I need to create a KashCal account?

No. KashCal has no accounts and no servers. You connect your *own* calendar accounts
(like iCloud or Nextcloud), and you can use the app fully offline with a local
calendar even without connecting anything.

## Does KashCal track me or sell my data?

No. There's no analytics, no telemetry, and no advertising. Your data stays on your
device and your own calendar servers. See [Privacy & Security](../privacy/overview.md).

## Which calendar services does it work with?

iCloud and any CalDAV server: Nextcloud, Fastmail, Radicale, Baikal, Zoho,
mailbox.org, Stalwart, SOGo, and more. See [Supported servers](../sync/supported-servers.md).

## Does it work with Google Calendar or Outlook?

Yes, through your phone. KashCal connects directly to iCloud and CalDAV servers, but
neither Google nor Outlook offers that kind of access anymore. Google removed
third-party CalDAV access, and Outlook and Microsoft 365 don't expose CalDAV at all
(they use Exchange ActiveSync and Microsoft Graph). So both come in through the
Device Calendar bridge instead: if the Google or Outlook app already syncs those
calendars to your phone, KashCal shows them through
[Device calendars](../sync/device-calendars.md).

## How can I contribute?

There are several ways to help: improving the documentation, reviewing language
translations, or filing pull requests for issues and feature requests. Have a look at
the [Code of Conduct](https://github.com/KashCal/KashCal?tab=coc-ov-file#readme) and
the [Contribution guidelines](https://github.com/KashCal/KashCal?tab=contributing-ov-file)
to get started.

## How do I report a security vulnerability?

Please report it privately through
[GitHub Security Advisories](https://github.com/KashCal/KashCal/security/advisories/new)
rather than opening a public issue. You can also review the
[security policy](https://github.com/KashCal/KashCal?tab=security-ov-file).

## Is there a roadmap?

Yes, you can follow what's planned on the
[public roadmap](https://github.com/orgs/KashCal/projects/5). For general questions
and ideas, [GitHub Discussions](https://github.com/orgs/KashCal/discussions) is the
place to post.

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
[README](https://github.com/KashCal/KashCal#readme)). Those signatures are not
interchangeable, so you can't install one over another. To switch sources you have to
uninstall first, and uninstalling clears local-only data. Export your settings and any
local events as ICS before you switch. To verify the GitHub APK, use
[AppVerifier](https://github.com/soupslurpr/AppVerifier) or Obtainium with the cert
SHA-256 from the README.

## Does KashCal support CardDAV, tasks, or attachments?

CardDAV (contacts): yes, one direction for now. KashCal can mirror the contacts on
your iCloud or CalDAV account down onto your phone, names, numbers, emails, and photos,
but it doesn't push changes back up yet. See [Contact sync](../sync/contacts.md).

For calendars, KashCal is events-only (VEVENT). It doesn't do VTODO tasks, journals,
or attachments. Calendars that contain only VTODO or VJOURNAL resources are skipped
during sync.

## Can I use Syncthing instead of a CalDAV server?

Not at the moment. You can export your settings (which includes your ICS
subscriptions) and restore them on another device, and you can export local events as
ICS to bring them along too.

## Why won't my iCloud password work?

iCloud requires an **app-specific password**, not your normal Apple password. See the
[iCloud setup guide](../sync/providers/icloud.md).

## Can I use KashCal offline?

Yes, it's offline-first. You can view and edit events with no connection, and
changes sync automatically when you're back online. See [How sync works](../sync/how-sync-works.md).

## Where are my events stored?

In a secure database on your device. They sync to whichever calendar servers you
connect. See [Privacy & Security](../privacy/overview.md).

## Why isn't my background sync more frequent than 15 minutes?

That's an Android system limit for background work. It's the shortest automatic interval
the platform allows. You can always pull down to refresh for an immediate sync.

## What Android version do I need?

Android 12 or newer. KashCal targets **Android 17**, the current release. If you
self-host, note that reaching a CalDAV server on your own network needs a
[local network permission](../sync/providers/caldav.md#servers-on-your-home-network)
on Android 17.

## How do I get reminders to work?

Allow KashCal's notification permission, and (if asked) the exact-alarm permission so
alerts arrive on time. See [Reminders](../events/reminders.md).

## Can I send meeting invitations?

Yes, when your calendar account supports scheduling. Some accounts can't, so see
[Known limitations](./known-limitations.md).

## How do I move to a new phone?

[Back up your settings](../features/backup-restore.md), restore them on the new
device, and re-add your calendar accounts (passwords aren't transferred, by design).
Your events come back via sync.
