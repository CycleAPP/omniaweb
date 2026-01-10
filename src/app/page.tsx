'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  PhoneCall,
  Radar,
  Shield,
  Sparkles,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import teamPhoto from "./new-team-photo.jpeg";
import adrianaPhoto from "./adriana.jpeg";

const threatData = [
  { time: "09:00", blocked: 12 },
  { time: "11:00", blocked: 28 },
  { time: "13:00", blocked: 34 },
  { time: "15:00", blocked: 52 },
  { time: "17:00", blocked: 61 },
  { time: "19:00", blocked: 74 },
];

const efficiencyData = [
  { area: "Finanzas", saved: 120, manual: 40 },
  { area: "Operaciones", saved: 160, manual: 55 },
  { area: "Soporte", saved: 95, manual: 30 },
  { area: "Ventas", saved: 110, manual: 45 },
];

const services = [
  {
    name: "Pentesting Automatizado",
    level: "Crítico",
    time: "72 horas",
  },
  {
    name: "Bots de Atención",
    level: "Alto",
    time: "48 horas",
  },
  {
    name: "Firewall IA",
    level: "Máximo",
    time: "24 horas",
  },
];

const trustLogos = [
  "Lumina",
  "Ciklo",
  "Fintech",
  "Retail",
  "Logística",
  "Salud",
  "Energía",
  "Gobierno",
];

const LogoMark = () => (
  <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-100 backdrop-blur">
    <div className="relative flex h-10 w-10 items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[var(--accent)]/20 blur-md" />
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0f1115]">
        <Shield className="h-5 w-5 text-[var(--accent)]" />
      </div>
    </div>
    <div className="leading-tight">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">Omnia</p>
      <p className="text-sm font-semibold text-zinc-50">Automate & Secure</p>
    </div>
  </div>
);

