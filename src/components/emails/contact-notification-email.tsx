import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Column,
  Section,
  Text,
  Link,
  Tailwind,
} from '@react-email/components';
import { SEPRIVEE_EMAIL_COLORS, EMAIL_INLINE_STYLES } from './email-theme';

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  phone?: string;
  city: string;
  date?: string;
  guests: string;
  experienceType?: string;
  dietaryRestrictions?: string;
  message?: string;
}

export default function ContactNotificationEmail({
  name = "María García",
  email = "maria@ejemplo.com",
  phone = "+598 99 123 456",
  city = "Montevideo",
  date = "15 de Enero, 2025",
  guests = "8",
  experienceType = "Cena Privada",
  dietaryRestrictions = "Sin gluten, vegetariano",
  message = "Nos gustaría celebrar un aniversario especial con una cena íntima para 8 personas.",
}: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Nueva consulta de {name} - {experienceType || "Experiencia"} para {guests} personas en {city}
      </Preview>
      <Tailwind>
        <Body style={EMAIL_INLINE_STYLES.pageContainer}>
          <Container className="mx-auto py-6 px-4 w-[600px] max-w-full">
            <Section style={EMAIL_INLINE_STYLES.cardContainer}>
              {/* Header */}
              <Section style={EMAIL_INLINE_STYLES.headerSection}>
                <Text
                  className="text-2xl m-0 tracking-wider"
                  style={{
                    color: SEPRIVEE_EMAIL_COLORS.gold,
                    margin: 0,
                    fontSize: '28px',
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    letterSpacing: '0.1em',
                  }}
                >
                  SePrivée
                </Text>
                <Text
                  className="text-sm mt-2 mb-0 tracking-widest uppercase"
                  style={{
                    color: SEPRIVEE_EMAIL_COLORS.textWhite,
                    fontSize: '11px',
                    margin: '8px 0 0 0',
                    letterSpacing: '0.2em',
                    opacity: 0.8,
                  }}
                >
                  Private Dining & Curated Events
                </Text>
              </Section>

              {/* Title */}
              <Section className="px-6 pt-6 pb-4">
                <Heading
                  className="text-xl font-normal mb-2 mt-0"
                  style={{
                    color: SEPRIVEE_EMAIL_COLORS.textPrimary,
                    fontSize: '22px',
                    fontWeight: '400',
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    margin: '0 0 8px 0',
                  }}
                >
                  Nueva Consulta Recibida
                </Heading>
                <Text
                  className="text-sm"
                  style={{
                    color: SEPRIVEE_EMAIL_COLORS.textSecondary,
                    fontSize: '14px',
                    margin: 0,
                  }}
                >
                  Has recibido una nueva solicitud desde el sitio web
                </Text>
              </Section>

              <Hr style={{ borderColor: SEPRIVEE_EMAIL_COLORS.border, margin: '0 24px' }} />

              {/* Client Info */}
              <Section className="px-6 py-4">
                <Text
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{
                    color: SEPRIVEE_EMAIL_COLORS.gold,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    margin: '0 0 12px 0',
                    fontWeight: '600',
                  }}
                >
                  Información del Cliente
                </Text>

                <Row className="mb-2">
                  <Column className="w-[100px]">
                    <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textSecondary, fontSize: '14px', margin: 0 }}>
                      Nombre:
                    </Text>
                  </Column>
                  <Column>
                    <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textPrimary, fontSize: '14px', margin: 0, fontWeight: '500' }}>
                      {name}
                    </Text>
                  </Column>
                </Row>

                <Row className="mb-2">
                  <Column className="w-[100px]">
                    <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textSecondary, fontSize: '14px', margin: 0 }}>
                      Email:
                    </Text>
                  </Column>
                  <Column>
                    <Link
                      href={`mailto:${email}`}
                      style={{ color: SEPRIVEE_EMAIL_COLORS.linkColor, fontSize: '14px', textDecoration: 'none' }}
                    >
                      {email}
                    </Link>
                  </Column>
                </Row>

                {phone && (
                  <Row className="mb-2">
                    <Column className="w-[100px]">
                      <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textSecondary, fontSize: '14px', margin: 0 }}>
                        Teléfono:
                      </Text>
                    </Column>
                    <Column>
                      <Link
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        style={{ color: SEPRIVEE_EMAIL_COLORS.linkColor, fontSize: '14px', textDecoration: 'none' }}
                      >
                        {phone}
                      </Link>
                    </Column>
                  </Row>
                )}
              </Section>

              <Hr style={{ borderColor: SEPRIVEE_EMAIL_COLORS.border, margin: '0 24px' }} />

              {/* Event Details */}
              <Section className="px-6 py-4">
                <Text
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{
                    color: SEPRIVEE_EMAIL_COLORS.gold,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    margin: '0 0 12px 0',
                    fontWeight: '600',
                  }}
                >
                  Detalles del Evento
                </Text>

                <Section
                  className="rounded p-4 mb-4"
                  style={EMAIL_INLINE_STYLES.infoSection}
                >
                  <Row className="mb-3">
                    <Column className="w-1/2">
                      <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textSecondary, fontSize: '12px', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Ciudad
                      </Text>
                      <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textPrimary, fontSize: '15px', margin: 0, fontWeight: '500' }}>
                        {city}
                      </Text>
                    </Column>
                    <Column className="w-1/2">
                      <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textSecondary, fontSize: '12px', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Fecha Tentativa
                      </Text>
                      <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textPrimary, fontSize: '15px', margin: 0, fontWeight: '500' }}>
                        {date || "No especificada"}
                      </Text>
                    </Column>
                  </Row>

                  <Row>
                    <Column className="w-1/2">
                      <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textSecondary, fontSize: '12px', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Invitados
                      </Text>
                      <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textPrimary, fontSize: '15px', margin: 0, fontWeight: '500' }}>
                        {guests} personas
                      </Text>
                    </Column>
                    <Column className="w-1/2">
                      <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textSecondary, fontSize: '12px', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Experiencia
                      </Text>
                      <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textPrimary, fontSize: '15px', margin: 0, fontWeight: '500' }}>
                        {experienceType || "No especificada"}
                      </Text>
                    </Column>
                  </Row>
                </Section>

                {dietaryRestrictions && (
                  <>
                    <Text
                      style={{
                        color: SEPRIVEE_EMAIL_COLORS.textSecondary,
                        fontSize: '12px',
                        margin: '0 0 4px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Restricciones Dietéticas
                    </Text>
                    <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textPrimary, fontSize: '14px', margin: '0 0 16px 0' }}>
                      {dietaryRestrictions}
                    </Text>
                  </>
                )}

                {message && (
                  <>
                    <Text
                      style={{
                        color: SEPRIVEE_EMAIL_COLORS.textSecondary,
                        fontSize: '12px',
                        margin: '0 0 4px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Mensaje
                    </Text>
                    <Section
                      className="rounded p-4"
                      style={{
                        backgroundColor: SEPRIVEE_EMAIL_COLORS.pageBackground,
                        borderLeft: `3px solid ${SEPRIVEE_EMAIL_COLORS.gold}`,
                        borderRadius: '0 4px 4px 0',
                      }}
                    >
                      <Text style={{ color: SEPRIVEE_EMAIL_COLORS.textPrimary, fontSize: '14px', margin: 0, lineHeight: '1.6', fontStyle: 'italic' }}>
                        "{message}"
                      </Text>
                    </Section>
                  </>
                )}
              </Section>

              {/* Footer */}
              <Section style={EMAIL_INLINE_STYLES.footerSection}>
                <Text
                  className="text-center"
                  style={{
                    color: SEPRIVEE_EMAIL_COLORS.textSecondary,
                    fontSize: '12px',
                    margin: '0 0 4px 0',
                    textAlign: 'center',
                  }}
                >
                  Este mensaje fue enviado desde el formulario de contacto de{' '}
                  <Link href="https://seprivee.com" style={{ color: SEPRIVEE_EMAIL_COLORS.gold, textDecoration: 'none' }}>
                    seprivee.com
                  </Link>
                </Text>
                <Text
                  className="text-center"
                  style={{
                    color: SEPRIVEE_EMAIL_COLORS.textMuted,
                    fontSize: '11px',
                    margin: 0,
                    textAlign: 'center',
                  }}
                >
                  Montevideo & Maldonado, Uruguay
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
