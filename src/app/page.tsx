import Image from "next/image";
import { ArrowRight, GraduationCap, ShieldCheck, Star,} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PanelTop,Truck,MonitorPlay,TrainFront,Waypoints,TentTree,TvMinimal,Zap,Mail,} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/LeadForm";
import ScrollToLeadButton from "@/components/ScrollToLeadButton";
import SectionHeader from "@/components/SectionHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Build from "next/dist/build";

export const metadata = {
  title: "Innovative Branding Ideas | AD Vantage Integrated Marketing",
  description: "AD Vantage helping businesses to connect with customers in a meaningful way by being technology-enabled, data-driven, and creative marketing techniques."
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
              alt="INSD Logo"
              width={200}
              height={50}
              className="h-10 w-auto object-contain"
              priority
              quality={60}
            />
          </div>
          <div className="flex items-center gap-4">
            <ScrollToLeadButton className="bg-secondary px-6 font-bold text-white hover:bg-secondary/90">
              ENQUIRE NOW!
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
                <h1 className="font-headline text-3xl leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] md:text-5xl">
                  We Don't Just Place Ads. <br />We Put Your Brand Everywhere It Matters
                </h1>
                <p className="max-w-xl text-xl text-white">
                  Join hands with AD Vantage Marketing and get outdoor advertising strategies that capture attention, anywhere your audience goes.
                </p>
                <div className="flex max-w-2xl flex-wrap gap-2">
                  {[
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
                  ))}
                </div>
                <p className="text-lg italic text-secondary">
                  BOOK A FREE CONSULTATION
                </p>
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
                  title="Visibility. Reach. Impact. Come First."
                  subtitle={
                <>
                  At AD Vantage, we focus on what truly drives outdoor brand growth — the right placement, the right audience, and the right moment.{" "}
                </>
            }
                centered={false}
                />

                <ul className="space-y-4">
                  {[
                    "Placement over guesswork",
                    "Reach over assumptions",
                    "Impact over generic advertising",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-medium text-primary">
                      <ShieldCheck className="h-6 w-6 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 inline-block border-b-2 border-secondary pb-1 text-lg font-bold text-primary">
                  We build outdoor presence, not just advertisements.
                </p>
                <p className="mt-2 text-lg leading-relaxed text-primary">
                  From day one, every outdoor campaign we craft is focused on making your brand impossible to miss, wherever your audience goes.
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
                  title="Your Audience Is Out There. Is Your Brand Showing Up?"
                  subtitle="India's outdoor advertising landscape is one of the most powerful brand-building channels available."
                  centered={false}
                />
                <ul className="list-outside list-disc space-y-2 text-lg text-muted-foreground marker:text-secondary">
                  <li>
                    <span className="text-slate-600">
                      High-footfall locations offer unmatched daily brand exposure
                    </span>
                  </li>

                  <li>
                    <span className="text-slate-600">
                      Outdoor advertising builds consistent brand recall over time
                    </span>
                  </li>

                  <li>
                    <span className="text-slate-600">
                      Strategic placements at the right locations drive direct purchase decisions
                    </span>
                  </li>
                </ul>
                <p className="mt-4 inline-block border-b-2 border-secondary pb-1 text-lg font-bold text-primary">Outdoor Presence = Brand Recognition</p>
                <p className="text-lg text-muted-foreground">With the right outdoor strategy, your brand can reach, engage, and stay top of mind.</p>
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
              title="What We Do For Your Brand"
              subtitle="Every activation we deliver is built around one goal, making your brand impossible to forget."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
              { icon: <PanelTop />, title: "Outdoor Hoardings", desc: "Compelling hoarding ads that make your brand hard to miss." },
              { icon: <Truck />, title: "Van & Roadshow Advertising", desc: "Mobile displays that take your brand on the road." },
              { icon: <MonitorPlay />, title: "Digital Signages", desc: "Eye-catching digital boards that captivate audiences daily." },
              { icon: <TrainFront />, title: "Metro Branding", desc: "Train and station ads that reach thousands of urban commuters." },
              { icon: <Waypoints />, title: "Skywalk Advertising", desc: "High-footfall skywalk panels that command pedestrian attention." },
              { icon: <TentTree />, title: "Exhibition & Venue Branding", desc: "Strategic venue branding that turns spaces into brand experiences." },
              { icon: <TvMinimal />, title: "Apartment Digital Screens", desc: "Lift lobby screens that embed your brand in daily routines." },
              { icon: <Zap />, title: "Guerilla Marketing", desc: "Unconventional campaigns that create buzz and lasting impressions." },
              { icon: <Mail />, title: "Flyer & Pamphlet Distribution", desc: "Door-to-door delivery that puts your brand in the right hands." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-muted bg-white p-6 transition-all hover:border-secondary/100 hover:bg-muted/30"
                >
                  <div className="h-fit rounded-lg bg-primary/5 p-3 text-primary">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline text-lg text-primary">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-primary py-20 text-white" style={deferredSectionStyle}>
          <div className="container mx-auto max-w-7xl px-4">
            <SectionHeader
              title="Choose Your Engagement. Grow Your Brand."
                subtitle={
                <>
                  No matter where your brand stands today, the outcome is the same:{" "}
                  <span className="font-semibold text-secondary">stronger outdoor presence</span>,{" "}
                  <span className="font-semibold text-secondary">better brand recall</span>,{" "}
                  <span className="font-semibold text-secondary">more customers.</span>
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
                      {/* <div className="rounded border border-white/10 bg-white/5 p-2 text-xs text-white/60">
                        <span className="mr-1 font-bold text-secondary">Eligibility:</span>
                        {item.eligibility}
                      </div> */}
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
        </section>

        <section className="relative w-full overflow-hidden bg-white py-24" style={deferredSectionStyle}>
          <div className="container relative z-10 mx-auto max-w-7xl space-y-8 px-4 text-center">
            <h2 className="font-headline text-4xl text-primary md:text-5xl">Your Brand Won't Wait.</h2>
            <p>The right outdoor advertising partner can help you grow faster.</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ScrollToLeadButton
                variant="outline"
                size="lg"
                className="h-14 w-full border-primary px-10 text-lg text-primary hover:bg-primary/5 sm:w-auto"
              >
                Learn More
              </ScrollToLeadButton>
              <ScrollToLeadButton
                size="lg"
                className="h-14 w-full bg-secondary px-10 text-lg font-bold text-white hover:bg-secondary/90 sm:w-auto"
              >
                Start Your Brand Journey Today
              </ScrollToLeadButton>
              <ScrollToLeadButton
                variant="outline"
                size="lg"
                className="h-14 w-15 border-primary px-10 text-lg text-primary hover:bg-primary/5 sm:w-autogit remote add origin "
              >
                Enquire Now
              </ScrollToLeadButton>
            </div>
            <p className="text-sm text-muted-foreground">Don&apos;t wait to turn your brand's potential into outdoor performance.</p>
          </div>
        </section>

        <section id="lead-form" className="w-full bg-muted py-10" style={deferredSectionStyle}>
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="font-headline text-3xl text-primary">Are you ready to put your brand where it belongs?</h2>
                  <p className="text-lg text-muted-foreground">
                    Get expert outdoor advertising strategies tailored to your brand. Fill in your details and take the first step today.
                  </p>
                  <p className="text-base font-semibold text-secondary">
                    BOOK A FREE CONSULTATION
                  </p>
                </div>
                <LeadForm />
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
            Enquire Now!
          </ScrollToLeadButton>
        </div>
      </div>
    </div>
  );
}