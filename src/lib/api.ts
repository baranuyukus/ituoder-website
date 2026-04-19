/**
 * itüöder Public API — src/lib/api.ts
 * Base: https://panel.ituogrenci.org.tr/lib/api/public.php
 *
 * Astro frontmatter (SSG/SSR) içinde kullanılmak üzere tasarlandı.
 * Build sırasında server-side çalışır → CORS sorunu yoktur.
 */

const API_BASE = 'https://panel.ituogrenci.org.tr/lib/api/public.php';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Partner {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  location: string | null;
  location_url: string | null;
  button_url: string | null;
  type: 'qrcode' | 'codelist' | 'button';
  has_discount: boolean;
  discount_rate: string | null;
  listing_order: number;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  summary: string | null;
  cover_image: string | null;
  published_at: string | null;
  read_time: string | null;
  tags: string[] | null;
  is_active: number;
  created_at: string;
  updated_at: string;
  content?: string | null; // sadece slug ile çekildiğinde gelir
}

export interface BoardMember {
  id: number;
  name: string;
  title: string | null;
  photo_url: string | null;
  sort_order: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  sort_order: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  title: string;
  description: string | null;
  image_url: string | null;
  stats: Record<string, unknown> | null;
  sort_order: number;
  is_active: number;
  created_at: string;
  updated_at: string;
}

// ─── Core fetcher ────────────────────────────────────────────────────────────

async function apiFetch<T>(params: Record<string, string>): Promise<T> {
  const qs = new URLSearchParams(params).toString();
  const res = await fetch(`${API_BASE}?${qs}`);

  if (!res.ok) {
    throw new Error(`API HTTP error ${res.status} for params: ${qs}`);
  }

  const json = await res.json();

  if (!json.success) {
    throw new Error(`API error: ${json.message}`);
  }

  return json.data as T;
}

// ─── Endpoint fonksiyonları ───────────────────────────────────────────────────

/** İş ortakları — Fayda Havuzu */
export async function fetchPartners(): Promise<Partner[]> {
  return apiFetch<Partner[]>({ endpoint: 'partners' });
}

/** Tüm blog yazıları (content alanı gelmez) */
export async function fetchPosts(): Promise<Post[]> {
  return apiFetch<Post[]>({ endpoint: 'posts' });
}

/** Tek blog yazısı — slug ile (content dahil) */
export async function fetchPost(slug: string): Promise<Post> {
  return apiFetch<Post>({ endpoint: 'posts', slug });
}

/** Yönetim kurulu üyeleri */
export async function fetchBoardMembers(): Promise<BoardMember[]> {
  return apiFetch<BoardMember[]>({ endpoint: 'board-members' });
}

/** SSS — opsiyonel kategori filtresi */
export async function fetchFaq(category?: string): Promise<FaqItem[]> {
  const params: Record<string, string> = { endpoint: 'faq' };
  if (category) params.category = category;
  return apiFetch<FaqItem[]>(params);
}

/** Saha projeleri */
export async function fetchProjects(): Promise<Project[]> {
  return apiFetch<Project[]>({ endpoint: 'projects' });
}
