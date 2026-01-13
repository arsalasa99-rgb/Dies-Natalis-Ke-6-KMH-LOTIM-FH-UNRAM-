export enum View {
  HOME = 'HOME',
  ACTIVITIES = 'ACTIVITIES',
  ACTIVITY_DETAIL = 'ACTIVITY_DETAIL',
  TIMELINE = 'TIMELINE',
  COMMITTEE = 'COMMITTEE',
  GALLERY = 'GALLERY',
  CONTACT = 'CONTACT',
  RAB = 'RAB'
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string; // Short description
  fullDescription: string; // Long description
  imageUrl: string;
  location: string;
  coordinator: string;
  status: 'Upcoming' | 'Completed' | 'Ongoing';
}

export interface Document {
  id: string;
  title: string;
  type: string; // Changed to string to support upload types
  date: string;
  size: string;
  category: string;
  url?: string; // Added for blob URL
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  division?: string;
  imageUrl?: string; // Added for member photo
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  caption: string;
  category: 'DN6' | 'DN5'; // Added category for classification
}

// UPDATE: Timeline Item Detail (Target & Fokus per Divisi)
export interface TimelineItemDetail {
  division: string;
  target: string;
  focus: string;
}

// UPDATE: Timeline Event Grouped by Date
export interface TimelineEvent {
  id: string;
  date: string; // Periode (misal: 12-18 Jan 2026)
  status: 'completed' | 'upcoming' | 'ongoing'; 
  items: TimelineItemDetail[]; // List kegiatan divisi di tanggal tersebut
}