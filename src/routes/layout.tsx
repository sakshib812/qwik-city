import { component$, Slot } from '@builder.io/qwik';
import { SecurityProvider } from '../components/secureshield/provider';

export default component$(() => {
  return (
    <SecurityProvider>
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Slot />
      </main>
    </SecurityProvider>
  );
});
