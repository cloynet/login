# Full Stack Context Project

**A Next.js project demonstrating Auth, Product and Recipes contexts / Auth, Product ve Recipes context’lerini kullanan bir Next.js projesi.**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)

---

## Features / Özellikler
- Auth Context: Login / user authentication and token management / kullanıcı doğrulama ve token yönetimi  
- Product Context: Fetch and list products / Ürünleri fetch etme ve listeleme  
- Recipes Context: Fetch and list recipes / Tarifleri fetch etme ve listeleme  
- Search / filtering functionality / Arama / filtreleme fonksiyonları  
- Built with React + Next.js + TailwindCSS / React + Next.js + TailwindCSS ile geliştirilmiştir

## Pages / Sayfalar
- `/` → Login page / Giriş sayfası
- `/products` → Ürünler sayfası ve detayları
- `/products/:id` → Ürün detay sayfası
- `/recipes` → Tarifler sayfası ve arama
- `/recipes/:id` → Tarif detay sayfası

## Setup / Kurulum
```bash
git clone <https://github.com/cloynet/login>
cd <https://github.com/cloynet/login>
npm install
npm run dev
```

## Usage / Kullanım
1. Open `/` page and enter username and password / Giriş için `/` sayfasını açın, username ve password girin  
2. After login, you will be redirected to `/products` or `/recipes` pages / Giriş yaptıktan sonra `/products` veya `/recipes` sayfalarına yönlendirileceksiniz  
3. You can search for products or recipes and view their details / Ürünleri veya tarifleri arayabilir ve detay sayfalarına gidebilirsiniz

## Test Login / Test Giriş
- Username / Kullanıcı Adı: `emilys`  
- Password / Şifre: `emilyspass`


## Notes / Notlar
- Auth Context uses dummyjson API (`https://dummyjson.com/auth/login`) / Auth Context dummyjson API kullanıyor (`https://dummyjson.com/auth/login`)  
- Product and Recipes Contexts fetch data from dummyjson API (`https://dummyjson.com/products`, `https://dummyjson.com/recipes`) / Product ve Recipes Context’leri dummyjson API üzerinden veri çekiyor (`https://dummyjson.com/products`, `https://dummyjson.com/recipes`)  
- Global state management is done using React state and context / React state ve context kullanımıyla global state yönetimi sağlanıyor
