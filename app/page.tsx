"use client";

import { useState } from "react";

const categories = [
  "همه محصولات",
  "موبایل و تکنالوژی",
  "موتر و وسایط",
  "خانه و زندگی",
  "لباس و پوشاک",
  "املاک",
  "لوازم برقی",
];

const products = [
  { id: 1, name: "آیفون 13", price: "۲۵٬۰۰۰", category: "موبایل و تکنالوژی", icon: "📱" },
  { id: 2, name: "موتر تویوتا", price: "۸۵۰٬۰۰۰", category: "موتر و وسایط", icon: "🚗" },
  { id: 3, name: "لپ‌تاپ HP", price: "۱۸٬۰۰۰", category: "موبایل و تکنالوژی", icon: "💻" },
  { id: 4, name: "خانه مسکونی", price: "۳٬۵۰۰٬۰۰۰", category: "املاک", icon: "🏠" },
  { id: 5, name: "ساعت هوشمند", price: "۳٬۵۰۰", category: "موبایل و تکنالوژی", icon: "⌚" },
  { id: 6, name: "مبل خانه", price: "۱۲٬۰۰۰", category: "خانه و زندگی", icon: "🛋️" },
  { id: 7, name: "لباس مردانه", price: "۱٬۲۰۰", category: "لباس و پوشاک", icon: "👔" },
  { id: 8, name: "ماشین لباس‌شویی", price: "۱۵٬۰۰۰", category: "لوازم برقی", icon: "🧺" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("همه محصولات");
  const [cart, setCart] = useState<number[]>([]);

  const filtered = products.filter((product) => {
    const matchSearch = product.name.includes(search);
    const matchCategory =
      category === "همه محصولات" || product.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-emerald-800 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">افغان بازار</h1>
            <p className="text-sm text-emerald-100">بازار آنلاین افغانستان</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => alert("سبد خرید: " + cart.length + " محصول")}>
              🛒 {cart.length}
            </button>
            <button onClick={() => alert("بخش ورود کاربران به‌زودی فعال می‌شود")}>
              ورود
            </button>
          </div>
        </div>
      </header>

      <section className="bg-emerald-700 text-white text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">
          خرید و فروش آسان در افغانستان
        </h2>
        <p className="mb-6">هر چیزی را پیدا کن، بخر یا بفروش.</p>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="نام محصول را جستجو کنید..."
          className="w-full max-w-xl p-4 rounded-xl text-gray-900 outline-none"
        />
      </section>

      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">دسته‌بندی محصولات</h2>

        <div className="flex gap-2 overflow-x-auto pb-4">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-full px-4 py-3 ${
                category === item
                  ? "bg-emerald-700 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold">محصولات جدید</h2>
          <span className="text-sm text-gray-500">
            {filtered.length} محصول
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl shadow-sm border overflow-hidden"
            >
              <div className="h-32 bg-emerald-50 flex items-center justify-center text-6xl">
                {product.icon}
              </div>

              <div className="p-3">
                <h3 className="font-bold mb-2">{product.name}</h3>
                <p className="text-emerald-700 font-bold mb-3">
                  {product.price} افغانی
                </p>

                <button
                  onClick={() => setCart((old) => [...old, product.id])}
                  className="w-full bg-emerald-700 text-white rounded-lg p-2"
                >
                  افزودن به سبد
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center p-10 text-gray-500">
            محصولی پیدا نشد.
          </p>
        )}
      </section>

      <section className="bg-white mt-10 p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">فروشنده شوید!</h2>
        <p className="text-gray-600 mb-5">
          محصولات خود را در افغان بازار به فروش برسانید.
        </p>
        <button
          onClick={() => alert("ثبت‌نام فروشندگان به‌زودی فعال می‌شود")}
          className="bg-emerald-700 text-white px-8 py-3 rounded-xl"
        >
          شروع فروش
        </button>
      </section>

      <footer className="bg-slate-900 text-white text-center p-6 mt-8">
        <h2 className="font-bold text-xl">افغان بازار</h2>
        <p className="text-sm mt-2">بازار آنلاین برای تمام افغانستان</p>
        <p className="text-gray-400 text-xs mt-4">
          © 2026 Afghan Bazar
        </p>
      </footer>
    </main>
  );
}
