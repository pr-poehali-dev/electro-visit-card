import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Zap",
      title: "Электромонтаж",
      description: "Полный комплекс электромонтажных работ в жилых и коммерческих помещениях"
    },
    {
      icon: "Plug",
      title: "Замена проводки",
      description: "Замена старой проводки на новую с соблюдением всех норм безопасности"
    },
    {
      icon: "Settings",
      title: "Установка оборудования",
      description: "Монтаж и подключение электрического оборудования любой сложности"
    },
    {
      icon: "Shield",
      title: "Системы безопасности",
      description: "Установка систем видеонаблюдения, сигнализации и контроля доступа"
    },
    {
      icon: "Lightbulb",
      title: "Освещение",
      description: "Проектирование и монтаж систем освещения, включая умное освещение"
    },
    {
      icon: "Wrench",
      title: "Техобслуживание",
      description: "Регулярное техническое обслуживание и диагностика электросистем"
    }
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "24/7 поддержка",
      description: "Круглосуточная техническая поддержка и аварийные вызовы"
    },
    {
      icon: "Award",
      title: "15 лет опыта",
      description: "Более 15 лет успешной работы в области электромонтажа"
    },
    {
      icon: "Users",
      title: "Команда профессионалов",
      description: "Сертифицированные электрики с высокой квалификацией"
    },
    {
      icon: "CheckCircle",
      title: "Гарантия качества",
      description: "Официальная гарантия на все виды выполненных работ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">ЭлектроПро</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Профессиональные 
            <span className="text-primary"> электромонтажные</span> работы
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Качественные электромонтажные услуги для дома и бизнеса. 
            Безопасность, надёжность и современные технологии в каждом проекте.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Предоставляем полный спектр электромонтажных услуг с гарантией качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании ЭлектроПро</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы являемся ведущей электромонтажной компанией с более чем 15-летним опытом работы. 
                Наша команда состоит из высококвалифицированных специалистов, которые выполняют 
                работы любой сложности с соблюдением всех требований безопасности.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                За годы работы мы выполнили более 2000 проектов, от небольших квартирных 
                ремонтов до крупных коммерческих объектов. Наш подход основан на использовании 
                современных технологий и материалов высочайшего качества.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="FileText" size={16} className="mr-2" />
                Скачать портфолио
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/52a431ae-44d5-4974-9678-312ede3e75ce.jpg" 
                alt="Профессиональные электромонтажные работы" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">
              Готовы обсудить ваш проект? Оставьте заявку и мы свяжемся с вами в течение часа
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@elektropro.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Адрес</h4>
                    <p className="text-muted-foreground">г. Москва, ул. Электриков, д. 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Время работы</h4>
                    <p className="text-muted-foreground">Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы перезвоним вам для обсуждения деталей
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                </div>
                <Input placeholder="Email" />
                <Textarea placeholder="Опишите ваш проект" rows={4} />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
                <span className="text-xl font-bold">ЭлектроПро</span>
              </div>
              <p className="text-white/80">
                Профессиональные электромонтажные работы с гарантией качества и безопасности.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Электромонтаж</li>
                <li>Замена проводки</li>
                <li>Установка оборудования</li>
                <li>Системы безопасности</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Наши работы</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@elektropro.ru</p>
                <p>г. Москва, ул. Электриков, д. 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 ЭлектроПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}