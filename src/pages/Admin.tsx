import { useMemo, useState, type ReactNode } from 'react'
import {
  FiActivity,
  FiBarChart2,
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
  FiFolder,
  FiGrid,
  FiInbox,
  FiMenu,
  FiMessageSquare,
  FiMoon,
  FiSearch,
  FiStar,
  FiSun,
  FiX,
} from 'react-icons/fi'

import { SEO } from '../components/SEO'
import { useTheme } from '../hooks/useTheme'

type AdminSection =
  | 'overview'
  | 'projects'
  | 'blogs'
  | 'testimonials'
  | 'submissions'
  | 'contacts'

type AdminRecord = {
  id: string
  title: string
  owner: string
  category: string
  status: string
  date: string
  value: string
}

const sections: Array<{ id: AdminSection; label: string; icon: typeof FiGrid }> = [
  { id: 'overview', label: 'Overview', icon: FiGrid },
  { id: 'projects', label: 'Projects', icon: FiFolder },
  { id: 'blogs', label: 'Blogs', icon: FiBookOpen },
  { id: 'testimonials', label: 'Testimonials', icon: FiStar },
  { id: 'submissions', label: 'Project Submissions', icon: FiInbox },
  { id: 'contacts', label: 'Contacts', icon: FiMessageSquare },
]

