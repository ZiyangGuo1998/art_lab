"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";

const phoneNumber = "18810671967";
const earliestVisitHour = 10;
const latestVisitHour = 18;
const leadHours = 2;

function formatDateValue(date: Date) {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function formatHourValue(hour: number) {
  return `${String(hour).padStart(2, "0")}:00`;
}

function getInitialVisitSlot() {
  const now = new Date();
  const target = new Date(now);
  target.setHours(target.getHours() + leadHours);

  if (target.getMinutes() > 0 || target.getSeconds() > 0 || target.getMilliseconds() > 0) {
    target.setHours(target.getHours() + 1, 0, 0, 0);
  }

  const targetHour = target.getHours();

  if (!isSameDay(now, target) || targetHour > latestVisitHour || now.getHours() >= latestVisitHour) {
    return {
      date: formatDateValue(addDays(now, 1)),
      time: formatHourValue(earliestVisitHour),
    };
  }

  return {
    date: formatDateValue(target),
    time: formatHourValue(Math.max(targetHour, earliestVisitHour)),
  };
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function ExpectedVisitTime() {
  const todayValue = useMemo(() => formatDateValue(new Date()), []);
  const relativeDays = useMemo(
    () => [
      { label: "今天", value: todayValue },
      { label: "明天", value: formatDateValue(addDays(new Date(), 1)) },
      { label: "后天", value: formatDateValue(addDays(new Date(), 2)) },
    ],
    [todayValue],
  );
  const initialVisitSlot = useMemo(() => getInitialVisitSlot(), []);
  const [visitDate, setVisitDate] = useState(initialVisitSlot.date);
  const [visitTime, setVisitTime] = useState(initialVisitSlot.time);

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
        <div className="grid grid-cols-2 items-start gap-3 max-[560px]:grid-cols-1">
          <div className="grid gap-1.5">
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
            <div className="flex flex-wrap gap-2" aria-label="快速选择期望日期">
              {relativeDays.map((day) => (
                <button
                  className={`border px-3 py-1 text-[.74rem] font-black text-[var(--coral)] transition hover:border-[var(--coral)] hover:bg-[rgba(255,87,79,.12)] ${
                    visitDate === day.value
                      ? "border-[var(--coral)] bg-[rgba(255,87,79,.14)]"
                      : "border-[rgba(255,87,79,.38)] bg-[rgba(255,250,242,.65)]"
                  }`}
                  key={day.value}
                  type="button"
                  onClick={() => setVisitDate(day.value)}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>

          <label className="grid gap-1.5 text-[.82rem] font-bold text-[rgba(31,29,45,.7)]">
            期望时间
            <input
              className="min-h-11 w-full border border-[rgba(31,29,45,.22)] bg-[rgba(255,250,242,.72)] px-3 text-[1rem] font-bold text-[var(--ink)] outline-none transition focus:border-[var(--coral)]"
              max="18:00"
              min="10:00"
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
