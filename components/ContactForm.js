"use client";

import { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters long.";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your corporate email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g., name@company.com).";
    }

    // Phone (optional or validated if filled)
    if (formData.phone.trim()) {
      const phoneRegex = /^[+0-9\s\-().]{6,20}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = "Please enter a valid phone number.";
      }
    }

    // Subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Please select or provide an inquiry subject.";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project or procurement requirements.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message must contain at least 15 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    // Simulate asynchronous frontend submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#e4e4e7] shadow-level-3 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#c1fbd4] text-black flex items-center justify-center mx-auto shadow-sm">
          <Icon icon="solar:check-circle-bold" width={36} height={36} />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-black tracking-tight">
            Inquiry Registered (Frontend Simulation)
          </h3>
          <p className="text-sm sm:text-base text-[#52525b] max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-black">{formData.fullName}</strong>. Your inquiry regarding{" "}
            <strong className="text-black">{formData.subject}</strong> has been validated by the frontend interface.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 max-w-md mx-auto text-left">
          <p className="font-semibold text-zinc-800 mb-1">Notice: Frontend Demonstration Mode</p>
          <p>
            As this is a pure frontend architecture without a live backend email gateway, your form was verified and processed client-side. To reach FP CONSTRUCTION directly, please reference the registered postal address in Le Havre.
          </p>
        </div>

        <div className="pt-2">
          <Button
            onClick={handleReset}
            variant="outline-on-light"
            className="text-sm px-6 py-2.5"
            icon={<Icon icon="solar:restart-linear" width={16} height={16} />}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-6 sm:p-10 border border-[#e4e4e7] shadow-level-3 space-y-6"
    >
      <div className="border-b border-zinc-100 pb-4">
        <h3 className="text-xl font-semibold text-black tracking-tight">
          Send a Commercial Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#71717a] mt-1">
          Complete the form below for quotes, material sourcing, or road & utility work inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-[#3f3f46] mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Jean Dupont"
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border transition-colors outline-none focus:ring-2 ${
              errors.fullName
                ? "border-red-400 focus:ring-red-200 focus:border-red-500"
                : "border-[#e4e4e7] focus:border-black focus:ring-zinc-200"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
              <Icon icon="solar:danger-circle-bold" width={14} height={14} />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Corporate Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#3f3f46] mb-1.5"
          >
            Corporate Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. contact@entreprise.fr"
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border transition-colors outline-none focus:ring-2 ${
              errors.email
                ? "border-red-400 focus:ring-red-200 focus:border-red-500"
                : "border-[#e4e4e7] focus:border-black focus:ring-zinc-200"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
              <Icon icon="solar:danger-circle-bold" width={14} height={14} />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-[#3f3f46] mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +33 2 35 00 00 00"
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border transition-colors outline-none focus:ring-2 ${
              errors.phone
                ? "border-red-400 focus:ring-red-200 focus:border-red-500"
                : "border-[#e4e4e7] focus:border-black focus:ring-zinc-200"
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
              <Icon icon="solar:danger-circle-bold" width={14} height={14} />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-semibold uppercase tracking-wider text-[#3f3f46] mb-1.5"
          >
            Company / Organization
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Société TP Normandie"
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-[#e4e4e7] focus:border-black focus:ring-2 focus:ring-zinc-200 transition-colors outline-none"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-semibold uppercase tracking-wider text-[#3f3f46] mb-1.5"
        >
          Subject / Service Category <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border transition-colors outline-none focus:ring-2 ${
            errors.subject
              ? "border-red-400 focus:ring-red-200 focus:border-red-500"
              : "border-[#e4e4e7] focus:border-black focus:ring-zinc-200"
          }`}
        >
          <option value="">Select a category...</option>
          <option value="Construction Materials Purchase">Construction Materials Purchase (Wholesale)</option>
          <option value="Hardware & Tools Procurement">Hardware & Tools Procurement</option>
          <option value="Road Infrastructure Works">Road Infrastructure Works (Travaux routiers)</option>
          <option value="Utility / VRD Network Engineering">Utility / VRD Network Engineering</option>
          <option value="General Building Trades">General Building Trades</option>
          <option value="Import / Export Freight & Logistics">Import / Export Freight & Logistics</option>
          <option value="Unregulated Goods Trading">Unregulated Goods Trading</option>
          <option value="General Corporate Inquiries">General Corporate Inquiries</option>
        </select>
        {errors.subject && (
          <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
            <Icon icon="solar:danger-circle-bold" width={14} height={14} />
            <span>{errors.subject}</span>
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#3f3f46] mb-1.5"
        >
          Project Details & Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe specifications, approximate volumes, site location, or desired timeframes..."
          className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border transition-colors outline-none focus:ring-2 resize-y ${
            errors.message
              ? "border-red-400 focus:ring-red-200 focus:border-red-500"
              : "border-[#e4e4e7] focus:border-black focus:ring-zinc-200"
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
            <Icon icon="solar:danger-circle-bold" width={14} height={14} />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary-pill"
          disabled={submitting}
          className="w-full sm:w-auto px-8 py-3.5 text-base"
          icon={
            submitting ? (
              <Icon icon="solar:refresh-circle-linear" className="animate-spin" width={18} height={18} />
            ) : (
              <Icon icon="solar:plain-bold" width={18} height={18} />
            )
          }
        >
          {submitting ? "Processing Inquiry..." : "Transmit Inquiry"}
        </Button>

        <span className="text-xs text-[#71717a]">
          Strictly confidential corporate communication.
        </span>
      </div>
    </form>
  );
}
