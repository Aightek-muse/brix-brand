// BRIX Money Brand Assets — Usage Examples
// React/TypeScript

import { ORANGE, NIGHTLY, WHITE, PLATINUM, GRADIENT_PRIMARY } from '../colors';

// Example 1: Styled Component with Brand Colors
const HeroSection = () => (
  <section
    style={{
      background: `linear-gradient(180deg, ${GRADIENT_PRIMARY.from} 0%, ${GRADIENT_PRIMARY.to} 100%)`,
      color: NIGHTLY,
      padding: '80px 40px',
    }}
  >
    <h1 style={{ fontFamily: 'Founders Grotesk', fontWeight: 700 }}>
      Access outlasts control.
    </h1>
    <p style={{ fontFamily: 'Urbanist', fontSize: '18px', lineHeight: 1.5 }}>
      Brix is the infrastructure layer connecting global onchain capital 
      to the world's most persistent real-world yields.
    </p>
  </section>
);

// Example 2: Button Component
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children }) => {
  const baseStyles = {
    fontFamily: 'Urbanist',
    fontWeight: 600,
    padding: '12px 24px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  };

  const variants = {
    primary: {
      background: ORANGE,
      color: WHITE,
    },
    secondary: {
      background: 'transparent',
      color: NIGHTLY,
      border: `2px solid ${NIGHTLY}`,
    },
  };

  return (
    <button style={{ ...baseStyles, ...variants[variant] }}>
      {children}
    </button>
  );
};

// Example 3: Color Token Usage in CSS Modules
/*
.card {
  background: var(--brix-nightly);
  border: 1px solid var(--brix-platinum);
  color: var(--brix-white);
}

.card--accent {
  background: linear-gradient(135deg, var(--brix-white), var(--brix-orange));
}
*/

export { HeroSection, Button };
