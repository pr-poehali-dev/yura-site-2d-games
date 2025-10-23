import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Icon from '@/components/ui/icon';

const Projects = () => {
  const mockProjects = [
    {
      id: 1,
      name: 'Platformer Adventure',
      lastModified: '2 часа назад',
      size: '12.4 MB',
      status: 'В разработке',
      thumbnail: true,
    },
    {
      id: 2,
      name: 'Space Shooter',
      lastModified: '1 день назад',
      size: '8.2 MB',
      status: 'Опубликован',
      thumbnail: true,
    },
    {
      id: 3,
      name: 'Puzzle Game',
      lastModified: '3 дня назад',
      size: '5.1 MB',
      status: 'В разработке',
      thumbnail: true,
    },
    {
      id: 4,
      name: 'RPG Demo',
      lastModified: '1 неделю назад',
      size: '24.8 MB',
      status: 'Архив',
      thumbnail: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-sidebar">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">GameDev Studio</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/editor" className="text-muted-foreground hover:text-primary transition-colors">
                Редактор
              </Link>
              <Link to="/assets" className="text-muted-foreground hover:text-primary transition-colors">
                Ресурсы
              </Link>
              <Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors">
                Документация
              </Link>
              <Link to="/projects" className="text-foreground hover:text-primary transition-colors font-medium">
                Проекты
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                Галерея
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Мои проекты</h1>
            <p className="text-xl text-muted-foreground">
              Управляйте своими игровыми проектами
            </p>
          </div>
          <Button size="lg" asChild>
            <Link to="/editor">
              <Icon name="Plus" size={20} className="mr-2" />
              Новый проект
            </Link>
          </Button>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Поиск проектов..." className="pl-10" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Icon name="ArrowUpDown" size={18} className="mr-2" />
                Сортировка
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>По дате изменения</DropdownMenuItem>
              <DropdownMenuItem>По названию</DropdownMenuItem>
              <DropdownMenuItem>По размеру</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Icon name="Filter" size={18} className="mr-2" />
                Фильтр
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Все проекты</DropdownMenuItem>
              <DropdownMenuItem>В разработке</DropdownMenuItem>
              <DropdownMenuItem>Опубликованные</DropdownMenuItem>
              <DropdownMenuItem>Архив</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Gamepad2" size={40} className="text-primary" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary" asChild>
                    <Link to="/editor">
                      <Icon name="FolderOpen" size={16} className="mr-1" />
                      Открыть
                    </Link>
                  </Button>
                  <Button size="sm">
                    <Icon name="Play" size={16} className="mr-1" />
                    Запустить
                  </Button>
                </div>
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        size="icon-sm"
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Icon name="MoreVertical" size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Icon name="Edit" size={14} className="mr-2" />
                        Переименовать
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon name="Copy" size={14} className="mr-2" />
                        Дублировать
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon name="Download" size={14} className="mr-2" />
                        Экспорт
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon name="Archive" size={14} className="mr-2" />
                        В архив
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Icon name="Trash2" size={14} className="mr-2" />
                        Удалить
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 truncate">{project.name}</h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span>{project.lastModified}</span>
                  <span>{project.size}</span>
                </div>
                <Badge
                  variant={
                    project.status === 'Опубликован'
                      ? 'default'
                      : project.status === 'В разработке'
                      ? 'secondary'
                      : 'outline'
                  }
                  className="text-xs"
                >
                  {project.status}
                </Badge>
              </div>
            </Card>
          ))}

          <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer group">
            <Link to="/editor" className="aspect-video flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Plus" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Создать проект</h3>
                  <p className="text-sm text-muted-foreground">Начните новую игру</p>
                </div>
              </div>
            </Link>
          </Card>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Folder" size={24} className="text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Всего проектов</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              <span className="text-secondary">+2</span> за последний месяц
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="Upload" size={24} className="text-secondary" />
              </div>
              <div>
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">Опубликовано</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              <span className="text-secondary">+1</span> за последнюю неделю
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="HardDrive" size={24} className="text-accent" />
              </div>
              <div>
                <div className="text-3xl font-bold">2.4 GB</div>
                <div className="text-sm text-muted-foreground">Использовано</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">из 10 GB доступно</div>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Sparkles" size={24} className="text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Советы по работе с проектами</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Используйте понятные названия для проектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Регулярно создавайте резервные копии важных проектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Архивируйте завершённые проекты для экономии места</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
