const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000/api/v1'
const requestTimeoutMs = 18_000

export type ContactPayload = {
  email: string
  message: string
  name: string
  phone?: string
  subject: string
}

export async function submitContactForm(payload: ContactPayload) {
  return apiFetch(`${apiBaseUrl}/contacts`, {
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })
}

export async function submitProjectSubmission(payload: FormData) {
  return apiFetch(`${apiBaseUrl}/project-submissions`, {
    body: payload,
    method: 'POST',
  })
}

async function apiFetch(url: string, init: RequestInit) {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), requestTimeoutMs)

  try {
    const response = await fetch(url, {
      ...init,
      signal: controller.signal,
    })

    return parseApiResponse(response)
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('The request timed out. Please check your connection and try again.')
    }

    if (error instanceof TypeError) {
      throw new Error('Could not reach the ProjectsforU backend. Please try again shortly.')
    }

    throw error
  } finally {
    window.clearTimeout(timeout)
  }
}

async function parseApiResponse(response: Response) {
  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const detail = data?.detail
    const message = Array.isArray(detail)
      ? detail.map((item) => item.msg ?? item.message).filter(Boolean).join(' ')
      : detail || 'Something went wrong. Please try again.'

    throw new Error(message)
  }

  return data
}
