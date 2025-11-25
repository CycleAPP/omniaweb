'use client';

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  initialContactState,
  submitContact,
  type ContactFormState,
} from "@/app/actions/contact";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Enviando..." : "Enviar mensaje"}
    </Button>
  );
}

export function LeadForm({ className }: { className?: string }) {
  const [state, formAction] = useActionState<ContactFormState, FormData>(
    submitContact,
    initialContactState,
  );

  return (
    <form
      action={formAction}
      className={cn(
        "space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_30px_100px_-60px_rgba(0,0,0,0.9)]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/5 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-white/5 before:opacity-60",
        "relative overflow-hidden",
        className,
      )}
    >
      <div className="relative space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          Contacto inmediato
        </p>
        <h3 className="text-xl font-semibold text-zinc-100">
          Agenda tu auditoría gratuita
        </h3>
        <p className="text-sm text-zinc-400">
          Cuéntanos en qué punto estás. Respuesta en menos de 15 minutos hábiles.
        </p>
      </div>

      <div className="relative space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm text-zinc-300" htmlFor="name">
              Nombre completo
            </label>
            <Input id="name" name="name" placeholder="Andrea Martínez" required />
            {state.errors?.name && (
              <p className="text-xs text-red-400">{state.errors.name}</p>
            )}
          </div>
          <div className="space-y-1">
            <label className="text-sm text-zinc-300" htmlFor="company">
              Empresa
            </label>
            <Input id="company" name="company" placeholder="Omnia Technologies" required />
            {state.errors?.company && (
              <p className="text-xs text-red-400">{state.errors.company}</p>
            )}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm text-zinc-300" htmlFor="email">
              Email corporativo
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="cto@empresa.com"
              required
            />
            {state.errors?.email && (
              <p className="text-xs text-red-400">{state.errors.email}</p>
            )}
          </div>
          <div className="space-y-1">
            <label className="text-sm text-zinc-300" htmlFor="phone">
              Teléfono
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+52 55 1234 5678"
              required
            />
            {state.errors?.phone && (
              <p className="text-xs text-red-400">{state.errors.phone}</p>
            )}
          </div>
        </div>
      </div>

      {state.message && (
        <div
          className={cn(
            "rounded-xl border px-4 py-3 text-sm backdrop-blur",
            state.success
              ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-100"
              : "border-red-400/40 bg-red-500/10 text-red-100",
          )}
        >
          {state.message}
        </div>
      )}

      <SubmitButton />

      <p className="text-[11px] text-zinc-500">
        Al enviar aceptas recibir comunicación segura por correo o teléfono. Nunca
        compartimos tus datos.
      </p>
    </form>
  );
}
