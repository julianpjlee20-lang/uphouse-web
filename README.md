# 向上建設 官方網站

> Docker 本地開發環境

## 🚀 快速啟動

```bash
# 1. 啟動所有服務
docker-compose up -d

# 2. 開啟服務
# - Frontend: http://localhost:3000
# - Backend:  http://localhost:1337
# - PostgreSQL: localhost:5432
```

## 📦 專案結構

```
uphouse-web/
├── docker-compose.yml    # Docker  orchestration
├── frontend/             # Next.js + shadcn/ui
│   ├── Dockerfile
│   └── ...
└── backend/              # Strapi CMS
    ├── Dockerfile
    └── ...
```

## 🛠️ 常用指令

```bash
# 啟動
docker-compose up -d

# 停止
docker-compose down

# 查看日誌
docker-compose logs -f

# 重建
docker-compose build --no-cache
```

## 🔧 開發

### Frontend
```bash
cd frontend
pnpm install
pnpm dev
```

### Backend
```bash
cd backend
pnpm create strapi-app .
pnpm install
pnpm develop
```

## 📝 環境變數

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:1337
```

### Backend (.env)
```
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_NAME=uphouse
DATABASE_USERNAME=uphouse
DATABASE_PASSWORD=uphouse_dev_password
```

---

**最後更新**：2026-02-23
