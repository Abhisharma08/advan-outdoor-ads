"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitToHubSpot } from "@/app/actions/hubspot"

type FormValues = {
  name: string
  email: string
  phone: string
  city: string
  company: string
  designation: string
  lead_source: string
}

type FormErrors = Partial<Record<keyof FormValues, string>> & {
  submit?: string
}

type LeadFormProps = {
  className?: string
  title?: string
  subtitle?: string
  buttonText?: string
  bottomText?: React.ReactNode
  buttonClassName?: string
}

const defaultValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  city: "",
  company: "",
  designation: "",
  lead_source: "Outdoor Ads lp",
}

function validateForm(values: FormValues) {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters."
  }

  const phoneDigits = values.phone.replace(/\D/g, "")
  if (phoneDigits.length < 10 || phoneDigits.length > 12) {
    errors.phone = "Enter a valid 10-digit phone number."
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address."
  }

  return errors
}

export default function LeadForm({
  className,
  title = "Get Hoarding Rates and Availability",
  subtitle = "We will contact you within 2 hours with available sites and rates.",
  buttonText = "Get Rates and Site Options →",
  buttonClassName = "",
  bottomText = "Free plan delivered in 24 hours · No commitment · WhatsApp or email — your choice",
}: LeadFormProps) {
  const [values, setValues] = useState<FormValues>(defaultValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState(1)

  const router = useRouter()

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => {
      if (!current[name as keyof FormErrors] && !current.submit) {
        return current
      }

      return {
        ...current,
        [name]: undefined,
        submit: undefined,
      }
    })
  }

  function handleNextStep() {
    const validationErrors = validateForm(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setStep(2)
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    const validationErrors = validateForm(values)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStep(1)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const result = await submitToHubSpot(values)

      if (!result.success) {
        console.warn("CRM Sync Issue:", result.error)
        setErrors({
          submit: "Failed to sync with CRM. Please try again or contact us directly.",
        })
        setIsSubmitting(false)
        return
      }

      router.push("/thank-you")
    } catch (error) {
      console.error("Submission Exception:", error)

      setErrors({
        submit:
          "We encountered a problem. Please try again or contact us directly.",
      })

      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={`rounded-xl border border-muted bg-white p-6 shadow-2xl md:p-8 ${className}`}
    >
      <h3 className="mb-2 text-4xl font-headline font-bold text-secondary">
        {title}
      </h3>

      <p className="mb-6 text-sm text-muted-foreground">
        {subtitle}
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        noValidate
      >
        <input
          type="hidden"
          name="lead_source"
          value={values.lead_source}
        />

        {step === 1 ? (
          <>
            {/* Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Your Name"
                autoComplete="name"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />

              {errors.name ? (
                <p className="text-sm text-destructive">
                  {errors.name}
                </p>
              ) : null}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-foreground"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                autoComplete="tel"
                inputMode="numeric"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />

              {errors.phone ? (
                <p className="text-sm text-destructive">
                  {errors.phone}
                </p>
              ) : null}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Your Email"
                autoComplete="email"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />

              {errors.email ? (
                <p className="text-sm text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <Button
              type="button"
              onClick={handleNextStep}
              className={`h-14 w-full mt-4 bg-secondary text-lg font-bold text-white hover:bg-secondary/90 ${buttonClassName}`}
            >
              Continue →
            </Button>
          </>
        ) : (
          <>
            <h4 className="font-semibold text-lg text-foreground mb-4">Enter Additional Details</h4>

            {/* Area in Bengaluru */}
            <div className="space-y-1.5">
              <label
                htmlFor="city"
                className="text-sm font-medium text-foreground"
              >
                Your Area in Bengaluru
              </label>

              <input
                id="city"
                name="city"
                value={values.city}
                onChange={handleChange}
                placeholder="Koramangala/Whitefield/MG Road/HSR/Other"
                autoComplete="address-level2"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            {/* Company Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="company"
                className="text-sm font-medium text-foreground"
              >
                Company Name
              </label>

              <input
                id="company"
                name="company"
                value={values.company}
                onChange={handleChange}
                placeholder="Your Company Name"
                autoComplete="organization"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            {/* Designation */}
            <div className="space-y-1.5">
              <label
                htmlFor="designation"
                className="text-sm font-medium text-foreground"
              >
                Designation
              </label>

              <input
                id="designation"
                name="designation"
                value={values.designation}
                onChange={handleChange}
                placeholder="Your Designation"
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            {errors.submit ? (
              <p className="rounded-md border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm text-destructive">
                {errors.submit}
              </p>
            ) : null}

            <div className="flex gap-4 mt-4">
              <Button
                type="button"
                onClick={() => setStep(1)}
                variant="outline"
                className="h-14 flex-1 text-lg font-bold"
              >
                Back
              </Button>
              <Button
                type="submit"
                className={`h-14 flex-[2] bg-secondary text-lg font-bold text-white hover:bg-secondary/90 ${buttonClassName}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  buttonText
                )}
              </Button>
            </div>
          </>
        )}

        <p className="text-center text-xs text-muted-foreground mt-4">
          {bottomText}
        </p>
      </form>
    </div>
  )
}
