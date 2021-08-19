# Angular Social Login Front-End Project


![Angular & .Net Core JWT & Social Login App](https://github.com/ouzdev/WebAPISocialLogin/blob/master/WebAPISocialLogin/wwwroot/assets/images/readme-image.png?raw=true)
<hr>

```
📦 Angular Social Login Front-End Project Tree Structure
├─ src
│  ├─ app
│  │  ├─ app-routing.module.ts
│  │  ├─ app.component.css
│  │  ├─ app.component.html
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ auth.service.spec.ts
│  │  ├─ components
│  │  │  ├─ hero-detail
│  │  │  │  ├─ hero-detail.component.css
│  │  │  │  ├─ hero-detail.component.html
│  │  │  │  └─ hero-detail.component.ts
│  │  │  ├─ login
│  │  │  │  ├─ login.component.css
│  │  │  │  ├─ login.component.html
│  │  │  │  └─ login.component.ts
│  │  │  └─ register
│  │  │     ├─ register.component.css
│  │  │     ├─ register.component.html
│  │  │     └─ register.component.ts
│  │  ├─ guards
│  │  │  └─ authorize-guard.service.ts
│  │  ├─ interceptors
│  │  │  └─ auth-interceptor.service.ts
│  │  ├─ models
│  │  │  ├─ authenticateRequest.ts
│  │  │  ├─ listResponseModel.ts
│  │  │  ├─ registerUser.ts
│  │  │  ├─ responseModel.ts
│  │  │  ├─ singleResponseModel.ts
│  │  │  ├─ tokenModel.ts
│  │  │  ├─ tokenResponseModel.ts
│  │  │  ├─ user.ts
│  │  │  └─ userResponseModel.ts
│  │  └─ services
│  │     ├─ auth.service.ts
│  │     ├─ match-password.validator.ts
│  │     ├─ user-exists.service.ts
│  │     └─ user.service.ts
│  ├─ assets
│  │  ├─ .gitkeep
│  │  ├─ fonts
│  │  │  ├─ Linearicons-Free-v1.0.0
│  │  │  │  ├─ WebFont
│  │  │  │  │  ├─ Linearicons-Free.eot
│  │  │  │  │  ├─ Linearicons-Free.svg
│  │  │  │  │  ├─ Linearicons-Free.ttf
│  │  │  │  │  ├─ Linearicons-Free.woff
│  │  │  │  │  └─ Linearicons-Free.woff2
│  │  │  │  └─ icon-font.min.css
│  │  │  ├─ font-awesome-4.7.0
│  │  │  │  ├─ HELP-US-OUT.txt
│  │  │  │  ├─ css
│  │  │  │  │  ├─ font-awesome.css
│  │  │  │  │  └─ font-awesome.min.css
│  │  │  │  ├─ fonts
│  │  │  │  │  ├─ FontAwesome.otf
│  │  │  │  │  ├─ fontawesome-webfont.eot
│  │  │  │  │  ├─ fontawesome-webfont.svg
│  │  │  │  │  ├─ fontawesome-webfont.ttf
│  │  │  │  │  ├─ fontawesome-webfont.woff
│  │  │  │  │  └─ fontawesome-webfont.woff2
│  │  │  │  ├─ less
│  │  │  │  │  ├─ animated.less
│  │  │  │  │  ├─ bordered-pulled.less
│  │  │  │  │  ├─ core.less
│  │  │  │  │  ├─ fixed-width.less
│  │  │  │  │  ├─ font-awesome.less
│  │  │  │  │  ├─ icons.less
│  │  │  │  │  ├─ larger.less
│  │  │  │  │  ├─ list.less
│  │  │  │  │  ├─ mixins.less
│  │  │  │  │  ├─ path.less
│  │  │  │  │  ├─ rotated-flipped.less
│  │  │  │  │  ├─ screen-reader.less
│  │  │  │  │  ├─ stacked.less
│  │  │  │  │  └─ variables.less
│  │  │  │  └─ scss
│  │  │  │     ├─ _animated.scss
│  │  │  │     ├─ _bordered-pulled.scss
│  │  │  │     ├─ _core.scss
│  │  │  │     ├─ _fixed-width.scss
│  │  │  │     ├─ _icons.scss
│  │  │  │     ├─ _larger.scss
│  │  │  │     ├─ _list.scss
│  │  │  │     ├─ _mixins.scss
│  │  │  │     ├─ _path.scss
│  │  │  │     ├─ _rotated-flipped.scss
│  │  │  │     ├─ _screen-reader.scss
│  │  │  │     ├─ _stacked.scss
│  │  │  │     ├─ _variables.scss
│  │  │  │     └─ font-awesome.scss
│  │  │  ├─ montserrat
│  │  │  │  ├─ Montserrat-Black.ttf
│  │  │  │  ├─ Montserrat-BlackItalic.ttf
│  │  │  │  ├─ Montserrat-Bold.ttf
│  │  │  │  ├─ Montserrat-BoldItalic.ttf
│  │  │  │  ├─ Montserrat-ExtraBold.ttf
│  │  │  │  ├─ Montserrat-ExtraBoldItalic.ttf
│  │  │  │  ├─ Montserrat-ExtraLight.ttf
│  │  │  │  ├─ Montserrat-ExtraLightItalic.ttf
│  │  │  │  ├─ Montserrat-Italic.ttf
│  │  │  │  ├─ Montserrat-Light.ttf
│  │  │  │  ├─ Montserrat-LightItalic.ttf
│  │  │  │  ├─ Montserrat-Medium.ttf
│  │  │  │  ├─ Montserrat-MediumItalic.ttf
│  │  │  │  ├─ Montserrat-Regular.ttf
│  │  │  │  ├─ Montserrat-SemiBold.ttf
│  │  │  │  ├─ Montserrat-SemiBoldItalic.ttf
│  │  │  │  ├─ Montserrat-Thin.ttf
│  │  │  │  ├─ Montserrat-ThinItalic.ttf
│  │  │  │  └─ OFL.txt
│  │  │  └─ poppins
│  │  │     ├─ Poppins-Black.ttf
│  │  │     ├─ Poppins-BlackItalic.ttf
│  │  │     ├─ Poppins-Bold.ttf
│  │  │     ├─ Poppins-BoldItalic.ttf
│  │  │     ├─ Poppins-ExtraBold.ttf
│  │  │     ├─ Poppins-ExtraBoldItalic.ttf
│  │  │     ├─ Poppins-ExtraLight.ttf
│  │  │     ├─ Poppins-ExtraLightItalic.ttf
│  │  │     ├─ Poppins-Italic.ttf
│  │  │     ├─ Poppins-Light.ttf
│  │  │     ├─ Poppins-LightItalic.ttf
│  │  │     ├─ Poppins-Medium.ttf
│  │  │     ├─ Poppins-MediumItalic.ttf
│  │  │     ├─ Poppins-Regular.ttf
│  │  │     ├─ Poppins-SemiBold.ttf
│  │  │     ├─ Poppins-SemiBoldItalic.ttf
│  │  │     ├─ Poppins-Thin.ttf
│  │  │     └─ Poppins-ThinItalic.ttf
│  │  ├─ images
│  │  │  ├─ bg-01.png
│  │  │  └─ icons
│  │  │     └─ favicon.ico
│  │  └─ js
│  │     ├─ jquery-3.2.1.min.js
│  │     └─ main.js
│  ├─ environments
│  │  ├─ environment.prod.ts
│  │  └─ environment.ts
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ main.ts
│  ├─ polyfills.ts
│  ├─ styles.css
│  └─ test.ts
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)
