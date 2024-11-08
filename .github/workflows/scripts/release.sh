#!/bin/sh

# Setup git globals
echo 'Config git globals'
git config --global user.name "nosto-cicd"
git config --global user.email "127484979+nosto-cicd@users.noreply.github.com"

# Fetching current and new version
echo 'Fetching current and the next version'
current_version="$(git tag --list --sort=-creatordate | head -n 1)"
new_version="$(npm --no-git-tag-version version $mode | cut -c2-)"
echo "current_version=${current_version}"
echo "new_version=${new_version}"

# Creating git tag
if [ ! -z "$new_version" ]
then
  echo 'Creating git tag'
  # needed to be committed after the version update by npm version command
  git add $workspace/package*.json
  git commit -m 'Bump version'
  git tag -a $new_version -m "Tag $new_version for nosto-js"
  git push origin main
  git push origin $new_version
  echo "new_version=${new_version}" >> $GITHUB_OUTPUT
else
  echo "Skipping release as new version is invalid: $new_version"
fi