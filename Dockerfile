FROM node:latest
WORKDIR /app
COPY . .
COPY backend/package.json /app/backend
RUN npm i /app/backend
COPY frontend/package.json /app/frontend
RUN npm i /app/frontend
WORKDIR /app/frontend
RUN npm run build 
WORKDIR /app
RUN mkdir /app/backend/public
RUN cp -r /app/frontend/build/* /app/backend/public
WORKDIR /app/backend
EXPOSE 8000