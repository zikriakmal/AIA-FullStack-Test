FROM node:latest
WORKDIR /app
COPY . .
RUN curl -v https://registry.npmjs.com/
COPY backend/package.json /app/backend
RUN npm i /app/backend
COPY frontend/package.json /app/frontend
RUN npm i /app/frontend
RUN cp -r frontend/build/ backend/public
WORKDIR /app/backend
EXPOSE 8000