import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import {
  FiActivity,
  FiBarChart2,
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
  FiEdit3,
  FiFolder,
  FiGrid,
  FiInbox,
  FiLock,
  FiLogOut,
  FiMenu,
  FiMessageSquare,
  FiMoon,
  FiPlus,
  FiSave,
  FiSearch,
  FiSettings,
  FiShield,
  FiStar,
  FiSun,
  FiTrash2,
  FiX,
} from 'react-icons/fi'

import { BrandLogo } from '../components/BrandLogo'
import { SEO } from '../components/SEO'
import { useTheme } from '../hooks/useTheme'

type AdminSection =
  | 'overview'
  | 'projects'
  | 'blogs'
  | 'testimonials'
  | 'inquiries'
  | 'messages'
  | 'settings'

type ManageSection = Exclude<AdminSection, 'overview' | 'settings'>

type AdminRecord = {
  id: string
  title: string
  owner: string
  category: string
  status: string
  date: string
  value: string
}

type SettingsState = {
  studioEmail: string
  notificationEmail: string
  whatsappNumber: string
  defaultRole: string
  leadSla: string
}

const sections: Array<{ id: AdminSection; label: string; icon: typeof FiGrid }> = [
  { id: 'overview', label: 'Overview', icon: FiGrid },
  { id: 'projects', label: 'Projects', icon: FiFolder },
  { id: 'blogs', label: 'Blog', icon: FiBookOpen },
  { id: 'testimonials', label: 'Testimonials', icon: FiStar },
  { id: 'inquiries', label: 'Project Inquiries', icon: FiInbox },
  { id: 'messages', label: 'Contact Messages', icon: FiMessageSquare },
  { id: 'settings', label: 'Settings', icon: FiSettings },
]

const initialRecords: Record<ManageSection, AdminRecord[]> = {
  projects: [
    {
      id: 'PRJ-1042',
      title: 'Smart Microplastic Detection System',
      owner: 'Aarav Mehta',
      category: 'AI',
      status: 'Active',
      date: '2026-06-22',
      value: 'Prototype',
    },
    {
      id: 'PRJ-1039',
      title: 'KUKA Robot Automation Projects',
      owner: 'Vikram Nair',
      category: 'Robotics',
      status: 'Review',
      date: '2026-06-20',
      value: 'Industrial',
    },
    {
      id: 'PRJ-1033',
      title: 'CubeSat Telemetry System',
      owner: 'Space Lab Cohort',
      category: 'Embedded',
      status: 'Active',
      date: '2026-06-18',
      value: 'Telemetry',
    },
    {
      id: 'PRJ-1028',
      title: 'NFC Audio Learning Device',
      owner: 'EdTech Studio',
      category: 'Embedded',
      status: 'Delivered',
      date: '2026-06-11',
      value: 'Learning',
    },
  ],
  blogs: [
    {
      id: 'BLG-221',
      title: 'How to Plan an IoT Prototype',
      owner: 'Editorial Team',
      category: 'IoT',
      status: 'Published',
      date: '2026-06-24',
      value: '1,820 views',
    },
    {
      id: 'BLG-219',
      title: 'Embedded Systems Checklist',
      owner: 'Engineering',
      category: 'Embedded',
      status: 'Draft',
      date: '2026-06-21',
      value: 'Draft',
    },
    {
      id: 'BLG-214',
      title: 'Robotics Demo Readiness Guide',
      owner: 'Automation Team',
      category: 'Robotics',
      status: 'Scheduled',
      date: '2026-06-19',
      value: 'Jul 02',
    },
  ],
  testimonials: [
    {
      id: 'TST-78',
      title: 'Prototype delivery feedback',
      owner: 'Nisha Rao',
      category: 'Students',
      status: 'Approved',
      date: '2026-06-23',
      value: '5 stars',
    },
    {
      id: 'TST-74',
      title: 'Industrial automation review',
      owner: 'Vikram Nair',
      category: 'Industry Clients',
      status: 'Approved',
      date: '2026-06-18',
      value: '5 stars',
    },
    {
      id: 'TST-69',
      title: 'Startup validation feedback',
      owner: 'Meera Shah',
      category: 'Startups',
      status: 'Pending',
      date: '2026-06-15',
      value: '5 stars',
    },
  ],
  inquiries: [
    {
      id: 'INQ-312',
      title: 'AI sorting system for lab samples',
      owner: 'Priya Menon',
      category: 'AI',
      status: 'New',
      date: '2026-06-27',
      value: 'Rs. 75k+',
    },
    {
      id: 'INQ-311',
      title: 'Water level dashboard with alerts',
      owner: 'Rohan Iyer',
      category: 'IoT',
      status: 'Qualified',
      date: '2026-06-26',
      value: 'Rs. 25k+',
    },
    {
      id: 'INQ-309',
      title: 'Mini conveyor automation demo',
      owner: 'Kiran Patel',
      category: 'Automation',
      status: 'Contacted',
      date: '2026-06-25',
      value: 'Rs. 2L+',
    },
  ],
  messages: [
    {
      id: 'MSG-902',
      title: 'Free consultation request',
      owner: 'Ananya Bose',
      category: 'Student',
      status: 'New',
      date: '2026-06-27',
      value: 'Email',
    },
    {
      id: 'MSG-897',
      title: 'Partnership inquiry',
      owner: 'Arjun Malhotra',
      category: 'Startup',
      status: 'Open',
      date: '2026-06-24',
      value: 'WhatsApp',
    },
    {
      id: 'MSG-891',
      title: 'Industrial training request',
      owner: 'Neha Verma',
      category: 'Industry',
      status: 'Closed',
      date: '2026-06-18',
      value: 'Phone',
    },
  ],
}

