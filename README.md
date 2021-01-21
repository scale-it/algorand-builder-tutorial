# Algorand Builder Tutorial

This repository provides a source code for an [Algorand Builder](https://github.com/scale-it/algorand-builder) tutorial published for [Algorand Developers Portal](https://developer.algorand.org/tutorials).

Source code for each part of the tutorial is provided in a branch of this repository. Clone this repository and switch to a branch corresponding to the tutorial episode:

1. [**here**] [Part 1 - Creating Local Network and Deploying ASA](https://developer.algorand.org/tutorials/algorand-builder-tutorial-part1-creating-local-network-and-deploying-asa/).
   Branch: [part-1](https://github.com/scale-it/algorand-builder/tree/part-1)


### Setup

```
yarn install
```

### Running

Firstly deploy the assets. We will call `algob` through locally installed (in this repository) `@algorand-builder/algob` package, hence the `yarn run` prefix.

```
yarn run algob deploy
```

Next we make an asset transfer transaction:

```
yarn run algob run scripts/transfer/gold-to-john.js
```


## License


This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at https://mozilla.org/MPL/2.0/.
