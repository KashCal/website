---
sidebar_position: 2
title: Creating & editing events
description: "Set every detail of an event in KashCal on one screen: title, location, time zone, repeat, color, tags, reminders, availability, and attendees."
---

import Screenshot from '@site/src/components/Screenshot';

# Creating & editing events

<Screenshot src="/img/screenshots/event-form.png" alt="KashCal new event form" align="right" caption="The event form, with everything in one place." />

The event form sets every detail of an event on one screen. To create an event,
tap the + button, or tap an empty slot in a Day, 3 Days or Week timeline. With
[Smart event add](./smart-event-add.md) on, the + button opens the typing box instead of
the form.

The form opens full screen. For a new event with an empty title, the cursor
starts in the title with the keyboard up. When you edit an event, or the form
opens with a title already filled in, the keyboard stays down.

Dragging the form to scroll it closes the keyboard. A drag that starts in the title,
location or notes, in a tag name you're typing, or in the **After** count under Repeat
leaves it open, so you can select and edit text.

## What you can set

- Title. A long title wraps onto up to four lines, then scrolls inside the field. As you type, KashCal suggests titles you've used before (see [Title suggestions](#title-suggestions)).
- Location. An address, room, or meeting link. After you type 5 characters, including a letter, KashCal lists up to 5 matching addresses from Android's address lookup. Phones without an address lookup service show no suggestions.
- Notes. Free-form details for the event.
- Calendar. Which calendar the event belongs to. New events go to your **Default calendar** unless you pick another. The list ends with the **Offline** group and **New offline calendar**, which opens a sheet to create an offline calendar and puts the event in it. While you edit a device-calendar event, the list shows only device calendars. See [Offline calendars](../sync/offline-calendars.md#create-a-calendar).
- Start and end. Tap either one to open the date and time sheet (see [Setting the date and time](#setting-the-date-and-time)), or switch on **All day**. A new event lasts your **Default event length**, 30 minutes unless you change it in [Settings](../features/settings.md#event-preferences).
- Time zone. Events use your device time zone unless you set another one. One time zone covers both the start and the end.
- Repeat. Make the event recurring. See [Recurring events](./recurring.md).
- Event color. Give the event its own color. Tapping the row opens the colors below it, in the form. See [Event colors](./colors.md).
- Tags. Label the event with colored chips like `#focus` or `#dentist`, with suggestions from tags you've used before. See [Tags](./tags.md).
- Alerts. Add reminders. See [Reminders](./reminders.md).
- Availability. Mark the event **Busy** or **Free**. Free events don't count as busy time, for example when you [share your availability](../features/share-availability.md).
- Attendees. Invite people. See [Scheduling & invitations](./attendees.md).

When you change the start time, the end time moves with it and the event keeps
its length. If you set an end time before the start time on the same day, the end
time shows this error and the save button stays off until you fix it:

> End time must be after start time

KashCal doesn't correct the end time for you.

## Setting the date and time

Tap the start or the end in the form. A full-height sheet opens on the end you tapped. The
switch at the top shows both ends, **Starts** and **Ends**; tap a half to edit that end.

- Date. Tap a day in the month grid. Swipe the grid or use the arrows to change month, or tap
  the month name to pick a month and year from a wheel. If you pick an end date before the
  start date, KashCal swaps the two dates.
- Time. Below the grid, the time wheel steps in 5-minute increments. To set an exact minute like
  3:47, tap the keyboard button and type it. A time on an off-step minute shows as text with
  **Tap to edit** under it; tap it to type a new time.
- Length. The chips below set the end that long after the start: 30m, 1h or 2h for a timed
  event. The chip that matches the event's length is selected. On a short screen a timed
  event's sheet has no chips; on a narrow screen, KashCal leaves out the chips that don't fit.

For an all-day event the sheet has no time wheel. The grid shades the days the event covers,
and the chips read 2 days, 5 days and 7 days. When you tap a start date, the event keeps its
number of days and the sheet moves to the end, with the hint "Tap a day to change the end".
Tap a day to set the end, or leave it as it is.

Tap **Done**, press back, or swipe the sheet down by its top strip to keep your changes. If
the month and year wheel is open, **Done** closes the wheel first. The grid, wheel and chips
don't move the sheet. To throw the changes away, use the form's
**Cancel** (see [Leaving without saving](#leaving-without-saving)).

## Title suggestions

**Suggest event titles** is on by default. Turn it off in
[Settings](../features/settings.md#event-preferences). After you type 3
characters, the title field lists up to 5 titles that start with what you typed and
that you've used at least twice between 90 days ago and a week ahead, ranked by how often and how recently you used them. Titles from
visible device calendars count too. Tap one to fill in the title.

## Leaving without saving

If you've changed anything, the first tap on **Cancel** or back turns the button
into **Discard?**. Tap it, or press back again, to throw away your changes. With no changes, the form
closes on the first tap.

## All-day events

Switch on **All day** for an event with no specific time, such as a birthday,
holiday, trip or deadline. All-day events have their own reminder options, like
"9 AM day of event" (see [Reminders](./reminders.md)).

## Actions on an event

Tap an event to open its details. From there you can:

- Tap the edit button (a pencil) to change it. For an event someone else organizes, the same button opens the form, where you can change only your alerts and your reply.
- Tap the delete button (a trash can). For a single event, or an occurrence changed on its own, tap **Confirm** to finish. For a repeating series, KashCal asks which occurrences to delete.
- Open the three-dot menu for **Duplicate**, **Share as text** and **Export as .ics**. **Duplicate** on a repeating event opens the form on the occurrence you tapped, with **Repeat** filled in from the series, so saving creates a separate series. Occurrences you deleted from the original show again in the copy. An occurrence changed on its own, or a date the series adds outside its repeat rule, duplicates as a single event.
- Tap the location to open it in your maps app. If the location contains a link, the tap opens the link.

Events in read-only calendars, such as holiday feeds, show only a duplicate button and a share button.

On an event from a device calendar, these buttons show words in place of icons:
**Edit**, **Delete** and **Share**.

## Editing recurring events

When you edit or delete an event that repeats, KashCal asks how much of the series
to change: this event only, this and all future events, or all events.
See [Recurring events](./recurring.md) for the details.

## Related

- [Smart event add](./smart-event-add.md): the faster way to create events
- [Recurring events](./recurring.md): make an event repeat
- [Reminders](./reminders.md): get alerted before it starts
- [Tags](./tags.md): label events with colored chips
