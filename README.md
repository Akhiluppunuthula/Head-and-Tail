<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->


1 :- Create React Project
2 :- Create a three pages (Must handle with routing library)
Home
About
Head & Tail
3:- In Home page there should be two links for About page and Head & Tail page
4:- In About page there will be simple paragraph
5:- In Head & Tail page you need to add one dropdown & one submit button.
- Here you need to implement a logic for head & tail.
- First of all you need to add is two values in dropdown ‘ H ‘ & ‘ T ‘ and by default
there will be text Select Value as placeholder (if you haven’t selected anything).
- Select any value from dropdown (H or T) and click on submit button that suppose
you choose H value and it should be visible below submit button. And now if you add two
more times H then that 2 H chars should be visible below first H (Below is the example)
H ← first added H
H ← second added H
H ← third added H
- Now If you select T then It should be visible beside First H, and if you again add T
then it should be visible below first T (Below is example)
H T
H T
H
- Now if you add H then it should be visible beside first T, and If you again add T then
It should visible beside H (Below is the example)
H T H T
H T
H
- now at last if you add T then we’ll add that T below first T
H T H T
H T     T
H
All you need to do is make separate columns for H and T, if you add same char then it will
visible below from that added char, if you add new then we’ll create new column.
6:- Put a validation in submit button , if you have not selected H or T then there should one
validation message like “Please select value from dropdown”.
7:- Once you select any value from dropdown and click on submit button, the dropdown
should reset to default value (which is “select value”).