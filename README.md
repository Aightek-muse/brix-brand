# @brixmoney/brand-assets

Official brand assets for **BRIX Money** — institutional DeFi infrastructure connecting global onchain capital to real-world yields.

## Installation

```bash
npm install @brixmoney/brand-assets
```

## Quick Start

### Import Colors

```typescript
// TypeScript
import { ORANGE, NIGHTLY, WHITE, PLATINUM } from '@brixmoney/brand-assets/colors';
import { colors } from '@brixmoney/brand-assets/colors';

// JavaScript
const { ORANGE, NIGHTLY } = require('@brixmoney/brand-assets/colors');
```

### Use Design Tokens

```typescript
import tokens from '@brixmoney/brand-assets/colors/tokens.json';

console.log(tokens.tokens.color.primary.orange.value); // #DF7032
```

## Package Structure

```
@brixmoney/brand-assets/
├── colors/
│   ├── index.js       # JavaScript exports
│   ├── index.ts       # TypeScript definitions
│   └── tokens.json    # W3C DTCG design tokens
├── logos/
│   └── svg/           # All logo variants (Light/Dark)
├── fonts/
│   └── README.md      # Font installation guide
├── examples/
│   └── usage.tsx      # React/TypeScript examples
├── guidelines.md      # Complete brand guidelines
└── package.json
```

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `ORANGE` | `#DF7032` | Primary accent |
| `NIGHTLY` | `#0B0B0B` | Deep background |
| `WHITE` | `#FFFFFF` | Clean foreground |
| `PLATINUM` | `#E6E6E6` | Neutral support |

## Typography

- **Display**: Founders Grotesk (custom)
- **Body**: Urbanist (Google Fonts)
- **Accent**: Nyght Serif (custom)

See `fonts/README.md` for installation instructions.

## Logo Assets

SVG logos are available in `logos/svg/`:
- Full logo (light/dark variants)
- Logotype only
- Symbol only

## Documentation

- **Brand Guidelines**: See `guidelines.md` for complete brand system
- **Code Examples**: See `examples/usage.tsx` for React integration

## License

MIT — See LICENSE file

## Support

For brand questions or asset requests, contact the BRIX Money brand team.
