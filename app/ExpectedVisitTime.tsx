"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";

const phoneNumber = "18810671967";

function getTodayValue() {
  const today = new Date();
  const offset = today.getTimezoneOffset() * 60000;
  return new Date(today.getTime() - offset).toISOString().slice(0, 10);
}

export function ExpectedVisitTime() {
  const todayValue = useMemo(() => getTodayValue(), []);
  const [visitDate, setVisitDate] = useState(todayValue);
  const [visitTime, setVisitTime] = useState("14:00");

  const message = useMemo(() => {
    if (!visitDate && !visitTime) {
      return "你好，我想预约到店体验。";
    }

    const dateText = visitDate || "待定日期";
    const timeText = visitTime || "待定时间";
    return `你好，我想预约 ${dateText} ${timeText} 到店体验。`;
  }, [visitDate, visitTime]);

  const smsHref = `sms:${phoneNumber}?&body=${encodeURIComponent(message)}`;

  return (
    <div className="mt-4 border-t border-[rgba(31,29,45,.18)] pt-4" aria-label="期望到店时间">
      <div className="mb-3 flex items-center justify-between gap-3">
        <EyebrowText>Expected Visit Time</EyebrowText>
        <span className="h-px flex-1 bg-[rgba(31,29,45,.16)]" />
      </div>

      <div className="grid gap-3">
        <div className="grid grid-cols-2 gap-3 max-[560px]:grid-cols-1">
          <label className="grid gap-1.5 text-[.82rem] font-bold text-[rgba(31,29,45,.7)]">
            期望日期
            <input
              className="min-h-11 w-full border border-[rgba(31,29,45,.22)] bg-[rgba(255,250,242,.72)] px-3 text-[1rem] font-bold text-[var(--ink)] outline-none transition focus:border-[var(--coral)]"
              min={todayValue}
              type="date"
              value={visitDate}
              onChange={(event) => setVisitDate(event.target.value)}
            />
          </label>

          <label className="grid gap-1.5 text-[.82rem] font-bold text-[rgba(31,29,45,.7)]">
            期望时间
            <input
              className="min-h-11 w-full border border-[rgba(31,29,45,.22)] bg-[rgba(255,250,242,.72)] px-3 text-[1rem] font-bold text-[var(--ink)] outline-none transition focus:border-[var(--coral)]"
              type="time"
              value={visitTime}
              onChange={(event) => setVisitTime(event.target.value)}
            />
          </label>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-stretch gap-2 max-[560px]:grid-cols-1">
          <div className="grid content-center border-l-4 border-[var(--yellow)] bg-[rgba(67,168,223,.12)] px-3 py-2">
            <span className="text-[.76rem] font-bold text-[rgba(31,29,45,.56)]">预约内容</span>
            <strong className="text-[.94rem] leading-[1.38]">{message}</strong>
          </div>
          <div className="grid grid-cols-2 gap-2 max-[560px]:grid-cols-2">
            <a
              className="grid min-h-11 place-items-center bg-[var(--ink)] px-4 text-center text-[.88rem] font-black text-[var(--white)] transition hover:bg-[var(--coral)]"
              href={smsHref}
            >
              短信发送
            </a>
            <a
              className="grid min-h-11 place-items-center bg-[var(--yellow)] px-4 text-center text-[.88rem] font-black text-[var(--ink)] transition hover:bg-[var(--coral)] hover:text-[var(--white)]"
              href={`tel:${phoneNumber}`}
            >
              电话确认
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function EyebrowText({ children }: { children: ReactNode }) {
  return <span className="font-display text-[.74rem] uppercase tracking-[.08em] text-[var(--coral)]">{children}</span>;
}
