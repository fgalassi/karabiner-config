# @fgalassi's Karabiner Elements configuration

This is a fork of [mxstbr's karabiner](https://github.com/mxstbr/karabiner) that I use to customize my Karabiner Elements configuration.

## Current Rules

- Hyper Key (⌃⌥⇧⌘)
- SDF JKL -> Control + Option
- ASD KL; -> Command + Option
- DF JK -> Control
- SD KL -> Command
- AS L; -> Option
- ER UI -> Shift + Control
- WE IO -> Shift + Command
- QW OP -> Shift + Option
- DC KM -> Shift
- WR UO -> Delete
- EF JI -> Escape
- Hyper Key sublayer "v"

## Installation

1. Install & start [Karabiner Elements](https://karabiner-elements.pqrs.org/)
1. Clone this repository
1. Delete the default `~/.config/karabiner` folder
1. Create a symlink with `ln -s ~/github/mxstbr/karabiner ~/.config` (where `~/github/mxstbr/karabiner` is your local path to where you cloned the repository)
1. [Restart karabiner_console_user_server](https://karabiner-elements.pqrs.org/docs/manual/misc/configuration-file-path/) with `` launchctl kickstart -k gui/`id -u`/org.pqrs.karabiner.karabiner_console_user_server ``

## Configuration

The configuration is stored in `rules.ts` and consists of rule files imported from `./rules`.

## Development

```sh
npm install
```

to install the dependencies. (one-time only)

```sh
npm run build
```

builds the `karabiner.json` from the `rules.ts`.

```sh
npm run watch
```

watches the TypeScript files and rebuilds whenever they change.

```sh
npm run validate
```

validates the `karabiner.json` configuration file against a json schema.

```sh
npm run build:validate
```

validates the `karabiner.json` configuration file and rebuilds it when there are no errors.

```sh
npm run docs
```

generates the documentation for the karabiner rules.

## License

Copyright (c) 2022 Maximilian Stoiber, licensed under the [MIT license](./LICENSE.md).
