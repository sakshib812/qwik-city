// src/components/secureshield/provider.tsx — Qwik Resumable Security Provider
import { component$, Slot, useContextProvider, createContextId, useVisibleTask$, useStore } from '@builder.io/qwik';
import { SecureShield, SecurityAuditReport } from '@secureshield/web';

export interface SecurityState {
    isReady: boolean;
    trustScore: number;
    report: (SecurityAuditReport & { trustScore?: number }) | null;
}

export const SecurityContext = createContextId<SecurityState>('secureshield.context');

export const SecurityProvider = component$(() => {
    const state = useStore<SecurityState>({
        isReady: false,
        trustScore: 100,
        report: null,
    });

    useContextProvider(SecurityContext, state);

    // ⚡ Non-blocking client-only execution maintaining full Qwik resumability
    useVisibleTask$(async () => {
        try {
            const sdk = await SecureShield.init({
                headerKey: 'enc:v1:bf004452ea9f2170fa2f0d75:b0d33433ad98d9648c17bafe4a45cdde:07ff537a3441f0059e1134d902233f',
                encryptionKey: 'U1MEOYmR2f9ZePypUKvFtCGC7xHuXcJKsukRKEeHjYQ=',
                initializationKey: 'INIT_KyMK8WBrQN-PYVrrjDiFbOd9LWmIDjx2',
                tenantId: 'TEN-SAKSHI-8743',
                appId: 'ast_web_976311',
                serverUrl: 'https://radiator-waving-cahoots.ngrok-free.dev/api/v1/telemetry/ingest',
                environment: 'production',            // ⚙️ Change environment: 'production' | 'staging' | 'sandbox'
                skipHandshake: true,
                enableRuntimeIntegrityWatchdog: true,
                enableStorageLeakScrubber: false,      // Kept false on initial boot
                enablePrototypeFreezing: false,
                enableDomLockoutOverlay: false,        // 🚀 Set false in dev to prevent black screen
                blockRedirectUrl: null,

                onTamperDetected: (apiName: string, reason?: string) => {
                    console.warn(`[SecureShield Tamper Alert] ${apiName}: ${reason}`);
                }
            } as any);

            (window as any).__ss_sdk_instance = sdk;

            setTimeout(async () => {
                try {
                    const report = await sdk.evaluateSecurityState();
                    state.report = report;
                    state.trustScore = report.trustScore ?? 100;
                    state.isReady = true;
                    console.log('[SecureShield] Qwik Protected ✅. Score:', report.trustScore);
                } catch (e) {
                    console.warn('[SecureShield] Background evaluation notice:', e);
                }
            }, 50);
        } catch (e) {
            console.error('[SecureShield] Qwik Init Error:', e);
        }
    });

    return <Slot />;
});