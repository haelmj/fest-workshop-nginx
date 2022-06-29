FROM node:17-alpine as build

WORKDIR /app

COPY package.json .

COPY package-lock.json .

COPY src ./src/

COPY public ./public/

RUN npm install --production

RUN npm run build


# production environment
FROM nginx as prod

COPY container /

COPY --from=build /app/build /usr/share/nginx/html

# SUBSITUTE ENVIRONMENT VARIABLE INTO THE CONFIG FILE DURING BUILD
CMD /bin/bash -c "envsubst '\$API_KEY' < /etc/nginx/nginx.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"