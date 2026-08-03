import { motion } from "framer-motion";
import { ArrowDown, Leaf, Recycle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import heroEarth from "@/assets/hero-earth.jpg";
import { ECO_TIPS } from "./data";

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
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            National Children&apos;s Science Congress
          </span>
          <h1 className="mt-5 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            <span className="text-gradient-eco">R5 for Waste Management</span>
            <span className="block text-foreground">
              Smart Solutions for a Sustainable Future
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Transforming Waste into Resources through the Power of Reduce, Reuse, Retrieve,
            Redesign, and Recycle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              animate={{ boxShadow: ["var(--shadow-eco)", "0 0 0 12px transparent"] }}
              transition={{ repeat: Infinity, duration: 2.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-eco px-6 py-3 font-medium text-primary-foreground"
            >
              Explore Project <ArrowDown className="size-4" />
            </motion.a>
            <a
              href="#r5"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-accent"
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
            className="glass overflow-hidden rounded-[2rem] p-2"
          >
            <img
              src={heroEarth}
              alt="Animated illustration of Earth surrounded by recycling symbols and green leaves"
              width={1280}
              height={1024}
              className="w-full rounded-[1.6rem] object-cover"
            />
          </motion.div>
          <Recycle className="absolute -top-5 -left-5 size-14 animate-spin-slow text-primary/70" />
          <Leaf className="absolute -right-3 -bottom-4 size-12 text-leaf" />
        </motion.div>
      </div>
    </section>
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
