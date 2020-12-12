#!/usr/bin/env sh
set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:popovdmitriiy/draggable-list.git master:gh-pages

cd -
