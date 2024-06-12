### Project setup instruction


1. clone the project 

```

git clone https://github.com/Rahemanali-24/Foodie-frontend.git


```


2.Move into the directory of the downloaded project


```

cd Foodie-frontend

```


3.Install node_modules

```
npm install


```

4. Turn up the server 

```

npm run dev

```


### USED DEPENDENCIES


`1 => Tailwind Css`

```
npm install -D tailwindcss

npx tailwindcss init

```

`tailwind.config.js`

```
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

```

`index.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`Terminal`

```
npm run start
```

`Use Like this`

```
 <h1 className="text-3xl font-bold underline">
      Hello world!
 </h1>
```


`2 => DaisyUi`
```
npm i -D daisyui@latest
```

`tailwind.config.js`

```
import daisyui from "daisyui";


 plugins: [
    daisyui,
],

<button className="btn btn-neutral">Button</button>


```

`3 => React Stick`


```
npm install react-slick --save

npm install slick-carousel --save

specific jsx like i am using in SpecialDishes.jsx

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

```






### Custom Use

`1 => tailwind.config.js`

``` theme: {
    extend: {
      colors:{
        "green": "#39DB4A",
        "red": "#FF6868",
        "secondary": "#555",
        "primaryBG": "#FCFCFC"
      },
      
    },
  },
  
  <h1 className='bg-green'>Hello</h1>
  
  ```
`2 => App.css`

```
body{
    font-family: "Inter", sans-serif;
}

header{
    z-index:10001 !important;
}


for specfic css that will use multiple time
.section-container{
    @apply max-w-screen-2xl container mx-auto xl:px-24 px-4 ;
}

 <div className="section-container>

```

`font-> App.css`

```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

<h5 className="font-medium mb-1">Spicy noodles</h5>
```













