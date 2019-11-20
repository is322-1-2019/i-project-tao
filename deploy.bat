yarn build
cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/wolf20099/wolf20099.github.io.git master

