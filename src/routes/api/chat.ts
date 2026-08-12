import { createFileRoute } from "@tanstack/react-router";
import { streamText, type ModelMessage } from "ai";
import { createLovableAiGatewayProvider, getLovableAiGatewayRunId } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are Eco Assistant, the official AI assistant for the "R5 for Waste Management" science project (National Children's Science Congress) by students of Sunbeam School, Mau.

Your mission is to educate users about environmental sustainability, waste management and the R5 framework:
1. Reduce 2. Reuse 3. Retrieve 4. Redesign 5. Recycle

Answer in simple, friendly language that students, parents and teachers can understand.

Prioritize: waste segregation, recycling, composting, e-waste, plastic reduction, water conservation, energy saving, and the R5 model.

Keep answers concise but useful. Use short paragraphs or bullet points. Encourage practical environmental actions rather than guilt or fear.

For dangerous waste such as batteries, chemicals, medical waste or other hazardous materials, give safety-focused advice and recommend authorized disposal channels or a certified waste-collection provider.

If a user asks something unrelated to sustainability, politely say: "I'm mainly here to help with eco, sustainability and waste-management questions. Ask me something about the environment!"`;

type ChatRequestBody = { messages?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key, getLovableAiGatewayRunId(request));

        try {
          const result = streamText({
            model: gateway("google/gemini-3.6-flash"),
            system: SYSTEM_PROMPT,
            messages: messages as ModelMessage[],
          });
          return result.toTextStreamResponse();
        } catch (error) {
          const message = error instanceof Error ? error.message : "AI request failed";
          return new Response(message, { status: 500 });
        }
      },
    },
  },
});
