# PS3 Jailbreak v1.1

A clean dual-interface PS3HEN website for firmware 4.91, 4.92 and 4.93.

## Main pages

- `index.html` — desktop and mobile interface
- `ps3.html` — lightweight PlayStation 3 browser interface
- `firmware/4.93.html` — latest firmware route
- `firmware/4.92.html` — supported route with local 4.92 fallback
- `firmware/4.91.html` — supported route
- `ps3/browser-test.html` — PS3 browser diagnostics
- `ps3/troubleshooting.html` — quick browser help

## Public URL

`https://reprook.github.io/ps3-jailbreak/`

## Upload

Upload every extracted file and folder to the root of the `ps3-jailbreak` repository.

Do not upload the ZIP itself.

## Important

Each firmware page requires the user to confirm the matching HFW before the maintained PS3HEN installer button is unlocked.


## Version 1.1

- Detects PS3 firmware 4.91, 4.92 or 4.93 automatically from the browser identity.
- Does not claim to detect OFW versus HFW; that still requires manual confirmation.
- Shows the exact FAT32 USB path for matching HFW installation.
- Primary maintained installer is labeled PS3HEN 3.5.0.
- Local 4.92 fallback is clearly labeled as legacy HEN 3.3.0 FIX.
