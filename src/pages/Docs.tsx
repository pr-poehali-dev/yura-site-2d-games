import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Docs = () => {
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
              <Link to="/docs" className="text-foreground hover:text-primary transition-colors font-medium">
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
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <aside className="space-y-6">
            <div className="relative">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Поиск в документации..." className="pl-9" />
            </div>

            <Card className="p-4 bg-card border-border">
              <ScrollArea className="h-[calc(100vh-16rem)]">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                      <Icon name="Rocket" size={14} className="text-primary" />
                      Начало работы
                    </h4>
                    <div className="space-y-1 ml-5">
                      <a href="#intro" className="block text-sm text-foreground hover:text-primary py-1">
                        Введение
                      </a>
                      <a href="#installation" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Установка
                      </a>
                      <a href="#first-project" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Первый проект
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                      <Icon name="Code2" size={14} className="text-secondary" />
                      Редактор
                    </h4>
                    <div className="space-y-1 ml-5">
                      <a href="#interface" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Интерфейс
                      </a>
                      <a href="#tools" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Инструменты
                      </a>
                      <a href="#shortcuts" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Горячие клавиши
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                      <Icon name="Box" size={14} className="text-accent" />
                      Игровые объекты
                    </h4>
                    <div className="space-y-1 ml-5">
                      <a href="#sprites" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Спрайты
                      </a>
                      <a href="#animations" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Анимации
                      </a>
                      <a href="#physics" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Физика
                      </a>
                      <a href="#collisions" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Коллизии
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                      <Icon name="FileCode" size={14} className="text-primary" />
                      Скриптинг
                    </h4>
                    <div className="space-y-1 ml-5">
                      <a href="#basics" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Основы
                      </a>
                      <a href="#api" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        API Reference
                      </a>
                      <a href="#examples" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Примеры
                      </a>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                      <Icon name="Upload" size={14} className="text-secondary" />
                      Публикация
                    </h4>
                    <div className="space-y-1 ml-5">
                      <a href="#export" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Экспорт
                      </a>
                      <a href="#platforms" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Платформы
                      </a>
                      <a href="#optimization" className="block text-sm text-muted-foreground hover:text-primary py-1">
                        Оптимизация
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </Card>
          </aside>

          <main className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2" id="intro">Документация GameDev Studio</h1>
              <p className="text-xl text-muted-foreground">
                Полное руководство по созданию 2D игр
              </p>
            </div>

            <section className="space-y-6">
              <Card className="p-8 bg-card border-border">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Rocket" size={24} className="text-primary" />
                  </div>
                  Быстрый старт
                </h2>
                <p className="text-muted-foreground mb-6">
                  Создайте свою первую игру за 5 минут. Этот туториал познакомит вас с основами платформы 
                  и покажет, как быстро создать простую игру.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Создайте новый проект</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Откройте редактор и нажмите "Новый проект". Выберите шаблон "Platformer" для начала.
                      </p>
                      <Card className="p-4 bg-muted/50 border-border font-mono text-sm">
                        <div className="text-primary">File → New Project → Platformer</div>
                      </Card>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Добавьте персонажа</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Перетащите спрайт персонажа из библиотеки ресурсов на сцену.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Icon name="Image" size={16} className="mr-1" />
                          Открыть библиотеку
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Добавьте управление</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Прикрепите скрипт управления к персонажу.
                      </p>
                      <Card className="p-4 bg-muted/50 border-border font-mono text-sm">
                        <div className="text-muted-foreground">// Базовое движение</div>
                        <div className="text-foreground">player.move(input.horizontal * speed);</div>
                        <div className="text-foreground">if (input.jump) player.jump();</div>
                      </Card>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Запустите игру</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Нажмите кнопку "Play" в верхней панели редактора или используйте F5.
                      </p>
                      <Button>
                        <Icon name="Play" size={16} className="mr-2" />
                        Запустить игру
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Icon name="BookOpen" size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Туториалы</h3>
                  <p className="text-muted-foreground mb-4">
                    Пошаговые уроки от новичка до профессионала
                  </p>
                  <Button variant="outline" size="sm">
                    Смотреть все
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </Card>

                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon name="Code2" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">API Reference</h3>
                  <p className="text-muted-foreground mb-4">
                    Полная документация по всем функциям и классам
                  </p>
                  <Button variant="outline" size="sm">
                    Открыть API
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </Card>

                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name="Video" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Видео уроки</h3>
                  <p className="text-muted-foreground mb-4">
                    Обучающие ролики по созданию различных типов игр
                  </p>
                  <Button variant="outline" size="sm">
                    Смотреть видео
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </Card>

                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Icon name="MessageCircle" size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Сообщество</h3>
                  <p className="text-muted-foreground mb-4">
                    Задайте вопрос или найдите ответы от других разработчиков
                  </p>
                  <Button variant="outline" size="sm">
                    Перейти на форум
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" size={24} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Совет профессионала</h3>
                    <p className="text-muted-foreground">
                      Используйте комбинацию клавиш <kbd className="px-2 py-1 bg-background rounded border border-border font-mono text-xs">Ctrl + S</kbd> 
                      для быстрого сохранения проекта. Настройте автосохранение в настройках редактора, чтобы никогда не потерять свой прогресс.
                    </p>
                  </div>
                </div>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Docs;
