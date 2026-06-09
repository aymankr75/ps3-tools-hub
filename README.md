# PS3 Tools Hub v3

Dual-interface GitHub Pages website:

- `index.html`: modern desktop/mobile interface.
- `ps3.html`: lightweight PlayStation 3 browser interface.
- `ps3/browser-test.html`: console browser diagnostics.
- `ps3/*.html`: lightweight tool and guide pages.

## Update the repository

1. Extract the ZIP.
2. Open the GitHub repository.
3. Choose **Add file → Upload files**.
4. Upload every extracted file and folder.
5. Enable **Replace existing files** when GitHub asks, then commit.

The repository root should contain:

```text
.nojekyll
404.html
index.html
ps3.html
README.md
assets/
ps3/
```

## Safety and source rules

- This starter does not bundle installer payloads, firmware files or copyrighted games.
- Add only trusted and properly licensed project files.
- Show the project source, version, file size and checksum beside each download.


## Version 3 installer layout

- `ps3/hen-492.html`: warning, compatibility checklist and launch button.
- `HEN/492/index.html`: minimal installer landing page.
- `HEN/492/hen492.html`: supplied installer source, kept separate from the interface.
- `INSTALLER-SOURCE-NOTES.md`: source findings and SHA-256 values.

Upload all extracted files and folders to the repository root.
