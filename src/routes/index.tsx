import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const counter = useSignal(0);

  return (
    <div style={{
      background: '#111827',
      border: '1px solid #1f2937',
      borderRadius: '12px',
      padding: '2rem'
    }}>
      <div style={{
        display: 'inline-block',
        background: '#18b6f6',
        color: '#000',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: 700,
        marginBottom: '1rem'
      }}>
        Framework 10 / 14
      </div>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
        SecureShield Test Website - Qwik / Qwik City
      </h1>
      <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>
        Resumability Engine with Zero Hydration Overhead.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ background: '#030712', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af' }}>Architecture:</span>
          <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#18b6f6' }}>Resumable (QRL Serialized)</span>
        </div>
        <div style={{ background: '#030712', padding: '1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af' }}>Signal State:</span>
          <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{counter.value}</span>
        </div>
      </div>

      <button
        style={{
          background: '#18b6f6',
          color: '#000',
          border: 'none',
          padding: '0.75rem 1.25rem',
          borderRadius: '6px',
          fontWeight: 700,
          cursor: 'pointer',
          marginBottom: '1.5rem'
        }}
        onClick$={() => counter.value++}
      >
        Trigger Resumable Click$
      </button>

      <div style={{
        background: 'rgba(24, 182, 246, 0.1)',
        border: '1px solid rgba(24, 182, 246, 0.4)',
        padding: '1rem',
        borderRadius: '8px'
      }}>
        <h3 style={{ color: '#18b6f6', fontSize: '1rem', marginBottom: '0.25rem' }}>
          🛡️ SecureShield Protection Status
        </h3>
        <p style={{ color: '#9ca3af' }}>
          useVisibleTask$ Hook: <code>src/components/secureshield/provider.tsx</code> runs client watchdog.
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'SecureShield Test Website - Qwik / Qwik City',
};
