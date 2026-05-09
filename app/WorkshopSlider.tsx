"use client";

import { useRef, useState } from "react";

type Ticket = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  className: string;
};

export function WorkshopSlider({ tickets }: { tickets: Ticket[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const goTo = (step: number) => {
    scrollToIndex((activeIndex + step + tickets.length) % tickets.length);
  };

  return (
    <div className="mt-16 overflow-hidden">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {tickets.map((ticket, index) => (
            <button
              key={ticket.title}
              className={`h-2.5 rounded-none transition-all ${
                index === activeIndex ? "w-12 bg-[var(--yellow)]" : "w-6 bg-[rgba(255,250,242,.28)]"
              }`}
              type="button"
              aria-label={`切换到${ticket.title}`}
              aria-current={index === activeIndex}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            className="grid size-11 place-items-center border border-[rgba(255,250,242,.24)] text-2xl leading-none text-[var(--white)] transition hover:bg-[var(--yellow)] hover:text-[var(--ink)]"
            type="button"
            aria-label="上一个主题"
            onClick={() => goTo(-1)}
          >
            ‹
          </button>
          <button
            className="grid size-11 place-items-center border border-[rgba(255,250,242,.24)] text-2xl leading-none text-[var(--white)] transition hover:bg-[var(--yellow)] hover:text-[var(--ink)]"
            type="button"
            aria-label="下一个主题"
            onClick={() => goTo(1)}
          >
            ›
          </button>
        </div>
      </div>

      <div className="overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex snap-x snap-mandatory gap-4">
          {tickets.map((ticket, index) => (
            <article
              key={ticket.title}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className={`ticket relative flex min-h-[34rem] flex-[0_0_clamp(300px,30vw,500px)] snap-start flex-col overflow-hidden border border-[rgba(31,29,45,.2)] max-[700px]:flex-[0_0_82vw] ${ticket.className}`}
            >
              <img className="h-[clamp(18rem,27vw,30rem)] w-full object-cover" src={ticket.image} alt={ticket.alt} />
              <div className="grid flex-1 grid-rows-[minmax(8.8rem,auto)_auto] content-start gap-5 p-[clamp(1.15rem,2.4vw,1.8rem)]">
                <div className="grid content-start">
                  <small className="font-display uppercase opacity-[.74]">{ticket.eyebrow}</small>
                  <strong className="mt-4 mr-8 block text-[clamp(2rem,3vw,3.45rem)] leading-[.98]">
                    {ticket.title}
                  </strong>
                </div>
                <p className="m-0 mr-8 max-w-[26rem] text-[clamp(1rem,1.35vw,1.12rem)]">{ticket.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
