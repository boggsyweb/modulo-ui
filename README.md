
![Logo](https://i.imgur.com/RpSAwKf.png)

# Módulo UI
Módulo UI is teeny tiny React component library designed to make building React projects easier. Módulo was started by  [Stephanie Boggs](https://github.com/boggsyweb) as a challenge to learn as much as possible about designing, building, packaging, and publishing a component library. The future for Módulo looks bright, as Stephanie will be getting collaborators in the near future to help grow the library into a (slightly) larger than "teeny tiny" size.

## Table of contents

- 📝[Documentation](#documentation)
- 🔧[Installation](#installation)
- 🖥️[Usage](#usage)
- 🦾[Author(s)](#authors)
- ✋[Contributing](#contributing)
- 📜[License](#license)


## Documentation

Click here for the [Módulo UI](https://warm-beignet-6ffbce.netlify.app/) website and for all of the up-to-date info.


## Installation

with npm
```bash
 $ npm install modulo-ui
```
with yarn
```bash
 $ yarn add modulo-ui
 ```


    
## Usage

To start using the components, import the one(s) you want to use into your project, pass the appropriate props, and add whatever logic you need:


```typescript
import { Button } from 'modulo-ui'

      const App = () => (
        <>
         <Button 
            Size='large' 
            Color='red'
            Icon 
            IconType='settings1' 
            ButtonLabel="Submit" 
            onClick={handleButtonClick} 
         />
        </>
      );
```
For more in-depth examples, including how to overwrite default styles, go to the [Módulo UI website](https://warm-beignet-6ffbce.netlify.app/).


## Authors

- [@boggsyweb](https://github.com/boggsyweb)


## Contributing

Módulo UI is still getting off the ground, but if you'd like to chat about contributing in the future, email here: 

sjboggsdev@gmail.com
## License

[MIT](https://choosealicense.com/licenses/mit/)

