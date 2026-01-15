import AdminLayout from '@/components/admin/AdminLayout';
import StatsCard from '@/components/admin/StatsCard';
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';
import { IndianRupee, ShoppingCart, Package, Users, TrendingUp, ChevronRight, Target, Mail, Building2 } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function getStats() {
    try {
        const totalLeads = await prisma.lead.count();
        const totalEnquiries = await prisma.contactInquiry.count();
        const totalAmenities = await prisma.hotelAmenity.count();
        const totalProducts = await prisma.product.count();

        return {
            totalLeads,
            totalEnquiries,
            totalAmenities,
            totalProducts,
        };
    } catch (error) {
        console.error('Error fetching stats:', error);
        return {
            totalLeads: 0,
            totalEnquiries: 0,
            totalAmenities: 0,
            totalProducts: 0,
        };
    }
}

async function getRecentLeads() {
    try {
        const leads = await prisma.lead.findMany({
            take: 10,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                stage: true
            }
        });
        return leads;
    } catch (error) {
        console.error('Error fetching recent leads:', error);
        return [];
    }
}

export default async function AdminDashboard() {
    const stats = await getStats();
    const recentLeads = await getRecentLeads();

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-y-6 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
                    <StatsCard
                        title="Sales Leads"
                        value={stats.totalLeads}
                        icon={Target}
                        color="blue"
                    />
                    <StatsCard
                        title="New Enquiries"
                        value={stats.totalEnquiries}
                        icon={Mail}
                        color="orange"
                    />
                    <StatsCard
                        title="Hotel Amenities"
                        value={stats.totalAmenities}
                        icon={Building2}
                        color="purple"
                    />
                    <StatsCard
                        title="Shop Products"
                        value={stats.totalProducts}
                        icon={Package}
                        color="green"
                    />
                </div>

                {/* Recent Leads */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="px-4 sm:px-6 py-4 sm:py-6 border-b border-gray-100 flex items-center justify-between bg-purple-50/50">
                            <div>
                                <h2 className="text-base sm:text-lg font-bold text-gray-900">Recent Sales Leads</h2>
                                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1 hidden sm:block">Latest potential customers in your funnel</p>
                            </div>
                            <Link
                                href="/admin/funnel"
                                className="group flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-purple-600 rounded-xl"
                            >
                                View All
                                <TrendingUp className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Mobile View - Card Layout */}
                        <div className="md:hidden p-4 space-y-3">
                            {recentLeads.length === 0 ? (
                                <div className="flex flex-col items-center gap-3 py-8">
                                    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-2">
                                        <Users className="w-7 h-7 text-gray-300" />
                                    </div>
                                    <p className="text-gray-900 font-medium text-sm">No recent leads</p>
                                    <p className="text-gray-500 text-xs">Start adding some! 🚀</p>
                                </div>
                            ) : (
                                recentLeads.map((lead) => (
                                    <Link
                                        key={lead.id}
                                        href={`/admin/funnel/leads/${lead.id}`}
                                        className="block bg-gray-50 rounded-xl p-4 active:bg-gray-100 transition-colors"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                                                    {(lead.name || 'L').charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900">{lead.name}</p>
                                                    <p className="text-xs text-gray-500">{lead.source}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-full border bg-purple-50 text-purple-700 border-purple-100`}>
                                                <span className={`w-1.5 h-1.5 rounded-full bg-purple-500`}></span>
                                                {lead.stage?.name || 'New'}
                                            </span>
                                            <ChevronRight className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>

                        {/* Desktop View - Table Layout */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50/50 border-b border-gray-100">
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Lead</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Source</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {recentLeads.length === 0 ? (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                                No recent leads found.
                                            </td>
                                        </tr>
                                    ) : (
                                        recentLeads.map((lead) => (
                                            <tr key={lead.id} className="group border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center font-bold text-xs shadow-sm">
                                                            {(lead.name || 'L').charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-semibold text-gray-900">{lead.name}</div>
                                                            <div className="text-xs text-gray-500">{lead.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {lead.source}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border bg-purple-50 text-purple-700 border-purple-100`}>
                                                        <span className={`w-1.5 h-1.5 rounded-full bg-purple-500`}></span>
                                                        {lead.stage?.name || 'New'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <Link
                                                        href={`/admin/funnel/leads/${lead.id}`}
                                                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                                                    >
                                                        <ChevronRight className="w-5 h-5" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-4 sm:space-y-8">
                        <div className="bg-gradient-to-br from-purple-900 to-indigo-950 rounded-2xl p-5 sm:p-8 text-white shadow-lg shadow-purple-200">
                            <h3 className="text-base sm:text-lg font-bold mb-1">Sales Pro</h3>
                            <p className="text-purple-200 text-xs sm:text-sm mb-4 sm:mb-6 opacity-90">Manage your business enquiries and leads effectively.</p>
                            <Link
                                href="/admin/inquiries"
                                className="flex items-center justify-center gap-2 w-full py-3 sm:py-4 bg-white text-purple-900 rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base mb-3"
                            >
                                <Mail className="w-5 h-5" />
                                New Enquiries
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Simplified Analytics Dashboard Placeholder or Hide */}
                <div className="mt-8 border-t pt-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Insights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="text-gray-500 font-medium mb-1">Funnel Activity</p>
                            <p className="text-2xl font-bold">{stats.totalLeads} active leads in funnel</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="text-gray-500 font-medium mb-1">Latest Amenity</p>
                            <p className="text-2xl font-bold">Catalogue up to date</p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
