---
slug: app-permissions-one-place
title: "Every permission KashCal uses, in one place"
authors: [kashcal]
tags: [privacy, behind-the-scenes]
keywords:
  - android app permissions
  - local network permission android 17
  - self-hosted caldav android
  - private calendar app android
  - android 17 permissions
  - open source calendar android
  - calendar app permissions
  - material you calendar android
  - caldav local network sync
  - permission manager calendar app
description: "Android 17 made reaching your local network its own permission. Implementing that, we noticed KashCal's permissions were scattered across the app, so we added one screen that lists them all: what each is for, and whether it is on."
image: /img/social/blog/app-permissions-one-place.png
---

Android 17 added a welcome permission optimization. Reaching a device on your local network, like a calendar server on a machine in your house, is now its own permission, separate from internet access. An app that can reach the internet no longer reaches your home network by default; it has to ask for that on its own.

KashCal needs it for one thing: syncing with a [CalDAV server on your own network](/docs/sync/supported-servers). We implemented the new permission, and while wiring it up we noticed KashCal's permissions had ended up spread out, each one surfaced only where its feature lived: contacts near birthdays, notifications near reminders, and now local network near sync. There was nowhere to see them all at once.

So we put them all on one screen. It is called **App permissions**, and it is in your account hub.

{/* truncate */}

