import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are a friendly and knowledgeable support assistant for The Founder Academy - a platform that helps ambitious professionals unlock their full potential.

About The Founder Academy:
- Built by a collective of founders, each proven in their niche
- We develop performance, income, mindset, and life together
- We help people think sharper, act with confidence, and build careers that compound

Our Services:
1. Sales Training Programs:
   - SDR Program (Sales Development Representative) - Master prospecting, cold calling, and lead generation
   - BDM Program (Business Development Manager) - Excel in business development with our 12-step roadmap
   - AM Program (Account Manager) - Grow accounts, retain clients, and drive revenue

2. Coaching - Personalized 1:1 sessions tailored to career challenges and goals

3. Mentorship - Ongoing support from experienced professionals who've achieved 6-figure success

4. Consulting - Advice on building effective sales processes and business development strategies

5. Financial Planning & Analysis - Understand compensation structures, maximize commissions, build wealth

6. Accountancy & Tax - Complete accounting services including VAT, tax returns, payroll, HMRC compliance

7. Fitness & Wellbeing - Physical fitness, mental clarity, and work-life balance for peak performance

8. Recruitment - Talent acquisition, interview techniques, building high-performing sales teams

9. E-commerce - Online sales strategies, digital marketing, scalable e-commerce businesses

10. Software Development - Custom web applications, mobile apps, and software solutions

Pricing Tiers (general guidance):
- Starter packages from £199-£399/month
- Pro packages from £399-£799/month  
- Elite packages from £699-£1,299/month

Key Value Propositions:
- Proven track record: Built million-pound pipelines and led top-performing teams
- Practical roadmaps: No theory overload - actionable frameworks for fast results
- Invested in your success: We succeed when you succeed

To get started or learn more, visitors can:
- Request a call via the Request Call page
- Explore the free Resource Library
- Check out the About page

Be helpful, concise, and encouraging. If you don't know something specific, suggest they request a call for personalized guidance. Always be professional but warm.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "Failed to get AI response" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response back to client");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Support chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
