curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm install 10

nvm alias default 10

npm init

npm install express

npm install --save-dev @babel/core@7 @babel/cli@7

npm install --save-dev @babel/preset-react@7

npx babel src --presets @babel/react --out-dir public

npm install --save-dev @babel/preset-env@7

npx babel src --out-dir public

npm install nodemon@1

npm run watch

open another terminal and run npm start
