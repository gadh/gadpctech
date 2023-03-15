# gad pc tech upload item
this tutorial about how to  upload new item on site

## Step 1: Add the item image
Upload your item image to the images/products directory in your local repository. You can do this by clicking the "Upload files" button on your repository's GitHub page.

Once the image is uploaded, add the following code to the index.html file to display the image:
```html
<img class="card-img-top" src="images/products/{ur img product and index}.jpg" alt="product and index">
```
Replace {ur img product and index}.jpg with the name of your item image.
## Step 2: Add the item title
Add a title for your new item using the following code:
```html
<h3 class="card-title">My Item Title</h3>
```
Replace My Item Title with the title of your item.

## Step 3: Add the item description
Add a description for your new item using the following code:
```html
<p class="card-text">My item description</p>
```
Replace My item description with the description of your item.
## Step 4: Add the item price
Add a price for your new item using the following code:
```html
<p class="card-text">$19.99</p>
```
Replace $19.99 with the price of your item.
That's it! You can now view your new item on the index.html page.
## template item code
```html
 <div class="col-md-4 mb-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="images/products/{ur img product and index}.jpg" alt="product and index">
                    <div class="card-body">
                        <h3 class="card-title">title here</h3>
                        <p class="card-text">bio here</p>
                        <p class="card-text">price here</p>
                        <div class="contact">
                            <div  style="height: 50px; min-width: 50px; border-radius: 25px; background-color: rgb(77, 194, 71); box-shadow: rgba(0, 0, 0, 0.4) 2px 2px 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding-left: 15px; padding-right: 15px;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="wa-messenger-svg-whatsapp wh-svg-icon" style="width: 46px; height: 46px; fill: rgb(255, 255, 255); z-index: 1;"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path>

                                </svg>
                                <a href="" target="_blank">
                                    <div  style="color: white; font-size: 18px;">קנה עכשיו</div>

                                </a>
                            </div>
                            <div style="height: 50px; min-width: 50px; border-radius: 25px; background-color: rgb(218,68,55); box-shadow: rgba(0, 0, 0, 0.4) 2px 2px 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding-left: 15px; padding-right: 15px;">
                                <svg width="40" viewBox="7.086 -169.483 1277.149 1277.149" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="none" d="M1138.734 931.095h.283M1139.017 931.095h-.283"></path><path d="M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z" fill="#e75a4d"></path><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#a)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><path fill="#e7e4d7" d="M148.96 242.419v688.676h989.774V245.877L643.833 586.771z"></path><path fill="#b8b7ae" d="M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z"></path><path fill="#b7b6ad" d="M1138.734 245.877l.283 685.218-495.184-344.324z"></path><path d="M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z" fill="#b2392f"></path><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#b)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#c)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#d)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#e)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#f)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#g)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="1959.712" y1="737.107" x2="26066.213" y2="737.107" gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"><stop offset="0" stop-color="#f8f6ef"></stop><stop offset="1" stop-color="#e7e4d6"></stop></linearGradient><path fill="url(#h)" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path><path fill="#f7f5ed" d="M111.713 7.087l532.12 394.525L1179.439 7.087z"></path></g></svg>
                                <a href="" >
                                    <div  style="color: white; font-size: 18px;"> קנה עכשיו</div>

                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
```

