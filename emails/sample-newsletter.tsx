import {
  CTABlock,
  Divider,
  EventBlock,
  FeatureBlock,
  HeroBanner,
  Intro,
  Newsletter,
} from "./Newsletter";

/**
 * Example showing how to assemble a monthly newsletter from blocks.
 *
 * To send: `resend.emails.send({ react: <SampleNewsletter recipientName="…" /> })`.
 * To preview HTML: `render(<SampleNewsletter />)` from "@react-email/components".
 */
export default function SampleNewsletter({
  recipientName,
  siteUrl = "https://brightbeamsacademy.com",
  unsubscribeUrl,
}: {
  recipientName?: string;
  siteUrl?: string;
  unsubscribeUrl?: string;
}) {
  return (
    <Newsletter
      previewText="Open House every Sunday in May — plus a peek inside our classrooms."
      siteUrl={siteUrl}
      unsubscribeUrl={unsubscribeUrl}
      recipientName={recipientName}
    >
      <HeroBanner
        src={`${siteUrl}/daycare_photos/121.JPG`}
        alt="Inside the toddler classroom"
      />

      <Intro>
        It&apos;s a busy spring at Bright Beams Academy! Here&apos;s a quick look
        at what&apos;s happening this month, including our Open House series and
        a new peek inside the toddler room.
      </Intro>

      <Divider />

      <FeatureBlock
        heading="Inside our Toddler classroom"
        body="Our toddler classroom is spacious, giving little ones plenty of room to move and explore. Daily activities support gross motor development, classroom routines, and play-based exploration."
        image={{
          src: `${siteUrl}/daycare_photos/121.JPG`,
          alt: "Toddler classroom",
        }}
        imagePosition="right"
        cta={{ label: "See all programs", href: `${siteUrl}/programs` }}
      />

      <EventBlock
        date="Every Sunday in May"
        title="Open House"
        location="Bright Beams Academy, Redmond WA"
        description="Join us for a guided tour, meet our teachers, and see the classrooms in action. Drop in any Sunday between 10am – 12pm."
        cta={{
          label: "View flyer",
          href: `${siteUrl}/BBA%20Flyer%20-%20OPEN%20HOUSE.pdf`,
        }}
      />

      <CTABlock
        heading="Now enrolling for Fall 2026"
        body="A few spots are still available across our age groups. Schedule a tour to learn more."
        cta={{ label: "Schedule a tour", href: `${siteUrl}/contact` }}
      />
    </Newsletter>
  );
}