const trendData = [38, 44, 41, 58, 62, 74, 69, 86, 92, 104, 116, 128]
const categoryData = [
  { label: 'AI', value: 72 },
  { label: 'IoT', value: 88 },
  { label: 'Robotics', value: 56 },
  { label: 'Embedded', value: 80 },
  { label: 'Automation', value: 64 },
]

const pageSize = 4
const emptyRecord: AdminRecord = {
  id: '',
  title: '',
  owner: '',
  category: '',
  status: 'Draft',
  date: new Date().toISOString().slice(0, 10),
  value: '',
}

export function Admin() {
  const [authenticated, setAuthenticated] = useState(
    () => window.localStorage.getItem('projectsforu-admin-auth') === 'true',
  )
  const [loginError, setLoginError] = useState('')
  const [activeSection, setActiveSection] = useState<AdminSection>('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [records, setRecords] = useState(initialRecords)
  const [settings, setSettings] = useState<SettingsState>({
    studioEmail: 'hello@projectsforu.in',
    notificationEmail: 'admin@projectsforu.in',
    whatsappNumber: '+91 98765 43210',
    defaultRole: 'Editor',
    leadSla: '4 hours',
  })
  const { theme, toggleTheme } = useTheme()

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '')
    const password = String(formData.get('password') ?? '')

    if (email === 'admin@projectsforu.in' && password === 'Admin@123') {
      window.localStorage.setItem('projectsforu-admin-auth', 'true')
      setAuthenticated(true)
      setLoginError('')
      return
    }

    setLoginError('Use admin@projectsforu.in / Admin@123 for this demo dashboard.')
  }

  function logout() {
    window.localStorage.removeItem('projectsforu-admin-auth')
    setAuthenticated(false)
  }

  if (!authenticated) {
    return <AdminLogin onLogin={handleLogin} error={loginError} />
  }

  return (
    <>
      <SEO
        title="Admin Dashboard | ProjectsforU"
        description="Secure ProjectsforU admin dashboard for managing projects, blog, testimonials, inquiries, contact messages, and settings."
      />
      <div className="min-h-screen bg-[#f7f8fb] text-slate-950 dark:bg-[#07080b] dark:text-white">
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-72 border-r border-slate-200/80 bg-white/88 p-4 shadow-2xl shadow-slate-950/5 backdrop-blur-2xl transition duration-300 dark:border-white/10 dark:bg-[#0b0d12]/90 lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BrandLogo variant="symbol" className="h-10 w-10 rounded-[8px]" />
              <div>
                <p className="font-semibold tracking-tight">ProjectsforU</p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Secure Admin Console
                </p>
              </div>
            </div>
            <button
              aria-label="Close sidebar"
              className="grid h-9 w-9 place-items-center rounded-[8px] border border-slate-200 text-slate-500 lg:hidden dark:border-white/10"
              onClick={() => setSidebarOpen(false)}
              type="button"
            >
              <FiX aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-8 grid gap-1">
            {sections.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <button
                  className={`flex min-h-11 items-center gap-3 rounded-[8px] px-3 text-left text-sm font-semibold transition ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/10 dark:bg-white dark:text-slate-950'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/8 dark:hover:text-white'
                  }`}
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setSidebarOpen(false)
                  }}
                  type="button"
                >
                  <Icon className={isActive ? 'text-secondary dark:text-primary' : ''} aria-hidden="true" />
                  {item.label}
                </button>
              )
            })}
          </nav>

          <div className="absolute bottom-4 left-4 right-4 rounded-[8px] border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex items-center gap-2">
              <FiShield className="text-emerald-500" aria-hidden="true" />
              <p className="text-sm font-semibold">Admin session secured</p>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Role: Admin. In production this connects to the FastAPI JWT backend.
            </p>
          </div>
        </aside>

        {sidebarOpen ? (
          <button
            aria-label="Close sidebar overlay"
            className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            type="button"
          />
        ) : null}

        <div className="lg:pl-72">
          <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-[#f7f8fb]/80 backdrop-blur-2xl dark:border-white/10 dark:bg-[#07080b]/78">
            <div className="flex min-h-16 items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button
                  aria-label="Open sidebar"
                  className="grid h-10 w-10 place-items-center rounded-[8px] border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                  onClick={() => setSidebarOpen(true)}
                  type="button"
                >
                  <FiMenu aria-hidden="true" />
                </button>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Admin / {sectionLabel(activeSection)}
                  </p>
                  <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {activeSection === 'overview'
                      ? 'Dashboard Overview'
                      : activeSection === 'settings'
                        ? 'Settings'
                        : `Manage ${sectionLabel(activeSection)}`}
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Toggle dark mode"
                  className="grid h-10 w-10 place-items-center rounded-[8px] border border-slate-200 bg-white text-slate-700 transition hover:border-secondary hover:text-secondary dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                  onClick={toggleTheme}
                  type="button"
                >
                  {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
                </button>
                <button
                  className="hidden min-h-10 items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-red-300 hover:text-red-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white sm:inline-flex"
                  onClick={logout}
                  type="button"
                >
                  <FiLogOut aria-hidden="true" />
                  Logout
                </button>
              </div>
            </div>
          </header>

          <main className="px-5 py-6 sm:px-6 lg:px-8">
            {activeSection === 'overview' ? (
              <Overview records={records} />
            ) : activeSection === 'settings' ? (
              <SettingsPanel settings={settings} onSave={setSettings} />
            ) : (
              <ManagementTable
                records={records[activeSection]}
                section={activeSection}
                onCreate={(record) =>
                  setRecords((current) => ({
                    ...current,
                    [activeSection]: [record, ...current[activeSection]],
                  }))
                }
                onDelete={(id) =>
                  setRecords((current) => ({
                    ...current,
                    [activeSection]: current[activeSection].filter((item) => item.id !== id),
                  }))
                }
                onUpdate={(record) =>
                  setRecords((current) => ({
                    ...current,
                    [activeSection]: current[activeSection].map((item) =>
                      item.id === record.id ? record : item,
                    ),
                  }))
                }
              />
            )}
          </main>
        </div>
      </div>
    </>
  )
}

