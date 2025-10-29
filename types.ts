
export enum Role {
  Admin = 'Admin',
  Manager = 'Manager',
  TeamMember = 'Team Member',
}

export enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Urgent = 'Urgent',
}

export enum Status {
  ToDo = 'To Do',
  InProgress = 'In Progress',
  Done = 'Done',
  Pending = 'Pending',
}

export enum Category {
  WebsiteDev = 'Website Development',
  SoftwareDev = 'Software Development',
  DigitalMarketing = 'Digital Marketing',
  SEO = 'SEO',
  ITSupport = 'IT Support',
}

export interface User {
  id: number;
  name: string;
  role: Role;
  avatar: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  category: Category;
  priority: Priority;
  status: Status;
  dueDate: string; // YYYY-MM-DD
  assignedTo: number;
  projectId: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  team: number[];
}
