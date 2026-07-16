---
slug: kashcal-event-tags
title: "Tags: label your events, not just file them"
authors: [kashcal]
tags: [releases, announcements]
keywords:
  - kashcal release notes
  - kashcal changelog
  - android calendar tags
  - calendar event tags android
  - tag events quick add android
  - caldav calendar tags
description: "KashCal 2026.07.15 adds event tags: colored #chips you set in the form or type into Quick Add, shown across the day, week, and agenda views."
image: /img/social/home.png
---

Since the beginning of KashCal, your events have been sorted the way a coat check sorts coats: by which calendar you flung them into, and not one thought more. This release lets you label them yourself. Meet tags.

{/* truncate */}

## Type a #tag, get a chip

Add a tag in the [event form](/docs/events/event-form), or fling a `#dentist` straight into [Quick Add](/docs/events/quick-add) and watch it land as a colored chip. That chip then follows the event around the [day, week, and agenda views](/docs/calendar/views) like it owns the place. Tap the event open and the tags are right there in quick view, quietly confirming that yes, this is a `#focus` block, and no, it is not the third `#standup` of the day you had every right to skip.

Start typing and KashCal hands back the tags you already use, ranked by how often you reach for them. It is the only known cure for "Errands" quietly fracturing into "errands," "ERRANDS," and one deeply confident "Errnads" by Thursday.

And if you decide tags belong above your notes rather than below, the row's little ⋮ menu will move it, and we will pretend that was our idea all along.

## The honest fine print

Tags currently work on the events KashCal syncs itself: your iCloud and other CalDAV calendars. The device's own calendars, the Google, Samsung, and Exchange ones Android politely shoves through the door, are still tag-free for a release or two while we teach them manners. Rather than let your tags quietly vanish into the void, we simply hide the tag row on those events for now.

This is version one of roughly several. More tags, more places, more tricks are queued up.

## While we had the tweezers out

A few papercuts, gone:

- Events with no length, the ones you pin to a single moment, used to disappear entirely in the day and week views. They now show up as the small blocks they always meant to be, and no longer draw on top of each other when they overlap.
- Emoji in a synced description arrive as the emoji you sent, instead of a puzzled little box.
- A garbled duration from some other app can no longer bend an event's end time back to before it started.

## Everything in this release

- Event tags: colored chips on events, shown in the day, week, and agenda views and in the event quick view, on iCloud and CalDAV events for now
- Create tags from the event form with usage-ranked suggestions and inline `#` autocomplete in the title
- Add tags from Quick Add by typing `#tag`, persisting across create and all edit scopes
- Reorder the form tag row above or below notes from its ⋮ menu
- Tidied the event-form layout, and moved the location field up under the title
- Fixed zero-length and very short events vanishing or overlapping in the day, 3-day, and week views
- Fixed emoji and other extended characters in synced descriptions rendering as a stray box or wrong character
- Fixed a malformed event duration producing an end time before the start
- Fixed self-hosted CalDAV/ICS sync hanging on "Preparing to sync" over LAN or VPN networks

Small labels, better plumbing, fewer papercuts. Tag it and move on.
