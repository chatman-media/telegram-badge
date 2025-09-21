# Semantic Release Setup Guide

Для автоматического создания версий и публикации пакетов необходимо настроить следующие секреты в GitHub репозитории:

## Необходимые секреты:

1. **NPM_TOKEN** - Токен для публикации в NPM
   - Получите токен на https://www.npmjs.com/
   - Перейдите в Account Settings → Access Tokens
   - Создайте новый токен с правами "Publish"

2. **GITHUB_TOKEN** - Автоматически создается GitHub (не требует настройки)

## Как добавить секреты в репозиторий:

1. Перейдите в Settings вашего репозитория
2. Нажмите "Secrets and variables" → "Actions"
3. Нажмите "New repository secret"
4. Добавьте NPM_TOKEN с полученным значением

## Как это работает:

- При пуше в `main` ветку - создается production релиз
- При пуше в `develop` ветку - создается beta релиз
- Версия автоматически определяется по commit сообщениям (используя Conventional Commits)
- Создается CHANGELOG.md с историей изменений
- Пакет автоматически публикуется в NPM
- Создается GitHub release с описанием изменений

## Формат commit сообщений:

- `feat:` - новые функции (minor версия)
- `fix:` - исправления багов (patch версия)
- `BREAKING CHANGE:` - критические изменения (major версия)
- `docs:`, `style:`, `refactor:`, `test:`, `chore:` - без изменения версии

Примеры:
```
feat: add new badge style
fix: resolve API timeout issue
docs: update README with new examples
```