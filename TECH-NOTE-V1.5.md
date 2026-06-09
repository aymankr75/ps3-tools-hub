# Technical note

The old Isfay page and the PS3HEN 3.5.0 alternate installer do not use the same final installation method.

- Isfay 3.3.0 installs a `SETUP.P3T` theme payload.
- PS3HEN 3.5.0 writes the XMB Install HEN entry and downloads `4.92/HEN.pkg`.

This experimental page keeps the PS3HEN 3.5.0 package method, but tries the memory range used successfully by the Isfay page before falling back to the original 492alt range. It has not been verified on a real PS3 in this workspace.
