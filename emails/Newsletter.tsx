import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import type { CSSProperties, ReactNode } from "react";

const BRAND = {
  coral: "#ff7162",
  coralDark: "#e55a4a",
  blue: "#4A90D9",
  beige: "#F4EDD0",
  text: "#333333",
  muted: "#6b7280",
  border: "#e5e7eb",
};

const FONT_STACK =
  "'M PLUS Rounded 1c', 'Helvetica Neue', Helvetica, Arial, sans-serif";

type NewsletterProps = {
  previewText: string;
  siteUrl?: string;
  unsubscribeUrl?: string;
  recipientName?: string;
  children: ReactNode;
};

/**
 * Outer chrome: <Html><Head><Body> + branded header + footer.
 * Pass siteUrl as an absolute https URL so asset/link URLs render
 * correctly in every mail client.
 */
export function Newsletter({
  previewText,
  siteUrl = "https://brightbeamsacademy.com",
  unsubscribeUrl,
  recipientName,
  children,
}: NewsletterProps) {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={bodyStyle}>
        <Container style={outerContainer}>
          <Section style={headerSection}>
            <Link href={siteUrl} style={{ textDecoration: "none" }}>
              <Img
                src={`${siteUrl}/logo.png`}
                alt="Bright Beams Academy"
                width="220"
                style={{ display: "block", margin: "0 auto" }}
              />
            </Link>
          </Section>

          <Container style={cardContainer}>
            {recipientName ? (
              <Text style={greeting}>Hi {recipientName},</Text>
            ) : null}
            {children}
          </Container>

          <NewsletterFooter siteUrl={siteUrl} unsubscribeUrl={unsubscribeUrl} />
        </Container>
      </Body>
    </Html>
  );
}

/* -------------------------------------------------------------------------- */
/* Building blocks                                                            */
/* -------------------------------------------------------------------------- */

type HeroBannerProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export function HeroBanner({ src, alt, width = 600, height = 300 }: HeroBannerProps) {
  return (
    <Section style={{ padding: 0 }}>
      <Img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "8px",
        }}
      />
    </Section>
  );
}

export function Intro({ children }: { children: ReactNode }) {
  return (
    <Section style={{ padding: "0 0 12px 0" }}>
      <Text style={paragraph}>{children}</Text>
    </Section>
  );
}

type FeatureBlockProps = {
  heading: string;
  body: ReactNode;
  image?: { src: string; alt: string };
  imagePosition?: "left" | "right" | "full" | "none";
  cta?: { label: string; href: string };
};

export function FeatureBlock({
  heading,
  body,
  image,
  imagePosition = "full",
  cta,
}: FeatureBlockProps) {
  const hasSideImage = image && (imagePosition === "left" || imagePosition === "right");
  const hasFullImage = image && imagePosition === "full";

  const imageCell = image ? (
    <Img
      src={image.src}
      alt={image.alt}
      width="260"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        borderRadius: "8px",
      }}
    />
  ) : null;

  const textCell = (
    <>
      <Heading as="h2" style={blockHeading}>
        {heading}
      </Heading>
      <Text style={paragraph}>{body}</Text>
      {cta ? <CTAButton label={cta.label} href={cta.href} /> : null}
    </>
  );

  return (
    <Section style={blockSection}>
      {hasFullImage ? (
        <>
          <Img
            src={image!.src}
            alt={image!.alt}
            width="600"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          />
          {textCell}
        </>
      ) : hasSideImage && imagePosition === "left" ? (
        <Row>
          <Column style={{ width: "45%", verticalAlign: "top", paddingRight: "16px" }}>
            {imageCell}
          </Column>
          <Column style={{ width: "55%", verticalAlign: "top" }}>{textCell}</Column>
        </Row>
      ) : hasSideImage && imagePosition === "right" ? (
        <Row>
          <Column style={{ width: "55%", verticalAlign: "top", paddingRight: "16px" }}>
            {textCell}
          </Column>
          <Column style={{ width: "45%", verticalAlign: "top" }}>{imageCell}</Column>
        </Row>
      ) : (
        textCell
      )}
    </Section>
  );
}

type EventBlockProps = {
  date: string;
  title: string;
  location?: string;
  description?: ReactNode;
  cta?: { label: string; href: string };
};

export function EventBlock({ date, title, location, description, cta }: EventBlockProps) {
  return (
    <Section style={eventCard}>
      <Text style={eventDate}>{date.toUpperCase()}</Text>
      <Heading as="h3" style={eventTitle}>
        {title}
      </Heading>
      {location ? <Text style={eventLocation}>📍 {location}</Text> : null}
      {description ? <Text style={paragraph}>{description}</Text> : null}
      {cta ? <CTAButton label={cta.label} href={cta.href} /> : null}
    </Section>
  );
}

