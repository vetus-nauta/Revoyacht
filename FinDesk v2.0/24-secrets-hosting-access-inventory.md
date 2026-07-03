# 24 — Secrets, Hosting, and Production Access Inventory

## Purpose

Sprint 01 must extract everything useful for connecting FinDesk v2.0 to the real production site and hosting environment.

This includes FTP/SFTP/SSH, hosting, domain, deployment, database, and server/account access information.

## Critical security rule

Do not commit real secrets, passwords, tokens, private keys, FTP credentials, cPanel credentials, database passwords, API keys, or recovery codes into the repository.

The repository may contain only:

- names of required secrets;
- where they are used;
- where they should be stored;
- owner/account notes;
- connection method notes without secret values;
- `.env.example` placeholders.

Real values must be stored outside the repo in an approved secure location.

## What Sprint 01 must inventory

### Hosting and server

```text
hosting provider
account owner
control panel URL
server hostname
server IP if available
production domain
staging domain if any
public_html or deployment path
PHP/Node/runtime version if relevant
SSL/certificate notes
```

### FTP / SFTP / SSH

```text
FTP host
SFTP host
SSH host
port
username placeholder
remote path
connection type
key-based or password-based access
where credentials are stored
```

Do not write the actual password or private key.

### Database

```text
database type
database host
database name placeholder
database user placeholder
connection string variable name
migration method
backup/export notes
```

### Environment variables

Create or update an `.env.example` style list with variable names only.

Example:

```text
APP_URL=
DATABASE_URL=
FTP_HOST=
FTP_USER=
FTP_PASSWORD=
SFTP_HOST=
SFTP_USER=
SSH_HOST=
SSH_USER=
DEPLOY_PATH=
```

### Deployment

```text
manual FTP upload
SFTP deploy
GitHub Actions
hosting panel deploy
Namecheap/cPanel deploy
custom script
```

Document which method is currently used and which method should be used for v2.0.

### Domain and DNS

```text
domain registrar
DNS provider
active DNS records needed
SSL status
subdomains
production URL
staging URL
```

## Source locations to inspect

Sprint 01 may inspect old repository files for infrastructure clues such as:

```text
.env.example
.env.local.example
config files
deploy scripts
GitHub workflows
README deployment sections
hosting notes
FTP scripts
server notes
package scripts
```

But old finance/product logic remains forbidden as v2.0 truth.

## Required Sprint 01 output

Sprint 01 must produce:

```text
Production Access Inventory Report

Hosting provider:
Control panel:
Production domain:
Deployment method:
Deploy path:
Runtime:
Database connection method:
Required secrets list:
Where real secrets are stored:
Missing access items:
Security risks:
Recommended deployment path for v2.0:
```

## Red line

The project must be ready to connect to the real production site, but no actual secret values may be committed into the repository.
