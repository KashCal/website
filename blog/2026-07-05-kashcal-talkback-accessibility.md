---
slug: kashcal-talkback-accessibility
title: "KashCal now works with your screen reader"
authors: [kashcal]
tags: [releases, announcements]
keywords:
  - accessible calendar android
  - talkback calendar app
  - screen reader calendar android
  - calendar app for blind android
  - colorblind calendar android
description: "KashCal 2026.07.05 adds full TalkBack support: jumpable headings, spoken status, events that say what they are, plus a per-app language setting."
image: /img/social/home.png
---

For a while now, KashCal has had a quiet flaw: you could only use it by looking at it. It worked beautifully with your eyes, and went silent as a stone the moment you turned on a screen reader. A calendar that only works when you're watching it is, on reflection, a poster. So this release taught it to talk.

{/* truncate */}

With TalkBack on, you can now move through KashCal by ear. Jump between headings, hear sync and offline status the moment it changes, and get told when a sign-in or a save fails instead of wondering why nothing happened. Events announce what they are, so a cancelled event says "cancelled" out loud rather than just looking faintly sad about it (it wears a line through it now, for the sighted crowd too). Bottom sheets say their name as they open, the drawer tells you which view you're in, and a subscription can finally be deleted with a real action instead of a swipe nobody could find.

While we were teaching it manners, we sent the languages out to live where they belong. KashCal now advertises all [67 of them](/docs/features/languages) to Android, so on Android 13 and up you pick the app's language in system settings alongside everything else, instead of spelunking through ours.

Two smaller dignities came along for the ride. Rotating your phone in the middle of an event no longer throws the whole thing away, and typing a title now capitalizes the first letter like a grown-up.

Same calendar. Now it works with the screen off, the phone sideways, and your eyes shut.

## Everything in this release

- Full screen-reader (TalkBack) support: headings, spoken status, event state read aloud
- Cancelled events are now crossed off ([#276](https://github.com/KashCal/KashCal/issues/276))
- Set KashCal's language from Android system settings (Android 13+, 67 languages)
- Delete a subscription with an accessibility action, not just a swipe
- Rotating the device no longer discards the event you're editing ([#286](https://github.com/KashCal/KashCal/issues/286))
- Event titles auto-capitalize the first letter ([#285](https://github.com/KashCal/KashCal/issues/285))

KashCal is free and open source. [Get it on F-Droid](https://f-droid.org/packages/org.onekash.kashcal/) or read [the docs](/docs).
