import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  Moon,
  Sun,
  MessageCircle,
  X,
  Recycle,
  Send,
  Menu,
} from "lucide-react";
import { FAQS } from "./data";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-eco"
    />
  );
}

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1300);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <Recycle className="size-14 animate-spin-slow text-primary" />
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Loading R5
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Particles() {
  const bits = Array.from({ length: 16 }, (_, i) => i);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {bits.map((i) => (
        <span
          key={i}
          className="absolute bottom-[-10vh] text-primary/25"
          style={{
            left: `${(i * 6.3 + 3) % 100}%`,
            fontSize: `${10 + (i % 4) * 6}px`,
            animation: `float-up ${16 + (i % 5) * 5}s linear ${i * 1.4}s infinite`,
          }}
        >
          {i % 2 === 0 ? "🍃" : "♻️"}
        </span>
      ))}
    </div>
  );
}

const LINKS = [
  ["About", "#about"],
  ["R5", "#r5"],
  ["Journey", "#journey"],
  ["Smart", "#smart"],
  ["Gallery", "#gallery"],
  ["Quiz", "#quiz"],
  ["Calculator", "#calculator"],
  ["Team", "#team"],
  ["Contact", "#contact"],
];

export function Nav() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-1 z-40 px-3 pt-2">
      <nav className="glass mx-auto flex max-w-6xl items-center gap-3 rounded-2xl px-4 py-2.5">
        <a href="#top" className="flex min-w-0 items-center gap-2 font-semibold">
          <Recycle className="size-6 shrink-0 text-primary" />
          <span className="truncate font-display text-base">R5</span>
        </a>
        <ul className="ml-auto hidden items-center gap-4 lg:flex">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode"
          className="ml-auto grid size-9 shrink-0 place-items-center rounded-xl border border-border bg-card/60 transition-colors hover:bg-accent lg:ml-2"
        >
          {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="grid size-9 shrink-0 place-items-center rounded-xl border border-border bg-card/60 lg:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-auto mt-2 grid max-w-6xl grid-cols-2 gap-2 rounded-2xl p-4 lg:hidden"
          >
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="glass fixed bottom-6 left-6 z-40 grid size-11 place-items-center rounded-full text-primary"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

type Msg = { from: "bot" | "user"; text: string };

const GREETING: Msg = {
  from: "bot",
  text: "Hi! I'm Eco Assistant 🌱 Ask me anything about waste management, recycling, composting or the R5 model.",
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [msgs, open, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = async (text: string) => {
    const question = text.trim();
    if (!question || loading) return;
    setInput("");
    const history = [...msgs, { from: "user" as const, text: question }];
    setMsgs(history);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history
            .filter((m) => m !== GREETING)
            .map((m) => ({ role: m.from === "user" ? "user" : "assistant", content: m.text })),
        }),
      });

      if (!res.ok || !res.body) {
        const detail = res.status === 429
          ? "I'm getting a lot of questions right now — please try again in a moment."
          : res.status === 402
            ? "The AI service has run out of credits. Please try again later."
            : "Sorry, I couldn't reach the eco knowledge base. Please try again.";
        setMsgs((m) => [...m, { from: "bot", text: detail }]);
        return;
      }

      setMsgs((m) => [...m, { from: "bot", text: "" }]);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMsgs((m) => {
          const next = [...m];
          next[next.length - 1] = { from: "bot", text: acc };
          return next;
        });
      }
    } catch {
      setMsgs((m) => [...m, { from: "bot", text: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Eco Assistant chat"
        className="fixed right-6 bottom-6 z-40 grid size-14 place-items-center rounded-full bg-gradient-eco text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="glass fixed right-6 bottom-24 z-40 flex h-[28rem] w-[min(22rem,calc(100vw-3rem))] flex-col rounded-2xl p-4"
          >
            <p className="font-display text-sm font-semibold">Eco Assistant · R5 helper</p>
            <div className="mt-3 flex-1 space-y-2 overflow-y-auto pr-1 text-sm">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.from === "user"
                      ? "ml-auto w-fit max-w-[85%] rounded-2xl bg-primary px-3 py-2 whitespace-pre-wrap text-primary-foreground"
                      : "w-fit max-w-[90%] rounded-2xl bg-muted px-3 py-2 whitespace-pre-wrap text-foreground"
                  }
                >
                  {m.text}
                </div>
              ))}
              {loading && msgs[msgs.length - 1]?.from === "user" && (
                <div className="w-fit rounded-2xl bg-muted px-3 py-2 text-muted-foreground">Thinking…</div>
              )}
              <div ref={endRef} />
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {FAQS.slice(0, 3).map((f) => (
                <button
                  key={f.q}
                  onClick={() => void send(f.q)}
                  disabled={loading}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent disabled:opacity-50"
                >
                  {f.q}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void send(input);
              }}
              className="mt-2 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask an eco question…"
                className="flex-1 rounded-full border border-border bg-background/60 px-3 py-2 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-eco text-primary-foreground disabled:opacity-50"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

