import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Slot />
    </main>
  );
});
