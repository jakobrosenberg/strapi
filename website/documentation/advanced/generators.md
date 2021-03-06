# Custom generators

In keeping with the Node.js philosophy, Strapi aims to keep its core as small as possible, delegating all but the most critical functions to separate modules.

Generators are designed to make it easier to customize the `$ strapi new` and `$ strapi generate` command-line tools, and provide better support for different user features, custom admin panel, configuration options, view engines, etc.

## Generate a generator

Strapi comes with a generator for generator. Simply run:

```bash
$ strapi generate:generator myGenerator
```

For example you can have:

```bash
$ strapi generate:generator blog
```

This will generate a `strapi-generate-blog` directory with the default files for a generator.

## Apply a generator

Custom generators are linked to your machine aiming to have your personal configuration and features at any time, for every application.

You can edit your custom generators inside the `.strapirc` file at `$HOME`.

First, make sure you this file exists:

```bash
$ strapi config
```

At this time, you don't have any custom generators on your machine.

In your `.strapirc` file, a custom generator is an object with three keys:

- `description`: the description of your generator.
- `repository`: the Git repository to clone.
- `remote`: the current remote to pull updates from.
- `branch`: the branch you want to pull updates from.

For example, to add a custom `blog` generator, follow this:

```js
{
  "generators": {
    "blog": {
      "description": "generate a blog inside a Strapi application",
      "repository": "git@github.com:username/strapi-generate-blog.git",
      "remote": "origin",
      "branch": "master"
    }
  }
}
```

Once you have updated your `.strapirc` file, you need to clone and/or update your generators. To do so, just execute:

```bash
$ strapi update
```

This command will clone every new repository written in your configuration file and pull the latest updates for the other ones.

Following the previous example, you can generate your `blog` files inside a project with:

```bash
$ strapi generate:blog
```
