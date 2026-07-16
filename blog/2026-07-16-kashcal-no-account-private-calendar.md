---
slug: no-account-private-calendar-android
title: "The calendar with no account to sign up for"
authors: [kashcal]
tags: [privacy, behind-the-scenes]
keywords:
  - private calendar android
  - no account calendar app
  - open source calendar android
  - calendar without google account
  - offline calendar android
  - no tracking calendar
description: "KashCal has no account, no trackers, and no servers of its own. Here's what that actually means for your calendar, and why it's built that way."
image: /img/social/blog/no-account-private-calendar-android.png
---

Most apps greet you with a wall: sign in, or create an account. A calendar app doing that is quietly asking you to route your dentist appointments, your interviews, and your "lunch??" through a stranger's servers so it can hand them back to you later. KashCal never asks. There is no account, because there is nothing to sign into.

{/* truncate */}

## No account, because there are no KashCal servers

This isn't a privacy setting you switch on. It's the shape of the app. There is **no KashCal account** to create, **no KashCal server** anywhere for your events to pass through, and **no analytics, telemetry, or ad SDK** riding along inside. There is, quite literally, nowhere for us to send your data, so there is nothing for us to collect. A privacy policy is easy to write when the honest version is "we don't have your data and never did."

## Your calendar lives on your phone

Your events sit in a [secure database on your device](/docs/privacy/overview) that other apps can't read. The only things that ever leave your phone go to servers **you** chose: your events sync to your own calendar server, iCloud, Nextcloud, Fastmail, or [any CalDAV service](/docs/sync/supported-servers), and an RSVP goes to the organizer who invited you. Nothing else goes anywhere.

And when you're offline, none of that matters. KashCal is [offline-first](/docs/sync/how-sync-works): everything you do lands instantly on the device, and it quietly catches up with your servers when there's a connection. A plane, a basement, a dead zone, the calendar still works.

## Passwords that can't be lifted from a backup

When you connect a calendar server, its password is [encrypted on your device](/docs/privacy/overview) with AES-256, and the key lives in the Android Keystore, hardware-backed where the phone supports it. The key is tied to that one device, so a stolen backup can't be replayed onto another phone to reach your accounts. The trade-off is honest: move to a new phone and you re-enter your passwords. We think that's the right side of the line.

## Permissions you can actually reason about

KashCal asks only for what a feature in front of you needs, and it asks in context, with a plain reason. Contacts is for suggesting guests and showing birthdays. Calendar access is for showing the calendars other apps already keep on your phone. Decline any of it and the rest of the app keeps working. No all-or-nothing gate at the door.

## Free, and open about it

KashCal is free and open source under Apache-2.0, so "we don't track you" isn't a promise you have to take on faith. The source is [right there to read](https://github.com/KashCal/KashCal). If we ever added a tracker, someone would see the commit.

[Get KashCal free on F-Droid](https://f-droid.org/packages/org.onekash.kashcal/). No account, no ads, no catch. Read [how privacy works](/docs/privacy/overview) in full.

Your calendar was never anyone else's business. Now it's built that way.
