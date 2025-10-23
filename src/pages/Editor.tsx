import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Editor = () => {
  const [selectedTool, setSelectedTool] = useState('select');

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="border-b border-border bg-sidebar px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
              <Icon name="Gamepad2" size={16} className="text-primary-foreground" />
            </div>
            <span className="font-bold text-sm">GameDev Studio</span>
          </Link>
          <Separator orientation="vertical" className="h-6" />
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Icon name="FolderOpen" size={16} className="mr-1" />
              Открыть
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Save" size={16} className="mr-1" />
              Сохранить
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground font-mono">my-awesome-game</span>
          <Button variant="ghost" size="icon-sm">
            <Icon name="Settings" size={16} />
          </Button>
          <Button variant="ghost" size="icon-sm">
            <Icon name="Users" size={16} />
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Button size="sm">
            <Icon name="Play" size={16} className="mr-1" />
            Запустить
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <aside className="w-16 bg-sidebar border-r border-border flex flex-col items-center py-4 gap-2">
          <Button
            variant={selectedTool === 'select' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setSelectedTool('select')}
            title="Выбор"
          >
            <Icon name="MousePointer2" size={20} />
          </Button>
          <Button
            variant={selectedTool === 'move' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setSelectedTool('move')}
            title="Перемещение"
          >
            <Icon name="Move" size={20} />
          </Button>
          <Button
            variant={selectedTool === 'sprite' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setSelectedTool('sprite')}
            title="Спрайт"
          >
            <Icon name="Image" size={20} />
          </Button>
          <Button
            variant={selectedTool === 'text' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setSelectedTool('text')}
            title="Текст"
          >
            <Icon name="Type" size={20} />
          </Button>
          <Button
            variant={selectedTool === 'shape' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setSelectedTool('shape')}
            title="Фигура"
          >
            <Icon name="Square" size={20} />
          </Button>
          <Separator className="w-10 my-2" />
          <Button variant="ghost" size="icon" title="Масштаб">
            <Icon name="ZoomIn" size={20} />
          </Button>
          <Button variant="ghost" size="icon" title="Сетка">
            <Icon name="Grid3x3" size={20} />
          </Button>
        </aside>

        <aside className="w-64 bg-sidebar border-r border-border flex flex-col">
          <Tabs defaultValue="hierarchy" className="flex-1 flex flex-col">
            <TabsList className="w-full rounded-none border-b border-border bg-transparent h-auto p-0">
              <TabsTrigger value="hierarchy" className="flex-1 rounded-none data-[state=active]:bg-background">
                Иерархия
              </TabsTrigger>
              <TabsTrigger value="assets" className="flex-1 rounded-none data-[state=active]:bg-background">
                Ресурсы
              </TabsTrigger>
            </TabsList>
            <TabsContent value="hierarchy" className="flex-1 m-0">
              <ScrollArea className="h-full">
                <div className="p-3 space-y-1">
                  <div className="text-xs font-mono text-muted-foreground mb-2 px-2">SCENE</div>
                  <div className="flex items-center gap-1 px-2 py-1.5 hover:bg-accent rounded cursor-pointer">
                    <Icon name="ChevronRight" size={14} />
                    <Icon name="Folder" size={14} className="text-muted-foreground" />
                    <span className="text-sm">MainScene</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1.5 hover:bg-accent rounded cursor-pointer ml-3">
                    <Icon name="ChevronRight" size={14} />
                    <Icon name="Box" size={14} className="text-primary" />
                    <span className="text-sm">Player</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1.5 hover:bg-accent rounded cursor-pointer ml-6">
                    <Icon name="Circle" size={14} className="text-secondary" />
                    <span className="text-sm">PlayerSprite</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1.5 hover:bg-accent rounded cursor-pointer ml-6">
                    <Icon name="Circle" size={14} className="text-accent" />
                    <span className="text-sm">Collider</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1.5 hover:bg-accent rounded cursor-pointer ml-3">
                    <Icon name="ChevronRight" size={14} />
                    <Icon name="Box" size={14} className="text-primary" />
                    <span className="text-sm">Environment</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1.5 hover:bg-accent rounded cursor-pointer ml-6">
                    <Icon name="Circle" size={14} className="text-muted-foreground" />
                    <span className="text-sm">Ground</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1.5 hover:bg-accent rounded cursor-pointer ml-6">
                    <Icon name="Circle" size={14} className="text-muted-foreground" />
                    <span className="text-sm">Background</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1.5 hover:bg-accent rounded cursor-pointer ml-3">
                    <Icon name="Box" size={14} className="text-primary" />
                    <span className="text-sm">UI</span>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="assets" className="flex-1 m-0">
              <ScrollArea className="h-full">
                <div className="p-3 space-y-3">
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-2">SPRITES</div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-muted rounded border border-border hover:border-primary cursor-pointer"></div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-2">SOUNDS</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                        <Icon name="Music" size={14} className="text-muted-foreground" />
                        <span className="text-xs">background.mp3</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                        <Icon name="Volume2" size={14} className="text-muted-foreground" />
                        <span className="text-xs">jump.wav</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </aside>

        <main className="flex-1 flex flex-col">
          <div className="flex-1 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-5xl max-h-3xl bg-card border border-border shadow-2xl relative">
                <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur rounded border border-border">
                  <span className="text-xs font-mono text-muted-foreground">1920 × 1080</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Gamepad2" size={40} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Добро пожаловать в редактор</h3>
                      <p className="text-sm text-muted-foreground">Выберите инструмент слева для начала</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-48 bg-sidebar border-t border-border">
            <Tabs defaultValue="console" className="h-full flex flex-col">
              <TabsList className="w-full rounded-none border-b border-border bg-transparent h-auto p-0">
                <TabsTrigger value="console" className="rounded-none data-[state=active]:bg-background">
                  <Icon name="Terminal" size={14} className="mr-1" />
                  Консоль
                </TabsTrigger>
                <TabsTrigger value="timeline" className="rounded-none data-[state=active]:bg-background">
                  <Icon name="Clock" size={14} className="mr-1" />
                  Таймлайн
                </TabsTrigger>
                <TabsTrigger value="debug" className="rounded-none data-[state=active]:bg-background">
                  <Icon name="Bug" size={14} className="mr-1" />
                  Отладка
                </TabsTrigger>
              </TabsList>
              <TabsContent value="console" className="flex-1 m-0 p-3 font-mono text-xs">
                <div className="space-y-1">
                  <div className="text-muted-foreground">
                    <span className="text-secondary">[INFO]</span> Game engine initialized
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-primary">[LOG]</span> Scene loaded: MainScene
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-accent">[READY]</span> Ready to run
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="timeline" className="flex-1 m-0 p-3">
                <p className="text-sm text-muted-foreground">Таймлайн для анимаций</p>
              </TabsContent>
              <TabsContent value="debug" className="flex-1 m-0 p-3">
                <p className="text-sm text-muted-foreground">Инструменты отладки</p>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        <aside className="w-80 bg-sidebar border-l border-border">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-sm mb-1">Свойства</h3>
            <p className="text-xs text-muted-foreground">Выберите объект для редактирования</p>
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="p-4 space-y-4">
              <Card className="p-3 bg-card/50">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Box" size={16} className="text-primary" />
                  <span className="font-semibold text-sm">Transform</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-muted-foreground block mb-1">X</label>
                      <input
                        type="number"
                        defaultValue={0}
                        className="w-full bg-input border border-border rounded px-2 py-1 text-foreground"
                      />
                    </div>
                    <div>
                      <label className="text-muted-foreground block mb-1">Y</label>
                      <input
                        type="number"
                        defaultValue={0}
                        className="w-full bg-input border border-border rounded px-2 py-1 text-foreground"
                      />
                    </div>
                    <div>
                      <label className="text-muted-foreground block mb-1">Z</label>
                      <input
                        type="number"
                        defaultValue={0}
                        className="w-full bg-input border border-border rounded px-2 py-1 text-foreground"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-muted-foreground block mb-1">Width</label>
                      <input
                        type="number"
                        defaultValue={64}
                        className="w-full bg-input border border-border rounded px-2 py-1 text-foreground"
                      />
                    </div>
                    <div>
                      <label className="text-muted-foreground block mb-1">Height</label>
                      <input
                        type="number"
                        defaultValue={64}
                        className="w-full bg-input border border-border rounded px-2 py-1 text-foreground"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-3 bg-card/50">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Palette" size={16} className="text-secondary" />
                  <span className="font-semibold text-sm">Appearance</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <label className="text-muted-foreground block mb-1">Color</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        defaultValue="#4B9AE8"
                        className="w-12 h-8 rounded border border-border cursor-pointer"
                      />
                      <input
                        type="text"
                        defaultValue="#4B9AE8"
                        className="flex-1 bg-input border border-border rounded px-2 py-1 text-foreground font-mono"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-muted-foreground block mb-1">Opacity</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue={100}
                      className="w-full"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-3 bg-card/50">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Zap" size={16} className="text-accent" />
                  <span className="font-semibold text-sm">Physics</span>
                </div>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Enable Physics</span>
                  </label>
                  <div>
                    <label className="text-muted-foreground block mb-1">Mass</label>
                    <input
                      type="number"
                      defaultValue={1}
                      step="0.1"
                      className="w-full bg-input border border-border rounded px-2 py-1 text-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-muted-foreground block mb-1">Gravity Scale</label>
                    <input
                      type="number"
                      defaultValue={1}
                      step="0.1"
                      className="w-full bg-input border border-border rounded px-2 py-1 text-foreground"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </ScrollArea>
        </aside>
      </div>
    </div>
  );
};

export default Editor;
