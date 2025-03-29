# SEP InfluxDB -PG3

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Environment Variables

To run this project, you will need to add the following environment variables to your **.env.local** file to the root folder which is under
**INFLUX-DB**

`NEXTAUTH_SECRET`=

`GITHUB_SECRET`=

`GITHUB_ID`=

`NEXTAUTH_URL`= 

## InfluxDB Values

`InfluxDB Url`= 
`InfluxDB Organisation ID`=
`Token`=

## Run Locally

First, install all the dependency using :

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Branching Startegies

- **main** branch will used as a demo branch for sanchi
- **dev** branch will used for development purposes
- **feature/YOUR_NAME-FEATURE_NAME** should be created from **dev** branch
- Developers need to raise Pull request to **dev** branch and later we can merge it to the main branch
- While starting development always start by taking `git pull origin dev` from the **git bash terminal** or anyother Source control software you are comfortable with for example : **VS Code , GITHUB Source control**
- Delete your existing branch once pull request has been accepted

## UI Library

- Shadcn-UI : https://ui.shadcn.com/docs/components

- **Components** folder in the root folder has all the shadcn-UI components
- Youtube Video for Shadcn : https://www.youtube.com/watch?v=v0_AT8zaLo8
  I have added a example button using
- `npx shadcn@latest add button`

## Tech Stacks(#Todo)

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
