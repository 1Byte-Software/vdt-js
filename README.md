## Getting started

### Installation

Before you start, make sure you have a fresh version of [Node.js](https://nodejs.org/en/) installed. The current Long Term Support (LTS) release is an ideal starting point.

```bash
# Run this command in your project root folder.
# yarn
yarn add vdt-js

# npm
npm install --save vdt-js
```

Then you can simply import or require the module.

```javascript
// ES module
import { VdtClient } from 'vdt-js';
const authClient = new VdtClient(/* configOptions */);
```

```javascript
// CommonJS
var VdtClient = require('vdt-js').VdtClient;
var authClient = new VdtClient(/* configOptions */);
```

## Usage guide

### Example Client

```javascript
const config = {
  mode: 'development',
  brandUrl: 'vardytests.com',
};

const authClient = new VdtClient(config);
```

### Usage with Typescript

Type definitions are provided implicitly through the `types` entry in `package.json`. Types can also be referenced explicitly by importing them.

```typescript
import { VdtClient, VdtConfig } from 'vdt-js';

const config: VdtConfig = {
  mode: 'development',
  brandUrl: 'vardytests.com',
};

const authClient: VdtClient = new VdtClient(config);
```

### Using API

You can easily utilize the API by importing it and then invoking its methods.

Example:

```typescript
import { IGetTokenPayload, getTokenAPI } from 'vdt-js';

const payload: IGetTokenPayload = {
  authKey: 'Your authKey',
  username: 'Your username',
};

const response = await getTokenAPI(payload);
```

## Configuration reference

### Configuration options

These options can be included when instantiating Vdt Auth JS (`new VdtClient(config)`).

#### `brandUrl`

> :warning: This option is required

The url for your brand.

#### `mode`

The default environment for your application is set to 'production'. To switch to a development environment, set the environment to 'development'.

### Methods

#### `setToken()`

After you get token from server, use the following method to set the `token` in the request header.

Example:

```javascript
authClient.setToken(token);
```

#### `setHeaders()`

If you want to set headers for all APIs, use this method.

Example:

```javascript
const userHeaders = {
  UrlRequest: window.location.href,
};

authClient.setHeaders(userHeaders);
```
