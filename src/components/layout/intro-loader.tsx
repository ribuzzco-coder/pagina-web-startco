export function IntroLoader({ pending = false }: { pending?: boolean }) {
  return (
    <div className={pending ? "rb-screen rb-screen-pending" : "rb-screen"} aria-hidden={!pending} role={pending ? "status" : undefined}>
      <span className="rb-screen-mark" />
      {pending && <span className="sr-only">Cargando página</span>}
    </div>
  );
}
