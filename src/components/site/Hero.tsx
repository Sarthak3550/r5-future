import { motion } from "framer-motion";
import { ArrowDown, Leaf, Recycle, Sparkles, TrendingDown, Scale } from "lucide-react";
import { useEffect, useState } from "react";
import heroEarth from "@/assets/hero-earth.jpg";
import { ECO_TIPS, HYPOTHESIS } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-soft)" }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-xl px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            National Children&apos;s Science Congress
          </span>
          <h1 className="mt-5 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            <span className="text-gradient-eco">R5 for Waste Management</span>
            <span className="block text-foreground">
              Smart Solutions for a Sustainable Future
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {HYPOTHESIS}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#methodology"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-eco px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-eco)] transition-shadow hover:shadow-lg"
            >
              View Research <ArrowDown className="size-4" />
            </motion.a>
            <a
              href="#relevance"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium transition-colors hover:bg-accent"
            >
              <Recycle className="size-4 text-primary" /> The 5 R&apos;s
            </a>
          </div>
          <EcoTip />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="glass overflow-hidden rounded-xl p-2"
          >
            <img
              src={heroEarth}
              alt="Animated illustration of Earth surrounded by recycling symbols and green leaves"
              width={1280}
              height={1024}
              className="w-full rounded-xl object-cover"
            />
          </motion.div>

          <FloatingCard
            className="-top-6 -left-4 sm:-left-10"
            delay={0.4}
            float={-10}
            icon={<TrendingDown className="size-4" />}
            value="−55%"
            label="Landfill waste"
          />
          <FloatingCard
            className="right-0 -bottom-6 sm:-right-8"
            delay={0.6}
            float={12}
            icon={<Scale className="size-4" />}
            value="76 kg"
            label="Waste retrieved"
          />
          <Recycle className="absolute top-1/2 -left-6 size-12 animate-spin-slow text-primary/60" />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  delay,
  float,
  icon,
  value,
  label,
}: {
  className: string;
  delay: number;
  float: number;
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: [0, float, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { repeat: Infinity, duration: 5.5, ease: "easeInOut", delay },
      }}
      className={`glass absolute z-10 flex items-center gap-3 rounded-xl px-4 py-3 ${className}`}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-eco text-primary-foreground">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="font-display text-lg leading-none font-bold text-gradient-eco">{value}</p>
        <p className="mt-1 text-xs text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
}


function EcoTip() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ECO_TIPS.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="glass mt-8 flex items-start gap-3 rounded-2xl px-4 py-3">
      <Leaf className="mt-0.5 size-5 shrink-0 text-primary" />
      <motion.p key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="min-w-0 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">Eco tip: </span>
        {ECO_TIPS[i]}
      </motion.p>
    </div>
  );
}
