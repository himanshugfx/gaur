'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Package } from 'lucide-react'

const CATEGORIES = [
    { value: 'CONSUMABLES', label: 'Consumables', color: 'bg-green-100 text-green-700' },
    { value: 'MOPS_WIPERS', label: 'Mops & Wipers', color: 'bg-blue-100 text-blue-700' },
    { value: 'BROOMS_DUSTPANS', label: 'Brooms, Dustpans & Dustbins', color: 'bg-amber-100 text-amber-700' },
    { value: 'HANDLING_EQUIPMENTS', label: 'Handling Equipments', color: 'bg-purple-100 text-purple-700' },
    { value: 'UTILITIES', label: 'Utilities', color: 'bg-teal-100 text-teal-700' },
    { value: 'DISPENSORS', label: 'Dispensors', color: 'bg-pink-100 text-pink-700' },
    { value: 'CARTS_TROLLIES', label: 'Carts and Trollies', color: 'bg-orange-100 text-orange-700' },
    { value: 'MACHINERIES', label: 'Machineries', color: 'bg-indigo-100 text-indigo-700' },
];

interface HotelAmenity {
    id: string;
    name: string;
    category: string;
    description: string | null;
    image: string;
    price: number;
    minOrderQty: number;
    isActive: boolean;
}

const getImageUrl = (image: string): string => {
    if (!image) return '/assets/images/product/1000x1000.png';
    if (image.startsWith('/') || image.startsWith('http')) return image;
    return `/api/media/${image}`;
};

const getCategoryLabel = (category: string) => {
    return CATEGORIES.find(c => c.value === category)?.label || category;
};

const getCategoryColor = (category: string) => {
    return CATEGORIES.find(c => c.value === category)?.color || 'bg-gray-100 text-gray-700';
};

export default function CollectionsPage() {
    const [amenities, setAmenities] = useState<HotelAmenity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAmenities();
    }, []);

    const fetchAmenities = async () => {
        try {
            const res = await fetch('/api/admin/hotel-catalogue?limit=1000');
            const data = await res.json();
            setAmenities(data.amenities || []);
        } catch (error) {
            console.error('Error fetching amenities:', error);
        } finally {
            setLoading(false);
        }
    };

    // Group amenities by category
    const groupedAmenities = CATEGORIES.reduce((acc, cat) => {
        acc[cat.value] = amenities.filter(a => a.category === cat.value && a.isActive);
        return acc;
    }, {} as Record<string, HotelAmenity[]>);

    // Only show categories that have products
    const categoriesWithProducts = CATEGORIES.filter(cat => groupedAmenities[cat.value]?.length > 0);

    if (loading) {
        return (
            <div className="bg-gray-50 min-h-screen py-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-500 mt-3">Loading collections...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Collections</h1>
                    <p className="text-gray-500 text-lg">
                        Discover our range of premium housekeeping and cleaning products designed for hotels and businesses.
                    </p>
                </div>

                {categoriesWithProducts.length === 0 ? (
                    <div className="text-center py-24 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Package className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-500 mb-6">Our catalog is currently being updated. Please check back later.</p>
                        <Link href="/contact" className="text-green-600 hover:text-green-700 font-medium">
                            Contact us for a catalog
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-16">
                        {categoriesWithProducts.map((category) => (
                            <section key={category.value} id={category.value} className="scroll-mt-24">
                                {/* Category Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${category.color} mb-2`}>
                                            {groupedAmenities[category.value].length} Products
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                                            {category.label}
                                        </h2>
                                    </div>
                                </div>

                                {/* Products Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {groupedAmenities[category.value].map((product) => (
                                        <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                            <div className="relative h-56 bg-gray-100 overflow-hidden">
                                                <img
                                                    src={getImageUrl(product.image)}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/assets/images/product/1000x1000.png';
                                                    }}
                                                />
                                            </div>
                                            <div className="p-5">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                                                {product.description && (
                                                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">{product.description}</p>
                                                )}
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <span className="text-xl font-bold text-green-700">₹{product.price.toFixed(2)}</span>
                                                        <span className="text-xs text-gray-400 ml-1">per unit</span>
                                                    </div>
                                                    <span className="text-xs text-gray-500">MOQ: {product.minOrderQty}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                )}

                {/* Category Quick Nav */}
                {categoriesWithProducts.length > 1 && (
                    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200 z-40">
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500 font-medium">Jump to:</span>
                            <div className="flex gap-2">
                                {categoriesWithProducts.map((cat) => (
                                    <a
                                        key={cat.value}
                                        href={`#${cat.value}`}
                                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${cat.color} hover:opacity-80`}
                                    >
                                        {cat.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