function AdminLogin({
  error,
  onLogin,
}: {
  error: string
  onLogin: (event: FormEvent<HTMLFormElement>) => void
}) {
  return (
    <>
      <SEO
        title="Admin Login | ProjectsforU"
        description="Secure ProjectsforU admin login."
      />
      <main className="future-shell grid min-h-screen place-items-center px-5 py-12">
        <form
          className="glass-panel premium-border w-full max-w-md rounded-[28px] p-7"
          onSubmit={onLogin}
        >
          <div className="mb-8 flex items-center gap-3">
            <BrandLogo variant="symbol" className="h-12 w-12 rounded-[14px] shadow-xl shadow-primary/20" />
            <div>
              <h1 className="text-2xl font-semibold text-[#07111f] dark:text-white">
                Admin Login
              </h1>
              <p className="text-sm text-[#52627a] dark:text-slate-400">
                Secure access for ProjectsforU staff
              </p>
            </div>
          </div>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#253248] dark:text-white">Email</span>
            <input
              className="min-h-12 rounded-[10px] border border-primary/10 bg-white/78 px-4 outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/15 dark:border-white/10 dark:bg-white/[0.06]"
              defaultValue="admin@projectsforu.in"
              name="email"
              type="email"
            />
          </label>
          <label className="mt-5 grid gap-2">
            <span className="text-sm font-semibold text-[#253248] dark:text-white">Password</span>
            <div className="flex items-center rounded-[10px] border border-primary/10 bg-white/78 px-4 transition focus-within:border-secondary focus-within:ring-4 focus-within:ring-secondary/15 dark:border-white/10 dark:bg-white/[0.06]">
              <FiLock className="mr-3 text-secondary" aria-hidden="true" />
              <input
                className="min-h-12 w-full bg-transparent outline-none"
                defaultValue="Admin@123"
                name="password"
                type="password"
              />
            </div>
          </label>
          {error ? <p className="mt-4 text-sm font-semibold text-red-500">{error}</p> : null}
          <button
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-xl shadow-primary/20 transition hover:bg-secondary hover:text-primary dark:bg-secondary dark:text-primary dark:hover:bg-white"
            type="submit"
          >
            Sign in securely
          </button>
          <p className="mt-5 text-xs leading-5 text-[#647189] dark:text-slate-400">
            Demo credentials are prefilled. Production authentication is ready to connect
            with the FastAPI JWT backend.
          </p>
        </form>
      </main>
    </>
  )
}

