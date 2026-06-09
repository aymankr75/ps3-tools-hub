# Installer source notes

This build preserves the uploaded `HEN/492` module and keeps it isolated from the main site interface.

## Included source files

- `HEN/492/hen492.html`
  - SHA-256: `740d10fd7b772c866bb1e6e50f752548997f0c8b46fd59c20af6473250e2e25f`
- `HEN/492/SETUP.P3T`
  - SHA-256: `f6e70c616f46935f6339c085c43d2ab5d8396214256f05f065c33efb9002bf11`
- `HEN/492/HEN.P3T`
  - SHA-256: `f6e70c616f46935f6339c085c43d2ab5d8396214256f05f065c33efb9002bf11`

## Findings from the uploaded repository

- The actual automatic installer logic is inside `HEN/492/hen492.html`.
- The original `index.html` is mainly a visual menu linking to the installer and external downloads.
- `hen492.html` checks the PS3 browser-reported firmware for `4.92`.
- The page redirects to `SETUP.P3T` during its process.
- `HEN.P3T` and `SETUP.P3T` have the same SHA-256 in the supplied package.
- The supplied `htaccess` requests an octet-stream MIME type, but GitHub Pages does not process Apache `.htaccess` rules.
- The original installer referenced a missing `style.css`; this build adds only a small stylesheet and does not edit the supplied installer JavaScript.

## Verification status

The files were structurally inspected and hashed, but this workspace cannot verify successful operation on a real PS3.
Test first through:

`/ps3/browser-test.html`

Then open:

`/ps3/hen-492.html`
