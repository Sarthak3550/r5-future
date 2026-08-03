import { motion } from "framer-motion";
import {
  Leaf,
  RefreshCw,
  Magnet,
  PencilRuler,
  Recycle,
  Cpu,
  Trash2,
  Radio,
  MapPin,
  BarChart3,
  Repeat,
  Users,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import smartTech from "@/assets/smart-tech.jpg";
import { BENEFITS, JOURNEY, R5, SMART } from "./data";

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="About the project" title="Why the world needs an R5 mindset" />
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass mx-auto max-w-4xl rounded-3xl p-8 text-center sm:p-10"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Urbanization, industrialization, and irrational consumption have led to a rapid increase
            in waste generation worldwide. The R5 approach provides a sustainable framework to
            minimize waste and conserve natural resources. It encourages responsible consumption and
            innovative waste management practices that help protect the environment and combat
            climate change.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const ICONS: Record<string, LucideIcon> = {
  leaf: Leaf,
  refresh: RefreshCw,
  magnet: Magnet,
  pencil: PencilRuler,
  recycle: Recycle,
};

export function R5Cards() {
  return (
    <section id="r5" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="The framework"
          title="Reduce · Reuse · Retrieve · Redesign · Recycle"
          sub="Five connected actions that turn a linear waste stream into a circular resource loop."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {R5.map((r, i) => {
            const Icon = ICONS[r.icon] ?? Recycle;
            return (
              <motion.article
                key={r.key}
                variants={rise}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -8 }}
                className="glass group rounded-3xl p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-eco text-primary-foreground transition-transform group-hover:rotate-12">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="truncate text-xl font-semibold">
                    <span className="text-primary">{i + 1}.</span> {r.title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="section-pad">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle
          eyebrow="Interactive waste journey"
          title="From thrown away to brought back"
          sub="Follow a single piece of waste through the complete R5 timeline."
        />
        <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-0.5 before:bg-gradient-eco">
          {JOURNEY.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative flex gap-5 pl-0"
            >
              <span className="z-10 grid size-10 shrink-0 place-items-center rounded-full bg-gradient-eco text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div className="glass min-w-0 flex-1 rounded-2xl px-5 py-4">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section id="benefits" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Benefits"
          title="What the R5 model delivers"
          sub="Impact measured across environment, resources and community."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-6"
            >
              <div className="text-3xl">{b.emoji}</div>
              <p className="mt-3 font-display text-3xl font-bold text-gradient-eco">
                {b.value}
                {b.unit}
              </p>
              <h3 className="mt-1 text-base font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.note}</p>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(b.value, 100)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="h-full bg-gradient-eco"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SMART_ICONS = [Cpu, Trash2, Radio, MapPin, BarChart3, Repeat, Users];

export function SmartWaste() {
  return (
    <section id="smart" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Smart waste management"
          title="Technology that makes R5 measurable"
          sub="Sensors, AI and analytics turn guesswork into data-driven waste management."
        />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            src={smartTech}
            alt="Illustration of smart dustbins with IoT sensors and an analytics dashboard"
            loading="lazy"
            width={1280}
            height={896}
            className="glass w-full rounded-3xl p-2"
          />
          <div className="grid gap-4">
            {SMART.map((s, i) => {
              const Icon = SMART_ICONS[i] ?? Cpu;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass flex gap-4 rounded-2xl p-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
