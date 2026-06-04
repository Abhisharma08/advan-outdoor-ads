import Image from "next/image";
import { ArrowRight, GraduationCap, Italic, ShieldCheck, Star,} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PanelTop,Truck,MonitorPlay,TrainFront,Waypoints,TentTree,TvMinimal,Zap,Mail,} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/LeadForm";
import ScrollToLeadButton from "@/components/ScrollToLeadButton";
import SectionHeader from "@/components/SectionHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Build from "next/dist/build";

export const metadata = {
  title: "Outdoor Advertising Agency Bangalore | Hoardings & Metro | AD Vantage",
  description: "Hoardings on MG Road, ORR & Whitefield. Metro branding, skywalk ads, digital OOH & van campaigns across Bengaluru. 200+ campaigns. Free OOH plan in 24 hrs."
};

const LOGO_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778668639/advlogo_qq9f92.png";
const HERO_BG_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778674606/hero_qkgfwb.webp";
const DEFAULT_PLACEHOLDER = "https://picsum.photos/seed/placeholder/800/600";

export default function LandingPage() {
  const studentImg = PlaceHolderImages.find((img) => img.id === "student-work");
  const brandingImg = PlaceHolderImages.find((img) => img.id === "branding-mockup");
  const deferredSectionStyle = {
    contentVisibility: "auto",
    containIntrinsicSize: "900px",
  } as const

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <nav className="fixed top-0 z-50 w-full overflow-x-hidden border-b bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2" aria-label="INSD Logo">
            <Image
              src={LOGO_URL}
              alt=""
              width={200}
              height={50}
              className="h-10 w-auto object-contain"
              priority
              quality={60}
            />
          </div>
          <div className="flex items-center gap-4">
            <ScrollToLeadButton className="bg-secondary px-6 font-bold text-white hover:bg-secondary/90">
              Get Free OOH Plan
            </ScrollToLeadButton>
          </div>
        </div>
      </nav>

      <main className="w-full pb-24 pt-20 lg:pb-0">
        <section className="relative w-full overflow-hidden bg-primary py-20 lg:py-20">
          <div className="absolute inset-0">
            <Image
              src={HERO_BG_URL}
              alt="Design Workspace"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              quality={60}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              data-ai-hint="graphic design workspace"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
          <div className="container relative z-10 mx-auto max-w-7xl px-4">
            <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="w-full space-y-6 text-white">
                {/* <Badge className="mb-4 border-none bg-secondary px-4 py-1 text-sm text-white shadow-[0_0_18px_rgba(219,52,54,0.55)] animate-pulse">
                  Admissions Open 2026-27
                </Badge> */}
                <h1 className="font-headline font-medium text-3xl leading-tight text-secondary drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] md:text-5xl">
                  Outdoor Advertising in Bengaluru.
                  <br />Hoardings. Metro. Transit.
                </h1>
                <p className="max-w-xl text-xl text-white font-light">
                  We help businesses book hoarding sites, metro ads, van campaigns, and outdoor spaces across Bengaluru. 
                  < br />Tell us your area and budget — we will find the right site for you.
                  </p>
                <div className="flex max-w-2xl flex-wrap gap-2">
                  {/* {[
                    "Top Outdoor Advertising Agency in India",
                    "Hoarding & Transit Ad Specialists",
                    "Metro & Skywalk Advertising Experts",
                    "Pan-India Presence",
                    "End-to-End Outdoor Execution",
                  ].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(0,0,0,0.2)]"
                    >
                      <Star className="h-3.5 w-3.5 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex max-w-2xl flex-wrap gap-3">
                  {[
                    "Outdoor Hoardings",
                    "Transit & Van Advertising",
                    "Digital Signages",
                  ].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-secondary bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(219,52,54,0.35)]"
                    >
                      <ShieldCheck className="h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))} */}
                </div>
              {/* TRUST BADGES */}
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-primary/90 shadow-xl backdrop-blur-sm">
                <div className="grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    
                    <span className="text-sm font-medium text-secondary">
                      200+ < br />Campaigns Done
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    <span className="text-sm font-medium text-secondary">
                      All Bengaluru Areas Covered
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    <span className="text-sm font-medium text-secondary">
                      Response < br /> Within 2 Hours
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    <span className="text-sm font-medium text-secondary">
                      No Hidden Charges
                    </span>
                  </div>

                  {/* <p className="col-span-full mt-4 text-xs text-white/70 text-center">
                    AD Vantage Integrated Marketing · advanintegrated.in · Landing Page — Final Copy · Prepared by Contentify Tech ·
                    <br />
                    contentify.co.in
                  </p> */}
                </div>
              </div>               

                
              </div>
              <div id="lead-form-top">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-20" style={deferredSectionStyle}>
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={studentImg?.imageUrl || DEFAULT_PLACEHOLDER}
                  alt="Student at Work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  data-ai-hint="designer working"
                />
              </div>
              <div className="space-y-6">
                <SectionHeader
                  title="Where Do You Want to Advertise in Bengaluru?"
                  subtitle={
                <>
                </>
            }
                centered={false}
                />
                <p className="text-lg text-slate-900 italic"> 
                  We have hoarding sites, metro station spaces, van routes, and digital screens across all major areas of Bengaluru. 
                  < br /> We will show you exactly which sites are available in your target area, with photos, dimensions, and current rates.

                </p>
                <ul className="space-y-4">
                  {[
                    "We show you available sites in your area with photos before you decide",
                    "Clear pricing with no hidden charges — what we quote is what you pay",
                    "Our team handles booking, permissions, and installation end to end",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-medium text-primary">
                      <ShieldCheck className="h-6 w-6 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 inline-block border-b-2 border-secondary pb-1 text-lg font-bold text-primary">
                  We find the site. You approve it. We book it. Simple.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-muted py-20" style={deferredSectionStyle}>
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <SectionHeader
                  title={<span className="">Your Customer Is Outside.<br /> Are They Seeing Your Brand?</span>}
                  subtitle=""
                  centered={false}
                />
                <p className="text-lg text-slate-900 italic">
                  Every day, thousands of people walk past the streets, malls, metro stations, and RWAs in Bengaluru. 
                  A well-placed outdoor ad puts your brand in front of these people — repeatedly, every single day.                  
                  </p>
                <ul className="space-y-4">
                  {[
                    "A hoarding on a busy Bengaluru road is seen by 40,000 to 80,000 people every day",
                    "Metro station ads reach more than 4 lakh commuters daily on Namma Metro",
                    "People see your outdoor ad again and again — this is how your brand gets remembered",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-medium text-primary">
                      <ShieldCheck className="h-6 w-6 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 inline-block border-b-2 border-secondary pb-1 text-lg font-bold text-primary">Outdoor advertising = your brand, seen every day, by the right people.</p>
                <p className="text-lg text-slate-900 italic">
                  When someone walks into your shop or visits your website, they may have already seen your hoarding 10 times. That is how outdoor advertising works
                </p>
              </div>
              <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={brandingImg?.imageUrl || DEFAULT_PLACEHOLDER}
                  alt="Interior design showcase"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

<section className="w-full bg-white py-20" style={deferredSectionStyle}>
  <div className="container mx-auto max-w-7xl px-4">
    <SectionHeader
      title="Nine Ways Your Brand Owns Bengaluru."
      subtitle=""
    />

    <p className="mb-10 max-w-2xl text-center mx-auto text-lg italic text-slate-900">
      Every format. Every zone. One city. Your brand, impossible to miss.
    </p>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        icon: <PanelTop />,
        title: "Outdoor Hoardings",
        desc: "The Bengaluru Skyline Your Brand Can Own",
      },
      {
        icon: <Truck />,
        title: "Van & Roadshow Advertising",
        desc: "Every Pin Code. Every Market. Your Brand.",
      },
      {
        icon: <MonitorPlay />,
        title: "Digital Signage",
        desc: "Your Brand Moves On Bengaluru's Screens.",
      },
      {
        icon: <TrainFront />,
        title: "Metro Branding",
        desc: "4.5 Lakh Commuters. Your Brand. Every Day.",
      },
      {
        icon: <Waypoints />,
        title: "Skywalk Advertising",
        desc: "8 Seconds of Attention. No Scroll. No Skip.",
      },
      {
        icon: <TentTree />,
        title: "Exhibition & Venue Branding",
        desc: "Own the Room Before You Speak.",
      },
      {
        icon: <TvMinimal />,
        title: "Apartment Digital Screens",
        desc: "Your Brand in 500 Homes. Before Breakfast.",
      },
      {
        icon: <Zap />,
        title: "Guerilla Marketing",
        desc: "The Campaign They Screenshot and Share.",
      },
      {
        icon: <Mail />,
        title: "Flyer & Pamphlet Distribution",
        desc: "Direct to Door. Direct Response.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        {/* Title + Icon */}
        <div className="p-5 pb-4">
          <div className="flex items-center justify-center gap-3">
            <div className="rounded-lg bg-primary/5 p-2 text-primary">
              {item.icon}
            </div>

            <h4 className="font-headline text-xl font-bold text-secondary">
              {item.title}
            </h4>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] w-full">
          <img
            src="https://picsum.photos/seed/placeholder/800/600"
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="p-5">
          <p className="text-center text-base text-slate-700">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
    </div>
  </div>
</section>
        {/* <section className="w-full bg-primary py-20 text-white" style={deferredSectionStyle}>
          <div className="container mx-auto max-w-7xl px-4">
            <SectionHeader
              title={<span className="text-4xl text-white">Pick Your Format. We Handle Everything.</span>}
                subtitle={
                <>
                  Five outdoor formats. Each built for one outcome:{" "}
                  <span className="font-semibold text-secondary"> your brand</span>,{" "}
                  <span className="font-semibold text-secondary">seen by the right Bengaluru consumer</span>,{" "}
                  <span className="font-semibold text-secondary">at the right moment.</span>
                </>   
              }           light
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[
              { title: "Outdoor Hoarding Package", duration: "Campaign-Based", desc: "Any Brand Seeking Mass Visibility Strategic hoarding placements that make your brand unmissable." },
              { title: "Transit & Van Advertising", duration: "Campaign-Based", desc: "Brands Reaching Mobile Audiences Roadshow and van campaigns that take your brand anywhere." },
              { title: "Metro & Skywalk Advertising", duration: "Campaign-Based", desc: "Urban Brands & Consumer Products High-footfall metro and skywalk ads with maximum daily reach." },
              { title: "Digital Signage Package", duration: "Campaign-Based", desc: "Retail Brands & Service Businesses Dynamic digital boards that captivate and convert audiences." },
              { title: "Full Outdoor Brand Strategy", duration: "Retainer-Based", desc: "Growing Businesses & New Market Entries End-to-end outdoor strategy from placement to execution." },
              ].map((item) => (
                <Card key={item.title} className="group border-white/20 bg-white/10 transition-all hover:bg-white/20">
                  <CardContent className="flex h-full flex-col p-6 text-center">
                    <div className="flex-grow space-y-3">
                      <h4 className="font-headline text-xl text-white">{item.title}</h4>
                      <Badge variant="secondary" className="bg-secondary text-white">{item.duration}</Badge>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                    <div className="mt-auto pt-4">
                      <ScrollToLeadButton
                        variant="outline"
                        className="w-full border-white/60 bg-transparent text-sm font-bold text-white hover:bg-white/10 hover:text-white"
                      >
                        Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                      </ScrollToLeadButton>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
        {/* PACKAGES */}


        
<section
  className="w-full bg-primary/95 py-24 text-white"
  style={deferredSectionStyle}
>
  <div className="container mx-auto max-w-7xl px-4">
    <SectionHeader
      title={
        <span className="text-white">
          Pick Your Format. We Handle Everything.
        </span>
      }
      subtitle={
        <>
          Five outdoor formats. Each built for one outcome:{" "}
          <span className="font-semibold text-secondary">
            your brand
          </span>
          ,{" "}
          <span className="font-semibold text-secondary">
            seen by the right Bengaluru consumer
          </span>
          ,{" "}
          <span className="font-semibold text-secondary">
            at the right moment
          </span>
          .
        </>
      }
      light
    />

    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">

      {[
        {
          tag: "BEST FOR: RETAIL, REAL ESTATE, LOCAL BRANDS",
          title: "Hoarding Package",
          desc: "",
          features: [
            "Prime sites: MG Road, ORR, Whitefield, Hebbal, Koramangala",
            "40,000–80,000 daily impressions per site - verified, not estimated",
            "Location + size + timing optimised for your consumer profile",
            "Installation, maintenance and site management - fully handled",
            "Post-campaign photo report with impression documentation",
          ],
          cta: "Enquire for Hoarding Rates",
        },

        {
          tag: "BEST FOR: LOCAL CAMPAIGNS, PRODUCT LAUNCHES",
          title: "Van and Transit Advertising",
          desc: "",
          features: [
            "Moving van campaigns across all Bengaluru zones and pin codes",
            "Residential hubs, high streets, local markets - all covered",
            "GPS-tracked route coverage with daily activity report",
            "Minimum 8-hour daily street presence per campaign vehicle",
            "Ideal for product launches, offers, and local market penetration",
          ],
          cta: "Enquire for Van Ad Rates",
        },

        {
          tag: "BEST FOR: D2C, BANKS, APPS, FMCG BRANDS",
          title: "Metro and Skywalk Advertising",
          desc: "",
          features: [
            "Namma Metro: platform, concourse, and train wrap formats available",
            "4.5 lakh+ verified daily commuter reach across Purple + Green lines",
            "Skywalk panels: 8–12 seconds uninterrupted pedestrian attention",
            "Premium urban audience - working professionals, shoppers, students",
            "Multi-week booking available with creative refresh option",
          ],
          cta: "Enquire for Metro Ad Rates ",
        },

        {
          tag: "BEST FOR: MALLS, OFFICES, PREMIUM BRANDS",
          title: "Full Outdoor Advertising Package",
          desc: "",
          features: [
            "Digital OOH across malls, IT parks, commercial zones in Bengaluru",
            "Motion content delivers 2.5x higher recall vs. static boards",
            "Real-time campaign updates - creative changes at zero extra cost",
            "Multiple creatives, daypart targeting, one unified campaign",
            "Detailed impression data per screen delivered post-campaign",
          ],
          cta: "Get a Full Package Quote",
        },

      ].map((item) => (
        <div
          key={item.title}
          className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/15"
        >
          {/* TOP */}
          <div className="p-5">
            <div className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
              {item.tag}
            </div>

            <h3 className="mb-3 text-2xl font-bold leading-tight text-white group-hover:text-secondary">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-white/70">
              {item.desc}
            </p>

            {/* IMAGE */}
            <div className="mt-5 overflow-hidden rounded-xl">
              <img
                src="https://picsum.photos/seed/placeholder/800/600"
                alt={item.title}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* FEATURES */}
          <div className="flex-1 space-y-1.5 px-5 pb-5">
            {item.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2 border-b border-white/10 pb-1.5"
              >
                <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                  ✓
                </div>

                <p className="text-[13px] leading-relaxed text-white/80">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto p-5 pt-0">
            <ScrollToLeadButton className="h-11 w-full rounded-xl bg-secondary text-sm font-bold text-white transition-all hover:bg-secondary/90">
              {item.cta} →
            </ScrollToLeadButton>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        <section
          className="relative w-full overflow-hidden bg-white py-12"
          style={deferredSectionStyle}
        >
          <SectionHeader
            title={
              <>
                Good Sites in Bengaluru Get Booked Fast.  
              </>
            }
            subtitle=""
            centered
          />
            <div className="container relative z-10 mx-auto max-w-7xl space-y-8 px-4 text-center">

              <p className="mx-auto max-w-3xl text-base italic leading-loose text-slate-900 md:text-lg">
                Bengaluru's prime hoarding locations — MG Road, Outer Ring Road, Whitefield flyovers

              </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ScrollToLeadButton
                size="lg"
                className="h-14  bg-secondary px-10 text-lg font-bold text-white hover:bg-secondary/90 sm:w-auto"
              >
              Check What's Available →
              </ScrollToLeadButton>
            </div>
          </div>
        </section>

        <section
          id="lead-form"
          className="w-full bg-muted py-10"
          style={deferredSectionStyle}
        >
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="font-headline text-4xl text-primary mb-2 font-headline font-bold">
                    Ready to Put Your Brand on Bengaluru's Streets?
                  </h2>

                  <p className="text-lg text-muted-foreground">
                    Tell us your area, your business type, and your rough budget. 
                    We will call you within 2 hours with available hoarding sites, photos, and rates. No paperwork. No commitment. Just options.
                    </p>
                  <ScrollToLeadButton
                size="lg"
                className="h-14 w-full bg-secondary px-10 text-lg font-bold text-white hover:bg-secondary/90 sm:w-auto italic "
              >
              Get My Free Site Options →
              </ScrollToLeadButton>
                </div>

              <LeadForm
              title="Free Site Options. Within 2 Hours."
              subtitle="Share your brief and get a custom activation strategy within 24 hours."
              buttonText="Get My Site Options →"
              buttonclassName="italic tracking-wide"
            /> 
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="w-full bg-primary pb-28 pt-8 text-white lg:py-8">
        <div className="container mx-auto max-w-7xl px-4 text-center text-xs text-white/60">
          <p>©2026 AD Vantage Integrated Marketing All Rights Reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-30 flex w-screen gap-2 border-t bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] lg:hidden">
        <div className="mx-auto flex w-full max-w-7xl gap-2 px-4">
          <ScrollToLeadButton className="h-12 flex-1 bg-secondary font-bold text-white">
            Get My Free OOH Plan →
          </ScrollToLeadButton>
        </div>
      </div>
    </div>
  );
}