const records: Record<Exclude<AdminSection, 'overview'>, AdminRecord[]> = {
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
    {
      id: 'PRJ-1022',
      title: 'Smart Tank Monitoring System',
      owner: 'Rohan Iyer',
      category: 'IoT',
      status: 'Active',
      date: '2026-06-08',
      value: 'Monitoring',
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
  submissions: [
    {
      id: 'SUB-312',
      title: 'AI sorting system for lab samples',
      owner: 'Priya Menon',
      category: 'AI',
      status: 'New',
      date: '2026-06-27',
      value: 'Rs. 75k+',
    },
    {
      id: 'SUB-311',
      title: 'Water level dashboard with alerts',
      owner: 'Rohan Iyer',
      category: 'IoT',
      status: 'Qualified',
      date: '2026-06-26',
      value: 'Rs. 25k+',
    },
    {
      id: 'SUB-309',
      title: 'Mini conveyor automation demo',
      owner: 'Kiran Patel',
      category: 'Automation',
      status: 'Contacted',
      date: '2026-06-25',
      value: 'Rs. 2L+',
    },
    {
      id: 'SUB-305',
      title: 'RFID attendance hardware',
      owner: 'Sneha Kapoor',
      category: 'Embedded',
      status: 'New',
      date: '2026-06-21',
      value: 'Guidance',
    },
  ],
  contacts: [
    {
      id: 'CON-902',
      title: 'Free consultation request',
      owner: 'Ananya Bose',
      category: 'Student',
      status: 'New',
      date: '2026-06-27',
      value: 'Email',
    },
    {
      id: 'CON-897',
      title: 'Partnership inquiry',
      owner: 'Arjun Malhotra',
      category: 'Startup',
      status: 'Open',
      date: '2026-06-24',
      value: 'WhatsApp',
    },
    {
      id: 'CON-891',
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

export function Admin() {
  const [activeSection, setActiveSection] = useState<AdminSection>('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <SEO
        title="Admin Dashboard | ProjectsforU"
        description="ProjectsforU admin dashboard for managing projects, blogs, testimonials, submissions, and contacts."
      />
      <div className="min-h-screen bg-[#f7f8fb] text-slate-950 dark:bg-[#07080b] dark:text-white">
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-72 border-r border-slate-200/80 bg-white/88 p-4 shadow-2xl shadow-slate-950/5 backdrop-blur-2xl transition duration-300 dark:border-white/10 dark:bg-[#0b0d12]/90 lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-slate-950 text-sm font-black text-secondary dark:bg-secondary dark:text-primary">
                PU
              </span>
              <div>
                <p className="font-semibold tracking-tight">ProjectsforU</p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Admin Console
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
            <p className="text-sm font-semibold">Lead response SLA</p>
            <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
              7 new leads need review. Keep the average first response under 4 hours.
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
                    Admin / {sections.find((item) => item.id === activeSection)?.label}
                  </p>
                  <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {activeSection === 'overview'
                      ? 'Dashboard Overview'
                      : `Manage ${sections.find((item) => item.id === activeSection)?.label}`}
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
                <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/[0.04] sm:flex">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-xs font-black text-primary">
                    AD
                  </span>
                  <span className="text-sm font-semibold">Admin</span>
                </div>
              </div>
            </div>
          </header>

          <main className="px-5 py-6 sm:px-6 lg:px-8">
            {activeSection === 'overview' ? <Overview /> : <ManagementTable section={activeSection} />}
          </main>
        </div>
      </div>
    </>
  )
}

function Overview() {
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
      value: records.submissions.filter((item) => item.status === 'New').length + records.contacts.filter((item) => item.status === 'New').length,
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
                Monthly inbound submissions and contacts
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

      <ManagementTable embedded section="submissions" />
    </div>
  )
}

function ManagementTable({
  embedded = false,
  section,
}: {
  embedded?: boolean
  section: Exclude<AdminSection, 'overview'>
}) {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [page, setPage] = useState(1)

  const sectionRecords = records[section]
  const statuses = useMemo(
    () => ['All', ...Array.from(new Set(sectionRecords.map((item) => item.status)))],
    [sectionRecords],
  )

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()

    return sectionRecords.filter((item) => {
      const matchesSearch =
        !query ||
        [item.id, item.title, item.owner, item.category, item.status]
          .join(' ')
          .toLowerCase()
          .includes(query)
      const matchesStatus = status === 'All' || item.status === status

      return matchesSearch && matchesStatus
    })
  }, [search, sectionRecords, status])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const visibleRows = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  function changeSearch(value: string) {
    setSearch(value)
    setPage(1)
  }

  function changeStatus(value: string) {
    setStatus(value)
    setPage(1)
  }

  return (
    <Panel className={embedded ? 'p-5' : 'p-0'}>
      <div className={`${embedded ? '' : 'p-5'} flex flex-col gap-4 border-b border-slate-200 dark:border-white/10 lg:flex-row lg:items-center lg:justify-between`}>
        <div>
          <h2 className="font-semibold">
            {embedded ? 'Latest Project Submissions' : sectionLabel(section)}
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Search, filter, and review admin records.
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
              onChange={(event) => changeSearch(event.target.value)}
              placeholder="Search records"
              value={search}
            />
          </label>
          <select
            className="min-h-10 rounded-[8px] border border-slate-200 bg-white px-3 text-sm font-semibold outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/15 dark:border-white/10 dark:bg-[#11131a]"
            onChange={(event) => changeStatus(event.target.value)}
            value={status}
          >
            {statuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
            <tr className="border-b border-slate-200 dark:border-white/10">
              <th className="px-5 py-4 font-semibold">ID</th>
              <th className="px-5 py-4 font-semibold">Title</th>
              <th className="px-5 py-4 font-semibold">Owner</th>
              <th className="px-5 py-4 font-semibold">Category</th>
              <th className="px-5 py-4 font-semibold">Status</th>
              <th className="px-5 py-4 font-semibold">Date</th>
              <th className="px-5 py-4 font-semibold">Value</th>
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
            <stop offset="0%" stopColor="#00C8FF" />
            <stop offset="100%" stopColor="#FF6B00" />
          </linearGradient>
        </defs>
        <polyline fill="none" points={points} stroke="url(#adminLine)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        {values.map((value, index) => {
          const x = (index / (values.length - 1)) * 100
          const y = 100 - ((value - min) / (max - min)) * 78 - 11

          return <circle cx={x} cy={y} fill="#ffffff" key={String(index)} r="2.3" stroke="#00C8FF" strokeWidth="1.4" />
        })}
      </svg>
    </div>
  )
}

function StatusPill({ status }: { status: string }) {
  const tone = statusTone(status)

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>
      {status}
    </span>
  )
}

function statusTone(status: string) {
  if (['Active', 'Published', 'Approved', 'Qualified'].includes(status)) {
    return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
  }

  if (['New', 'Pending', 'Review', 'Scheduled', 'Open'].includes(status)) {
    return 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
  }

  return 'bg-slate-500/10 text-slate-600 dark:text-slate-300'
}

function sectionLabel(section: Exclude<AdminSection, 'overview'>) {
  const match = sections.find((item) => item.id === section)

  return match ? match.label : 'Records'
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
