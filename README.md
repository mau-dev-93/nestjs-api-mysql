# Sistema de Gestión de Órdenes de Compra - NestJS + MySQL

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Descripción

Este proyecto es un sistema de gestión de órdenes de compra desarrollado con **NestJS** y **MySQL** como proyecto de estudio. El sistema permite gestionar clientes, productos y órdenes de compra con una arquitectura modular y escalable.

### Características principales

- ✅ **Gestión de Clientes**: CRUD completo con direcciones asociadas
- ✅ **Gestión de Productos**: Control de inventario y stock
- ✅ **Sistema de Órdenes**: Creación y seguimiento de órdenes de compra
- ✅ **Base de datos MySQL**: Persistencia con TypeORM
- ✅ **Validación de datos**: Class-validator y class-transformer
- ✅ **Documentación API**: Swagger/OpenAPI integrado
- ✅ **Arquitectura modular**: Separación por módulos (Client, Product, Order)

## Tecnologías utilizadas

- **Framework**: NestJS v11
- **Base de datos**: MySQL con TypeORM
- **Validación**: class-validator, class-transformer
- **Documentación**: Swagger/OpenAPI
- **Lenguaje**: TypeScript
- **Testing**: Jest

## Configuración del proyecto

### Prerrequisitos

- Node.js (v18 o superior)
- MySQL (v8 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/mau-dev-93/nestjs-api-mysql.git
cd nestjs-api-mysql
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar base de datos**
   - Crear una base de datos MySQL
   - Configurar las credenciales en `datasource.ts` y `ormconfig.json`

4. **Ejecutar migraciones** (si aplica)
```bash
npm run typeorm:migration:run
```

## Ejecución del proyecto

```bash
# Desarrollo
npm run start:dev

# Producción
npm run start:prod

# Modo debug
npm run start:debug
```

La aplicación estará disponible en `http://localhost:3000`

### Documentación de la API

Una vez que la aplicación esté ejecutándose, puedes acceder a la documentación Swagger en:
```
http://localhost:3000/api
```

## Estructura del proyecto

```
src/
├── modules/
│   ├── client/
│   │   ├── entity/
│   │   │   ├── client.entity.ts
│   │   │   └── address.entity.ts
│   │   ├── model/
│   │   │   ├── client.model.ts
│   │   │   └── address.model.ts
│   │   ├── client.controller.ts
│   │   ├── client.service.ts
│   │   └── client.module.ts
│   ├── product/
│   │   ├── entity/
│   │   │   └── product.entity.ts
│   │   ├── model/
│   │   │   ├── product.model.ts
│   │   │   └── stock.model.ts
│   │   ├── product.controller.ts
│   │   ├── product.service.ts
│   │   └── product.module.ts
│   └── order/
│       ├── entity/
│       │   └── order.entity.ts
│       ├── model/
│       │   └── order.model.ts
│       ├── order.controller.ts
│       ├── order.service.ts
│       └── order.module.ts
├── app.module.ts
└── main.ts
```

## Modelos de Base de Datos

### Cliente (Client)
```typescript
{
  id: number (PK, auto-increment)
  name: string (30 caracteres)
  email: string (30 caracteres, único)
  address: Address (relación OneToOne)
  orders: Order[] (relación OneToMany)
}
```

### Dirección (Address)
```typescript
{
  id: number (PK, auto-increment)
  country: string (30 caracteres)
  province: string (50 caracteres)
  town: string (40 caracteres)
  street: string (60 caracteres)
}
```

### Producto (Product)
```typescript
{
  id: number (PK, auto-increment)
  name: string (30 caracteres)
  price: number
  stock: number
  deleted: boolean (soft delete)
}
```

### Orden (Order)
```typescript
{
  id: string (PK, UUID)
  createdAt: Date (auto-generado)
  updatedAt: Date (auto-actualizado)
  confirmAt: Date (nullable)
  client: Client (relación ManyToOne)
  products: Product[] (relación ManyToMany)
}
```

## API Endpoints

### Clientes (`/api/v1/clients`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/` | Crear nuevo cliente |
| GET | `/` | Obtener todos los clientes |
| GET | `/:id` | Obtener cliente por ID |
| PUT | `/:id` | Actualizar cliente |
| DELETE | `/:id` | Eliminar cliente |

### Productos (`/api/v1/products`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/` | Crear nuevo producto |
| GET | `/` | Obtener productos activos |
| GET | `/deleted` | Obtener productos eliminados |
| GET | `/:id` | Obtener producto por ID |
| PUT | `/:id` | Actualizar producto |
| DELETE | `/:id` | Eliminar producto (soft delete) |
| PATCH | `/:id` | Restaurar producto eliminado |
| PATCH | `/stock` | Actualizar stock |
| PATCH | `/stock/increment` | Incrementar stock |
| PATCH | `/stock/decrement` | Decrementar stock |

### Órdenes (`/api/v1/orders`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/` | Crear nueva orden |
| GET | `/pending` | Obtener órdenes pendientes |
| GET | `/confirmed` | Obtener órdenes confirmadas (con filtros de fecha) |
| GET | `/:id` | Obtener orden por ID |
| GET | `/client/:clientId` | Obtener órdenes de un cliente |
| PATCH | `/:id/confirm` | Confirmar orden |

## Ejemplos de Uso

### Crear un cliente
```bash
POST /api/v1/clients
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan.perez@example.com",
  "address": {
    "country": "Argentina",
    "province": "Buenos Aires",
    "town": "CABA",
    "street": "Av. Corrientes 1234"
  }
}
```

### Crear un producto
```bash
POST /api/v1/products
Content-Type: application/json

{
  "name": "Laptop HP",
  "price": 89999.99,
  "stock": 15
}
```

### Crear una orden
```bash
POST /api/v1/orders
Content-Type: application/json

{
  "confirmAt": "2025-01-15",
  "client": {
    "id": 1
  },
  "products": [
    { "id": 1 },
    { "id": 2 }
  ]
}
```

## Testing

```bash
# Tests unitarios
npm run test

# Tests end-to-end
npm run test:e2e

# Cobertura de tests
npm run test:cov

# Tests en modo watch
npm run test:watch
```

## Scripts disponibles

```bash
# Desarrollo
npm run start:dev          # Ejecutar en modo desarrollo con hot-reload
npm run start:debug        # Ejecutar en modo debug

# Construcción y producción
npm run build              # Construir el proyecto
npm run start:prod         # Ejecutar en modo producción

# Calidad de código
npm run lint               # Ejecutar ESLint
npm run format             # Formatear código con Prettier

# Testing
npm run test               # Ejecutar tests unitarios
npm run test:e2e          # Ejecutar tests end-to-end
npm run test:cov          # Generar reporte de cobertura
```

## Características técnicas

### Validaciones
- **Clientes**: Validación de email único, campos requeridos
- **Productos**: Validación de stock positivo, precios válidos
- **Órdenes**: Validación de existencia de cliente y productos

### Relaciones de Base de Datos
- **Cliente ↔ Dirección**: OneToOne con cascade (insert, update, remove)
- **Cliente ↔ Órdenes**: OneToMany
- **Orden ↔ Productos**: ManyToMany con tabla intermedia `order_products`

### Funcionalidades especiales
- **Soft Delete**: Los productos se marcan como eliminados sin borrar físicamente
- **Gestión de Stock**: Incremento/decremento de inventario
- **Filtros de fecha**: Para consultas de órdenes confirmadas
- **Eager Loading**: Carga automática de relaciones en consultas

## Contribuir

Este es un proyecto de estudio, pero las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto es de uso educativo y no tiene una licencia específica.
