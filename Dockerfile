FROM node:8

RUN mkdir -p /server /src
RUN touch /var/log/swagger-mock.log

VOLUME /src

COPY . /server
RUN cd /server && npm link && chmod +x entryFile.sh

ENTRYPOINT ["/server/entryFile.sh"]

WORKDIR /src
CMD ["swagger.json"]
