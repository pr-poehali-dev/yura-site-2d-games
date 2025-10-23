import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Assets = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const assetCategories = [
    { id: 'all', name: 'Все', count: 1247 },
    { id: 'sprites', name: 'Спрайты', count: 542 },
    { id: 'backgrounds', name: 'Фоны', count: 186 },
    { id: 'sounds', name: 'Звуки', count: 324 },
    { id: 'music', name: 'Музыка', count: 95 },
    { id: 'effects', name: 'Эффекты', count: 100 },
  ];

  const mockAssets = [
    { id: 1, name: 'player-idle.png', type: 'sprite', size: '24 KB', tags: ['character', 'player'] },
    { id: 2, name: 'enemy-walk.png', type: 'sprite', size: '32 KB', tags: ['enemy', 'animation'] },
    { id: 3, name: 'coin-spin.png', type: 'sprite', size: '18 KB', tags: ['collectible', 'coin'] },
    { id: 4, name: 'forest-bg.png', type: 'background', size: '156 KB', tags: ['forest', 'nature'] },
    { id: 5, name: 'jump.wav', type: 'sound', size: '12 KB', tags: ['sfx', 'jump'] },
    { id: 6, name: 'coin-collect.wav', type: 'sound', size: '8 KB', tags: ['sfx', 'pickup'] },
    { id: 7, name: 'explosion.png', type: 'effect', size: '45 KB', tags: ['vfx', 'explosion'] },
    { id: 8, name: 'menu-music.mp3', type: 'music', size: '2.4 MB', tags: ['music', 'menu'] },
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
              <Link to="/assets" className="text-foreground hover:text-primary transition-colors font-medium">
                Ресурсы
              </Link>
              <Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors">
                Документация
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Библиотека ресурсов</h1>
          <p className="text-xl text-muted-foreground">
            Тысячи готовых спрайтов, звуков и других ресурсов для вашей игры
          </p>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-6">
          <aside className="space-y-6">
            <Card className="p-4 bg-card border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Filter" size={16} />
                Категории
              </h3>
              <div className="space-y-1">
                {assetCategories.map((category) => (
                  <button
                    key={category.id}
                    className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-accent transition-colors text-left"
                  >
                    <span className="text-sm">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Tag" size={16} />
                Популярные теги
              </h3>
              <div className="flex flex-wrap gap-2">
                {['character', 'pixel-art', 'platformer', 'rpg', 'ui', 'vfx'].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-accent">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Upload" size={16} />
                Загрузить свои
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Добавьте собственные ресурсы в библиотеку
              </p>
              <Button className="w-full" size="sm">
                <Icon name="Plus" size={16} className="mr-1" />
                Загрузить файлы
              </Button>
            </Card>
          </aside>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск ресурсов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Icon name="SlidersHorizontal" size={18} className="mr-2" />
                Фильтры
              </Button>
              <Button variant="outline">
                <Icon name="ArrowUpDown" size={18} className="mr-2" />
                Сортировка
              </Button>
            </div>

            <Tabs defaultValue="grid" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="grid">
                    <Icon name="LayoutGrid" size={16} className="mr-1" />
                    Сетка
                  </TabsTrigger>
                  <TabsTrigger value="list">
                    <Icon name="List" size={16} className="mr-1" />
                    Список
                  </TabsTrigger>
                </TabsList>
                <p className="text-sm text-muted-foreground">
                  Найдено: <span className="font-semibold text-foreground">1,247</span> ресурсов
                </p>
              </div>

              <TabsContent value="grid" className="space-y-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {mockAssets.map((asset) => (
                    <Card
                      key={asset.id}
                      className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon
                            name={
                              asset.type === 'sprite' || asset.type === 'background' || asset.type === 'effect'
                                ? 'Image'
                                : asset.type === 'sound'
                                ? 'Volume2'
                                : 'Music'
                            }
                            size={32}
                            className="text-primary"
                          />
                        </div>
                        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <Button size="sm" variant="secondary">
                            <Icon name="Eye" size={16} className="mr-1" />
                            Просмотр
                          </Button>
                          <Button size="sm">
                            <Icon name="Download" size={16} className="mr-1" />
                            Скачать
                          </Button>
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-semibold text-sm mb-1 truncate">{asset.name}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{asset.size}</p>
                        <div className="flex flex-wrap gap-1">
                          {asset.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="list" className="space-y-0">
                <div className="space-y-2">
                  {mockAssets.map((asset) => (
                    <Card
                      key={asset.id}
                      className="group p-4 bg-card border-border hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-muted rounded flex items-center justify-center flex-shrink-0">
                          <Icon
                            name={
                              asset.type === 'sprite' || asset.type === 'background' || asset.type === 'effect'
                                ? 'Image'
                                : asset.type === 'sound'
                                ? 'Volume2'
                                : 'Music'
                            }
                            size={24}
                            className="text-primary"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{asset.name}</h4>
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary" className="text-xs">
                              {asset.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{asset.size}</span>
                            <div className="flex gap-1">
                              {asset.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" variant="ghost">
                            <Icon name="Eye" size={16} />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Icon name="Download" size={16} />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Icon name="Heart" size={16} />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center pt-8">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  <Icon name="ChevronLeft" size={16} />
                </Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">...</Button>
                <Button variant="outline" size="sm">42</Button>
                <Button variant="outline" size="sm">
                  <Icon name="ChevronRight" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
