import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  X,
  Award,
  RotateCcw,
  Calculator as CalcIcon,
  TreePine,
  Recycle,
  Zap,
  Cloud,
  Droplets,
} from "lucide-react";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import segregation from "@/assets/gallery-segregation.jpg";
import compost from "@/assets/gallery-compost.jpg";
import campaign from "@/assets/gallery-campaign.jpg";
import heroEarth from "@/assets/hero-earth.jpg";
import smartTech from "@/assets/smart-tech.jpg";
import { QUIZ } from "./data";
import { SectionTitle } from "./Sections";

const GALLERY = [
  { src: segregation, label: "Waste segregation at source" },
  { src: compost, label: "Composting organic waste" },
  { src: campaign, label: "School awareness campaign" },
  { src: heroEarth, label: "Recycling for a greener Earth" },
  { src: smartTech, label: "Smart bins & plastic recycling" },
  { src: campaign, label: "Clean city initiative" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Gallery"
          title="The project in pictures"
          sub="Click any image to view it larger."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActive(i)}
              className="group glass overflow-hidden rounded-3xl p-2 text-left"
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="h-52 w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <p className="px-2 py-3 text-sm font-medium">{g.label}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-foreground/80 p-6 backdrop-blur-sm"
          >
            <motion.figure
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-h-full w-full max-w-3xl overflow-auto rounded-3xl p-3"
            >
              <img src={GALLERY[active].src} alt={GALLERY[active].label} className="w-full rounded-2xl" />
              <figcaption className="px-2 py-3 text-sm">{GALLERY[active].label}</figcaption>
            </motion.figure>
            <button
              onClick={() => setActive(null)}
              aria-label="Close image"
              className="glass fixed top-6 right-6 grid size-11 place-items-center rounded-full"
            >
              <X className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = QUIZ.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0);
  const badge =
    score === QUIZ.length ? "Eco Champion 🏆" : score >= 3 ? "Green Guardian 🌿" : "Eco Learner 🌱";

  return (
    <section id="quiz" className="section-pad">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle
          eyebrow="Quiz"
          title="Test your R5 knowledge"
          sub="Five quick questions — answer them all and earn an achievement badge."
        />
        <div className="glass space-y-6 rounded-3xl p-6 sm:p-8">
          {QUIZ.map((q, qi) => (
            <div key={qi}>
              <p className="font-medium">
                {qi + 1}. {q.q}
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {q.options.map((opt, oi) => {
                  const chosen = answers[qi] === oi;
                  const correct = submitted && oi === q.answer;
                  const wrong = submitted && chosen && oi !== q.answer;
                  return (
                    <button
                      key={oi}
                      disabled={submitted}
                      onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                      className={[
                        "rounded-xl border px-4 py-2.5 text-left text-sm transition-colors",
                        correct
                          ? "border-primary bg-primary/15 text-foreground"
                          : wrong
                            ? "border-destructive bg-destructive/10 text-foreground"
                            : chosen
                              ? "border-primary bg-accent"
                              : "border-border hover:bg-accent",
                      ].join(" ")}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="flex flex-wrap items-center gap-3">
            {!submitted ? (
              <button
                onClick={() => setSubmitted(true)}
                disabled={Object.keys(answers).length < QUIZ.length}
                className="rounded-full bg-gradient-eco px-6 py-3 font-medium text-primary-foreground disabled:opacity-50"
              >
                Submit answers
              </button>
            ) : (
              <button
                onClick={() => {
                  setAnswers({});
                  setSubmitted(false);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:bg-accent"
              >
                <RotateCcw className="size-4" /> Try again
              </button>
            )}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 rounded-2xl bg-accent px-4 py-2.5 text-accent-foreground"
                >
                  <Award className="size-5 text-primary" />
                  <span className="text-sm font-semibold">
                    Score {score}/{QUIZ.length} · {badge}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

const FIELDS = [
  { key: "plastic", label: "Plastic waste (kg)", co2: 1.5 },
  { key: "paper", label: "Paper waste (kg)", co2: 0.9 },
  { key: "organic", label: "Organic waste (kg)", co2: 0.4 },
  { key: "metal", label: "Metal waste (kg)", co2: 2.1 },
] as const;

export function WasteCalculator() {
  const [vals, setVals] = useState<Record<string, string>>({
    plastic: "4",
    paper: "3",
    organic: "6",
    metal: "1",
  });
  const num = (k: string) => Math.max(0, Number(vals[k] ?? 0) || 0);
  const total = FIELDS.reduce((a, f) => a + num(f.key), 0);
  const recyclable = num("plastic") + num("paper") + num("metal");
  const compostable = num("organic");
  const co2 = FIELDS.reduce((a, f) => a + num(f.key) * f.co2, 0);

  const barData = FIELDS.map((f) => ({ name: f.label.split(" ")[0], kg: num(f.key) }));
  const pieData = [
    { name: "Recyclable", value: recyclable },
    { name: "Compostable", value: compostable },
  ];
  const colors = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)"];

  return (
    <section id="calculator" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Waste calculator"
          title="Measure your weekly waste footprint"
          sub="Enter your household waste and see how much can be recovered."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-3xl p-6">
            <div className="flex items-center gap-2 font-semibold">
              <CalcIcon className="size-5 text-primary" /> Your waste
            </div>
            <div className="mt-5 grid gap-4">
              {FIELDS.map((f) => (
                <label key={f.key} className="grid gap-1.5 text-sm">
                  <span className="text-muted-foreground">{f.label}</span>
                  <input
                    type="number"
                    min={0}
                    value={vals[f.key]}
                    onChange={(e) => setVals((v) => ({ ...v, [f.key]: e.target.value }))}
                    className="rounded-xl border border-input bg-card px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </label>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["Total waste", `${total.toFixed(1)} kg`],
                ["Recyclable", `${recyclable.toFixed(1)} kg`],
                ["Compostable", `${compostable.toFixed(1)} kg`],
                ["CO₂ saved", `${co2.toFixed(1)} kg`],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-accent px-4 py-3 text-accent-foreground">
                  <p className="text-xs">{k}</p>
                  <p className="font-display text-lg font-bold">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass grid gap-6 rounded-3xl p-6 sm:grid-cols-2">
            <div className="h-64">
              <p className="mb-2 text-sm font-medium">Waste by type</p>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} width={28} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      color: "var(--card-foreground)",
                    }}
                  />
                  <Bar dataKey="kg" radius={[8, 8, 0, 0]}>
                    {barData.map((_, i) => (
                      <Cell key={i} fill={colors[i % colors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="h-64">
              <p className="mb-2 text-sm font-medium">Recovery split</p>
              <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" innerRadius={45} outerRadius={75} paddingAngle={4}>
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={colors[i]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      color: "var(--card-foreground)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1600, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient-eco">
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  { icon: TreePine, label: "Trees Saved", to: 1240, suffix: "" },
  { icon: Recycle, label: "Plastic Recycled", to: 8600, suffix: " kg" },
  { icon: Zap, label: "Energy Conserved", to: 15400, suffix: " kWh" },
  { icon: Cloud, label: "Carbon Emissions Reduced", to: 9200, suffix: " kg" },
  { icon: Droplets, label: "Water Saved", to: 47000, suffix: " L" },
];

export function Dashboard() {
  return (
    <section id="dashboard" className="section-pad">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Sustainability dashboard"
          title="Impact of the R5 model in our pilot"
          sub="Estimated results from one year of R5 practice across 500 households."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-3xl p-6"
            >
              <s.icon className="size-7 text-primary" />
              <div className="mt-4">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
