import {
  useMemo,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
  type ReactNode,
} from 'react'
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiFileText,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiUploadCloud,
  FiUser,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import { SEO } from '../components/SEO'

type FormValues = {
  name: string
  email: string
  phone: string
  projectTitle: string
  projectCategory: string
  budget: string
  expectedCompletionDate: string
  description: string
}

type FormErrors = Partial<Record<keyof FormValues | 'file', string>>

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  projectTitle: '',
  projectCategory: '',
  budget: '',
  expectedCompletionDate: '',
  description: '',
}

const categories = [
  'AI',
  'IoT',
  'Robotics',
  'Embedded',
  'Automation',
  'Electronics Product Development',
  '3D Design / Printing',
]

const budgets = [
  'Under Rs. 25,000',
  'Rs. 25,000 - Rs. 75,000',
  'Rs. 75,000 - Rs. 2,00,000',
  'Rs. 2,00,000+',
  'Need guidance',
]

const contactCards = [
  {
    icon: FiPhone,
    label: 'Call us',
    value: '+91 98765 43210',
    detail: 'Mon to Sat, 10 AM - 7 PM',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'hello@projectsforu.in',
    detail: 'Project briefs, documents, and RFQs',
  },
  {
    icon: FiMapPin,
    label: 'Studio',
    value: 'Technology Development Lab',
    detail: 'India-based remote and onsite support',
  },
]

const faqs = [
  {
    question: 'Can I submit only an idea without complete specifications?',
    answer:
      'Yes. Share the concept, deadline, and expected outcome. The team can help shape the technical scope before development starts.',
  },
  {
    question: 'What file types can I upload?',
    answer:
      'Project briefs, PDFs, images, diagrams, datasheets, and ZIP references are ideal. Keep files concise and relevant to the build.',
  },
  {
    question: 'Is this form ready for email integration?',
    answer:
      'Yes. The submit handler prepares one payload containing form values and the uploaded file, ready to connect to EmailJS, Formspree, an API route, or a backend mail service.',
  },
]

