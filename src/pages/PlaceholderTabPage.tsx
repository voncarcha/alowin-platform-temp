interface PlaceholderTabPageProps {
  title: string;
}

export default function PlaceholderTabPage({ title }: PlaceholderTabPageProps) {
  return (
    <main className="mx-auto mt-[50px] max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <section className="mt-4 rounded-[28px] border border-border bg-white px-6 py-16 text-center shadow-sm sm:px-10">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-tertiary">
            Navigation Enabled
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base text-secondary sm:text-lg">
            This section is ready in navigation. Content will be added here next.
          </p>
        </div>
      </section>
    </main>
  );
}
