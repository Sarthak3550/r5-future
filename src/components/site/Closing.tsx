import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  Mail,
  Phone,
  MapPin,
  School,
  GraduationCap,
  UserRound,
  Download,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Recycle,
  Crown,
  FlaskConical,
  Lightbulb,
  Users,
  CheckCircle2,
} from "lucide-react";
import { TEAM, MENTOR } from "./data";
import { SectionTitle } from "./Sections";

const SKILL_ICONS: Record<string, { label: string; icon: LucideIcon }> = {
  captain: { label: "Captain", icon: Crown },
  research: { label: "Research", icon: FlaskConical },
  innovation: { label: "Innovation", icon: Lightbulb },
  teamwork: { label: "Teamwork", icon: Users },
  mentor: { label: "Mentor", icon: GraduationCap },
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export function Team() {
  return (
    <section id="team" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Our team"
          title="Meet Our Team"
          sub="A passionate team of young innovators committed to creating sustainable solutions for waste management through the R5 approach."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 text-center"
            >
              <div className="relative mx-auto w-fit">
                <div className="mx-auto grid size-24 place-items-center rounded-full bg-gradient-eco text-2xl font-bold text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-105">
                  {initials(member.name)}
                </div>
                <span className="absolute -right-1 -bottom-1 grid size-8 place-items-center rounded-full bg-accent text-accent-foreground shadow">
                  {member.role === "Team Captain" ? (
                    <Crown className="size-4" />
                  ) : (
                    <FlaskConical className="size-4" />
                  )}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="text-xs text-muted-foreground">{member.cls}</p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {member.responsibilities.map((r) => (
                  <span
                    key={r}
                    className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                  >
                    <CheckCircle2 className="size-3 shrink-0 text-primary" />
                    {r}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {member.skills.map((sk) => {
                  const skill = SKILL_ICONS[sk];
                  if (!skill) return null;
                  const Icon = skill.icon;
                  return (
                    <span
                      key={sk}
                      className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold text-foreground"
                    >
                      <Icon className="size-3 shrink-0 text-primary" />
                      {skill.label}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: TEAM.length * 0.12 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass group relative overflow-hidden rounded-3xl p-6 text-center"
          >
            <div className="relative mx-auto w-fit">
              <div className="mx-auto grid size-24 place-items-center rounded-full bg-gradient-eco text-2xl font-bold text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-105">
                {initials(MENTOR.name)}
              </div>
              <span className="absolute -right-1 -bottom-1 grid size-8 place-items-center rounded-full bg-accent text-accent-foreground shadow">
                <GraduationCap className="size-4" />
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold">{MENTOR.name}</h3>
            <p className="text-sm font-medium text-primary">{MENTOR.role}</p>
            <p className="text-xs text-muted-foreground">{MENTOR.school}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{MENTOR.note}</p>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold text-foreground">
                <GraduationCap className="size-3 shrink-0 text-primary" />
                Mentor
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const share = (net: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = encodeURIComponent("R5 for Waste Management – Smart Solutions for a Sustainable Future");
    const map: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };
    window.open(map[net], "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Contact" title="Reach the project team" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass grid gap-4 rounded-3xl p-6 sm:p-8">
            {[
              { icon: School, label: "School Name", value: "Green Valley Public School, Pune" },
              { icon: Recycle, label: "Project Title", value: "R5 for Waste Management" },
              { icon: Mail, label: "Email", value: "r5project@greenvalley.edu.in" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <c.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">{c.label}</p>
                  <p className="text-sm font-medium break-words">{c.value}</p>
                </div>
              </div>
            ))}
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-eco px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                <Download className="size-4" /> Download Project Report (PDF)
              </a>
              <div className="flex items-center gap-2">
                <Share2 className="size-4 text-muted-foreground" />
                {[
                  [Facebook, "facebook"],
                  [Twitter, "twitter"],
                  [Linkedin, "linkedin"],
                ].map(([Icon, net]) => {
                  const I = Icon as typeof Facebook;
                  return (
                    <button
                      key={net as string}
                      onClick={() => share(net as string)}
                      aria-label={`Share on ${net as string}`}
                      className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:bg-accent"
                    >
                      <I className="size-4" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="glass grid min-h-64 place-items-center rounded-3xl p-6 text-center">
            <div>
              <MapPin className="mx-auto size-10 text-primary" />
              <p className="mt-3 font-semibold">Google Maps</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Map placeholder — Green Valley Public School, Pune, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <Recycle className="mx-auto size-8 animate-spin-slow text-primary" />
        <p className="mt-5 font-display text-xl font-semibold sm:text-2xl">
          &ldquo;Every piece of waste has value when managed wisely.&rdquo;
        </p>
        <p className="mt-3 text-sm tracking-[0.18em] text-primary uppercase">
          Reduce • Reuse • Retrieve • Redesign • Recycle
        </p>
        <p className="mt-6 text-xs text-muted-foreground">
          National Children&apos;s Science Congress project · Green Valley Public School
        </p>
      </div>
    </footer>
  );
}
