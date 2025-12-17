# Favicons SePrivée

## Archivos incluidos

| Archivo | Tamaño | Uso |
|---------|--------|-----|
| `favicon.ico` | 16x16, 32x32, 48x48 | Navegadores legacy |
| `favicon.svg` | Vectorial | Navegadores modernos |
| `favicon-16x16.png` | 16x16 | Tab del navegador |
| `favicon-32x32.png` | 32x32 | Tab en alta densidad |
| `apple-touch-icon.png` | 180x180 | iOS home screen |
| `android-chrome-192x192.png` | 192x192 | Android home screen |
| `android-chrome-512x512.png` | 512x512 | Android splash screen |
| `site.webmanifest` | - | PWA manifest |

## Implementación en Next.js (App Router)

Coloca todos los archivos en la carpeta `public/` de tu proyecto.

### Opción 1: Metadata API (recomendado)

En tu `app/layout.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SePrivée - Studio Dining & Events',
  description: 'Experiencias gastronómicas a medida en Montevideo y Maldonado',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}
```

### Opción 2: Archivo icon.tsx (generación dinámica)

Crea `app/icon.tsx`:

```tsx
import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#0B0B0B',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F8F6F3',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
        }}
      >
        S
      </div>
    ),
    { ...size }
  )
}
```

### Opción 3: HTML tradicional

En el `<head>` de tu documento:

```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#0B0B0B">
```

## Colores utilizados

- **Fondo:** `#0B0B0B` (Negro Carbón)
- **Texto:** `#F8F6F3` (Blanco Perla)

Basado en las Brand Guidelines de SePrivée.
