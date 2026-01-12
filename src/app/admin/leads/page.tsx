import { prisma } from '@/lib/prisma'
import { Mail, Phone, Calendar } from 'lucide-react'
import { Lead } from '@prisma/client'

export const dynamic = 'force-dynamic'

async function getLeads() {
    try {
        const leads = await prisma.lead.findMany({
            orderBy: { createdAt: 'desc' },
        })
        return leads
    } catch (error) {
        console.error('Failed to fetch leads:', error)
        return []
    }
}

export default async function LeadsPage() {
    const leads = await getLeads()

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Enquiries & Leads</h2>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-900 font-medium border-b">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Contact Info</th>
                                <th className="px-6 py-4">Message</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {leads.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        No leads yet.
                                    </td>
                                </tr>
                            ) : (
                                leads.map((lead: Lead) => (
                                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            <div>{lead.name}</div>
                                            {lead.companyName && (
                                                <div className="text-xs text-gray-500">{lead.companyName}</div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 space-y-1">
                                            <div className="flex items-center gap-2">
                                                <Mail size={14} className="text-gray-400" />
                                                <span>{lead.email}</span>
                                            </div>
                                            {lead.phone && (
                                                <div className="flex items-center gap-2">
                                                    <Phone size={14} className="text-gray-400" />
                                                    <span>{lead.phone}</span>
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 max-w-xs truncate" title={lead.message || ''}>
                                            {lead.message || '-'}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium 
                        ${lead.status === 'NEW' ? 'bg-blue-100 text-blue-700' :
                                                    lead.status === 'CONTACTED' ? 'bg-yellow-100 text-yellow-700' :
                                                        lead.status === 'QUALIFIED' ? 'bg-purple-100 text-purple-700' :
                                                            lead.status === 'CONVERTED' ? 'bg-green-100 text-green-700' :
                                                                'bg-gray-100 text-gray-700'}`}>
                                                {lead.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 flex items-center gap-2">
                                            <Calendar size={14} />
                                            {new Date(lead.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
