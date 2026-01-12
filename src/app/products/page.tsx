import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

async function getProducts() {
    try {
        const products = await prisma.product.findMany({
            orderBy: { createdAt: 'desc' },
        })
        return products
    } catch (error) {
        console.error('Failed to fetch products:', error)
        return []
    }
}

export default async function CatalogPage() {
    const products = await getProducts()

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Collections</h1>
                    <p className="text-gray-500 text-lg">
                        Discover our range of premium hotel amenities designed to elevate your guest experience.
                    </p>
                </div>

                {products.length === 0 ? (
                    <div className="text-center py-24 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-500 mb-6">Our catalog is currently being updated. Please check back later.</p>
                        <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
                            Contact us for a catalog
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                <div className="relative h-64 bg-gray-100 overflow-hidden">
                                    {product.images[0] ? (
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                            No Image
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{product.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-serif text-purple-700">${Number(product.price).toFixed(2)}</span>
                                        <Link
                                            href={`/products/${product.id}`}
                                            className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
