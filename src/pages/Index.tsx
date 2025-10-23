import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-sidebar">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">GameDev Studio</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
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
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                Галерея
              </Link>
              <Button size="sm">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary text-sm font-mono">v2.0 Beta</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Создавайте 2D игры
              <span className="text-primary block">без границ</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Профессиональная платформа для разработки 2D игр с визуальным редактором, 
              библиотекой ресурсов и мгновенной публикацией
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="text-base" asChild>
                <Link to="/editor">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать создавать
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link to="/gallery">
                  <Icon name="Layout" size={20} className="mr-2" />
                  Смотреть примеры
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img 
              src="https://cdn.poehali.dev/projects/01b37c14-540b-400a-a072-0a8820d8202f/files/d8b26b87-f5ed-4736-a169-195639d6cdf9.jpg"
              alt="GameDev Studio Interface"
              className="relative rounded-lg border border-border shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Всё необходимое в одном месте</h2>
          <p className="text-xl text-muted-foreground">
            Мощные инструменты для профессиональной разработки игр
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon name="Code2" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Визуальный редактор</h3>
            <p className="text-muted-foreground">
              Создавайте игры с помощью удобного drag-and-drop интерфейса и редактирования в реальном времени
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <Icon name="Image" size={24} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Библиотека ресурсов</h3>
            <p className="text-muted-foreground">
              Тысячи готовых спрайтов, анимаций, звуков и эффектов для вашей игры
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Icon name="Zap" size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Быстрая публикация</h3>
            <p className="text-muted-foreground">
              Опубликуйте игру одним кликом и поделитесь с миллионами игроков
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon name="Layers" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Система слоёв</h3>
            <p className="text-muted-foreground">
              Управляйте игровыми объектами с помощью удобной системы слоёв и групп
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <Icon name="BookOpen" size={24} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Туториалы</h3>
            <p className="text-muted-foreground">
              Подробная документация и пошаговые уроки от создания до публикации
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Icon name="Users" size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Сообщество</h3>
            <p className="text-muted-foreground">
              Присоединяйтесь к тысячам разработчиков, делитесь опытом и находите команду
            </p>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://cdn.poehali.dev/projects/01b37c14-540b-400a-a072-0a8820d8202f/files/463f6e3f-b4ab-4f0c-92ac-544c982ca76d.jpg"
              alt="Game Editor"
              className="rounded-lg border border-border shadow-xl"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
              <Icon name="Sparkles" size={16} className="text-secondary" />
              <span className="text-secondary text-sm font-mono">Новое в 2.0</span>
            </div>
            <h2 className="text-4xl font-bold">
              Редактор нового поколения
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Работайте с кодом и визуальными элементами одновременно. 
              Интеллектуальные подсказки, автодополнение и проверка в реальном времени 
              делают разработку максимально эффективной.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Режим реального времени</h4>
                  <p className="text-muted-foreground">Видите изменения мгновенно без перезагрузки</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Кросс-платформенность</h4>
                  <p className="text-muted-foreground">Создавайте игры для веба, мобильных и десктопа</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Система плагинов</h4>
                  <p className="text-muted-foreground">Расширяйте возможности с помощью плагинов сообщества</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sidebar py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Готовы создать свою игру?
            </h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к тысячам разработчиков, которые уже создают невероятные игры на нашей платформе
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="text-base" asChild>
                <Link to="/editor">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать бесплатно
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link to="/docs">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Изучить документацию
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Icon name="Gamepad2" size={20} className="text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">GameDev Studio</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Профессиональная платформа для создания 2D игр
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/editor" className="hover:text-primary transition-colors">Редактор</Link></li>
                <li><Link to="/assets" className="hover:text-primary transition-colors">Ресурсы</Link></li>
                <li><Link to="/gallery" className="hover:text-primary transition-colors">Галерея</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/docs" className="hover:text-primary transition-colors">Документация</Link></li>
                <li><Link to="/docs" className="hover:text-primary transition-colors">Туториалы</Link></li>
                <li><Link to="/docs" className="hover:text-primary transition-colors">API Reference</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 GameDev Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
