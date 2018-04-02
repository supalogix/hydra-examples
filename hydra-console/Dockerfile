FROM php:7.1.8-apache

WORKDIR /app

RUN apt-get update && \
    apt-get install -y git

RUN curl -s http://getcomposer.org/installer | php
RUN php composer.phar create-project -s dev ml/hydra-console /app/hydra

EXPOSE 8000

ENTRYPOINT [ "php", "-S", "0.0.0.0:8000", "-t", "/app/hydra" ]


