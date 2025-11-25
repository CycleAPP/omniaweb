'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

export const Table = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) => (
  <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
    <table
      className={cn("w-full caption-bottom text-sm text-zinc-200", className)}
      {...props}
    />
  </div>
);

Table.displayName = "Table";

export const TableHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={cn("bg-white/5 text-left", className)} {...props} />
);

TableHeader.displayName = "TableHeader";

export const TableBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={cn("divide-y divide-white/5", className)} {...props} />
);

TableBody.displayName = "TableBody";

export const TableRow = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr
    className={cn(
      "transition hover:bg-white/5 data-[state=selected]:bg-white/10",
      className,
    )}
    {...props}
  />
);

TableRow.displayName = "TableRow";

export const TableHead = ({
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th
    className={cn(
      "px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-400",
      className,
    )}
    {...props}
  />
);

TableHead.displayName = "TableHead";

export const TableCell = ({
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className={cn("px-6 py-4 align-middle text-zinc-100", className)} {...props} />
);

TableCell.displayName = "TableCell";

export const TableCaption = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableCaptionElement>) => (
  <caption
    className={cn("mt-4 text-sm text-zinc-500", className)}
    {...props}
  />
);

TableCaption.displayName = "TableCaption";
