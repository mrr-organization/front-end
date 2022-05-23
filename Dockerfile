FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf


# FROM node:17

# RUN mkdir -p /usr/src/app

# # Working dir
# WORKDIR /usr/src/app

# # Copy files from Build
# COPY package*.json ./

# # Install Globals
# RUN npm install prettier -g

# # Install Files
# RUN npm install 

# # Copy SRC
# COPY . .

# # Build
# RUN npm run build

# # Open Port
# EXPOSE 3000

# # Docker Command to Start Service
# CMD [ "yarn", "serve" ]