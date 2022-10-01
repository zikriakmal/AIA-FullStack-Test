FROM node:latest
WORKDIR /app
COPY . .
RUN npm i /app/backend
RUN npm i /app/frontend
RUN cp -r frontend/build/ backend/public
EXPOSE 8000