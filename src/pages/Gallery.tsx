import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const mockGames = [
    {
      id: 1,
      name: 'Cyber Runner',
      author: 'Alex_Dev',
      plays: 15420,
      likes: 892,
      category: 'platformer',
      featured: true,
    },
    {
      id: 2,
      name: 'Space Odyssey',
      author: 'StarGames',
      plays: 8760,
      likes: 534,
      category: 'shooter',
      featured: true,
    },
    {
      id: 3,
      name: 'Puzzle Master',
      author: 'BrainGames',
      plays: 12340,
      likes: 721,
      category: 'puzzle',
      featured: false,
    },
    {
      id: 4,
      name: 'Kingdom Quest',
      author: 'RPG_Studio',
      plays: 23100,
      likes: 1542,
      category: 'rpg',
      featured: true,
    },
    {
      id: 5,
      name: 'Retro Racer',
      author: 'SpeedDev',
      plays: 6890,
      likes: 423,
      category: 'racing',
      featured: false,
    },
    {
      id: 6,
      name: 'Tower Defense Pro',
      author: 'DefenseTeam',
      plays: 18920,
      likes: 956,
      category: 'strategy',
      featured: false,
    },
  ];

  const categories = [
    { id: 'all', name: 'Все', icon: 'LayoutGrid' },
    { id: 'platformer', name: 'Платформеры', icon: 'User' },
    { id: 'shooter', name: 'Шутеры', icon: 'Target' },
    { id: 'puzzle', name: 'Головоломки', icon: 'PuzzlePiece' },
    { id: 'rpg', name: 'RPG', icon: 'Sword' },
    { id: 'racing', name: 'Гонки', icon: 'Zap' },
    { id: 'strategy', name: 'Стратегии', icon: 'Brain' },
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
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Проекты
              </Link>
              <Link to="/gallery" className="text-foreground hover:text-primary transition-colors font-medium">
                Галерея
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Галерея игр</h1>
          <p className="text-xl text-muted-foreground">
            Тысячи игр, созданных сообществом разработчиков
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Icon name="Star" size={24} className="text-primary" />
            Избранные игры
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockGames
              .filter((game) => game.featured)
              .map((game) => (
                <Card
                  key={game.id}
                  className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Gamepad2" size={48} className="text-primary" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary/90">
                        <Icon name="Star" size={12} className="mr-1" />
                        Избранное
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="lg">
                        <Icon name="Play" size={20} className="mr-2" />
                        Играть
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{game.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">от {game.author}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="Play" size={14} />
                          {game.plays.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="Heart" size={14} />
                          {game.likes.toLocaleString()}
                        </span>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="Share2" size={14} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="bg-muted">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="gap-1">
                  <Icon name={category.icon as any} size={14} />
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex gap-3">
              <div className="relative w-64">
                <Icon
                  name="Search"
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input type="search" placeholder="Поиск игр..." className="pl-9" />
              </div>
              <Button variant="outline">
                <Icon name="SlidersHorizontal" size={16} className="mr-2" />
                Фильтры
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="space-y-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockGames.map((game) => (
                <Card
                  key={game.id}
                  className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Gamepad2" size={40} className="text-primary" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button size="sm">
                        <Icon name="Play" size={16} className="mr-1" />
                        Играть
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Icon name="Info" size={16} />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 truncate">{game.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">от {game.author}</p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="Play" size={12} />
                          {(game.plays / 1000).toFixed(1)}k
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="Heart" size={12} />
                          {game.likes}
                        </span>
                      </div>
                      <Button size="icon-sm" variant="ghost">
                        <Icon name="Heart" size={14} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockGames
                  .filter((game) => game.category === category.id)
                  .map((game) => (
                    <Card
                      key={game.id}
                      className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="Gamepad2" size={40} className="text-primary" />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <Button size="sm">
                            <Icon name="Play" size={16} className="mr-1" />
                            Играть
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Icon name="Info" size={16} />
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1 truncate">{game.name}</h3>
                        <p className="text-xs text-muted-foreground mb-3">от {game.author}</p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Icon name="Play" size={12} />
                              {(game.plays / 1000).toFixed(1)}k
                            </span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Icon name="Heart" size={12} />
                              {game.likes}
                            </span>
                          </div>
                          <Button size="icon-sm" variant="ghost">
                            <Icon name="Heart" size={14} />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center pt-12">
          <Button variant="outline" size="lg">
            <Icon name="RefreshCw" size={18} className="mr-2" />
            Загрузить ещё
          </Button>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold">2,847</div>
                <div className="text-sm text-muted-foreground">Игр опубликовано</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="Users" size={24} className="text-secondary" />
              </div>
              <div>
                <div className="text-3xl font-bold">15,420</div>
                <div className="text-sm text-muted-foreground">Активных игроков</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-accent" />
              </div>
              <div>
                <div className="text-3xl font-bold">1.2M</div>
                <div className="text-sm text-muted-foreground">Игровых сессий</div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Upload" size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Опубликуйте свою игру</h3>
            <p className="text-muted-foreground">
              Поделитесь своим творением с миллионами игроков. Получайте отзывы, развивайтесь и находите единомышленников.
            </p>
            <div className="flex gap-3 justify-center pt-4">
              <Button size="lg" asChild>
                <Link to="/editor">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Создать игру
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/docs">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Узнать больше
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;