<div style={{display: 'flex', justifyContent: 'center', margin: '2.5rem 0'}}>
  <div style={{
    width: '322px',
    borderRadius: '46px',
    padding: '9px',
    background: 'linear-gradient(150deg, #34373e 0%, #14161a 55%, #0a0b0e 100%)',
    boxShadow: '0 40px 70px -28px rgba(0,0,0,0.6)',
  }}>
    <div style={{
      borderRadius: '38px',
      overflow: 'hidden',
      background: '#FEF7FF',
      color: '#1D1B20',
      fontFamily: "'Roboto', 'Noto Sans', 'Segoe UI', system-ui, -apple-system, sans-serif",
    }}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 1.35rem 0.3rem', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.01em'}}>
        <span>9:30</span>
        <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.4rem'}}>
          <svg viewBox="0 -960 960 960" width="15" height="15" fill="#1D1B20" style={{display: 'block'}} aria-hidden="true"><path d="M120-120v-240h120v240H120Zm200 0v-400h120v400H320Zm200 0v-560h120v560H520Zm200 0v-720h120v720H720Z" /></svg>
          <svg viewBox="0 -960 960 960" width="16" height="16" fill="#1D1B20" style={{display: 'block'}} aria-hidden="true"><path d="M480-120 0-600q95-77 214.5-118.5T480-760q146 0 265.5 41.5T960-600L480-120Z" /></svg>
          <span style={{display: 'inline-flex', alignItems: 'center'}}>
            <span style={{width: '22px', height: '12px', border: '1.5px solid #1D1B20', borderRadius: '3px', display: 'inline-flex', alignItems: 'center', padding: '1.5px'}}>
              <span style={{width: '80%', height: '100%', background: '#1D1B20', borderRadius: '1px'}}></span>
            </span>
            <span style={{width: '2px', height: '5px', background: '#1D1B20', marginLeft: '1.5px', borderRadius: '0 2px 2px 0'}}></span>
          </span>
        </span>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '1.1rem', padding: '0.7rem 1.1rem 1rem'}}>
        <svg viewBox="0 -960 960 960" width="24" height="24" fill="#1D1B20" style={{display: 'block', flexShrink: 0}} aria-hidden="true"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
        <span style={{fontSize: '1.32rem', fontWeight: 400}}>App permissions</span>
      </div>
      {[
        {name: 'Notifications', d: 'M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z', allowed: true},
        {name: 'Contacts', d: 'M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z', allowed: true},
        {name: 'Calendars', d: 'M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Z', allowed: true},
        {name: 'Local network', d: 'M480-120 0-600q95-77 214.5-118.5T480-760q146 0 265.5 41.5T960-600L480-120Z', allowed: false},
      ].map((row) => (
        <div key={row.name} style={{display: 'flex', alignItems: 'center', gap: '1.1rem', padding: '0.85rem 1.35rem'}}>
          <svg viewBox="0 -960 960 960" width="24" height="24" fill="#49454F" style={{display: 'block', flexShrink: 0}} aria-hidden="true"><path d={row.d} /></svg>
          <span style={{flex: 1, fontSize: '1rem', lineHeight: 1.25}}>{row.name}</span>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.75rem'}}>
            <svg viewBox="0 -960 960 960" width="20" height="20" fill="#79747E" style={{display: 'block', flexShrink: 0}} aria-hidden="true"><path d="M480-280q17 0 28.5-11.5T520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280Zm0-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
            {row.allowed ? (
              <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#49454F', fontSize: '0.85rem', fontWeight: 500}}>
                <svg viewBox="0 -960 960 960" width="18" height="18" fill="currentColor" style={{display: 'block'}} aria-hidden="true"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                Allowed
              </span>
            ) : (
              <span style={{display: 'inline-flex', alignItems: 'center', height: '36px', padding: '0 1.15rem', borderRadius: '999px', background: '#0e6e62', color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.01em'}}>
                Allow
              </span>
            )}
          </span>
        </div>
      ))}
      <div style={{display: 'flex', justifyContent: 'center', padding: '1rem 0 0.55rem'}}>
        <span style={{width: '116px', height: '4px', borderRadius: '2px', background: '#1D1B20', opacity: 0.4}}></span>
      </div>
    </div>
  </div>
</div>

<div style={{textAlign: 'center', fontSize: '0.85rem', opacity: 0.65, marginTop: '0.8rem'}}>
  The App permissions screen: every permission KashCal uses, the reason behind each &#9432;, and whether it is on.
</div>

## Where it is

Tap your initials in the top right to open the [account hub](/docs/calendar/navigation#the-account-hub), then look under the **Privacy & Security** section. "App permissions" opens a full screen listing every permission KashCal can use, one row each. If you moved to Android 17 and your sync to a local server needs switching back on, this is where you do it.

## What each permission is for

The reason for a permission sits with the permission, not in a policy page you have to go find. Tap the info icon on any row and it says, in one sentence, what that access gives you. These are the words in the app:

- **Notifications.** So KashCal can remind you about your events. Without it, reminders stay silent.
- **Contacts.** Suggests guests as you add people to an event, and shows contact birthdays. Your contacts stay on your device.
- **Calendars.** Shows events from the other calendars on your device next to your own.
- **Local network.** Reaches a calendar server on your home or office network. Android 17 asks for this separately from internet access.

Each reason names a feature you use. Turn a permission off and only that feature stops. The rest of the app keeps working.

## Granting, and changing your mind

Each row ends in one of two things. A permission is either **Allowed**, with a check next to it, or it shows an **Allow** button.

If it is already granted, tapping the row takes you to that permission's own page in Android settings. Not the general app screen, the exact one: Notifications lands on notification settings, the rest on the app's permission details. Adjust it there, come back, and the list updates to match, because it re-reads the current state each time it opens.

If a permission is off, Allow requests it in the app. And if you had earlier told Android not to ask again, Allow takes you straight to the settings page for that permission, so even one you fully denied is a tap away from turning back on.

## Only what applies to your phone

The list shows only the permissions that apply to your version of Android. Notifications became a permission you grant in Android 13, so on older phones there is no such row. Local network is new in Android 17, so it appears only there.

## The list does not ask for anything

Opening it requests nothing. KashCal still asks for a permission when a feature first needs it, contacts when you turn on birthdays, calendar access when you connect a device calendar, with the reason in front of you and the option to decline. The screen is for reviewing and adjusting the whole set afterward.

## Next to "How your data stays yours"

Right below App permissions is a link called **How your data stays yours**. A permission list tells you what KashCal can do on your phone. The privacy page tells you what it does with any of it: [no account, no server, no trackers](/docs/privacy/overview), events in a database only KashCal can read, and passwords encrypted with a key that stays on your device. Every permission maps to a feature, and because the app is open source, the full list is in the manifest for anyone to read.
