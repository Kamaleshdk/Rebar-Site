// Static site content. Edit these arrays directly to update Services,
// Projects, Project Types, Technology, Standards and FAQ content.
// No external data files are read at runtime — this is plain TypeScript data.
import type { Service, Project, ProjectType, FAQ, Technology, Standard, TeamMember } from '../types'

export const services: Service[] = [
  { id: 'S01', title: 'Rebar Detailing', short_description: 'Beams, columns, slabs, footings, rafts, walls, pile caps and staircases.', description: 'Full reinforcement detailing across structural elements, prepared to fabrication-ready standard.', icon: 'ruler', image: '', category: 'detailing', featured: true, order: 1 },
  { id: 'S02', title: '3D Rebar Modeling', short_description: 'BIM reinforcement modeling with coordination and clash detection.', description: 'Constructible 3D rebar models used for coordination review and constructability checks ahead of fabrication.', icon: 'box', image: '', category: 'bim', featured: true, order: 2 },
  { id: 'S03', title: 'Bar Bending Schedules', short_description: 'Bar marks, diameter, shape, length, quantity and weight.', description: 'Structured BBS output tied directly to the detailing model, formatted for site and fabrication use.', icon: 'table', image: '', category: 'documentation', featured: true, order: 3 },
  { id: 'S04', title: 'Shop & Placing Drawings', short_description: 'Fabrication and placing drawings for site crews.', description: 'Clear, dimensioned shop and placing drawings that translate the model into buildable instructions.', icon: 'file-text', image: '', category: 'documentation', featured: true, order: 4 },
  { id: 'S05', title: 'Quantity Takeoff', short_description: 'Reinforcement quantities derived directly from the model.', description: 'Accurate takeoff reports generated from the reinforcement model to support procurement and estimating.', icon: 'calculator', image: '', category: 'estimation', featured: false, order: 5 },
  { id: 'S06', title: 'Rebar Estimation', short_description: 'Early-stage reinforcement estimates for budgeting.', description: 'Preliminary reinforcement estimates to support tender and early budget planning.', icon: 'trending-up', image: '', category: 'estimation', featured: false, order: 6 },
  { id: 'S07', title: 'Rebar Optimization', short_description: 'Reviewing bar layouts for material efficiency.', description: 'Layout and lap-length review aimed at reducing waste without compromising design intent.', icon: 'settings', image: '', category: 'optimization', featured: false, order: 7 },
  { id: 'S08', title: 'RFI / Drawing Coordination', short_description: 'Tracking clarifications between design and fabrication.', description: 'Structured RFI tracking and drawing coordination to keep design, detailing and site aligned.', icon: 'message-square', image: '', category: 'coordination', featured: false, order: 8 },
]

export const projectTypes: ProjectType[] = [
  { id: 'PT01', name: 'Residential', description: 'Multi-unit residential and housing structures.', icon: 'home', order: 1 },
  { id: 'PT02', name: 'Commercial', description: 'Office, retail and mixed-use developments.', icon: 'building', order: 2 },
  { id: 'PT03', name: 'Industrial', description: 'Manufacturing and processing facilities.', icon: 'factory', order: 3 },
  { id: 'PT04', name: 'Infrastructure', description: 'Public and civil infrastructure works.', icon: 'road', order: 4 },
  { id: 'PT05', name: 'Bridges', description: 'Reinforced concrete bridge structures.', icon: 'milestone', order: 5 },
  { id: 'PT06', name: 'High-Rise', description: 'Tall reinforced concrete structures.', icon: 'building-2', order: 6 },
  { id: 'PT07', name: 'Data Centers', description: 'Mission-critical facility structures.', icon: 'server', order: 7 },
  { id: 'PT08', name: 'Warehouses', description: 'Large-span industrial and logistics buildings.', icon: 'warehouse', order: 8 },
  { id: 'PT09', name: 'Foundations', description: 'Mat, pile cap and deep foundation systems.', icon: 'layers', order: 9 },
  { id: 'PT10', name: 'Complex Concrete Structures', description: 'Geometrically complex reinforced structures.', icon: 'shapes', order: 10 },
]

