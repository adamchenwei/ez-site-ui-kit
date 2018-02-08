#!/bin/sh
echo "Commit all $1 with $2"
git status
git add *
git commit -m "$1(): $2 "
git push origin master

#git add * && git commit -m "chore(): seo" &&  git push origin master
