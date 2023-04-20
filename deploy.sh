set -e

npm run build

cd dist

echo > .nojekyll

#if deploying to a custom domain
# echo "www.jaedynkeister.com" > CNAME

git init
git checkout -B main
git add -A 
git commit -m "deploy"

cd -