---
slug: kashcal-google-android-privacy-checklist
title: "We took Google's privacy checklist to KashCal. It came back empty."
authors: [kashcal]
tags: [privacy, behind-the-scenes]
keywords:
  - private calendar app android
  - secure calendar android
  - no tracking calendar app
  - open source calendar android
  - encrypted calendar app
  - android privacy checklist
  - caldav calendar encryption
  - offline calendar app android
  - calendar app no google account
  - f-droid calendar app
description: "We ran KashCal against Google's Android privacy and security checklist, all five parts, item by item, and found nothing to fix. A private, open source, offline-first calendar app with no trackers, no accounts, and encrypted credentials. Here's the full walk-through."
image: /img/social/blog/kashcal-google-android-privacy-checklist.png
---

Google keeps a [privacy and security checklist](https://developer.android.com/privacy-and-security/about) for Android developers. Five lists, covering permissions, location, how you handle data, device identifiers, and the privacy controls your app hands back to the user. It's the rubric Android itself recommends you grade against. So we did. Every item, one at a time.

We came out the other side with nothing to fix. Here's the walk-through, because a claim like that is only worth as much as your ability to check it.

{/* truncate */}

<div style={{margin: '2.5rem 0', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto'}}>
  <div style={{
    background: 'linear-gradient(135deg, #0e6e62 0%, #093a34 60%, #06231f 100%)',
    borderRadius: '16px',
    padding: '1.75rem 1.9rem',
    color: '#eafaf6',
    boxShadow: '0 10px 30px rgba(6, 35, 31, 0.35)',
  }}>
    <div style={{fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '1.1rem'}}>
      Google's Android privacy checklist
    </div>
    {[
      'Minimize permission requests',
      'Minimize use of location',
      'Handle data safely',
      'Use resettable identifiers',
      'Support user-facing privacy features',
    ].map((item) => (
      <div key={item} style={{display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.55rem 0', borderTop: '1px solid rgba(185, 230, 221, 0.14)'}}>
        <span style={{
          flexShrink: 0,
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          background: '#45c2ad',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} aria-hidden="true">
          <svg viewBox="0 -960 960 960" width="16" height="16" fill="#06231f" style={{display: 'block'}}>
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
          </svg>
        </span>
        <span style={{fontSize: '1.02rem', fontWeight: 500}}>{item}</span>
      </div>
    ))}
    <div style={{marginTop: '1.2rem', fontSize: '0.9rem', opacity: 0.72}}>
      Five lists. Nothing to fix.
    </div>
  </div>
</div>

## The list is mostly about data you collect. We don't.

Read the checklist end to end and a pattern shows up. Most of it exists to keep apps that hoover up sensitive data from mishandling it: minimize what you request, explain why, don't leak it, don't hang onto identifiers you don't need. Our answer to most of the list isn't a clever mitigation. It's that the data isn't there to mishandle.

There is [no KashCal account and no KashCal server](/docs/privacy/overview). No analytics library, no crash reporter, no ad SDK compiled into the app. Nothing phones home, because there is no home to phone. That clears whole sections of the checklist before we start.

## Permissions you can account for

The first checklist wants the minimum, requested in context rather than sprung on you at the door. Every permission KashCal holds maps to a feature you can point at: sync, contacts for birthdays and guest suggestions, calendar access for the calendars other apps keep on your phone, reminders, reaching a self-hosted server on your own network, and the optional biometric lock that screens the app behind your fingerprint.

None of it is requested at launch. Turn on birthday events and it asks for contacts, with the reason in front of you. Connect a device calendar and it asks for calendar access. Decline, and the rest of the app carries on; a refused permission switches off one feature and nothing else. There is no microphone, camera, phone-state, or broad storage permission anywhere, because nothing in the app uses them.

## Location it never asks for

A whole section of the checklist is devoted to handling location with care. KashCal skips the conversation: it requests no location permission of any kind. The location on an event is text you type, not a reading pulled from your phone. Nothing to minimize when there was nothing there.

## Your data, and where it goes

This is where a calendar app carries real responsibility, so it's where we spent the most time.

Your events sit in a [database on your device](/docs/privacy/overview) that other apps can't read, and they stay put until you connect a server to sync them. KashCal is [offline-first](/docs/sync/how-sync-works): everything you do lands on the phone instantly and catches up with your server later, so a basement or a dead zone never stops the calendar. The only copies that leave the device go to the server **you** connected: iCloud, Nextcloud, Fastmail, [any CalDAV server](/docs/sync/supported-servers). When you connect one, its password is encrypted with AES-256, and the key lives in the Android Keystore, hardware-backed on phones that support it. That password never lands in a log. Where we log a username to debug a sync, we print three characters and mask the rest.

Encrypted credentials are left out of Android's cloud backup and its phone-to-phone transfer. The key is tied to the original device, so a copied backup carries nothing another phone could decrypt. When KashCal shares a file, like an exported `.ics`, it hands the other app a one-time link to that file, not a door into its storage.

KashCal also supports plain HTTP connections, so more [self-hosters](/docs/sync/supported-servers) are welcome. Plenty of people run a calendar server on a box in the next room, on a local address, or behind a proxy that already handles encryption a layer up. An app that refused anything but HTTPS would shut those setups out, and they're the people who care most about owning their own data. We'd rather include them. The default still leans safe: type a server address with no scheme and KashCal fills in `https` for you, so reaching for plain HTTP is a deliberate choice you make by typing it.

## Nothing that follows you around

Another checklist is about identifiers: avoid the permanent ones, prefer the kind a user can reset. KashCal reads none of the permanent ones. Not the IMEI, not the serial number, not the Android ID, not an advertising ID, and it ships no ads library that would come looking for them. Your account inside the app is a value the app makes up for itself, and it's gone the moment you remove the account.

## The controls Android hands the user

The last checklist is about playing nicely with the system's own privacy features. With no microphone, camera, or location access, there's nothing for Android's Privacy Dashboard to flag against us in the first place. The sensitive permissions we do use, contacts and calendar, only ever fire from something you just tapped, so the reason is never a mystery.

## Why it came back empty

Running a privacy checklist and finding nothing to fix isn't a trophy for clever engineering. It's what happens when the app is shaped so the risky data never arrives. You can't leak a location you never read, or lose an identifier you never stored, or hand a tracker data it was never given.

None of this asks for your trust. KashCal is open source under Apache-2.0, and the F-Droid build is compiled from that public source. The permission list is in the manifest. The encryption is one class you can open. The absence of tracking is the absence of a dependency. Every line above is a file you can read.

Read [how privacy works](/docs/privacy/overview) in full. Then, if you like, go check the list yourself.
