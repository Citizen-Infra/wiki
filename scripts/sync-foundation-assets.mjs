// Explicit notice refresh only. Fonts are bundled locally from package CSS by Vite.
// No brand-image generation or copying is permitted by the wiki's asset policy.
import { copyFile, mkdir } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const foundation = new URL('./', import.meta.resolve('@citizen-infra/design-system/tokens.css'));
await mkdir(new URL('public/fonts/', root), { recursive: true });
await mkdir(new URL('public/licenses/', root), { recursive: true });
await copyFile(new URL('fonts/OFL-Public-Sans.txt', foundation), new URL('public/fonts/OFL-Public-Sans.txt', root));
await copyFile(new URL('LICENSE', foundation), new URL('public/licenses/cibc-design-system-MIT.txt', root));
console.log('Copied pinned Public Sans OFL and shared-foundation MIT notices. No brand imagery or font binaries rendered.');
