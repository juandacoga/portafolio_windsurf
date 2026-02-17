'use client';

import Link from 'next/link';
import { Project } from '@/data/aboutData';
import { UI } from './ui';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={UI.CLASSES.CARD_BASE + ' group h-full flex flex-col'}>
      <div className="aspect-video bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center relative shrink-0">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-3 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <span className="text-gray-600 text-sm font-medium">Proyecto</span>
        </div>
        {project.demoUrl && (
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
            <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Ver Demo
            </span>
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2 min-h-10 flex items-start">
          {project.title}
        </h3>
        <p className="text-gray-600 text-xs mb-3 line-clamp-3 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.slice(0, 2).map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          <div className="flex gap-2 flex-1">
            {project.demoUrl ? (
              <Link
                href={project.demoUrl as any}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Demo
              </Link>
            ) : (
              <UI.DisabledButton size="sm">Demo</UI.DisabledButton>
            )}
            {project.githubUrl ? (
              <Link
                href={project.githubUrl as any}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded hover:bg-gray-900 transition-colors duration-200"
              >
                GitHub
              </Link>
            ) : (
              <UI.DisabledButton size="sm">GitHub</UI.DisabledButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
