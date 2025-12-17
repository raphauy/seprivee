"use client";

import { useState, useCallback } from "react";
import { Container, Typography, Button, Divider, Toast } from "@/components/ui";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/app/actions/contact";

type FormStatus = "idle" | "loading" | "success" | "error";

interface ToastState {
  isVisible: boolean;
  message: string;
  type: "success" | "error";
}

export function ContactForm() {
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({
    threshold: 0.1,
  });
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation({
    threshold: 0.2,
  });
  const t = useTranslation();

  const experienceTypes = [
    { key: "privateDining", label: t.contact.experienceTypes.privateDining },
    { key: "curatedEvent", label: t.contact.experienceTypes.curatedEvent },
    { key: "sushiExperience", label: t.contact.experienceTypes.sushiExperience },
    { key: "cookingClass", label: t.contact.experienceTypes.cookingClass },
    { key: "other", label: t.contact.experienceTypes.other },
  ];

  const guestRanges = [
    { key: "6-10", label: t.contact.guestRanges["6-10"] },
    { key: "11-15", label: t.contact.guestRanges["11-15"] },
    { key: "16-20", label: t.contact.guestRanges["16-20"] },
    { key: "21-30", label: t.contact.guestRanges["21-30"] },
  ];

  const cities = [
    { key: "montevideo", label: t.contact.cities.montevideo },
    { key: "maldonado", label: t.contact.cities.maldonado },
    { key: "other", label: t.contact.cities.other },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    date: "",
    guests: "",
    experienceType: "",
    dietaryRestrictions: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [toast, setToast] = useState<ToastState>({
    isVisible: false,
    message: "",
    type: "success",
  });

  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("idle");
      setToast({
        isVisible: true,
        message: t.contact.form.success,
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        date: "",
        guests: "",
        experienceType: "",
        dietaryRestrictions: "",
        message: "",
      });
    } else {
      setStatus("idle");
      setToast({
        isVisible: true,
        message: t.contact.form.error,
        type: "error",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "error") {
      setStatus("idle");
    }
  };

  return (
    <section className="bg-[var(--color-pearl)] py-24 lg:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <div
            ref={formRef}
            className={cn(
              "transition-all duration-1000",
              formVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <Typography
              variant="tagline"
              className="text-[var(--color-gold)] mb-4"
            >
              {t.contact.form.tagline}
            </Typography>
            <Typography
              variant="h3"
              className="text-[var(--color-carbon)] mb-8"
            >
              {t.contact.form.title}
            </Typography>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-[family-name:var(--font-montserrat)] text-xs tracking-wider uppercase text-[var(--color-carbon)]/60 mb-2"
                >
                  {t.contact.form.fields.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[var(--color-carbon)]/10 focus:border-[var(--color-gold)] outline-none transition-colors font-[family-name:var(--font-inter)] text-[var(--color-carbon)]"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-[family-name:var(--font-montserrat)] text-xs tracking-wider uppercase text-[var(--color-carbon)]/60 mb-2"
                  >
                    {t.contact.form.fields.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--color-carbon)]/10 focus:border-[var(--color-gold)] outline-none transition-colors font-[family-name:var(--font-inter)] text-[var(--color-carbon)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-[family-name:var(--font-montserrat)] text-xs tracking-wider uppercase text-[var(--color-carbon)]/60 mb-2"
                  >
                    {t.contact.form.fields.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--color-carbon)]/10 focus:border-[var(--color-gold)] outline-none transition-colors font-[family-name:var(--font-inter)] text-[var(--color-carbon)]"
                  />
                </div>
              </div>

              {/* City & Date */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="city"
                    className="block font-[family-name:var(--font-montserrat)] text-xs tracking-wider uppercase text-[var(--color-carbon)]/60 mb-2"
                  >
                    {t.contact.form.fields.city} *
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--color-carbon)]/10 focus:border-[var(--color-gold)] outline-none transition-colors font-[family-name:var(--font-inter)] text-[var(--color-carbon)]"
                  >
                    <option value="">{t.contact.form.fields.cityPlaceholder}</option>
                    {cities.map((city) => (
                      <option key={city.key} value={city.label}>
                        {city.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block font-[family-name:var(--font-montserrat)] text-xs tracking-wider uppercase text-[var(--color-carbon)]/60 mb-2"
                  >
                    {t.contact.form.fields.date}
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--color-carbon)]/10 focus:border-[var(--color-gold)] outline-none transition-colors font-[family-name:var(--font-inter)] text-[var(--color-carbon)]"
                  />
                </div>
              </div>

              {/* Guests & Experience Type */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="guests"
                    className="block font-[family-name:var(--font-montserrat)] text-xs tracking-wider uppercase text-[var(--color-carbon)]/60 mb-2"
                  >
                    {t.contact.form.fields.guests} *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--color-carbon)]/10 focus:border-[var(--color-gold)] outline-none transition-colors font-[family-name:var(--font-inter)] text-[var(--color-carbon)]"
                  >
                    <option value="">{t.contact.form.fields.guestsPlaceholder}</option>
                    {guestRanges.map((range) => (
                      <option key={range.key} value={range.key}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="experienceType"
                    className="block font-[family-name:var(--font-montserrat)] text-xs tracking-wider uppercase text-[var(--color-carbon)]/60 mb-2"
                  >
                    {t.contact.form.fields.experienceType}
                  </label>
                  <select
                    id="experienceType"
                    name="experienceType"
                    value={formData.experienceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[var(--color-carbon)]/10 focus:border-[var(--color-gold)] outline-none transition-colors font-[family-name:var(--font-inter)] text-[var(--color-carbon)]"
                  >
                    <option value="">{t.contact.form.fields.experienceTypePlaceholder}</option>
                    {experienceTypes.map((type) => (
                      <option key={type.key} value={type.label}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dietary Restrictions */}
              <div>
                <label
                  htmlFor="dietaryRestrictions"
                  className="block font-[family-name:var(--font-montserrat)] text-xs tracking-wider uppercase text-[var(--color-carbon)]/60 mb-2"
                >
                  {t.contact.form.fields.dietary}
                </label>
                <input
                  type="text"
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  placeholder={t.contact.form.fields.dietaryPlaceholder}
                  className="w-full px-4 py-3 bg-white border border-[var(--color-carbon)]/10 focus:border-[var(--color-gold)] outline-none transition-colors font-[family-name:var(--font-inter)] text-[var(--color-carbon)] placeholder:text-[var(--color-carbon)]/30"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-[family-name:var(--font-montserrat)] text-xs tracking-wider uppercase text-[var(--color-carbon)]/60 mb-2"
                >
                  {t.contact.form.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.fields.messagePlaceholder}
                  className="w-full px-4 py-3 bg-white border border-[var(--color-carbon)]/10 focus:border-[var(--color-gold)] outline-none transition-colors font-[family-name:var(--font-inter)] text-[var(--color-carbon)] placeholder:text-[var(--color-carbon)]/30 resize-none"
                />
              </div>

              <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? t.contact.form.submitting : t.contact.form.submit}
                </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            ref={contactRef}
            className={cn(
              "transition-all duration-1000 delay-200",
              contactVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <Typography
              variant="tagline"
              className="text-[var(--color-gold)] mb-4"
            >
              {t.contact.direct.tagline}
            </Typography>
            <Typography
              variant="h3"
              className="text-[var(--color-carbon)] mb-8"
            >
              {t.contact.direct.title}
            </Typography>

            <div className="space-y-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/59895038477"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-[var(--color-carbon)]/10 flex items-center justify-center group-hover:border-[var(--color-gold)] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--color-carbon)] group-hover:text-[var(--color-gold)] transition-colors"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <Typography
                    variant="h4"
                    className="text-[var(--color-carbon)] group-hover:text-[var(--color-gold)] transition-colors"
                  >
                    {t.contact.direct.whatsapp.title}
                  </Typography>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[var(--color-carbon)]/60">
                    {t.contact.direct.whatsapp.number}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[var(--color-carbon)]/40 mt-1">
                    {t.contact.direct.whatsapp.note}
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/seprivee.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-[var(--color-carbon)]/10 flex items-center justify-center group-hover:border-[var(--color-gold)] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--color-carbon)] group-hover:text-[var(--color-gold)] transition-colors"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <Typography
                    variant="h4"
                    className="text-[var(--color-carbon)] group-hover:text-[var(--color-gold)] transition-colors"
                  >
                    {t.contact.direct.instagram.title}
                  </Typography>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[var(--color-carbon)]/60">
                    {t.contact.direct.instagram.handle}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[var(--color-carbon)]/40 mt-1">
                    {t.contact.direct.instagram.note}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@seprivee.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-[var(--color-carbon)]/10 flex items-center justify-center group-hover:border-[var(--color-gold)] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--color-carbon)] group-hover:text-[var(--color-gold)] transition-colors"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <Typography
                    variant="h4"
                    className="text-[var(--color-carbon)] group-hover:text-[var(--color-gold)] transition-colors"
                  >
                    {t.contact.direct.email.title}
                  </Typography>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[var(--color-carbon)]/60">
                    {t.contact.direct.email.address}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[var(--color-carbon)]/40 mt-1">
                    {t.contact.direct.email.note}
                  </p>
                </div>
              </a>
            </div>

            <Divider className="my-10" />

            <div>
              <Typography
                variant="h4"
                className="text-[var(--color-carbon)] mb-4"
              >
                {t.contact.direct.serviceAreas.title}
              </Typography>
              <p className="font-[family-name:var(--font-inter)] text-[var(--color-carbon)]/70">
                {t.contact.direct.serviceAreas.description
                  .replace("{montevideo}", "")
                  .replace("{maldonado}", "")
                  .split("  ")
                  .map((part, i) => (
                    <span key={i}>
                      {part}
                      {i === 0 && <span className="text-[var(--color-gold)]">Montevideo</span>}
                      {i === 1 && <span className="text-[var(--color-gold)]">Maldonado</span>}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </section>
  );
}
