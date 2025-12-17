/**
 * Configuración de colores para templates de email de SePrivée
 * Todos los valores están en formato HEX para máxima compatibilidad con clientes de email
 */
export const SEPRIVEE_EMAIL_COLORS = {
  // Brand colors
  carbon: '#0B0B0B',       // Negro carbón - principal
  pearl: '#F8F6F3',        // Blanco perla
  gold: '#C1A47A',         // Dorado desaturado - acentos
  cream: '#E8E0D2',        // Crema - fondos suaves
  stone: '#B8B8B0',        // Gris piedra - textos secundarios

  // Backgrounds
  pageBackground: '#F8F6F3',          // Pearl - fondo general
  cardBackground: '#FFFFFF',          // Blanco puro para contenido
  headerBackground: '#0B0B0B',        // Carbon - header
  footerBackground: '#F8F6F3',        // Pearl - footer

  // Text colors
  textPrimary: '#0B0B0B',             // Carbon - texto principal
  textSecondary: '#B8B8B0',           // Stone - texto secundario
  textMuted: '#C5C5C0',               // Gris más claro
  textWhite: '#F8F6F3',               // Pearl - texto sobre fondos oscuros

  // Borders & dividers
  border: '#E8E0D2',                  // Cream - bordes
  divider: '#E8E0D2',                 // Cream - líneas divisorias

  // CTA & Interactive
  buttonPrimary: '#C1A47A',           // Gold - botón principal
  buttonPrimaryHover: '#B39469',      // Gold más oscuro
  linkColor: '#C1A47A',               // Gold - links
} as const;

/**
 * Utilidades de estilo inline para React Email
 */
export const EMAIL_INLINE_STYLES = {
  // Headers
  headerSection: {
    backgroundColor: SEPRIVEE_EMAIL_COLORS.headerBackground,
    color: SEPRIVEE_EMAIL_COLORS.textWhite,
    textAlign: 'center' as const,
    padding: '24px 16px',
  },

  // Buttons
  primaryButton: {
    backgroundColor: SEPRIVEE_EMAIL_COLORS.buttonPrimary,
    color: SEPRIVEE_EMAIL_COLORS.carbon,
    fontWeight: '600',
    padding: '14px 28px',
    borderRadius: '4px',
    textDecoration: 'none',
    display: 'inline-block',
  },

  // Containers
  pageContainer: {
    backgroundColor: SEPRIVEE_EMAIL_COLORS.pageBackground,
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
  },

  cardContainer: {
    backgroundColor: SEPRIVEE_EMAIL_COLORS.cardBackground,
    borderRadius: '4px',
    border: `1px solid ${SEPRIVEE_EMAIL_COLORS.border}`,
    overflow: 'hidden',
  },

  // Info sections
  infoSection: {
    backgroundColor: SEPRIVEE_EMAIL_COLORS.cream,
    borderRadius: '4px',
    padding: '16px',
  },

  // Footer
  footerSection: {
    backgroundColor: SEPRIVEE_EMAIL_COLORS.footerBackground,
    borderTop: `1px solid ${SEPRIVEE_EMAIL_COLORS.border}`,
    padding: '16px',
  },
} as const;
