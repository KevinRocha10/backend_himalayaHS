# BACKEND - Himalaya

## Configuración del entorno

1. Crear la base de datos
2. Copiar .env.example a .env y rellenar con las credenciales de la base de datos local

Ahora, instale las dependencias

```bash
npm install
```

3. Migraciones:

```bash
npx sequelize-cli db:migrate
```

4. Seeders:

```bash
npx sequelize-cli db:seed:all
```

## Iniciar servidor local

```bash
npm run dev
```