export const projects: Project[] = [
  { id: 'P01', project_name: 'PROJECT 01', project_type: 'Commercial Structure', location: 'Placeholder Location', description: 'Placeholder project — replace with a real project.', scope: 'Reinforcement detailing, BBS', software: 'Tekla Structures', deliverables: 'Shop drawings, BBS, 3D model', image: '', featured: true, order: 1 },
  { id: 'P02', project_name: 'PROJECT 02', project_type: 'Industrial Facility', location: 'Placeholder Location', description: 'Placeholder project — replace with a real project.', scope: 'Detailing, coordination', software: 'Revit', deliverables: 'Placing drawings, BBS', image: '', featured: true, order: 2 },
  { id: 'P03', project_name: 'PROJECT 03', project_type: 'High-Rise Structure', location: 'Placeholder Location', description: 'Placeholder project — replace with a real project.', scope: '3D modeling, QTO', software: 'Tekla Structures', deliverables: 'Model, quantity report', image: '', featured: true, order: 3 },
  { id: 'P04', project_name: 'PROJECT 04', project_type: 'Infrastructure', location: 'Placeholder Location', description: 'Placeholder project — replace with a real project.', scope: 'Shop drawings, BBS', software: 'AutoCAD', deliverables: 'Shop drawings, BBS', image: '', featured: true, order: 4 },
]

export const technology: Technology[] = [
  { id: 'T01', name: 'Tekla Structures', description: 'Reinforcement modeling and BIM coordination.', logo: '', category: 'modeling', order: 1 },
  { id: 'T02', name: 'Autodesk Revit', description: 'Structural BIM authoring and coordination.', logo: '', category: 'modeling', order: 2 },
  { id: 'T03', name: 'AutoCAD', description: '2D shop and placing drawing production.', logo: '', category: 'drafting', order: 3 },
  { id: 'T04', name: 'Navisworks', description: 'Model review and clash coordination.', logo: '', category: 'coordination', order: 4 },
]

export const standards: Standard[] = [
  { id: 'ST01', name: 'ACI', description: 'American Concrete Institute detailing provisions.', status: 'supported', order: 1 },
  { id: 'ST02', name: 'BS', description: 'British Standards reinforcement detailing.', status: 'supported', order: 2 },
  { id: 'ST03', name: 'Eurocode', description: 'Eurocode 2 reinforcement detailing rules.', status: 'supported', order: 3 },
  { id: 'ST04', name: 'IS', description: 'Indian Standard reinforcement detailing.', status: 'supported', order: 4 },
]

export const faqItems: FAQ[] = [
  { id: 'F01', question: 'What information do you need to start a project?', answer: 'Structural drawings or a BIM model, project specification and applicable design standards are typically enough to begin scoping.', category: 'general', order: 1 },
  { id: 'F02', question: 'What software do you use?', answer: 'We work primarily in Tekla Structures and Revit, with AutoCAD and Navisworks for drafting and coordination.', category: 'technology', order: 2 },
  { id: 'F03', question: 'Can you work from structural PDFs?', answer: 'Yes. We can detail directly from structural PDF drawings when a native model is not available.', category: 'general', order: 3 },
  { id: 'F04', question: 'Do you provide 3D rebar models?', answer: 'Yes, 3D reinforcement models are available as part of our BIM detailing service.', category: 'services', order: 4 },
  { id: 'F05', question: 'Do you provide bar bending schedules?', answer: 'Yes, BBS output is generated directly from the reinforcement model to keep quantities consistent.', category: 'services', order: 5 },
  { id: 'F06', question: 'Can you handle drawing revisions?', answer: 'Yes, revisions are tracked and reissued with clear revision clouds and a change log.', category: 'process', order: 6 },
  { id: 'F07', question: 'Do you support international projects?', answer: 'Yes, we detail to a range of regional standards depending on project requirements.', category: 'general', order: 7 },
  { id: 'F08', question: 'What file formats can you deliver?', answer: 'Typical deliverables include PDF, DWG, IFC and native model formats, depending on project needs.', category: 'services', order: 8 },
  { id: 'F09', question: 'How do you handle RFIs?', answer: 'RFIs are logged, tracked and resolved in coordination with the design team through to close-out.', category: 'process', order: 9 },
  { id: 'F10', question: 'How can I request a quotation?', answer: 'Send your structural drawings, scope and BIM model (if available) through the contact form and we will review the requirements.', category: 'general', order: 10 },
]

export const team: TeamMember[] = [
  { id: 'TM01', name: '[Team Member Name]', role: '[Role]', bio: 'Placeholder bio — add real team profiles.', photo: '', order: 1 },
]
