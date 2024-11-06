## Requisitoas del proyecto 

```bash
# Instalar entorno virtual
pip install virtualenv

# Crear entorno virtual
python -m virtualenv venv

# Activar el entorno virtual en Visual Stusio Code
1- presionar F1
2- {Seleccionar} Python: Select Interpreter
3- Seleccionar el interpreter de preferencia

# Instalar Django
pip install django

# Instalar RestFramework
pip install djangorestframework

# Crear el proyecto
django-admin startproject {nombe del proyecto}

# Crear aplicacion 
django-admin startapp {nombre de la aplicacion}

# Instalar Cross Header
pip install django-cors-headers

# Instalar soporte para postgres
pip install psycopg2
```

## Para correr el proyecto

```bash
# ejecutar 
python manage.py runserver
```

## Los cambios en el modelos se deben de establecer en las migraciones
## Cada ves que se establesca un cambio en las tablas de el proyecto

```bash
# Crear la migracion para todo el proyecto
python manage.py makemigrations 

# Crear la migracion para una APP
python manage.py makemigrations {nombre app}

# Establecer migracion para todo el proyecto
python manage.py migrate

# Establecer migracion para una APP
python manage.py migrate {nombre app}
```