FROM node:latest
WORKDIR /app
COPY . .
RUN npm i /app/backend
RUN npm i /app/frontend
RUN cp -r /app/frontend/build /app/backend/public
EXPOSE 8000