import { prisma } from '@/lib/prisma'
import { Package, Users, DollarSign, TrendingUp } from 'lucide-react'

export const dynamic = 'force-dynamic'

async function getStats() {
    try {
        const productCount = await prisma.product.count()
        const leadCount = await prisma.lead.count()
        const newLeads = await prisma.lead.count({ where: { status: 'NEW' } })
        return { productCount, leadCount, newLeads }
    } catch (error) {
        console.error('Failed to fetch stats:', error)
        return { productCount: 0, leadCount: 0, newLeads: 0, error: true }
    }
}

export default async function AdminDashboard() {
    const stats = await getStats()

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>

            {stats.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Database Error: </strong>
                    <span className="block sm:inline">Could not connect to the database. Please check your connection string.</span>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Products</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.productCount}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                        <Package size={24} />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Leads</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.leadCount}</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-full text-green-600">
                        <Users size={24} />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">New Enquiries</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.newLeads}</p>
                    </div>
                    <div className="p-3 bg-indigo-50 rounded-full text-indigo-600">
                        <TrendingUp size={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}
