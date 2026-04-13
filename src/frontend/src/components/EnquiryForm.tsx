import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export default function EnquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (_data: FormData) => {
    toast.success("Thank you! We'll contact you shortly.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      data-ocid="enquiry-form"
    >
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Your full name"
          className={`w-full px-4 py-3 rounded-lg border text-text-dark placeholder:text-text-light text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors ${
            errors.fullName
              ? "border-red-400"
              : "border-gold/20 hover:border-gold/40"
          }`}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          data-ocid="form-full-name"
          {...register("fullName", { required: "Full name is required" })}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-xs text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="10-digit mobile number"
          className={`w-full px-4 py-3 rounded-lg border text-text-dark placeholder:text-text-light text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors ${
            errors.phone
              ? "border-red-400"
              : "border-gold/20 hover:border-gold/40"
          }`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          data-ocid="form-phone"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Please enter a valid 10-digit phone number",
            },
          })}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          className={`w-full px-4 py-3 rounded-lg border text-text-dark placeholder:text-text-light text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors ${
            errors.email
              ? "border-red-400"
              : "border-gold/20 hover:border-gold/40"
          }`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          data-ocid="form-email"
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your requirements..."
          className={`w-full px-4 py-3 rounded-lg border text-text-dark placeholder:text-text-light text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors resize-none ${
            errors.message
              ? "border-red-400"
              : "border-gold/20 hover:border-gold/40"
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          data-ocid="form-message"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-press w-full py-3.5 px-6 rounded-lg bg-gold text-navy text-sm font-bold hover:bg-gold-light transition-colors duration-200 shadow-gold disabled:opacity-60 disabled:cursor-not-allowed"
        data-ocid="form-submit"
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
