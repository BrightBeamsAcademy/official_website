import type { Metadata } from "next";
import { CONTACT } from "@/app/config";

export const SITE_URL = "https://www.brightbeamsacademy.com";
export const SITE_NAME = "Bright Beams Academy";

/** Classroom photo already used on the homepage and about page. */
export const OG_IMAGE = {
  url: "/images/bba_welcome.jpg",
  width: 1000,
  height: 679,
  alt: "Children learning at Bright Beams Academy in Redmond, Washington",
} as const;

type PageSeo = {
  title: string;
  description: string;
  /** Site path, including the leading slash. Use "/" for the homepage. */
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export const homeSeo = {
  title: "Bilingual Mandarin–English Daycare & Preschool in Redmond, WA | Bright Beams Academy",
  description:
    "Bright Beams Academy is a Mandarin–English bilingual daycare and preschool in Redmond, WA. Infant care, toddler programs, and early preschool for families in Redmond, Bellevue, Kirkland, and Sammamish.",
  path: "/",
} as const;

export const aboutSeo = {
  title: "About Us | Bilingual Daycare & Preschool in Redmond | Bright Beams Academy",
  description:
    "Learn about Bright Beams Academy, a Mandarin–English bilingual daycare and preschool in Redmond, Washington, serving families in Redmond, Bellevue, and Kirkland.",
  path: "/about",
} as const;

export const programsSeo = {
  title: "Child Care Programs in Redmond, WA | Bright Beams Academy",
  description:
    "Daycare and preschool programs in Redmond, WA: Infant (6 weeks – 8 months), Waddle (9 months – 13 months), Toddler (12 – 24 months), and Early Preschool (2 – 4 years) with Mandarin–English immersion.",
  path: "/programs",
} as const;

export const blogSeo = {
  title: "Blog | Bilingual Daycare & Preschool Tips | Bright Beams Academy",
  description:
    "Parenting articles and classroom news from Bright Beams Academy, a Mandarin–English bilingual daycare and preschool in Redmond, WA.",
  path: "/blog",
} as const;

export const contactSeo = {
  title: "Tour & Enroll – Bright Beams Academy, Redmond WA",
  description: `Schedule a tour or ask about enrollment at Bright Beams Academy, ${CONTACT.address}. Call ${CONTACT.phone}. ${CONTACT.hours}.`,
  path: "/contact",
} as const;

/**
 * LocalBusiness-style JSON-LD for the homepage.
 * Phone, email, and hours are the values already shown on the site.
 */
export function homeJsonLd() {
  const displayedHours = "Mon – Fri: 7:00 AM – 6:00 PM";
  if (CONTACT.hours !== displayedHours) {
    throw new Error("Update JSON-LD opening hours to match CONTACT.hours before changing the displayed hours.");
  }

  const streetAddress = "8693 161st Ave NE";
  const addressLocality = "Redmond";
  const addressRegion = "WA";
  const postalCode = "98052";
  const formattedAddress = `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;
  if (formattedAddress !== CONTACT.address) {
    throw new Error("Update JSON-LD address to match CONTACT.address before changing the displayed address.");
  }

  return {
    "@context": "https://schema.org",
    "@type": ["ChildCare", "Preschool"],
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    openingHours: "Mo-Fr 07:00-18:00",
    availableLanguage: ["English", "Mandarin Chinese"],
    areaServed: ["Redmond", "Bellevue", "Kirkland", "Sammamish"].map((name) => ({
      "@type": "City",
      name,
    })),
  };
}
