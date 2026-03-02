export interface Project {
  id: number
  name: string
  description: string
  tech: string[]
  image: string
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: '电商网站',
    description: '基于Vue 3和TypeScript开发的电商网站，包含商品展示、购物车、结算等功能',
    tech: ['Vue 3', 'TypeScript', 'Tailwind CSS'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ecommerce%20website%20interface&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 2,
    name: '个人博客',
    description: '使用Vue 3和Markdown构建的个人博客系统，支持文章管理和评论功能',
    tech: ['Vue 3', 'TypeScript', 'Markdown'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=personal%20blog%20website&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 3,
    name: '待办事项应用',
    description: '基于Vue 3和Pinia开发的待办事项应用，支持任务管理和分类',
    tech: ['Vue 3', 'TypeScript', 'Pinia'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=todo%20app%20interface&image_size=landscape_16_9',
    link: '#'
  }
]