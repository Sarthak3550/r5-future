import { motion } from "framer-motion";
import {
  Leaf,
  RefreshCw,
  Magnet,
  PencilRuler,
  Recycle,
  ArrowUpRight,
  FlaskConical,
  NotebookPen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { LOGBOOK, METHODOLOGY_ROWS, THEME_RELEVANCE, WASTE_COMPARISON } from "./data";
import { SectionTitle } from "./Sections";

const ICONS: Record<string, LucideIcon> = {
  leaf: Leaf,
  refresh: RefreshCw,
  magnet: Magnet,
  pencil: PencilRuler,
  recycle: Recycle,
};

export function ThemeRelevance() {
  return (
    <section id="relevance" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Theme relevance"
          title="The five R's behind the study"
          sub="Each R is a lever we tested in the field — together they turn a linear waste stream into a circular loop."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THEME_RELEVANCE.map((r, i) => {
            const Icon = ICONS[r.icon] ?? Recycle;
            return (
              <motion.article
                key={r.key}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="glass group rounded-xl p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-eco text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-display text-3xl font-bold text-muted-foreground/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm font-medium text-primary">{r.line}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.detail}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase transition-colors group-hover:text-primary">
                  In our study <ArrowUpRight className="size-3.5" />
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Methodology() {
  return (
    <section id="methodology" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Methodology & data"
          title="How we measured the R5 effect"
          sub="A four-week field study across households and classrooms, logged daily and compared week by week."
        />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass overflow-hidden rounded-xl"
          >
            <div className="flex items-center gap-2 border-b border-border/60 px-5 py-4">
              <FlaskConical className="size-4 text-primary" />
              <h3 className="text-sm font-semibold">Study protocol</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead>
                  <tr className="text-xs tracking-wide text-muted-foreground uppercase">
                    <th className="px-5 py-3 font-semibold">Stage</th>
                    <th className="px-5 py-3 font-semibold">Method</th>
                    <th className="px-5 py-3 font-semibold">Sample</th>
                    <th className="px-5 py-3 font-semibold">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {METHODOLOGY_ROWS.map((r) => (
                    <tr
                      key={r.stage}
                      className="border-t border-border/50 transition-colors hover:bg-accent/40"
                    >
                      <td className="px-5 py-3 font-semibold text-foreground">{r.stage}</td>
                      <td className="px-5 py-3 text-muted-foreground">{r.method}</td>
                      <td className="px-5 py-3 text-muted-foreground">{r.sample}</td>
                      <td className="px-5 py-3 text-muted-foreground">{r.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-5"
          >
            <h3 className="text-sm font-semibold">Landfill waste vs retrieved waste</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Weight in kilograms, logged weekly during the trial.
            </p>
            <div className="mt-5 h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={WASTE_COMPARISON} barGap={6}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="week" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{ fill: "color-mix(in oklab, var(--primary) 8%, transparent)" }}
                    contentStyle={{
                      background: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      color: "var(--popover-foreground)",
                      fontSize: "12px",
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Bar dataKey="landfill" name="Landfill (kg)" fill="var(--muted-foreground)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="retrieved" name="Retrieved (kg)" fill="var(--primary)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function LogBook() {
  return (
    <section id="logbook" className="section-pad">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle
          eyebrow="Digital log book"
          title="Day-by-day project progress"
          sub="Every observation, setup and analysis step recorded as the project unfolded."
        />
        <ol className="relative space-y-5 before:absolute before:top-3 before:bottom-3 before:left-[19px] before:w-0.5 before:bg-gradient-eco">
          {LOGBOOK.map((e, i) => (
            <motion.li
              key={e.day}
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="relative flex gap-5"
            >
              <span className="z-10 grid size-10 shrink-0 place-items-center rounded-full bg-gradient-eco text-primary-foreground">
                <NotebookPen className="size-4" />
              </span>
              <div className="glass min-w-0 flex-1 rounded-xl px-5 py-4 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                    {e.day}
                  </span>
                  <span className="text-xs tracking-wide text-muted-foreground uppercase">{e.date}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