function validateStep(step: number, values: FormValues, file: File | null) {
  const errors: FormErrors = {}

  if (step === 0) {
    if (!values.name.trim()) errors.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email address.'
    if (!/^[0-9+\-\s()]{8,}$/.test(values.phone)) errors.phone = 'Enter a valid phone number.'
  }

  if (step === 1) {
    if (!values.projectTitle.trim()) errors.projectTitle = 'Project title is required.'
    if (!values.projectCategory) errors.projectCategory = 'Select a project category.'
    if (!values.budget) errors.budget = 'Select an estimated budget.'
    if (!values.expectedCompletionDate) {
      errors.expectedCompletionDate = 'Choose an expected completion date.'
    }
  }

  if (step === 2) {
    if (values.description.trim().length < 30) {
      errors.description = 'Describe the project in at least 30 characters.'
    }
    if (file && file.size > 10 * 1024 * 1024) {
      errors.file = 'File size must be under 10 MB.'
    }
  }

  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [file, setFile] = useState<File | null>(null)
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const steps = useMemo(
    () => [
      { label: 'Contact', icon: FiUser },
      { label: 'Project', icon: FiFileText },
      { label: 'Brief', icon: FiUploadCloud },
    ],
    [],
  )

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function selectFile(nextFile?: File) {
    if (!nextFile) return
    setFile(nextFile)
    setErrors((current) => ({ ...current, file: undefined }))
  }

  function handleFileInput(event: ChangeEvent<HTMLInputElement>) {
    selectFile(event.target.files?.[0])
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    setIsDragging(false)
    selectFile(event.dataTransfer.files[0])
  }

  function goNext() {
    const nextErrors = validateStep(step, values, file)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setStep((current) => Math.min(current + 1, steps.length - 1))
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateStep(step, values, file)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setIsSubmitting(true)

    const emailReadyPayload = {
      ...values,
      uploadedFile: file
        ? {
            name: file.name,
            size: file.size,
            type: file.type,
          }
        : null,
    }

    await new Promise((resolve) => window.setTimeout(resolve, 900))
    console.info('Project submission payload ready for email integration:', emailReadyPayload)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact & Project Submission | ProjectsforU"
        description="Submit your project brief to ProjectsforU for electronics, robotics, IoT, embedded, AI, and automation development."
      />
      <section className="future-shell relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(226,232,240,0.48),rgba(248,250,252,0.96))] dark:bg-[linear-gradient(180deg,#020617,#08162a_48%,#020617)]" />
        <div className="circuit-grid absolute inset-0 opacity-35 dark:opacity-20" />
        <a
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl shadow-emerald-500/30 transition hover:-translate-y-1 hover:shadow-emerald-500/50"
          href="https://wa.me/919876543210"
          rel="noreferrer"
          target="_blank"
        >
          <FaWhatsapp aria-hidden="true" />
        </a>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                Contact & Project Submission
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-6xl dark:text-white">
                Tell us what you want to build
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                Share your idea, requirements, files, target budget, and timeline. We will
                review the scope and respond with the next practical steps.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {contactCards.map((card) => {
                const Icon = card.icon

                return (
                  <article
                    className="glass-panel micro-lift rounded-[18px] p-5"
                    key={card.label}
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-secondary/14 text-secondary">
                      <Icon aria-hidden="true" />
                    </span>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      {card.label}
                    </p>
                    <h2 className="mt-2 font-semibold text-primary dark:text-white">{card.value}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {card.detail}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <form
              className="glass-panel rounded-[24px] p-5 sm:p-7"
              onSubmit={handleSubmit}
            >
              <div className="mb-8 grid grid-cols-3 gap-3">
                {steps.map((item, index) => {
                  const Icon = item.icon
                  const isActive = step === index
                  const isComplete = step > index

                  return (
                    <button
                      className={`rounded-[8px] border p-3 text-left transition ${
                        isActive || isComplete
                          ? 'border-secondary bg-secondary/12 text-primary dark:text-white'
                          : 'border-primary/10 bg-white/50 text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400'
                      }`}
                      key={item.label}
                      onClick={() => {
                        if (index <= step) setStep(index)
                      }}
                      type="button"
                    >
                      <span className="mb-2 grid h-9 w-9 place-items-center rounded-[8px] bg-primary text-white dark:bg-secondary dark:text-primary">
                        {isComplete ? <FiCheck aria-hidden="true" /> : <Icon aria-hidden="true" />}
                      </span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em]">
                        Step {index + 1}
                      </span>
                      <span className="mt-1 block text-sm font-semibold">{item.label}</span>
                    </button>
                  )
                })}
              </div>

              {isSubmitted ? (
                <div className="grid min-h-[31rem] place-items-center text-center">
                  <div>
                    <div className="success-pulse mx-auto grid h-24 w-24 place-items-center rounded-full bg-secondary text-4xl text-primary shadow-2xl shadow-secondary/30">
                      <FiCheck aria-hidden="true" />
                    </div>
                    <h2 className="mt-8 text-3xl font-semibold text-primary dark:text-white">
                      Project brief received
                    </h2>
                    <p className="mx-auto mt-4 max-w-md leading-8 text-slate-600 dark:text-slate-300">
                      Your submission is ready for email delivery. We will review the brief
                      and get back with scope, timeline, and next steps.
                    </p>
                    <button
                      className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-secondary hover:text-primary dark:bg-secondary dark:text-primary dark:hover:bg-white"
                      onClick={() => {
                        setValues(initialValues)
                        setFile(null)
                        setStep(0)
                        setIsSubmitted(false)
                      }}
                      type="button"
                    >
                      Submit another project
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {step === 0 ? (
                    <div className="grid gap-5">
                      <InputField
                        error={errors.name}
                        icon={<FiUser aria-hidden="true" />}
                        label="Name"
                        onChange={(value) => updateValue('name', value)}
                        placeholder="Your full name"
                        value={values.name}
                      />
                      <InputField
                        error={errors.email}
                        icon={<FiMail aria-hidden="true" />}
                        label="Email"
                        onChange={(value) => updateValue('email', value)}
                        placeholder="you@example.com"
                        type="email"
                        value={values.email}
                      />
                      <InputField
                        error={errors.phone}
                        icon={<FiPhone aria-hidden="true" />}
                        label="Phone"
                        onChange={(value) => updateValue('phone', value)}
                        placeholder="+91 98765 43210"
                        value={values.phone}
                      />
                    </div>
                  ) : null}

                  {step === 1 ? (
                    <div className="grid gap-5">
                      <InputField
                        error={errors.projectTitle}
                        icon={<FiFileText aria-hidden="true" />}
                        label="Project Title"
                        onChange={(value) => updateValue('projectTitle', value)}
                        placeholder="Smart monitoring prototype"
                        value={values.projectTitle}
                      />
                      <SelectField
                        error={errors.projectCategory}
                        label="Project Category"
                        onChange={(value) => updateValue('projectCategory', value)}
                        options={categories}
                        value={values.projectCategory}
                      />
                      <div className="grid gap-5 md:grid-cols-2">
                        <SelectField
                          error={errors.budget}
                          label="Budget"
                          onChange={(value) => updateValue('budget', value)}
                          options={budgets}
                          value={values.budget}
                        />
                        <InputField
                          error={errors.expectedCompletionDate}
                          icon={<FiCalendar aria-hidden="true" />}
                          label="Expected Completion Date"
                          onChange={(value) => updateValue('expectedCompletionDate', value)}
                          type="date"
                          value={values.expectedCompletionDate}
                        />
                      </div>
                    </div>
                  ) : null}

                  {step === 2 ? (
                    <div className="grid gap-5">
                      <label>
                        <span className="text-sm font-semibold text-primary dark:text-white">
                          Description
                        </span>
                        <textarea
                          className="mt-2 min-h-40 w-full rounded-[8px] border border-primary/10 bg-white/80 px-4 py-3 text-primary outline-none transition placeholder:text-slate-400 focus:border-secondary focus:ring-4 focus:ring-secondary/15 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
                          onChange={(event) => updateValue('description', event.target.value)}
                          placeholder="Describe your objective, required features, sensors, hardware, software, references, and expected demo outcome."
                          value={values.description}
                        />
                        {errors.description ? (
                          <span className="mt-2 block text-sm font-semibold text-red-500">
                            {errors.description}
                          </span>
                        ) : null}
                      </label>

                      <label
                        className={`grid cursor-pointer place-items-center rounded-[8px] border border-dashed p-8 text-center transition ${
                          isDragging
                            ? 'border-secondary bg-secondary/12'
                            : 'border-primary/20 bg-white/60 hover:border-secondary/70 dark:border-white/15 dark:bg-white/[0.04]'
                        }`}
                        onDragLeave={() => setIsDragging(false)}
                        onDragOver={(event) => {
                          event.preventDefault()
                          setIsDragging(true)
                        }}
                        onDrop={handleDrop}
                      >
                        <input className="sr-only" onChange={handleFileInput} type="file" />
                        <FiUploadCloud className="text-4xl text-secondary" aria-hidden="true" />
                        <span className="mt-4 text-lg font-semibold text-primary dark:text-white">
                          {file ? file.name : 'Drag and drop your file here'}
                        </span>
                        <span className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          Upload diagrams, PDFs, datasheets, reference images, or ZIP files up to 10 MB.
                        </span>
                        {errors.file ? (
                          <span className="mt-3 block text-sm font-semibold text-red-500">
                            {errors.file}
                          </span>
                        ) : null}
                      </label>
                    </div>
                  ) : null}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <button
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/15 bg-white/70 px-6 text-sm font-semibold text-primary transition hover:border-secondary hover:bg-secondary/10 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/15 dark:bg-white/5 dark:text-white"
                      disabled={step === 0 || isSubmitting}
                      onClick={() => setStep((current) => Math.max(current - 1, 0))}
                      type="button"
                    >
                      <FiArrowLeft className="mr-2" aria-hidden="true" />
                      Back
                    </button>
                    {step < steps.length - 1 ? (
                      <button
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-xl shadow-primary/20 transition hover:bg-secondary hover:text-primary dark:bg-secondary dark:text-primary dark:hover:bg-white"
                        onClick={goNext}
                        type="button"
                      >
                        Continue <FiArrowRight className="ml-2" aria-hidden="true" />
                      </button>
                    ) : (
                      <button
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-xl shadow-primary/20 transition hover:bg-secondary hover:text-primary disabled:cursor-wait disabled:opacity-70 dark:bg-secondary dark:text-primary dark:hover:bg-white"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white dark:border-primary/30 dark:border-t-primary" />
                            Sending
                          </>
                        ) : (
                          <>
                            Submit Project <FiSend className="ml-2" aria-hidden="true" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </>
              )}
            </form>

            <div className="grid gap-6">
              <div className="glass-panel overflow-hidden rounded-[24px]">
                <iframe
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=India&output=embed"
                  title="ProjectsforU location map"
                />
                <div className="grid gap-4 p-5 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <FiClock className="mt-1 text-secondary" aria-hidden="true" />
                    <div>
                      <h2 className="font-semibold text-primary dark:text-white">Response window</h2>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        Most project briefs receive a reply within one business day.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FiMessageCircle className="mt-1 text-secondary" aria-hidden="true" />
                    <div>
                      <h2 className="font-semibold text-primary dark:text-white">Need it faster?</h2>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        Use WhatsApp for urgent deadlines, demos, and quick clarifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[24px] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  FAQ
                </p>
                <div className="mt-5 grid gap-4">
                  {faqs.map((item) => (
                    <details
                      className="group rounded-[8px] border border-primary/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.04]"
                      key={item.question}
                    >
                      <summary className="cursor-pointer list-none font-semibold text-primary outline-none dark:text-white">
                        {item.question}
                      </summary>
                      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

type InputFieldProps = {
  error?: string
  icon?: ReactNode
  label: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  value: string
}

function InputField({
  error,
  icon,
  label,
  onChange,
  placeholder,
  type = 'text',
  value,
}: InputFieldProps) {
  return (
    <label>
      <span className="text-sm font-semibold text-primary dark:text-white">{label}</span>
      <span className="mt-2 flex items-center rounded-[8px] border border-primary/10 bg-white/80 px-4 text-primary transition focus-within:border-secondary focus-within:ring-4 focus-within:ring-secondary/15 dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
        {icon ? <span className="mr-3 text-secondary">{icon}</span> : null}
        <input
          className="min-h-12 w-full bg-transparent outline-none placeholder:text-slate-400"
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </span>
      {error ? <span className="mt-2 block text-sm font-semibold text-red-500">{error}</span> : null}
    </label>
  )
}

type SelectFieldProps = {
  error?: string
  label: string
  onChange: (value: string) => void
  options: string[]
  value: string
}

function SelectField({ error, label, onChange, options, value }: SelectFieldProps) {
  return (
    <label>
      <span className="text-sm font-semibold text-primary dark:text-white">{label}</span>
      <select
        className="mt-2 min-h-12 w-full rounded-[8px] border border-primary/10 bg-white/80 px-4 text-primary outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/15 dark:border-white/10 dark:bg-slate-900 dark:text-white"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <span className="mt-2 block text-sm font-semibold text-red-500">{error}</span> : null}
    </label>
  )
}
