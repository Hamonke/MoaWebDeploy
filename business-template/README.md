# Small Business Website Template

A customizable Astro website template designed for small businesses. This template includes all the essential pages and components needed to create a professional business website, with easy customization options.

## Features

- **Modern Design**: Clean, professional design using Tailwind CSS
- **Responsive**: Works on all devices (mobile, tablet, desktop)
- **Customizable**: Easy-to-modify content and styling
- **SEO Friendly**: Built with best practices for search engines
- **Fast Performance**: Leverages Astro's static site generation for optimal speed

## Pages Included

- **Home**: Landing page with hero section, features, testimonials, and call-to-action
- **About**: Company information, values, team members, and story
- **Services**: Showcase of business services/products with detailed descriptions
- **Contact**: Contact form, business information, hours, and map

## How to Customize

### 1. Business Information

Edit the business configuration file at:
```
src/customizable/branding/config.ts
```

This file contains all business details like:
- Business name, tagline, and description
- Contact information (phone, email, address)
- Social media links
- Business hours
- Brand colors
- Logo paths

### 2. Content

Edit the content configuration file at:
```
src/customizable/content/main.ts
```

This file contains the text content for:
- Home page sections
- Services information
- Contact form labels

### 3. Images

Replace the placeholder images in:
```
public/
```

And update image paths in your content configuration files.

### 4. Styling

The site uses Tailwind CSS for styling. You can customize the appearance by:

1. Editing the color scheme in `src/customizable/branding/config.ts`
2. Modifying the Tailwind configuration in `tailwind.config.js` (if needed)
3. Changing component styles directly in the component files

## Development

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## Customization Workflow for New Clients

1. Make a copy of the project folder
2. Update the `businessConfig` file with the client's information
3. Update the content in `main.ts` 
4. Replace images with client's brand assets
5. Adjust colors to match the client's brand
6. Build and deploy

## License

This template is free to use for both personal and commercial projects.

## Support

If you have any questions or need help customizing the template, please contact us at [your contact email here].

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
