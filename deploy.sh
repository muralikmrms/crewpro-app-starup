#!/bin/bash

# Set the desired Node.js version
NODE_VERSION=20

# Install NVM (Node Version Manager) to manage Node.js versions
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install and use the desired Node.js version
nvm install $NODE_VERSION
nvm use $NODE_VERSION

# Verify the Node.js and npm versions
node -v
npm -v

# Proceed with the build process
npm install
npm run build
