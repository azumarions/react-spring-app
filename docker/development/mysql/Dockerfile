FROM mysql:8.0.0

COPY ./docker/production/mysql/01-init.sql /docker-entrypoint-initdb.d/01-init.sql
COPY ./docker/production/mysql/02-schema.sql /docker-entrypoint-initdb.d/02-schema.sql
COPY ./docker/production/mysql/03-data.sql /docker-entrypoint-initdb.d/03-data.sql

EXPOSE 3306