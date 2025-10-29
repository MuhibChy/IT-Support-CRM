
import { User, Project, Task, Role, Priority, Status, Category } from '../types';

export const users: User[] = [
  { id: 1, name: 'Alice Johnson', role: Role.Admin, avatar: 'https://picsum.photos/seed/alice/100/100' },
  { id: 2, name: 'Bob Williams', role: Role.Manager, avatar: 'https://picsum.photos/seed/bob/100/100' },
  { id: 3, name: 'Charlie Brown', role: Role.TeamMember, avatar: 'https://picsum.photos/seed/charlie/100/100' },
  { id: 4, name: 'Diana Miller', role: Role.TeamMember, avatar: 'https://picsum.photos/seed/diana/100/100' },
  { id: 5, name: 'Ethan Davis', role: Role.TeamMember, avatar: 'https://picsum.photos/seed/ethan/100/100' },
];

export const projects: Project[] = [
  { id: 1, name: 'E-commerce Platform', description: 'Build a new e-commerce website for Client X.', team: [2, 3, 4] },
  { id: 2, name: 'Mobile Banking App', description: 'Develop a secure mobile banking application for iOS and Android.', team: [2, 4, 5] },
  { id: 3, name: 'SEO Campaign Q3', description: 'Improve search engine rankings for Client Y.', team: [3, 5] },
];

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 7);
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() -1);

const formatDate = (date: Date) => date.toISOString().split('T')[0];

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Design homepage mockups',
    description: 'Create high-fidelity mockups for the new e-commerce homepage.',
    category: Category.WebsiteDev,
    priority: Priority.High,
    status: Status.InProgress,
    dueDate: formatDate(tomorrow),
    assignedTo: 3,
    projectId: 1,
  },
  {
    id: 2,
    title: 'Setup user authentication API',
    description: 'Implement JWT-based authentication for the mobile app.',
    category: Category.SoftwareDev,
    priority: Priority.Urgent,
    status: Status.ToDo,
    dueDate: formatDate(nextWeek),
    assignedTo: 4,
    projectId: 2,
  },
  {
    id: 3,
    title: 'Keyword research for SEO',
    description: 'Identify target keywords for the Q3 campaign.',
    category: Category.SEO,
    priority: Priority.Medium,
    status: Status.Done,
    dueDate: formatDate(yesterday),
    assignedTo: 5,
    projectId: 3,
  },
  {
    id: 4,
    title: 'Fix login button bug on staging',
    description: 'Users reported the login button is unresponsive on the staging server.',
    category: Category.ITSupport,
    priority: Priority.High,
    status: Status.InProgress,
    dueDate: formatDate(today),
    assignedTo: 4,
    projectId: 2,
  },
  {
    id: 5,
    title: 'Deploy shopping cart feature',
    description: 'Merge and deploy the new shopping cart functionality to production.',
    category: Category.WebsiteDev,
    priority: Priority.Medium,
    status: Status.ToDo,
    dueDate: formatDate(tomorrow),
    assignedTo: 3,
    projectId: 1,
  },
  {
    id: 6,
    title: 'Client meeting recap',
    description: 'Summarize the key points from the meeting with Client X and create follow-up tasks.',
    category: Category.DigitalMarketing,
    priority: Priority.Low,
    status: Status.Done,
    dueDate: formatDate(yesterday),
    assignedTo: 2,
    projectId: 1,
  },
  {
    id: 7,
    title: 'On-page SEO for product pages',
    description: 'Optimize titles, meta descriptions, and image alt tags for all product pages.',
    category: Category.SEO,
    priority: Priority.Medium,
    status: Status.Pending,
    dueDate: formatDate(nextWeek),
    assignedTo: 5,
    projectId: 3,
  },
   {
    id: 8,
    title: 'Resolve server downtime issue',
    description: 'Investigate and resolve the recent server downtime for Client Z.',
    category: Category.ITSupport,
    priority: Priority.Urgent,
    status: Status.ToDo,
    dueDate: formatDate(today),
    assignedTo: 4,
    projectId: 2,
  }
];
