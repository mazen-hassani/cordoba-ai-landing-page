"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

function ContactFormContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const product = searchParams.get("product");
  const cta = searchParams.get("cta");

  // Map product ID to project type
  const productToProjectType: Record<string, string> = {
    "portfolio-manager": t("contact.projectTypeOption1"),
    "ticketing-system": t("contact.projectTypeOption2"),
    "ai-cms": t("contact.projectTypeOption3"),
  };

  const defaultProjectType = product ? productToProjectType[product] || "" : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    projectType: defaultProjectType,
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Update projectType when product param changes
  useEffect(() => {
    if (product && productToProjectType[product]) {
      setFormData((prev) => ({
        ...prev,
        projectType: productToProjectType[product],
      }));
    }
  }, [product]);

  const projectTypes = [
    t("contact.projectTypeOption1"),
    t("contact.projectTypeOption2"),
    t("contact.projectTypeOption3"),
    t("contact.projectTypeOption4"),
  ];

  const validateField = (name: string, value: string | boolean) => {
    const newErrors = { ...errors };

    switch (name) {
      case "name":
        if (typeof value === "string" && (value.length < 2 || value.length > 80)) {
          newErrors.name = "Name must be 2-80 characters";
        } else {
          delete newErrors.name;
        }
        break;
      case "email":
        if (typeof value === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          delete newErrors.email;
        }
        break;
      case "organization":
        if (typeof value === "string" && (value.length < 2 || value.length > 120)) {
          newErrors.organization = "Organization must be 2-120 characters";
        } else {
          delete newErrors.organization;
        }
        break;
      case "message":
        if (typeof value === "string" && (value.length < 20 || value.length > 2000)) {
          newErrors.message = "Message must be 20-2,000 characters";
        } else {
          delete newErrors.message;
        }
        break;
      case "consent":
        if (!value) {
          newErrors.consent = "You must agree to be contacted";
        } else {
          delete newErrors.consent;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : false;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : false;
    validateField(name, type === "checkbox" ? checked : value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Validate all fields
    validateField("name", formData.name);
    validateField("email", formData.email);
    validateField("organization", formData.organization);
    validateField("message", formData.message);
    validateField("consent", formData.consent);

    // Check if there are any errors
    if (Object.keys(errors).length === 0 && formData.consent) {
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            utm_product: product || "",
            utm_cta: cta || "",
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setReferenceId(data.referenceId);
          setIsSubmitted(true);
        } else {
          setSubmitError(data.error || "Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitError("Network error. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="mx-auto max-w-2xl">
              <div
                className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 border border-blue-100 shadow-xl text-center"
                role="alert"
                aria-live="polite"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {t("contact.successTitle")}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t("contact.successMessage")}
                </p>
                <div className="inline-block rounded-lg bg-white px-4 py-2 shadow-sm border border-gray-200">
                  <span className="text-sm font-semibold text-gray-600">{t("contact.referenceId")}: </span>
                  <span className="text-sm font-mono font-bold text-blue-600">{referenceId}</span>
                </div>
                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    ← Back to homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Logo */}
          <div className="mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 group" aria-label="Cordoba AI">
              <Image
                src="/images/logo-01.svg"
                alt="Cordoba AI Logo"
                width={64}
                height={64}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                Cordoba AI
              </span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t("contact.subtitle")}
            </p>

            {/* Trust cues badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
              <span>{t("contact.badge1")}</span>
              <span className="text-gray-400">•</span>
              <span>{t("contact.badge2")}</span>
              <span className="text-gray-400">•</span>
              <span>{t("contact.badge3")}</span>
              <span className="text-gray-400">•</span>
              <span>{t("contact.badge4")}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Hidden UTM fields */}
                <input type="hidden" name="utm_product" value={product || ""} />
                <input type="hidden" name="utm_cta" value={cta || ""} />

                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder={t("contact.namePlaceholder")}
                      autoComplete="name"
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder={t("contact.emailPlaceholder")}
                      autoComplete="email"
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Organization & Phone Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-gray-900 mb-2">
                      {t("contact.organization")}
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.organization ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder={t("contact.organizationPlaceholder")}
                      autoComplete="organization"
                      required
                      aria-invalid={!!errors.organization}
                      aria-describedby={errors.organization ? "organization-error" : undefined}
                    />
                    {errors.organization && (
                      <p id="organization-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.organization}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      {t("contact.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t("contact.phonePlaceholder")}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* Project Type Select */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t("contact.projectType")}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">{t("contact.projectTypePlaceholder")}</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder={t("contact.messagePlaceholder")}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Attachment */}
                <div>
                  <label htmlFor="attachment" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t("contact.attachment")}
                  </label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 file:font-semibold hover:file:bg-blue-100"
                  />
                  <p className="mt-1 text-xs text-gray-500">{t("contact.attachmentHelper")}</p>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 ${
                      errors.consent ? "border-red-500" : ""
                    }`}
                    required
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    {t("contact.consent")}
                  </label>
                </div>
                {errors.consent && (
                  <p id="consent-error" className="text-sm text-red-600 -mt-3" role="alert">
                    {errors.consent}
                  </p>
                )}

                {/* General Error Message */}
                {submitError && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-4" role="alert">
                    <div className="flex items-start gap-3">
                      <svg
                        className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm text-red-800">{submitError}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-blue-500/50 font-semibold transition-all duration-300 py-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    t("contact.submit")
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center">
                  {t("contact.privacyNotice")}
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{t("contact.infoTitle")}</h2>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
                        <svg
                          className="h-6 w-6 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path d="M16 14.5l-8-6h16l-8 6zm0 2l-8-6v11h16V10.5l-8 6zM6 7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t("contact.emailLabel")}</h3>
                      <a
                        href={`mailto:${t("contact.emailValue")}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {t("contact.emailValue")}
                      </a>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30">
                        <svg
                          className="h-6 w-6 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path d="M16 4a8 8 0 0 0-8 8c0 5.5 8 16 8 16s8-10.5 8-16a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t("contact.office")}</h3>
                      <p className="text-gray-600">{t("contact.officeLocation")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{t("contact.followUs")}</h2>
                <div className="flex gap-3">
                  <Link
                    className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-100 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600 hover:scale-110 focus:ring-4 focus:ring-blue-500/50 duration-300"
                    href="https://x.com/cordoba_ai"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                    </svg>
                  </Link>
                  <Link
                    className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-100 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600 hover:scale-110 focus:ring-4 focus:ring-blue-500/50 duration-300"
                    href="https://www.linkedin.com/company/cordoba-ai"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z"></path>
                    </svg>
                  </Link>
                  <Link
                    className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-100 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600 hover:scale-110 focus:ring-4 focus:ring-blue-500/50 duration-300"
                    href="https://github.com/cordoba-ai"
                    aria-label="Github"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{t("contact.businessHours")}</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between items-start">
                    <span>{t("contact.weekdays")}</span>
                    <span className="font-semibold text-gray-900 text-right">{t("contact.weekdaysTime")}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span>{t("contact.weekend")}</span>
                    <span className="font-semibold text-gray-900">{t("contact.weekendTime")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <div className="animate-pulse">
                <div className="h-12 bg-gray-200 rounded-lg mb-4 mx-auto w-64"></div>
                <div className="h-6 bg-gray-200 rounded-lg mb-6 mx-auto w-96"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
