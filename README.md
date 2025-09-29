# 🚀 Full Stack Context Project

**Auth, Product ve Recipes context’lerini kullanan bir Next.js projesi.** Global durum (state) yönetimini gösterir.

**A Next.js project demonstrating Auth, Product, and Recipes contexts.** Showcases global state management.

---

## ✨ Features / Özellikler

| Icon | Feature (EN) | Özellik (TR) |
| :---: | :--- | :--- |
| 🔑 | **Auth Context:** Login & Token Management | Kullanıcı doğrulama ve **Token Yönetimi**. |
| 🛍️ | **Product Context:** Fetch and List Products | Ürünleri **çekme (fetch)** ve listeleme. |
| 🍳 | **Recipes Context:** Fetch and List Recipes | Tarifleri **çekme (fetch)** ve listeleme. |
| 🔍 | **Search / Filtering** Functionality | **Arama / Filtreleme** fonksiyonları. |
| 🛠️ | **Modern Stack** | React + Next.js + TailwindCSS ile geliştirilmiştir. |

---

## 🛠️ Technologies / Teknolojiler

| Icon | Technology / Teknoloji | Role / Görev (TR) | Role / Görev (EN) |
| :---: | :--- | :--- | :--- |
| ⚛️ | **Next.js & React** | Uygulamanın temel iskeleti ve hızlı arayüz yapısı. | The core framework for the application and fast UI structure. |
| 🧩 | **React Context** | Uygulama genelinde Auth, Ürün ve Tarif durumlarını yönetmek için. | Used for managing Auth, Product, and Recipe states across the application. |
| 💨 | **Tailwind CSS** | Hızlı ve responsive tasarım için utility-first CSS. | A utility-first CSS framework for fast and responsive design. |
| 🔗 | **dummyjson API** | Kullanıcı doğrulama ve veri (ürün/tarif) çekme işlemlerinin kaynağı. | The source for user authentication and fetching data (products/recipes). |

---

## 🗺️ Pages / Sayfalar

| Route / Rota | Description (EN) | Açıklama (TR) |
| :--- | :--- | :--- |
| `/` | **Login Page** | **Giriş Sayfası**. |
| `/products` | **Products List Page** | **Ürünler Listesi Sayfası** ve ürün detaylarının önizlemesi. |
| `/products/:id` | **Product Detail Page** | **Ürün Detay Sayfası**. |
| `/recipes` | **Recipes List & Search Page** | **Tarifler Sayfası** ve arama/filtreleme alanı. |
| `/recipes/:id` | **Recipe Detail Page** | **Tarif Detay Sayfası**. |

---

## ⚡ Setup / Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu Klonlayın / Clone the repository:**
    ```bash
    git clone [https://github.com/cloynet/login.git](https://github.com/cloynet/login.git)
    cd login
    ```

2.  **Bağımlılıkları Yükleyin / Install dependencies:**
    ```bash
    npm install
    # veya / or
    yarn install
    ```

3.  **Geliştirme Sunucusunu Başlatın / Start the Development Server:**
    ```bash
    npm run dev
    ```
    Tarayıcınızda görüntülemek için http://localhost:3000 adresini açın. / Open http://localhost:3000 to view it in your browser.

### 🧑‍💻 Usage & Test Login / Kullanım ve Test Giriş

* **Giriş:** Giriş için `/` sayfasını açın, test kullanıcı adını ve şifreyi girin. / **Login:** Open the `/` page and enter the test username and password.
* **Yönlendirme:** Giriş yaptıktan sonra `/products` veya `/recipes` sayfalarına yönlendirileceksiniz. / **Redirection:** After logging in, you will be redirected to the `/products` or `/recipes` pages.
* **İşlem:** Ürünleri veya tarifleri arayabilir ve detay sayfalarına gidebilirsiniz. / **Action:** You can search for products or recipes and view their details.

| Alan / Field | **Test Value (EN)** | Test Değeri (TR) |
| :---: | :---: | :---: |
| **Username** | `emilys` | `emilys` |
| **Password** | `emilyspass` | `emilyspass` |

---

## 📌 Notes / Notlar

* **Auth Context** dummyjson API'ın `/auth/login` endpoint'ini kullanır. / **Auth Context** uses the dummyjson API's `/auth/login` endpoint.
* **Product ve Recipes Contexts** verileri dummyjson API üzerinden çeker (`/products`, `/recipes`). / **Product and Recipes Contexts** fetch data from the dummyjson API (`/products`, `/recipes`).
* Global state yönetimi **React state ve context** kullanımıyla sağlanır. / Global state management is handled using **React state and context**.

---

## 🔗 Live Demo & Repository

* **GitHub Deposu / GitHub Repository:** [https://github.com/cloynet/login](https://github.com/cloynet/login)
* **Canlı Demo / Live Demo:** [https://login-amber-seven.vercel.app/](https://login-amber-seven.vercel.app/)
