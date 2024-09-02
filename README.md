# @fgalassi's Karabiner Elements configuration

This is a fork of [mxstbr's karabiner](https://github.com/mxstbr/karabiner) that I use to customize my Karabiner Elements configuration.

## Installation

1. Install & start [Karabiner Elements](https://karabiner-elements.pqrs.org/)
1. Clone this repository
1. Delete the default `~/.config/karabiner` folder
1. Create a symlink with `ln -s ~/github/mxstbr/karabiner ~/.config` (where `~/github/mxstbr/karabiner` is your local path to where you cloned the repository)
1. [Restart karabiner_console_user_server](https://karabiner-elements.pqrs.org/docs/manual/misc/configuration-file-path/) with `` launchctl kickstart -k gui/`id -u`/org.pqrs.karabiner.karabiner_console_user_server ``

## Configuration

The configuration is stored in `rules.ts` and consists of rule files imported from `./rules`.

## Development

```
npm install
```

to install the dependencies. (one-time only)

```
npm run build
```

builds the `karabiner.json` from the `rules.ts`.

```
npm run watch
```

watches the TypeScript files and rebuilds whenever they change.

```
npm run validate
```

validates the `karabiner.json` configuration file against a json schema.

```
npm run build:validate
```

validates the `karabiner.json` configuration file and rebuilds it when there are no errors.

## License

Copyright (c) 2022 Maximilian Stoiber, licensed under the [MIT license](./LICENSE.md).