function LineTooltip({
  active,
  payload,
  label,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-xl border border-white/10 bg-[#0f1115]/90 px-3 py-2 text-xs text-zinc-100 shadow-lg backdrop-blur">
      <p className="text-[var(--accent)]">{label} hrs</p>
      <p className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
        Eventos bloqueados: <strong>{payload[0]?.value}</strong>
      </p>
      <p className="text-[10px] text-zinc-400">Demo interna con datos sanitizados</p>
    </div>
  );
}

function BarTooltip({
  active,
  payload,
  label,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  if (!active || !payload || !payload.length) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const manual = payload.find((p: any) => p.dataKey === "manual");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saved = payload.find((p: any) => p.dataKey === "saved");

  return (
    <div className="rounded-xl border border-white/10 bg-[#0f1115]/90 px-3 py-2 text-xs text-zinc-100 shadow-lg backdrop-blur">
      <p className="font-semibold text-[var(--accent)]">{label}</p>
      <p className="flex items-center gap-2 text-zinc-300">
        <span className="h-2 w-2 rounded-full bg-zinc-300" />
        Manual: <strong>{manual?.value} h</strong>
      </p>
      <p className="flex items-center gap-2 text-zinc-300">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
        Automatizado: <strong>{saved?.value} h</strong>
      </p>
      <p className="text-[10px] text-zinc-400">Laboratorio Omnia con flujos reales</p>
    </div>
  );
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,228,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(65,243,197,0.14),transparent_40%)]" />
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[var(--accent)]/15 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[var(--accent-strong)]/15 blur-[110px]" />
      </div>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-12 md:px-10 md:pt-16">
        <div className="flex justify-between">
          <LogoMark />
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur md:flex">
            <Lock className="h-4 w-4 text-[var(--accent)]" />
            Transparencia y respuesta en minutos
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[1.25fr,0.9fr] lg:items-center"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              <Sparkles className="h-4 w-4 text-[var(--accent)]" />
              <span>Cyberpunk Clean / Enterprise Dark Mode</span>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Omnia | México
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-zinc-50 md:text-5xl">
                Automatización inteligente. Seguridad sin fricción.
              </h1>
              <p className="max-w-2xl text-lg text-zinc-400">
                Operaciones visibles, playbooks rápidos y cobertura 24/7 para PyMEs y corporativos.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <a href="#contacto" className="flex items-center gap-2">
                  Agendar Auditoría Gratuita
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#historia" className="flex items-center gap-2">
                  Ver metodología
                  <Sparkles className="h-4 w-4" />
                </a>
              </Button>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Shield className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-200">Detección en tiempo real</p>
                  <p>+99.3% eventos bloqueados</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {trustLogos.map((logo) => (
                <span
                  key={logo}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.15em] text-zinc-400 backdrop-blur"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)]"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                  Visibilidad 24/7
                </p>
                <h3 className="text-xl font-semibold text-zinc-50">
                  Centro de Operaciones Omnia
                </h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Radar className="h-5 w-5 text-[var(--accent)]" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Ataques prevenidos", value: "2,431", change: "+18% semana" },
                { label: "Tiempos de respuesta", value: "2.8m", change: "-32% SLA" },
                { label: "Procesos automatizados", value: "37", change: "+6 nuevos" },
                { label: "Supervisión IA", value: "Activa", change: "Capa dual" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 px-4 py-3"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {item.label}
                  </p>
                  <p className="text-xl font-semibold text-zinc-50">{item.value}</p>
                  <p className="text-xs text-[var(--accent)]">{item.change}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Evidencia en vivo
            </p>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-zinc-50">
                Dashboard táctico: prueba de valor en minutos
              </h2>
              <div className="hidden items-center gap-2 text-sm text-zinc-400 md:flex">
                <Lock className="h-4 w-4 text-[var(--accent)]" />
                Cifrado extremo a extremo
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader className="flex items-center justify-between">
                <div>
                  <CardTitle>Threat Monitor</CardTitle>
                  <CardDescription>
                    Ataques prevenidos en tiempo real con priorización inteligente (demo).
                  </CardDescription>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                  Actualizando
                </span>
              </CardHeader>
              <CardContent className="h-[260px]">
                {isMounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={threatData} margin={{ left: 0, right: 0, bottom: 10 }}>
                      <defs>
                        <linearGradient id="lineGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.6} />
                          <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.08)" />
                      <XAxis dataKey="time" stroke="#71717a" tickLine={false} axisLine={false} />
                      <YAxis stroke="#71717a" tickLine={false} axisLine={false} />
                      <Tooltip
                        content={<LineTooltip />}
                        cursor={{ stroke: "var(--accent)", strokeDasharray: "3 3" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="blocked"
                        stroke="var(--accent)"
                        strokeWidth={3}
                        dot={{ r: 4, fill: "var(--accent-strong)" }}
                        activeDot={{ r: 7, fill: "var(--accent-strong)" }}
                        fill="url(#lineGlow)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full w-full rounded-xl border border-white/5 bg-white/5" />
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex items-center justify-between">
                <div>
                  <CardTitle>Escudo activo</CardTitle>
                  <CardDescription>IA + analistas senior monitoreando cada capa.</CardDescription>
                </div>
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute inset-0 rounded-full bg-[var(--accent)]/20 blur-xl"
                  />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Shield className="h-7 w-7 text-[var(--accent)]" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Cobertura 360°: nube, endpoints, identidad, apps.
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Playbooks automáticos con evidencia forense.
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Cumplimiento continuo ISO 27001 & SOC2-ready.
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader className="flex items-center justify-between">
                <div>
                  <CardTitle>Horas ahorradas vs procesos manuales</CardTitle>
                  <CardDescription>
                    Automatizaciones con trazabilidad y acceso por roles (demo interna).
                  </CardDescription>
                </div>
                <div className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs text-[var(--accent)]">
                  Ahorro promedio 63%
                </div>
              </CardHeader>
              <CardContent className="h-[260px]">
                {isMounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={efficiencyData} margin={{ left: 0, right: 0 }}>
                      <defs>
                        <linearGradient id="barSaved" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent-strong)" stopOpacity={0.9} />
                          <stop offset="100%" stopColor="var(--accent)" stopOpacity={0.6} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.08)" />
                      <XAxis dataKey="area" stroke="#71717a" tickLine={false} axisLine={false} />
                      <YAxis stroke="#71717a" tickLine={false} axisLine={false} />
                      <Tooltip content={<BarTooltip />} cursor={{ fill: "rgba(34,228,255,0.06)" }} />
                      <Bar
                        dataKey="manual"
                        fill="rgba(255,255,255,0.18)"
                        radius={[10, 10, 0, 0]}
                        maxBarSize={40}
                      />
                      <Bar
                        dataKey="saved"
                        fill="url(#barSaved)"
                        radius={[10, 10, 0, 0]}
                        maxBarSize={40}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full w-full rounded-xl border border-white/5 bg-white/5" />
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Portafolio táctico
            </p>
            <h2 className="text-2xl font-semibold text-zinc-50">Servicios Omnia</h2>
            <p className="text-sm text-zinc-400">
              Capas pensadas para PyMEs y corporativos: rápida implementación, métricas claras.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Servicio</TableHead>
                  <TableHead>Nivel de protección</TableHead>
                  <TableHead>Tiempo de implementación</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.name}>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell>
                      <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs text-[var(--accent)]">
                        {service.level}
                      </span>
                    </TableCell>
                    <TableCell className="text-zinc-300">{service.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="space-y-3"
            >
              {[
                {
                  title: "¿Por qué inició Omnia?",
                  content:
                    "Surgimos tras contener un ransomware real: priorizamos visibilidad, control de acceso y respuesta orquestada.",
                },
                {
                  title: "¿Cómo trabajamos?",
                  content:
                    "Kickoff de 45 minutos, hardening inicial y monitoreo activo en menos de 24 horas con panel unificado.",
                },
                {
                  title: "¿Qué entregamos?",
                  content:
                    "Bots, firewalls IA y playbooks listos; accesos por rol, auditoría continua y métricas claras para CTO y SecOps.",
                },
              ].map((item, idx) => (
                <AccordionItem key={item.title} value={`item-${idx + 1}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section
          id="historia"
          className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-[1.2fr,0.8fr] lg:p-10"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Cómo inició Omnia
            </p>
            <h3 className="text-2xl font-semibold text-zinc-50">
              De un apagón masivo a un stack de resiliencia.
            </h3>
            <p className="text-sm text-zinc-300">
              Omnia nació al contener un ransomware que apagó varias plantas en el Bajío. Creamos
              playbooks automáticos y autenticación fuerte para recuperarlas en horas, no semanas.
            </p>
            <p className="text-sm text-zinc-300">
              Hoy acompañamos a Lumina y Ciklo para blindar servicios críticos, sincronizar
              identidades y automatizar soporte con IA, siempre con evidencias y auditoría continua.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contacto" className="flex items-center gap-2">
                  Hablar con ingeniería
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contacto" className="flex items-center gap-2">
                  Descargar kit de respuesta
                  <Shield className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-3">
            {[
              {
                title: "Centro de mando híbrido",
                desc: "Operamos en nube y on-prem con telemetría lista para tus SOC y SIEM.",
              },
              {
                title: "Integraciones Lumina & Ciklo",
                desc: "Provisionamos bots, identidades y firewalls IA para sus equipos en 48 horas.",
              },
              {
                title: "Equipo de campo",
                desc: "Ingenieros que se sientan contigo: observabilidad, hardening y playbooks listos.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10 p-4"
              >
                <p className="text-sm font-semibold text-zinc-100">{item.title}</p>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="equipo"
          className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:p-10"
        >
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Equipo</p>
            <h3 className="text-2xl font-semibold text-zinc-50">Equipo directivo</h3>
            <p className="text-sm text-zinc-400">Perfil ejecutivo, acceso directo.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mx-auto h-48 w-36 overflow-hidden rounded-full border border-white/10 bg-white/5 md:h-52 md:w-44">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--accent)]/20 via-white/10 to-[var(--accent-strong)]/20 text-sm text-zinc-200">
                  Foto próxima
                </div>
              </div>
              <div className="space-y-1 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  Director Comercial
                </p>
                <p className="text-lg font-semibold text-zinc-100">Jose Manuel Garcia</p>
                <p className="text-sm text-zinc-400">(+52) 55 1302 9803</p>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mx-auto h-48 w-36 overflow-hidden rounded-full border border-white/10 bg-white/5 md:h-52 md:w-44">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
                <Image
                  src={teamPhoto}
                  alt="Mauricio Robledo, Director Operativo"
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="space-y-1 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  Director Operativo
                </p>
                <p className="text-lg font-semibold text-zinc-100">Mauricio Robledo</p>
                <p className="text-sm text-zinc-400">(+52) 55 7333 0459</p>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 md:col-span-2">
              <div className="mx-auto h-48 w-36 overflow-hidden rounded-full border border-white/10 bg-white/5 md:h-52 md:w-44">
                <Image
                  src={adrianaPhoto}
                  alt="Adriana Fonseca, Directora de IT"
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="space-y-1 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  Directora de IT
                </p>
                <p className="text-lg font-semibold text-zinc-100">Adriana Fonseca</p>
                <p className="text-sm text-zinc-400">(+52) 55 7499 0978</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 backdrop-blur-xl lg:grid-cols-2 lg:p-10"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                Contacto & Footer
              </p>
              <h3 className="text-2xl font-semibold text-zinc-50">
                Unimos automatización + ciberseguridad con transparencia radical.
              </h3>
              <p className="text-sm text-zinc-400">
                xpyz92@gmail.com | 5513029803 | CDMX
              </p>
            </div>

            <div className="grid gap-3">
              {[
                {
                  title: "Respuesta en minutos",
                  desc: "Mesa de ayuda con especialistas 24/7 y SLA público.",
                  icon: PhoneCall,
                },
                {
                  title: "Arquitectura Zero Trust",
                  desc: "Autenticación fuerte, microsegmentación y logs listos para auditoría.",
                  icon: Lock,
                },
                {
                  title: "Playbooks accionables",
                  desc: "Cierra brechas rápidamente con flujos de corrección guiados.",
                  icon: CheckCircle2,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <item.icon className="mt-1 h-5 w-5 text-[var(--accent)]" />
                  <div>
                    <p className="font-semibold text-zinc-100">{item.title}</p>
                    <p className="text-sm text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <LeadForm />
        </section>
      </main>
    </div>
  );
}
