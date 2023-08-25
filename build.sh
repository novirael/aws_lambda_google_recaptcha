# delete node modules and reinstall
rm -rf node_modules/
yarn install --production --no-progress

# zip entire app into a package
zip -q -r aws_lambda_google_recaptcha.zip . -x "*.git*"