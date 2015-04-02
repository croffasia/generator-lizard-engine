![Lizard Engine](http://i.imgur.com/mhamGKF.png)
===================================
## Генератор [LizardEngine](https://github.com/PoluosmakAndrew/lizard-engine) for [Yeoman](http://yeoman.io/)

### Быстрый старт

Требования: Node.js >= 0.10.x и MongoDB >= 2.4.x.

Установите [LizardEngine](https://github.com/PoluosmakAndrew/lizard-engine) Генератор
```bash
npm install -g generator-lizard-engine
```

Перейдите в директорию, в которой должен быть создан новый проект или новые дополнения и выполните команду:

```bash
yo lizard-engine
```

Введите запрашиваемые данные и следуйте инструкциям. Данная команда собирает базовый проект [LizardEngine](https://github.com/PoluosmakAndrew/lizard-engine).

**Отлично! Все готово к работе.** После окончания установки проекта запустите его командой

```bash
node index.js
```

**ВАЖНО:** Выполнять все команды нужно с корневого каталога вашего проекта.

### Генератор дополнений

**Автоматизированная установка дополнений:**

```bash
yo lizard-engine:install
```

Данная команда позволяет автоматизированно установить пакет дополнений, если для него есть поддержка инсталятора.
Выполнив команду вам нужно ввести URL на Github репозиторий или ZIP файл, все остальное инсталятор сделает за вас: перенесет нужные файлы, установит требуемые npm пакеты и сохранит информацию в package.json вашего проекта.

Информацию о доступных дополнениях сиотрите в [Wiki проекта LizardEngine](https://github.com/PoluosmakAndrew/lizard-engine/wiki/%D0%94%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5:-%D0%9F%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D1%8B,-%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D0%B8,-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B)

**Быстрое создание нового модуля:**

```bash
yo lizard-engine:module
```

Укажите название модуля. Имя должно быть на латинице, без пробелов и спец. символов.


**Создание контроллера:**

```bash
yo lizard-engine:controller
```

Обязательно укажите название контроллера и модуля в ктором он будет создан. Все имена должны быть на латинице, без пробелов и спец. символов.


**Создание компонента:**

```bash
yo lizard-engine:component
```

Обязательно укажите название компонента и модуля в котором он будет создан. Все имена должны быть на латинице, без пробелов и спец. символов.


**Создание модели:**

```bash
yo lizard-engine:model
```

Обязательно укажите название модели и модуля в котором она будет создана. Все имена должны быть на латинице, без пробелов и спец. символов.


**Создание плагина:**

```bash
yo lizard-engine:plugin
```

Обязательно укажите название плагина. Имя должно быть на латинице, без пробелов и спец. символов.
