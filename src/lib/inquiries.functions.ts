import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const InquirySchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional().or(z.literal("")),
  destination: z.string().max(120).optional().or(z.literal("")),
  travelers: z.coerce.number().int().min(1).max(50).optional(),
  travel_date: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(5).max(2000),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => InquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("inquiries").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      destination: data.destination || null,
      travelers: data.travelers ?? null,
      travel_date: data.travel_date ? data.travel_date : null,
      message: data.message,
    });
    if (error) {
      console.error("inquiry insert failed", error);
      throw new Error("Could not save inquiry. Please try again.");
    }
    return { ok: true };
  });
