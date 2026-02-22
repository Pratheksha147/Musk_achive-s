import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Rocket, Zap, Users, TrendingUp, Globe, Brain } from "lucide-react";

const achievements = [
  { year: "1995", title: "Zip2", desc: "Co-founded Zip2, a city guide software company. Sold to Compaq for ~$307 million.", icon: Zap },
  { year: "1999", title: "X.com / PayPal", desc: "Founded X.com, which merged with Confinity to become PayPal. Sold to eBay for $1.5 billion.", icon: Globe },
  { year: "2002", title: "SpaceX Founded", desc: "Founded Space Exploration Technologies Corp. with the goal of reducing space travel costs and enabling Mars colonization.", icon: Rocket },
  { year: "2004", title: "Tesla Motors", desc: "Joined Tesla as chairman and lead investor, later becoming CEO. Transformed the electric vehicle industry.", icon: TrendingUp },
  { year: "2006", title: "SolarCity", desc: "Co-founded SolarCity with his cousins to accelerate the adoption of sustainable energy.", icon: Zap },
  { year: "2016", title: "Neuralink & The Boring Company", desc: "Founded Neuralink for brain-computer interfaces and The Boring Company for underground transportation tunnels.", icon: Brain },
  { year: "2020", title: "Crew Dragon", desc: "SpaceX launched astronauts to the ISS — the first private company to send humans to orbit.", icon: Rocket },
  { year: "2022", title: "Twitter / X", desc: "Acquired Twitter for $44 billion, rebranding it to X with a vision for an 'everything app'.", icon: Users },
  { year: "2024", title: "Starship Milestones", desc: "SpaceX's Starship achieved breakthrough test flights, pushing closer to Mars mission capability.", icon: Rocket },
];

const stats = [
  { label: "Companies Founded", value: "6+" },
  { label: "Net Worth Peak", value: "$250B+" },
  { label: "SpaceX Launches", value: "300+" },
  { label: "Tesla Cars Delivered", value: "6M+" },
];

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative z-10">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
            Innovator · Entrepreneur · Visionary
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">Elon Musk</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            A timeline of bold bets that reshaped industries—from online payments to interplanetary travel.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-2xl opacity-30" />

      {/* Bio */}
      <section className="mx-auto max-w-2xl px-6 py-16 text-center">
        <p className="text-muted-foreground leading-relaxed">
          Born in Pretoria, South Africa in 1971, Elon Musk moved to North America as a teenager and went on to co-found
          or lead some of the most ambitious technology companies in history—spanning electric vehicles, space exploration,
          neural interfaces, and renewable energy.
        </p>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight">Key Milestones</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-px bg-border sm:left-1/2" />

          {achievements.map((item, i) => {
            const Icon = item.icon;
            const isLeft = i % 2 === 0;
            return (
              <div
                key={item.year}
                className={`relative mb-12 flex items-start gap-6 sm:gap-0 ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 top-1 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-primary sm:left-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                </div>

                {/* Spacer for mobile */}
                <div className="w-10 shrink-0 sm:hidden" />

                {/* Card */}
                <div className={`w-full sm:w-[calc(50%-2rem)] ${isLeft ? "sm:pr-0" : "sm:pl-0"}`}>
                  <Card className="border-border/50 bg-card/60 backdrop-blur-sm transition-colors hover:border-primary/30">
                    <CardContent className="p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <Badge variant="secondary" className="text-xs font-mono">
                          {item.year}
                        </Badge>
                      </div>
                      <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Separator className="mx-auto max-w-2xl opacity-30" />

      {/* Stats */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-2xl opacity-30" />

      {/* Quote */}
      <section className="mx-auto max-w-2xl px-6 py-20 text-center">
        <blockquote className="text-xl italic text-muted-foreground leading-relaxed">
          "When something is important enough, you do it even if the odds are not in your favor."
        </blockquote>
        <p className="mt-4 text-sm font-medium text-primary">— Elon Musk</p>
      </section>

      <footer className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        Built with admiration, not affiliation.
      </footer>
    </div>
  );
};

export default Index;
