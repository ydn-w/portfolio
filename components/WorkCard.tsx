"use client";

import { useId, useState } from "react";
import type { Work } from "@/data/profile";
import { ArrowUpRight, Chevron } from "./icons";

export default function WorkCard({ work, defaultOpen = false }: { work: Work; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <article className="card work">
      <div className="work__main">
        {work.image && (
          <div className="work__thumb">
            <img src={work.image} alt={`${work.title}のスクリーンショット`} />
          </div>
        )}
        <ul className="work__labels">
          {work.labels.map((l) => (
            <li key={l} className="pill">{l}</li>
          ))}
        </ul>
        <h3 className="work__title">{work.title}</h3>
        {work.description && <p className="work__desc">{work.description}</p>}
        <ul className="work__tech">
          {work.tech.map((t) => (
            <li key={t} className="tech-tag">{t}</li>
          ))}
        </ul>
        <div className="work__actions">
          {work.url && (
            <a href={work.url} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              サイトを見る <ArrowUpRight />
            </a>
          )}
          <button
            type="button"
            className="work__toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "閉じる" : "詳細を見る"}
            <Chevron up={open} />
          </button>
        </div>
      </div>

      <div id={panelId} className="work__details" hidden={!open}>
        <dl>
          {work.details.map((d) => (
            <div key={d.label} className="work__detail-row">
              <dt>{d.label}</dt>
              <dd>{d.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
