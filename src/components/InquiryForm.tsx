import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { submitInquiry } from "@/lib/inquiries.functions";
import { Send } from "lucide-react";

const initial = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  travelers: "",
  travel_date: "",
  message: "",
};

export function InquiryForm() {
  const submit = useServerFn(submitInquiry);
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submit({
        data: {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          destination: form.destination.trim(),
          travelers: form.travelers ? Number(form.travelers) : undefined,
          travel_date: form.travel_date,
          message: form.message.trim(),
        },
      });
      toast.success("Query sent! Our team will reach out within 24 hours.");
      setForm(initial);
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send your query. Please try again or call +91 80108 80991.");
    } finally {
      setLoading(false);
    }
  };

  const input =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input className={input} name="name" placeholder="Full name *" value={form.name} onChange={onChange} required />
      <input className={input} name="email" type="email" placeholder="Email *" value={form.email} onChange={onChange} required />
      <input className={input} name="phone" placeholder="Phone (WhatsApp preferred)" value={form.phone} onChange={onChange} />
      <select className={input} name="destination" value={form.destination} onChange={onChange}>
        <option value="">Pick a destination</option>
        <option>Everest Base Camp</option>
        <option>Spiti Valley</option>
        <option>Ladakh</option>
        <option>Bhutan</option>
        <option>Kashmir Great Lakes</option>
        <option>Kedarnath</option>
        <option>Not sure yet — surprise me</option>
      </select>
      <input className={input} name="travelers" type="number" min={1} max={50} placeholder="Travelers" value={form.travelers} onChange={onChange} />
      <input className={input} name="travel_date" type="date" value={form.travel_date} onChange={onChange} />
      <textarea
        className={`${input} md:col-span-2 min-h-32 resize-y`}
        name="message"
        placeholder="Tell us about your dream trip — dates, fitness level, anything special *"
        value={form.message}
        onChange={onChange}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-cta)] bg-secondary px-8 py-4 text-base font-bold uppercase tracking-wide text-secondary-foreground shadow-[var(--shadow-cta)] transition hover:translate-y-[-1px] hover:brightness-105 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundImage: "var(--gradient-cta)" }}
      >
        <Send className="size-4" />
        {loading ? "Sending..." : "Send my query"}
      </button>
    </form>
  );
}
