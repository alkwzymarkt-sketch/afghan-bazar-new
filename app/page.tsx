
"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "گوشی آیفون 13", price: "۳۵٬۰۰۰", category: "موبایل", emoji: "📱", city: "کابل" },
  { id: 2, name: "لپ‌تاپ HP", price: "۲۲٬۰۰۰", category: "کمپیوتر", emoji: "💻", city: "هرات" },
  { id: 3, name: "موتر کرولا", price: "۵۵۰٬۰۰۰", category: "موتر", emoji: "🚗", city: "کابل" },
  { id: 4, name: "ساعت هوشمند", price: "۲٬۵۰۰", category: "لوازم", emoji: "⌚", city: "مزار" },
  { id: 5, name: "لباس مردانه", price: "۱٬۲۰۰", category: "لباس", emoji: "👔", city: "قندهار" },
  { id: 6, name: "خانه مسکونی", price: "۲٬۵۰۰٬۰۰۰", category: "املاک", emoji: "🏠", city: "کابل" },
];

const categories = [
  "همه",
  "موبایل",
  "کمپیوتر",
  "موتر",
  "املاک",
  "لباس",
  "لوازم",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("همه");

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      category === "همه" || product.category === category;

    const matchSearch =
      product.name.includes(search) ||
      product.city.includes(search);

    return matchCategory && matchSearch;
  });

  return (
    <main dir="rtl" className="min-h-screen bg-gray-100 text-gray-900">

      <header className="bg-emerald-700 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black">
              🇦🇫 افغان بازار
            </h1>
            <p className="text-xs mt-1">
              بازار آنلاین افغانستان
            </p>
          </div>

          <button className="bg-white text-emerald-800 px-4 py-2 rounded-xl font-bold">
            ورود
          </button>
        </div>
      </header>

      <section className="bg-emerald-700 text-white px-4 pb-10 pt-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            هر چیزی را پیدا کن!
          </h2>

          <p className="text-sm mb-5">
            خرید و فروش آسان در سراسر افغانستان
          </p>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="نام کالا یا شهر را جستجو کنید..."
            className="w-full rounded-xl p-4 text-gray-900 outline-none"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-4">

        <h2 className="text-xl font-bold mb-4">
          دسته‌بندی‌ها
        </h2>

        <div className="flex gap-2 overflow-x-auto pb-4">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-3 rounded-xl whitespace-nowrap font-bold ${
                category === item
                  ? "bg-emerald-700 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center my-5">
          <h2 className="text-xl font-bold">
            آگهی‌های جدید
          </h2>

          <span className="text-sm text-emerald-700">
            {filteredProducts.length} محصول
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="h-32 bg-emerald-50 flex items-center justify-center text-6xl">
                {product.emoji}
              </div>

              <div className="p-3">
                <h3 className="font-bold mb-2">
                  {product.name}
                </h3>

                <p className="text-emerald-700 font-black">
                  {product.price} افغانی
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  📍 {product.city}
                </p>

                <button className="w-full bg-emerald-700 text-white rounded-lg py-2 mt-3 font-bold">
                  مشاهده آگهی
                </button>
              </div>
            </article>
          ))}

        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center py-10 text-gray-500">
            محصولی پیدا نشد.
          </p>
        )}

      </section>

      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="bg-emerald-700 text-white rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold mb-3">
            فروشنده هستید؟
          </h2>

          <p className="text-sm mb-4">
            محصولات خود را در افغان بازار معرفی کنید.
          </p>

          <button className="bg-white text-emerald-800 px-6 py-3 rounded-xl font-bold">
            ثبت آگهی رایگان
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center p-6">
        <h2 className="font-bold text-lg">
          🇦🇫 افغان بازار
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          بازار آنلاین خرید و فروش افغانستان
        </p>

        <p className="text-xs text-gray-500 mt-4">
          © 2026 Afghan Bazar
        </p>
      </footer>

    </main>
  );
}
