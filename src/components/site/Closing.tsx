import { motion } from "framer-motion";
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
} from "lucide-react";
import { TEAM } from "./data";
import { SectionTitle } from "./Sections";

export function Team() {
  return (
    <section id="team" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Our team"
          title="The students behind the project"
          sub="Guided by our teacher and mentor at Green Valley Public School."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-6 text-center"
            >
              <div className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-eco text-2xl font-bold text-primary-foreground">
                {m.name.charAt(0)}
              </div>
              <h3 className="mt-4 font-semibold">{m.name}</h3>
              <p className="text-sm text-primary">{m.role}</p>
              <p className="mt-2 text-xs text-muted-foreground">{m.school}</p>
              <p className="text-xs text-muted-foreground">{m.cls}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {[
            { icon: GraduationCap, title: "Guide Teacher", value: "Mrs. Meera Iyer, Science Dept." },
            { icon: UserRound, title: "Mentor", value: "Dr. Rajesh Kulkarni, Env. Scientist" },
            { icon: School, title: "School Logo", value: "Green Valley Public School" },
          ].map((c) => (
            <div key={c.title} className="glass flex items-center gap-4 rounded-3xl p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <c.icon className="size-6" />
              </span>
              <div className="min-w-0">
                <p className="text-xs tracking-wide text-muted-foreground uppercase">{c.title}</p>
                <p className="truncate text-sm font-semibold">{c.value}</p>
              </div>
            </div>
          ))}
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
