"use client"
import React, { useState, useEffect } from 'react'
import { FiPlus, FiTrash2, FiPrinter, FiRefreshCw } from 'react-icons/fi'
import { MdDragIndicator } from 'react-icons/md'

const today = new Date().toISOString().slice(0, 10)

const generateInvoiceNumber = () => {
    const d = new Date()
    const p = (n) => String(n).padStart(2, '0')
    return `INV-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`
}

const packages = [
    { label: 'Starter', price: 6000000, description: 'Starter Package — One-page product showcase, mobile responsive, WhatsApp CTA, basic domain & hosting setup' },
    { label: 'Premium', price: 12000000, description: 'Premium Package — Multi-page website (Home, Products, About, Contact), premium brand-focused design, copywriting, basic SEO' },
    { label: 'Growth', price: 25000000, description: 'Growth Package — Everything in Premium, plus CMS/admin, blog SEO, analytics, lead form & multi-language' },
]

const formatIDR = (n) => 'Rp ' + new Intl.NumberFormat('id-ID').format(Math.round(Number(n) || 0))

const cleanNum = (v) => v.replace(/[^\d]/g, '').replace(/^0+(?=\d)/, '')

const formatDate = (d) => {
    if (!d) return '—'
    try {
        return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    } catch {
        return d
    }
}

