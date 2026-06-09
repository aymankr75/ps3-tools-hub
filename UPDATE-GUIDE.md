# How to update PS3 Jailbreak

The PS3 home page is `ps3.html`.

## When a new Sony firmware appears

1. Verify the firmware on the official PlayStation support page.
2. Verify explicit support in the official PS3HEN project or release notes.
3. Verify the maintained installer supports the matching HFW.
4. Copy one page inside `firmware/` and change the version details.
5. Update `data/versions.json`.
6. Update the firmware cards in `ps3.html` and `index.html`.
7. Test the new path on a real PS3 before marking it supported.

Never mark a firmware as supported before all checks are complete.

## Current maintained installer route

The firmware pages currently launch:

`https://aldostools.github.io/install-ps3hen/alternate.html`

## Local 4.92 fallback

The supplied local installer remains at:

`HEN/492/hen492.html`
