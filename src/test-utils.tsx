import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'
import userEvent from '@testing-library/user-event'

// Custom render function with providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  wrapper?: ReactNode
}

const customRender = (
  ui: ReactElement,
  options: CustomRenderOptions = {}
) => {
  const { wrapper, ...renderOptions } = options
  return render(ui, { wrapper, ...renderOptions })
}

// Mock data factories
export const createMockPost = (overrides: Partial<any> = {}) => ({
  id: '1',
  title: 'Test Post',
  summary: 'Test summary',
  content: 'Test content',
  featured: false,
  author: 'Test Author',
  date: '2024-01-01',
  ...overrides
})

export const createMockProject = (overrides: Partial<any> = {}) => ({
  id: '1',
  title: 'Test Project',
  description: 'Test description',
  image: '/test.jpg',
  tech: ['Test Tech'],
  demoUrl: 'https://demo.example.com',
  githubUrl: 'https://github.com/example/test',
  ...overrides
})

export const createMockTalk = (overrides: Partial<any> = {}) => ({
  id: '1',
  title: 'Test Talk',
  summary: 'Test summary',
  thumbnail: '/test-talk.jpg',
  event: 'Test Conference',
  date: '2024-01-01',
  videoUrl: 'https://youtube.com/watch?v=test',
  slidesUrl: 'https://slides.example.com/test',
  ...overrides
})

// Re-export everything from React Testing Library
export * from '@testing-library/react'
export { userEvent }
export { customRender as render }
