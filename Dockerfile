# Stage 1 - Development
FROM node:12 as base
WORKDIR /app
COPY . .
RUN npm install

# Stage 2 - Build
FROM node:12 as build
WORKDIR /app
COPY --from=base /app .
RUN npm run build

# Stage 3 - Production
FROM node:12
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