function Overview({ records }: { records: Record<ManageSection, AdminRecord[]> }) {
  const widgets = [
    {
      label: 'Total Projects',
      value: records.projects.length,
      delta: '+12%',
      icon: FiFolder,
      tone: 'text-cyan-500',
    },
    {
      label: 'New Leads',
      value:
        records.inquiries.filter((item) => item.status === 'New').length +
        records.messages.filter((item) => item.status === 'New').length,
      delta: '+8%',
      icon: FiInbox,
      tone: 'text-orange-500',
    },
    {
      label: 'Blog Posts',
      value: records.blogs.length,
      delta: '+3',
      icon: FiBookOpen,
      tone: 'text-emerald-500',
    },
    {
      label: 'Testimonials',
      value: records.testimonials.length,
      delta: '5.0 avg',
      icon: FiStar,
      tone: 'text-amber-500',
    },
  ]

  return (
    <div className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {widgets.map((widget) => {
          const Icon = widget.icon

          return (
            <Panel className="p-5" key={widget.label}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {widget.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight">{widget.value}</p>
                </div>
                <span className={`grid h-11 w-11 place-items-center rounded-[8px] bg-slate-100 text-xl dark:bg-white/[0.06] ${widget.tone}`}>
                  <Icon aria-hidden="true" />
                </span>
              </div>
              <p className="mt-5 text-sm font-semibold text-emerald-500">{widget.delta} this month</p>
            </Panel>
          )
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Panel className="p-5">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold">Lead Velocity</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Monthly inbound inquiries and contact messages
              </p>
            </div>
            <FiActivity className="text-secondary" aria-hidden="true" />
          </div>
          <LineChart values={trendData} />
        </Panel>

        <Panel className="p-5">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold">Category Demand</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Active project interest by category
              </p>
            </div>
            <FiBarChart2 className="text-secondary" aria-hidden="true" />
          </div>
          <div className="grid gap-4">
            {categoryData.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex justify-between text-sm font-semibold">
                  <span>{item.label}</span>
                  <span className="text-slate-500 dark:text-slate-400">{item.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-secondary to-accent"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <ManagementTable
        embedded
        records={records.inquiries}
        section="inquiries"
        onCreate={() => undefined}
        onDelete={() => undefined}
        onUpdate={() => undefined}
      />
    </div>
  )
}

function ManagementTable({
  embedded = false,
  onCreate,
  onDelete,
  onUpdate,
  records,
  section,
}: {
  embedded?: boolean
  onCreate: (record: AdminRecord) => void
  onDelete: (id: string) => void
  onUpdate: (record: AdminRecord) => void
  records: AdminRecord[]
  section: ManageSection
}) {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [page, setPage] = useState(1)
  const [modalMode, setModalMode] = useState<'create' | 'edit' | null>(null)
  const [draft, setDraft] = useState<AdminRecord>(emptyRecord)

  const statuses = useMemo(
    () => ['All', ...Array.from(new Set(records.map((item) => item.status)))],
    [records],
  )

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    return records.filter((item) => {
      const matchesSearch =
        !query ||
        [item.id, item.title, item.owner, item.category, item.status, item.value]
          .join(' ')
          .toLowerCase()
          .includes(query)
      const matchesStatus = status === 'All' || item.status === status

      return matchesSearch && matchesStatus
    })
  }, [records, search, status])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const visibleRows = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  function openCreate() {
    const prefix = sectionPrefix(section)
    setDraft({ ...emptyRecord, id: `${prefix}-${Math.floor(1000 + Math.random() * 8999)}` })
    setModalMode('create')
  }

  function openEdit(record: AdminRecord) {
    setDraft(record)
    setModalMode('edit')
  }

  function saveRecord(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (modalMode === 'create') onCreate(draft)
    if (modalMode === 'edit') onUpdate(draft)
    setModalMode(null)
  }

  return (
    <Panel className={embedded ? 'p-5' : 'p-0'}>
      <div className={`${embedded ? '' : 'p-5'} flex flex-col gap-4 border-b border-slate-200 dark:border-white/10 lg:flex-row lg:items-center lg:justify-between`}>
        <div>
          <h2 className="font-semibold">
            {embedded ? 'Latest Project Inquiries' : sectionLabel(section)}
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            CRUD operations with search, filters, and pagination.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative">
            <FiSearch
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              className="min-h-10 w-full rounded-[8px] border border-slate-200 bg-white pl-10 pr-3 text-sm outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/15 dark:border-white/10 dark:bg-white/[0.04]"
              onChange={(event) => {
                setSearch(event.target.value)
                setPage(1)
              }}
              placeholder="Search records"
              value={search}
            />
          </label>
          <select
            className="min-h-10 rounded-[8px] border border-slate-200 bg-white px-3 text-sm font-semibold outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/15 dark:border-white/10 dark:bg-[#11131a]"
            onChange={(event) => {
              setStatus(event.target.value)
              setPage(1)
            }}
            value={status}
          >
            {statuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {!embedded ? (
            <button
              className="inline-flex min-h-10 items-center justify-center rounded-[8px] bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-secondary hover:text-primary dark:bg-white dark:text-slate-950"
              onClick={openCreate}
              type="button"
            >
              <FiPlus className="mr-2" aria-hidden="true" />
              Add
            </button>
          ) : null}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
            <tr className="border-b border-slate-200 dark:border-white/10">
              <th className="px-5 py-4 font-semibold">ID</th>
              <th className="px-5 py-4 font-semibold">Title</th>
              <th className="px-5 py-4 font-semibold">Owner</th>
              <th className="px-5 py-4 font-semibold">Category</th>
              <th className="px-5 py-4 font-semibold">Status</th>
              <th className="px-5 py-4 font-semibold">Date</th>
              <th className="px-5 py-4 font-semibold">Value</th>
              <th className="px-5 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((item) => (
              <tr
                className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-white/5 dark:hover:bg-white/[0.035]"
                key={item.id}
              >
                <td className="px-5 py-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {item.id}
                </td>
                <td className="px-5 py-4 font-semibold">{item.title}</td>
                <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{item.owner}</td>
                <td className="px-5 py-4">
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold dark:border-white/10">
                    {item.category}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <StatusPill status={item.status} />
                </td>
                <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{item.date}</td>
                <td className="px-5 py-4 font-semibold">{item.value}</td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button
                      className="grid h-9 w-9 place-items-center rounded-[8px] border border-slate-200 text-slate-600 transition hover:border-secondary hover:text-secondary dark:border-white/10 dark:text-slate-300"
                      onClick={() => openEdit(item)}
                      type="button"
                    >
                      <FiEdit3 aria-hidden="true" />
                    </button>
                    <button
                      className="grid h-9 w-9 place-items-center rounded-[8px] border border-slate-200 text-slate-600 transition hover:border-red-300 hover:text-red-500 dark:border-white/10 dark:text-slate-300"
                      onClick={() => onDelete(item.id)}
                      type="button"
                    >
                      <FiTrash2 aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing {visibleRows.length} of {filtered.length} records
        </p>
        <div className="flex items-center gap-2">
          <button
            className="grid h-9 w-9 place-items-center rounded-[8px] border border-slate-200 transition hover:border-secondary disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10"
            disabled={currentPage === 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            type="button"
          >
            <FiChevronLeft aria-hidden="true" />
          </button>
          <span className="text-sm font-semibold">
            Page {currentPage} / {totalPages}
          </span>
          <button
            className="grid h-9 w-9 place-items-center rounded-[8px] border border-slate-200 transition hover:border-secondary disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10"
            disabled={currentPage === totalPages}
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            type="button"
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      {modalMode ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/50 px-5 backdrop-blur">
          <form
            className="w-full max-w-2xl rounded-[16px] border border-slate-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-[#0d1017]"
            onSubmit={saveRecord}
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                {modalMode === 'create' ? 'Create' : 'Edit'} {sectionLabel(section)}
              </h3>
              <button
                className="grid h-9 w-9 place-items-center rounded-[8px] border border-slate-200 dark:border-white/10"
                onClick={() => setModalMode(null)}
                type="button"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {(['id', 'title', 'owner', 'category', 'status', 'date', 'value'] as const).map((field) => (
                <label className={field === 'title' ? 'sm:col-span-2' : ''} key={field}>
                  <span className="text-sm font-semibold capitalize text-slate-600 dark:text-slate-300">
                    {field}
                  </span>
                  <input
                    className="mt-2 min-h-11 w-full rounded-[8px] border border-slate-200 bg-white px-3 outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/15 dark:border-white/10 dark:bg-white/[0.04]"
                    onChange={(event) => setDraft((current) => ({ ...current, [field]: event.target.value }))}
                    type={field === 'date' ? 'date' : 'text'}
                    value={draft[field]}
                  />
                </label>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="min-h-10 rounded-[8px] border border-slate-200 px-4 text-sm font-semibold dark:border-white/10"
                onClick={() => setModalMode(null)}
                type="button"
              >
                Cancel
              </button>
              <button
                className="inline-flex min-h-10 items-center rounded-[8px] bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-secondary hover:text-primary dark:bg-white dark:text-slate-950"
                type="submit"
              >
                <FiSave className="mr-2" aria-hidden="true" />
                Save
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </Panel>
  )
}

function SettingsPanel({
  onSave,
  settings,
}: {
  onSave: (settings: SettingsState) => void
  settings: SettingsState
}) {
  const [draft, setDraft] = useState(settings)
  const [saved, setSaved] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSave(draft)
    setSaved(true)
    window.setTimeout(() => setSaved(false), 1800)
  }

  return (
    <Panel className="p-5">
      <form onSubmit={submit}>
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Workspace Settings</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Configure admin defaults, notification routing, and lead response policy.
            </p>
          </div>
          <FiSettings className="text-secondary" aria-hidden="true" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(draft).map(([key, value]) => (
            <label key={key}>
              <span className="text-sm font-semibold capitalize text-slate-600 dark:text-slate-300">
                {key.replace(/([A-Z])/g, ' $1')}
              </span>
              <input
                className="mt-2 min-h-11 w-full rounded-[8px] border border-slate-200 bg-white px-3 outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/15 dark:border-white/10 dark:bg-white/[0.04]"
                onChange={(event) =>
                  setDraft((current) => ({ ...current, [key]: event.target.value }))
                }
                value={value}
              />
            </label>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button
            className="inline-flex min-h-10 items-center rounded-[8px] bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-secondary hover:text-primary dark:bg-white dark:text-slate-950"
            type="submit"
          >
            <FiSave className="mr-2" aria-hidden="true" />
            Save settings
          </button>
          {saved ? <span className="text-sm font-semibold text-emerald-500">Settings saved</span> : null}
        </div>
      </form>
    </Panel>
  )
}

function LineChart({ values }: { values: number[] }) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100
      const y = 100 - ((value - min) / (max - min)) * 78 - 11

      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="h-72 rounded-[8px] border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
      <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="adminLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#075FD6" />
            <stop offset="100%" stopColor="#256F00" />
          </linearGradient>
        </defs>
        <polyline fill="none" points={points} stroke="url(#adminLine)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        {values.map((value, index) => {
          const x = (index / (values.length - 1)) * 100
          const y = 100 - ((value - min) / (max - min)) * 78 - 11

          return <circle cx={x} cy={y} fill="#ffffff" key={String(index)} r="2.3" stroke="#075FD6" strokeWidth="1.4" />
        })}
      </svg>
    </div>
  )
}

function StatusPill({ status }: { status: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusTone(status)}`}>{status}</span>
}

function statusTone(status: string) {
  if (['Active', 'Published', 'Approved', 'Qualified', 'Delivered'].includes(status)) {
    return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
  }

  if (['New', 'Pending', 'Review', 'Scheduled', 'Open', 'Contacted'].includes(status)) {
    return 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
  }

  return 'bg-slate-500/10 text-slate-600 dark:text-slate-300'
}

function sectionLabel(section: AdminSection) {
  return sections.find((item) => item.id === section)?.label ?? 'Records'
}

function sectionPrefix(section: ManageSection) {
  return {
    blogs: 'BLG',
    inquiries: 'INQ',
    messages: 'MSG',
    projects: 'PRJ',
    testimonials: 'TST',
  }[section]
}

function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section
      className={`overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-xl shadow-slate-950/[0.035] dark:border-white/10 dark:bg-[#0d1017] ${className}`}
    >
      {children}
    </section>
  )
}
