Este proyecto esta construido en NextJs
# Configuración de Desarrollo

El proyecto fue echo con la guia del tutor de Udemy [Juan Pablo de la Torre](https://codigoconjuan.com/) del curso de React JS.

## Requeriminetos
- Contar con una base de datos [MySQL](https://www.mysql.com/) o [PostgreSQL](https://www.postgresql.org/)
- Tener instalado [Node](https://nodejs.org/es) y NPM

Primero clonamos el proyecto.

```bash
git clone https://github.com/Wiilliam-ai/quiosco-app.git
cd quiosco-app
```
Luego instalamos las dependencias.

```bash
cd quiosco-app
npm install
```
Luego creamos un archivo **.env** en este se encontrara la configuracion de la conexion a la base de datos ya que el proyecto esta echo con prisma y a traves de este le pasaremos la cadena de conexion.

>La cadena de conexion esta compuesta por

```
# db Engine : mysql - postgresql
# usuario: root
# clave: 123456
# hostname: 172.17.0.2
# puerto: 3306
# Nombre de base de datos: respaldo
DATABASE_URL="mysql://root:123456@172.17.0.2:3306/respaldo"
```
En el repositorio se encuentra las migraciones ya realizadas para no tener inconbenientes con el motor de base datos que esten usando realizaremos los siguientes pasos.

- **Paso 1**: Eliminar la carpeta migrations
![paso1](/imgreadme/paso1.png)
- **Paso 2**: Modificamos el archivo _**schema.prisma**_
![paso2](/imgreadme/paso2.png)
> dependienddo de la base datos que tienen deben modificar el provider

Una ves completado todo lo anterior realizado procederemos a realizar las migraciones.

Abrir una terminal en el mismo la raiz del proyecto.

```bash
npx prisma migrate dev
```
En la terminal tendras que agregar un nombre a la migracion puedes poner cualquier palabra.

Luego de haber completado las migraciones tenemos que agregar registros a nuestra base de datos todo lo realizaremos desde la terminal gracias a prisma.

En el packaje.json ya esta definido el comando para prisma solo ejecutamos desde la termial.

```bash
npx prisma db seed
```
Si completaste todos los pasos con exito ya puedes arrancar el proyecto.

Arranca el proyecto.
```bash
npm run dev
```
Las rutas de las paginas son solo 3
```bash
http://localhost:3000/
/
/resumen
/total
# Solo para ingresar al admin es desde la URL no hay boton
/admin
```
> / - /Home

![home](/imgreadme/Home.png)

> /resumen

![resumen](/imgreadme/resumen.png)

> /total

![total](/imgreadme/total.png)

> /admin
![admin](/imgreadme/admin.png)