export function CTABlock({
  heading,
  body,
  cta,
}: {
  heading?: string;
  body?: ReactNode;
  cta: { label: string; href: string };
}) {
  return (
    <Section style={ctaSection}>
      {heading ? (
        <Heading as="h2" style={{ ...blockHeading, color: "#ffffff" }}>
          {heading}
        </Heading>
      ) : null}
      {body ? (
        <Text style={{ ...paragraph, color: "#ffffff" }}>{body}</Text>
      ) : null}
      <CTAButton label={cta.label} href={cta.href} variant="onColor" />
    </Section>
  );
}

export function CTAButton({
  label,
  href,
  variant = "primary",
}: {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "onColor";
}) {
  const styles: Record<string, CSSProperties> = {
    primary: { backgroundColor: BRAND.coral, color: "#ffffff" },
    secondary: { backgroundColor: BRAND.blue, color: "#ffffff" },
    onColor: { backgroundColor: "#ffffff", color: BRAND.coral },
  };
  return (
    <Section style={{ padding: "16px 0 0 0" }}>
      <Button href={href} style={{ ...buttonBase, ...styles[variant] }}>
        {label}
      </Button>
    </Section>
  );
}

export function Divider() {
  return <Hr style={{ borderColor: BRAND.border, margin: "24px 0" }} />;
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

function NewsletterFooter({
  siteUrl,
  unsubscribeUrl,
}: {
  siteUrl: string;
  unsubscribeUrl?: string;
}) {
  return (
    <Section style={footerSection}>
      <Text style={footerBrand}>Bright Beams Academy</Text>
      <Text style={footerAddress}>Redmond, Washington</Text>
      <Text style={footerLinks}>
        <Link href={siteUrl} style={footerLink}>
          Website
        </Link>
        {"  •  "}
        <Link href={`${siteUrl}/programs`} style={footerLink}>
          Programs
        </Link>
        {"  •  "}
        <Link href={`${siteUrl}/contact`} style={footerLink}>
          Contact
        </Link>
      </Text>
      <Text style={footerLegal}>
        You&apos;re receiving this because you subscribed at brightbeamsacademy.com.
        {unsubscribeUrl ? (
          <>
            {" "}
            <Link href={unsubscribeUrl} style={footerLink}>
              Unsubscribe
            </Link>
            .
          </>
        ) : null}
      </Text>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Styles                                                                     */
/* -------------------------------------------------------------------------- */

const bodyStyle: CSSProperties = {
  backgroundColor: BRAND.beige,
  fontFamily: FONT_STACK,
  margin: 0,
  padding: "24px 0",
  color: BRAND.text,
};

const outerContainer: CSSProperties = {
  width: "100%",
  maxWidth: "640px",
  margin: "0 auto",
  padding: "0 12px",
};

const headerSection: CSSProperties = {
  padding: "16px 0 24px 0",
  textAlign: "center",
};

const cardContainer: CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "32px",
  width: "100%",
  boxSizing: "border-box",
};

const greeting: CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: BRAND.text,
  margin: "0 0 16px 0",
};

const paragraph: CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.7",
  color: BRAND.text,
  margin: "0 0 12px 0",
};

const blockSection: CSSProperties = {
  padding: "16px 0",
};

const blockHeading: CSSProperties = {
  fontSize: "22px",
  fontWeight: 700,
  color: BRAND.text,
  margin: "0 0 12px 0",
  lineHeight: "1.3",
};

const buttonBase: CSSProperties = {
  display: "inline-block",
  padding: "12px 24px",
  borderRadius: "9999px",
  fontSize: "15px",
  fontWeight: 600,
  textDecoration: "none",
};

const ctaSection: CSSProperties = {
  backgroundColor: BRAND.coral,
  borderRadius: "16px",
  padding: "32px",
  margin: "24px 0 8px 0",
  textAlign: "center",
};

const eventCard: CSSProperties = {
  border: `1px solid ${BRAND.border}`,
  borderRadius: "12px",
  padding: "20px",
  margin: "16px 0",
};

const eventDate: CSSProperties = {
  fontSize: "12px",
  letterSpacing: "0.08em",
  fontWeight: 700,
  color: BRAND.coral,
  margin: "0 0 4px 0",
};

const eventTitle: CSSProperties = {
  fontSize: "20px",
  fontWeight: 700,
  color: BRAND.text,
  margin: "0 0 8px 0",
};

const eventLocation: CSSProperties = {
  fontSize: "14px",
  color: BRAND.muted,
  margin: "0 0 8px 0",
};

const footerSection: CSSProperties = {
  padding: "24px 16px",
  textAlign: "center",
};

const footerBrand: CSSProperties = {
  fontSize: "14px",
  fontWeight: 700,
  color: BRAND.text,
  margin: "0 0 4px 0",
};

const footerAddress: CSSProperties = {
  fontSize: "13px",
  color: BRAND.muted,
  margin: "0 0 12px 0",
};

const footerLinks: CSSProperties = {
  fontSize: "13px",
  color: BRAND.muted,
  margin: "0 0 16px 0",
};

const footerLink: CSSProperties = {
  color: BRAND.coral,
  textDecoration: "none",
};

const footerLegal: CSSProperties = {
  fontSize: "12px",
  color: BRAND.muted,
  margin: "0",
  lineHeight: "1.6",
};
