This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), but you're a smart cookie :cookie: so you'd worked that out eh!?!

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Focus

This project is the keystone of Stephen Grinder's Udemy course - The Complete Nextjs Developer updated in January 2024 (which was recent when I originally typed this!) to account for the App router etc. This is supposed to be a reddit clone and involves Auth through Github, nextui and Prisma working with SQLite DB.

## Updates to course

The NextAuth configuration has changed since the videos (presumably filmed slightly before January then!?!). It can infer environmental variables that have the AUTH_ prefix. Documentation is [here](https://authjs.dev/reference/nextjs).

## Learn More

It may be a little out of date (Next move pretty fast!) but this guide to adding a deployed database and connecting it to the project was quite helpful as it's something I added to the project. In the course the project isn't deployed and simply employs Prisma locally:

https://vercel.com/guides/nextjs-prisma-postgres
