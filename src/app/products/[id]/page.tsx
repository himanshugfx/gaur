import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react'
import { notFound } from 'next/navigation'

async function getProduct(id: string) {
    try {
        const product = await prisma.product.findUnique({
            where: { id },
        })
        return product
    } catch (error) {
        return null
    }
}

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id)

    if (!product) {
        notFound()
    }

    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-6">
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-700 mb-8 transition-colors"
                >
                    <ArrowLeft size={18} /> Back to Collection
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Image Section */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative group">
                            {product.images[0] ? (
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    No Image
                                </div>
                            )}
                        </div>
                        {/* Thumbnails (Placeholder) */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="aspect-square bg-gray-50 rounded-lg border border-gray-100"></div>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-8">
                        <div>
                            <div className="text-purple-700 font-medium text-sm tracking-uppercase mb-2">
                                {product.category}
                            </div>
                            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">{product.name}</h1>
                            <p className="text-3xl font-light text-gray-900">${Number(product.price).toFixed(2)}</p>
                        </div>

                        <div className="prose prose-gray max-w-none text-gray-500 leading-relaxed">
                            <p>{product.description}</p>
                        </div>

                        <div className="border-t border-b border-gray-100 py-6 space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Check size={18} className="text-green-500" /> In Stock ({product.stock} available)
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Check size={18} className="text-green-500" /> Premium Quality Guarantee
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Check size={18} className="text-green-500" /> Bulk Order Discounts Available
                            </div>
                        </div>

                        <div className="pt-4 space-y-4">
                            <Link
                                href={`/contact?subject=Enquiry for ${encodeURIComponent(product.name)}`}
                                className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-4 rounded-full flex items-center justify-center gap-2 transition-colors shadow-lg shadow-purple-200"
                            >
                                <ShoppingBag size={20} />
                                <span>Enquire Now</span>
                            </Link>
                            <p className="text-center text-xs text-gray-400">
                                Minimum order quantities may apply for wholesale pricing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
