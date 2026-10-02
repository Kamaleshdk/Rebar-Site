export interface Service {
  id: string
  title: string
  short_description: string
  description: string
  icon: string
  image: string
  category: string
  featured: boolean
  order: number
}

export interface Project {
  id: string
  project_name: string
  project_type: string
  location: string
  description: string
  scope: string
  software: string
  deliverables: string
  image: string
  featured: boolean
  order: number
}

export interface ProjectType {
  id: string
  name: string
  description: string
  icon: string
  order: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
}

export interface Technology {
  id: string
  name: string
  description: string
  logo: string
  category: string
  order: number
}

export interface Standard {
  id: string
  name: string
  description: string
  status: string
  order: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo: string
  order: number
}

export interface ContactSubmission {
  id: string
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  service: string
  location: string
  message: string
  submittedAt: string
}
