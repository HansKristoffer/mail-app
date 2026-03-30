/**
 * OpenClaw agent provider types.
 *
 * OpenClaw CLI (`openclaw agent --json`) returns a structured JSON response.
 * These types model both the provider configuration and the CLI output shape.
 */

// --- Provider configuration (passed from settings) ---

export interface OpenClawProviderConfig {
  enabled: boolean;
  gatewayUrl?: string;
  gatewayToken?: string;
}

// --- CLI response shape (`openclaw agent --json`) ---

export interface OpenClawAgentPayload {
  text: string | null;
  mediaUrl: string | null;
}

export interface OpenClawAgentResult {
  payloads?: OpenClawAgentPayload[];
  meta?: {
    durationMs: number;
    agentMeta?: {
      sessionId: string;
      provider: string;
      model: string;
      usage?: {
        input: number;
        output: number;
      };
    };
  };
}

export interface OpenClawAgentResponse {
  runId: string;
  status: "ok" | "error" | string;
  summary: string;
  result?: OpenClawAgentResult;
}
