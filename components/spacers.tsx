function VerticalSpacer1() {
  return (
    <div className="row-start-1 col-start-2 row-span-3 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden"></div>
  );
}

function VerticalSpacer2() {
  return (
    <div className="row-start-1 col-start-4 row-span-3 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden"></div>
  );
}

function HorizontalSpacer() {
  return (
    <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/5"></div>
  );
}

export { VerticalSpacer1, VerticalSpacer2, HorizontalSpacer };