export default function InvoiceGenerator() {
    const [meta, setMeta] = useState({ number: '', issueDate: today, dueDate: '' })

    useEffect(() => {
        setMeta((m) => (m.number ? m : { ...m, number: generateInvoiceNumber() }))
    }, [])
    const [client, setClient] = useState({ name: '', company: '', email: '', address: '' })
    const [items, setItems] = useState([{ description: '', qty: 1, price: '', discount: '' }])
    const [dpPercent, setDpPercent] = useState('')
    const [dragIndex, setDragIndex] = useState(null)
    const [notes, setNotes] = useState('DP 50% di awal project, sisanya saat website selesai. Harga belum termasuk biaya domain & hosting tahunan.')

    const subtotal = items.reduce((sum, it) => sum + (Number(it.qty) || 0) * (Number(it.price) || 0), 0)
    const discountTotal = items.reduce((sum, it) => sum + (Number(it.discount) || 0), 0)
    const total = subtotal - discountTotal
    const hasDiscount = discountTotal > 0
    const dpAmount = total * (Number(dpPercent) || 0) / 100
    const dueNow = dpPercent > 0 ? dpAmount : total
    const remaining = total - dpAmount

    const updateItem = (i, field, value) => {
        setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, [field]: value } : it)))
    }
    const addItem = () => setItems((prev) => [...prev, { description: '', qty: 1, price: '', discount: '' }])
    const removeItem = (i) => setItems((prev) => prev.filter((_, idx) => idx !== i))
    const moveItem = (from, to) => {
        if (from === null || from === to || to < 0) return
        setItems((prev) => {
            const next = [...prev]
            const [moved] = next.splice(from, 1)
            next.splice(to, 0, moved)
            return next
        })
    }
    const addPackage = (pkg) => setItems((prev) => {
        const next = [...prev]
        const emptyIdx = next.findIndex((it) => !it.description && !it.price)
        const row = { description: pkg.description, qty: 1, price: pkg.price, discount: '' }
        if (emptyIdx >= 0) next[emptyIdx] = row
        else next.push(row)
        return next
    })

    const inputCls = 'w-full rounded-[10px] p-3 outline-none bg-[#E4E4E4] dark:bg-[#1C1C1C] border border-[#3E3E3E] text-[#1C1C1C] dark:text-[#E4E4E4] focus:border-[#FF5733] dark:focus:border-[#68CC93] animation-effect placeholder:text-[#7E7E7E] text-[14px]'
    const labelCls = 'text-[12px] uppercase tracking-[1px] font-[500] text-[#7E7E7E] mb-1 block'

    return (
        <div className="bg-[#E4E4E4] dark:bg-[#1C1C1C] min-h-screen pt-28 pb-16 px-[16px]">
            <div className="dc-container">

                <div className="flex flex-wrap items-end justify-between gap-4 pb-8 print:hidden">
                    <div>
                        <span className="uppercase tracking-[2px] text-[12px] md:text-[14px] font-[500] text-[#7E7E7E]">Tools</span>
                        <h1 className="mt-2 text-[#1C1C1C] dark:text-[#E4E4E4] font-[600] leading-[1.05] tracking-[-1px] md:tracking-[-2px] text-[clamp(32px,5vw,56px)]">
                            Invoice generator
                        </h1>
                    </div>
                    <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 rounded-[10px] py-[14px] px-[24px] text-[16px] font-[700] text-[#FCFAF4] bg-[#FF5733] dark:bg-[#68CC93] hover:opacity-90 animation-effect"
                    >
                        <FiPrinter className="text-[18px]" />
                        Print / Save PDF
                    </button>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">

                    {/* EDITOR */}
                    <div className="lg:col-span-2 print:hidden flex flex-col gap-6">

                        <div className="rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-6">
                            <h2 className="text-[18px] font-[700] tracking-[-0.5px] text-[#1C1C1C] dark:text-[#E4E4E4] mb-4">Invoice details</h2>
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div>
                                    <label className={labelCls}>Invoice no.</label>
                                    <div className="flex flex-col gap-2">
                                        <input className={inputCls} value={meta.number} onChange={(e) => setMeta({ ...meta, number: e.target.value })} />
                                        <button
                                            type="button"
                                            onClick={() => setMeta((m) => ({ ...m, number: generateInvoiceNumber() }))}
                                            aria-label="Generate new invoice number"
                                            className="self-start inline-flex items-center gap-1.5 rounded-[10px] border border-[#3E3E3E] px-3 py-2 text-[12px] font-[600] text-[#7E7E7E] hover:text-[#FF5733] hover:border-[#FF5733] dark:hover:text-[#68CC93] dark:hover:border-[#68CC93] animation-effect"
                                        >
                                            <FiRefreshCw className="text-[14px]" />
                                            New number
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className={labelCls}>Issue date</label>
                                    <input type="date" className={inputCls} value={meta.issueDate} onChange={(e) => setMeta({ ...meta, issueDate: e.target.value })} />
                                </div>
                                <div>
                                    <label className={labelCls}>Due date</label>
                                    <input type="date" className={inputCls} value={meta.dueDate} onChange={(e) => setMeta({ ...meta, dueDate: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-6">
                            <h2 className="text-[18px] font-[700] tracking-[-0.5px] text-[#1C1C1C] dark:text-[#E4E4E4] mb-4">Bill to</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelCls}>Client name</label>
                                    <input className={inputCls} value={client.name} onChange={(e) => setClient({ ...client, name: e.target.value })} placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className={labelCls}>Company</label>
                                    <input className={inputCls} value={client.company} onChange={(e) => setClient({ ...client, company: e.target.value })} placeholder="Company name" />
                                </div>
                                <div>
                                    <label className={labelCls}>Email</label>
                                    <input className={inputCls} value={client.email} onChange={(e) => setClient({ ...client, email: e.target.value })} placeholder="client@email.com" />
                                </div>
                                <div>
                                    <label className={labelCls}>Address</label>
                                    <input className={inputCls} value={client.address} onChange={(e) => setClient({ ...client, address: e.target.value })} placeholder="City, Country" />
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-[18px] font-[700] tracking-[-0.5px] text-[#1C1C1C] dark:text-[#E4E4E4]">Items</h2>
                                <div className="flex flex-wrap gap-2">
                                    {packages.map((pkg) => (
                                        <button key={pkg.label} onClick={() => addPackage(pkg)} className="rounded-full border border-[#3E3E3E] px-3 py-1 text-[12px] font-[600] text-[#1C1C1C] dark:text-[#E4E4E4] hover:border-[#FF5733] hover:text-[#FF5733] dark:hover:border-[#68CC93] dark:hover:text-[#68CC93] animation-effect">
                                            + {pkg.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                {items.map((it, i) => (
                                    <div
                                        key={i}
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={() => { moveItem(dragIndex, i); setDragIndex(null) }}
                                        className={`rounded-[12px] border border-[#3E3E3E] p-3 flex flex-col gap-2 animation-effect ${dragIndex === i ? 'opacity-50' : ''}`}
                                    >
                                        <div className="flex items-start gap-2">
                                            <span
                                                draggable
                                                onDragStart={() => setDragIndex(i)}
                                                onDragEnd={() => setDragIndex(null)}
                                                className="shrink-0 mt-2 cursor-grab active:cursor-grabbing text-[#7E7E7E] hover:text-[#1C1C1C] dark:hover:text-[#E4E4E4] animation-effect"
                                                aria-label="Drag to reorder"
                                            >
                                                <MdDragIndicator className="text-[20px]" />
                                            </span>
                                            <textarea rows={2} className={`${inputCls} flex-1`} value={it.description} onChange={(e) => updateItem(i, 'description', e.target.value)} placeholder="Description" />
                                            <button onClick={() => removeItem(i)} className="shrink-0 mt-1 text-[#7E7E7E] hover:text-[#FF5733] dark:hover:text-[#68CC93] animation-effect" aria-label="Remove item">
                                                <FiTrash2 className="text-[18px]" />
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            <input inputMode="numeric" className={inputCls} value={it.qty} onChange={(e) => updateItem(i, 'qty', cleanNum(e.target.value))} placeholder="Qty" />
                                            <input inputMode="numeric" className={inputCls} value={it.price} onChange={(e) => updateItem(i, 'price', cleanNum(e.target.value))} placeholder="Price (Rp)" />
                                            <input inputMode="numeric" className={inputCls} value={it.discount} onChange={(e) => updateItem(i, 'discount', cleanNum(e.target.value))} placeholder="Discount (Rp)" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button onClick={addItem} className="mt-4 inline-flex items-center gap-2 text-[14px] font-[700] text-[#FF5733] dark:text-[#68CC93]">
                                <FiPlus /> Add item
                            </button>
                        </div>

                        <div className="rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelCls}>Down payment (%)</label>
                                    <input inputMode="numeric" className={inputCls} value={dpPercent} onChange={(e) => setDpPercent(cleanNum(e.target.value))} placeholder="e.g. 50" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className={labelCls}>Notes / terms</label>
                                <textarea rows={3} className={inputCls} value={notes} onChange={(e) => setNotes(e.target.value)} />
                            </div>
                        </div>

                    </div>

                    {/* PREVIEW */}
                    <div className="lg:col-span-3 invoice-print-area bg-white text-[#1C1C1C] rounded-[20px] border border-[#3E3E3E] print:border-0 p-8 md:p-10 shadow-sm print:shadow-none">

                        <div className="flex items-start justify-between gap-6">
                            <div className="flex items-center gap-3">
                                <img src="/favicon.png" alt="logo" className="w-12 h-12" />
                                <div>
                                    <p className="text-[18px] font-[700] tracking-[-0.5px] leading-tight">Dante Clericuzio</p>
                                    <p className="text-[13px] text-[#7E7E7E]">Web Developer & Software Engineer</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[28px] font-[700] tracking-[-1px] text-[#FF5733]">INVOICE</p>
                                <p className="text-[13px] text-[#7E7E7E]">{meta.number || '—'}</p>
                            </div>
                        </div>

                        <div className="h-px bg-[#E4E4E4] my-6" />

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <p className="text-[11px] uppercase tracking-[1px] font-[600] text-[#7E7E7E] mb-1">Bill to</p>
                                <p className="text-[15px] font-[700]">{client.name || 'Client name'}</p>
                                {client.company && <p className="text-[14px] text-[#3E3E3E]">{client.company}</p>}
                                {client.email && <p className="text-[14px] text-[#3E3E3E]">{client.email}</p>}
                                {client.address && <p className="text-[14px] text-[#3E3E3E]">{client.address}</p>}
                            </div>
                            <div className="text-right">
                                <p className="text-[13px]"><span className="text-[#7E7E7E]">Issued: </span>{formatDate(meta.issueDate)}</p>
                                <p className="text-[13px]"><span className="text-[#7E7E7E]">Due: </span>{formatDate(meta.dueDate)}</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="grid grid-cols-12 gap-2 pb-2 border-b-2 border-[#1C1C1C] text-[11px] uppercase tracking-[1px] font-[600] text-[#7E7E7E]">
                                <div className={hasDiscount ? 'col-span-4' : 'col-span-5'}>Description</div>
                                <div className="col-span-1 text-center">Qty</div>
                                <div className={hasDiscount ? 'col-span-3 text-right' : 'col-span-3 text-right'}>Price</div>
                                {hasDiscount && <div className="col-span-2 text-right">Disc.</div>}
                                <div className={hasDiscount ? 'col-span-2 text-right' : 'col-span-3 text-right'}>Amount</div>
                            </div>
                            {items.map((it, i) => {
                                const gross = (Number(it.qty) || 0) * (Number(it.price) || 0)
                                return (
                                    <div key={i} className="grid grid-cols-12 gap-2 py-3 border-b border-[#E4E4E4] text-[13px] items-center">
                                        <div className={`${hasDiscount ? 'col-span-4' : 'col-span-5'} whitespace-pre-wrap break-words`}>{it.description || '—'}</div>
                                        <div className="col-span-1 text-center">{it.qty || 0}</div>
                                        <div className="col-span-3 text-right whitespace-nowrap">{formatIDR(it.price)}</div>
                                        {hasDiscount && <div className="col-span-2 text-right whitespace-nowrap text-[#7E7E7E]">{Number(it.discount) > 0 ? '−' + formatIDR(it.discount) : '—'}</div>}
                                        <div className={`${hasDiscount ? 'col-span-2' : 'col-span-3'} text-right font-[600] whitespace-nowrap`}>{formatIDR(gross)}</div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-6 flex justify-end">
                            <div className="w-full max-w-[300px] flex flex-col gap-2 text-[14px]">
                                <div className="flex justify-between gap-4">
                                    <span className="text-[#7E7E7E]">Subtotal</span>
                                    <span className="font-[600] whitespace-nowrap">{formatIDR(subtotal)}</span>
                                </div>
                                {hasDiscount && (
                                    <div className="flex justify-between gap-4">
                                        <span className="text-[#7E7E7E]">Discount</span>
                                        <span className="font-[600] whitespace-nowrap">−{formatIDR(discountTotal)}</span>
                                    </div>
                                )}
                                {dpPercent > 0 && (
                                    <>
                                        <div className="flex justify-between gap-4">
                                            <span className="text-[#7E7E7E] whitespace-nowrap">Down payment ({dpPercent}%)</span>
                                            <span className="font-[600] whitespace-nowrap">{formatIDR(dpAmount)}</span>
                                        </div>
                                        <div className="flex justify-between gap-4">
                                            <span className="text-[#7E7E7E]">Remaining</span>
                                            <span className="font-[600] whitespace-nowrap">{formatIDR(remaining)}</span>
                                        </div>
                                    </>
                                )}
                                <div className="h-px bg-[#1C1C1C] my-1" />
                                <div className="flex justify-between items-center gap-4">
                                    <span className="text-[15px] font-[700] whitespace-nowrap">{dpPercent > 0 ? 'Amount due now' : 'Total'}</span>
                                    <span className="text-[20px] font-[700] text-[#FF5733] whitespace-nowrap">{formatIDR(dueNow)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 grid sm:grid-cols-2 gap-6">
                            <div className="rounded-[12px] bg-[#F5F5F5] p-5">
                                <p className="text-[11px] uppercase tracking-[1px] font-[600] text-[#7E7E7E] mb-2">Payment</p>
                                <p className="text-[14px] font-[700]">Bank Transfer — BCA</p>
                                <p className="text-[14px]">a/n Dante Clericuzio</p>
                                <p className="text-[16px] font-[700] tracking-[0.5px] text-[#FF5733]">716-503-6310</p>
                            </div>
                            {notes && (
                                <div>
                                    <p className="text-[11px] uppercase tracking-[1px] font-[600] text-[#7E7E7E] mb-2">Notes</p>
                                    <p className="text-[13px] text-[#3E3E3E] leading-relaxed whitespace-pre-wrap">{notes}</p>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 pt-6 border-t border-[#E4E4E4] text-center">
                            <p className="text-[13px] text-[#7E7E7E]">Thanks for using the service!</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
