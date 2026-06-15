'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, Calendar, MapPin, Building, User, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  projectLocation: string;
  projectDescription: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceRequired: 'Geotechnical Investigation',
      projectLocation: '',
      projectDescription: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error((payload as { error?: string }).error ?? 'Submission failed. Please try again.');
      }
      setSubmitSuccess(true);
      reset();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'System error submitting request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-xl border border-[#1B2430]/10 shadow-lg text-center space-y-6 max-w-xl mx-auto">
        <div className="w-16 h-16 bg-[#FFF0F0] rounded-full flex items-center justify-center mx-auto text-[#B22833]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#5B0617]">Inquiry Submitted</h3>
        <p className="font-sans text-sm text-[#564242] leading-relaxed">
          Thank you for reaching out to GEOMARK Engineering Consultants. Our technical review team will analyze your project description and contact you with a formal proposal within 48 hours.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          id="frm-success-reset-btn"
          className="mt-4 bg-[#7A1F2B] text-white px-8 py-3 font-mono text-xs uppercase tracking-wider hover:bg-[#5B0617] transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-xl border border-[#1B2430]/10 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {submitError && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center gap-3 border border-red-200 animate-fade-in-up">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-sans">{submitError}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-wider text-[#564242] font-medium flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#B22833]" /> Full Name *
            </label>
            <input
              type="text"
              id="frm-input-fullname"
              placeholder="Enter name"
              className={`w-full bg-[#FFF8F7] border ${
                errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-[#DCC0C0]'
              } rounded-lg p-4 form-input-animate font-sans text-sm text-[#231919]`}
              {...register('fullName', { required: 'Full Name is required' })}
            />
            {errors.fullName && (
              <span className="text-red-500 text-xs font-mono block animate-fade-in-up">{errors.fullName.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-wider text-[#564242] font-medium flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-[#B22833]" /> Company *
            </label>
            <input
              type="text"
              id="frm-input-company"
              placeholder="Company Name"
              className={`w-full bg-[#FFF8F7] border ${
                errors.companyName ? 'border-red-500 focus:ring-red-500' : 'border-[#DCC0C0]'
              } rounded-lg p-4 form-input-animate font-sans text-sm text-[#231919]`}
              {...register('companyName', { required: 'Company name is required' })}
            />
            {errors.companyName && (
              <span className="text-red-500 text-xs font-mono block animate-fade-in-up">{errors.companyName.message}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-wider text-[#564242] font-medium flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#B22833]" /> Email Address *
            </label>
            <input
              type="email"
              id="frm-input-email"
              placeholder="name@company.com"
              className={`w-full bg-[#FFF8F7] border ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#DCC0C0]'
              } rounded-lg p-4 form-input-animate font-sans text-sm text-[#231919]`}
              {...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs font-mono block animate-fade-in-up">{errors.email.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-wider text-[#564242] font-medium flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#B22833]" /> Phone Number *
            </label>
            <input
              type="tel"
              id="frm-input-phone"
              placeholder="+252 ..."
              className={`w-full bg-[#FFF8F7] border ${
                errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[#DCC0C0]'
              } rounded-lg p-4 form-input-animate font-sans text-sm text-[#231919]`}
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && (
              <span className="text-red-500 text-xs font-mono block animate-fade-in-up">{errors.phone.message}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-wider text-[#564242] font-medium flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#B22833]" /> Service Required *
            </label>
            <select
              id="frm-select-service"
              className="w-full bg-[#FFF8F7] border border-[#DCC0C0] rounded-lg p-4 form-input-animate font-sans text-sm text-[#231919]"
              {...register('serviceRequired')}
            >
              <option value="Land Surveying">Land &amp; Engineering Surveying</option>
              <option value="Geotechnical Investigation">Geotechnical Investigation</option>
              <option value="Materials Testing">Construction Materials Testing</option>
              <option value="Engineering Documentation">Engineering Documentation &amp; Design</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-wider text-[#564242] font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B22833]" /> Project Location *
            </label>
            <input
              type="text"
              id="frm-input-location"
              placeholder="City / Region"
              className={`w-full bg-[#FFF8F7] border ${
                errors.projectLocation ? 'border-red-500 focus:ring-red-500' : 'border-[#DCC0C0]'
              } rounded-lg p-4 form-input-animate font-sans text-sm text-[#231919]`}
              {...register('projectLocation', { required: 'Project location is required' })}
            />
            {errors.projectLocation && (
              <span className="text-red-500 text-xs font-mono block animate-fade-in-up">{errors.projectLocation.message}</span>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-wider text-[#564242] font-medium flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#B22833]" /> Project Description *
          </label>
          <textarea
            id="frm-input-desc"
            placeholder="Describe your technical mapping, soil analysis, or topographic surveying requirements..."
            rows={5}
            className={`w-full bg-[#FFF8F7] border ${
              errors.projectDescription ? 'border-red-500 focus:ring-red-500' : 'border-[#DCC0C0]'
            } rounded-lg p-4 form-input-animate font-sans text-sm text-[#231919]`}
            {...register('projectDescription', { required: 'Project description is required' })}
          />
          {errors.projectDescription && (
            <span className="text-red-500 text-xs font-mono block animate-fade-in-up">{errors.projectDescription.message}</span>
          )}
        </div>

        <button
          type="submit"
          id="frm-submit-btn"
          disabled={isSubmitting}
          className="w-full bg-[#7A1F2B] text-white py-5 rounded-lg font-mono text-xs uppercase tracking-[0.2em] hover:bg-[#5B0617] hover:shadow-lg active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? 'Transmitting Request...' : 'Request Technical Proposal'}
        </button>
      </form>
    </div>
  );
}
