---
sidebar_position: 2
title: Privacy Policy
description: KashCal's full privacy policy. No data is collected, and nothing is sent to us.
---

# Privacy Policy

*Effective April 21, 2026*

:::note
This is the detailed policy. For a plainer walkthrough of how KashCal protects your
data, see [Privacy & Security](./overview.md).
:::

## Overview

This Privacy Policy describes how OneKash Labs ("we," "us," or "our") handles
information in connection with the KashCal mobile application ("the App"). KashCal
stores all data locally on your device. Nothing is sent to us.

This policy applies to all versions of KashCal distributed via Google Play, F-Droid,
GitHub Releases, or direct APK download.

## Data Collection

We do not collect any personal data. KashCal does not transmit telemetry, analytics,
crash reports, usage statistics, or any other information to OneKash Labs or any
third party. The App contains no third-party SDKs, advertising, or tracking code.

There are no user accounts, no registration, and no server-side infrastructure that
processes user information. We have no mechanism to access, retrieve, or view your
data.

## Data Stored on Device

The following data may exist locally on your device when using KashCal:

- Calendars, events, and their details (titles, times, locations, notes, attendees).
- Account settings and credentials for any calendar servers you connect.
- App preferences and, if you enable them, calendar feed subscriptions.
- Sync logs used for diagnostics.

All of it stays on your device. You can remove any of it at any time (see
[Retention & Deletion](#retention--deletion)).

## Calendar Sync

**CalDAV sync.** When you configure a CalDAV account (iCloud, Nextcloud, and so on),
calendar data flows directly between your device and the server you configure over
encrypted HTTPS. KashCal does not proxy or intermediate this data.

**ICS subscriptions.** External calendar feeds are fetched directly from the URLs you
provide. No data passes through our infrastructure.

**Contact birthdays.** With your permission, KashCal reads birthday dates from your
contacts. This is processed entirely on-device and never transmitted.

Third-party sync services you connect are governed by their own privacy policies.
Review those policies before configuring sync.

## Permissions

KashCal requests only the permissions its features require, and explains each one in
context. No permission is used to collect, transmit, or share personal data. For a
plain-language breakdown of each permission, see
[Privacy & Security](./overview.md#permissions-and-why-each-is-needed).

## Security

- **Credential encryption:** AES-256-GCM via the Android Keystore, with
  hardware-backed key storage where available.
- **Transport security:** Network connections use TLS/HTTPS by default. Plaintext HTTP
  is used only if you deliberately enter an `http://` address for a self-hosted server;
  addresses without a scheme default to HTTPS.
- **Backup exclusion:** Credentials and sync logs are excluded from Android backup.
- **No remote access:** We cannot retrieve, view, or modify information on your
  device.

As an open-source project, our security implementation is available for independent
audit via our public repository.

## Retention & Deletion

All data is stored locally, so you have full control over retention. You can delete
your data at any time by:

- Deleting individual events or calendars within the App.
- Removing sync accounts from App settings.
- Clearing App data via Android system settings.
- Uninstalling the App.

Sync logs are subject to automatic rotation. Because we do not store your data on our
servers, there is no residual data on our end after uninstallation.

## Children's Privacy

KashCal is not directed at children under the age of 13. We do not collect personal
data from any user, including children.

## Changes to This Policy

We may update this policy to reflect changes in the App or applicable regulations.
Material changes will be noted in the App's release notes. Continued use of the App
constitutes acceptance of changes.

## Contact

Questions or concerns about this policy:

- Email: [privacy@onekash.org](mailto:privacy@onekash.org)
- GitHub: [KashCal Issues](https://github.com/KashCal/KashCal/issues)
