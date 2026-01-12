'use client'

import { createProduct } from '@/app/actions/product-actions'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'

export default function NewProductPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/products"
                    className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
                <h2 className="text-3xl font-bold text-gray-800">Add New Product</h2>
            </div>

            <form action={createProduct} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="e.g. Premium Bath Towel"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
                        <select
                            id="category"
                            name="category"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-white"
                        >
                            <option value="">Select Category</option>
                            <option value="Toiletries">Toiletries</option>
                            <option value="Linens">Linens</option>
                            <option value="Room Amenities">Room Amenities</option>
                            <option value="Food & Beverage">Food & Beverage</option>
                            <option value="Housekeeping">Housekeeping</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="price" className="text-sm font-medium text-gray-700">Price ($)</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            min="0"
                            step="0.01"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                            placeholder="0.00"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="stock" className="text-sm font-medium text-gray-700">Stock Level</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        min="0"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="100"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="imageUrl" className="text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="https://example.com/image.jpg"
                    />
                    <p className="text-xs text-gray-500">Provide a direct link to the product image.</p>
                </div>

                <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Describe the product..."
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-purple-200"
                    >
                        <Save size={20} />
                        <span>Save Product</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
