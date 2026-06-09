# How to update the Flash Center

The PS3 home page is `ps3.html`.

## When a new Sony firmware appears

1. Verify the new Sony firmware on the official PlayStation support page.
2. Verify PS3HEN support in the PS3Xploit/PS3HEN repository.
3. Verify the maintained installer explicitly supports the new matching HFW.
4. Copy one page inside `flash/`, change the version text, then test it on a real PS3.
5. Update `data/versions.json`, the firmware cards in `ps3.html`, and the desktop cards in `index.html`.
6. Never mark a firmware as supported before all three checks are complete.

## Current maintained route

The three firmware pages currently launch:

`https://aldostools.github.io/install-ps3hen/alternate.html`

The maintainer describes support for OFW 4.80–4.82 and HFW 4.83–4.93.

## Local 4.92 fallback

Your uploaded installer remains at:

`HEN/492/hen492.html`

It is presented only on the 4.92 page as a legacy fallback.
