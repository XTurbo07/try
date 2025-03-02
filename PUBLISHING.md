
# SDK Publishing Instructions

This repository contains an automatically generated SDK that can be published to npm and PyPI.

## Publishing to npm

1. Go to your GitHub repository settings
2. Navigate to "Secrets and variables" > "Actions"
3. Add a new repository secret with:
   - Name: `NPM_TOKEN`
   - Value: Your npm access token (create one at https://www.npmjs.com/settings/your-username/tokens)
4. The GitHub Action will automatically publish to npm on push to main/master

## Publishing to PyPI

1. Go to your GitHub repository settings
2. Navigate to "Secrets and variables" > "Actions" 
3. Add two new repository secrets:
   - Name: `PYPI_USERNAME` 
     Value: Your PyPI username (or `__token__` if using API token)
   - Name: `PYPI_TOKEN`
     Value: Your PyPI password or API token
4. The GitHub Action will automatically publish to PyPI on push to main/master
