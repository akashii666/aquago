import{i as U,r as T}from"./chunk-RVNbQz2-.js";import{Q as a_}from"./main-FXYS4AF3.js";import{t as s}from"./chunk-BdVxaTmP.js";var t=(function(a){return a.Documents=`DOCUMENTS`,a.Data=`DATA`,a.Library=`LIBRARY`,a.Cache=`CACHE`,a.External=`EXTERNAL`,a.ExternalStorage=`EXTERNAL_STORAGE`,a.ExternalCache=`EXTERNAL_CACHE`,a.LibraryNoCloud=`LIBRARY_NO_CLOUD`,a.Temporary=`TEMPORARY`,a})(t||{});var E=(function(a){return a.UTF8=`utf8`,a.ASCII=`ascii`,a.UTF16=`utf16`,a})(E||{});var $=T(`Filesystem`,{web:()=>import(`./chunk-BkBjtL7U.js`).then(t=>new t.FilesystemWeb)});s();var w=T(`Share`,{web:()=>import(`./chunk-bWvLDhAj.js`).then(t=>new t.ShareWeb)});var F=t=>{let e=t==null?``:String(t);return/^[=+\-@]/.test(e)&&!/^-?\d/.test(e)&&(e=`'${e}`),/[",\r\n]/.test(e)?`"${e.replace(/"/g,`""`)}"`:e};function I(t,e){return`\uFEFF${[t,...e].map(i=>i.map(F).join(`,`)).join(`\r
`)}\r
`}async function S(t$1,e,i){if(U.isNativePlatform()){let{uri:c}=await $.writeFile({path:t$1,data:e,directory:t.Cache,encoding:E.UTF8});await w.share({title:t$1,files:[c],dialogTitle:`Save or send ${t$1}`});return}let r=URL.createObjectURL(new Blob([e],{type:i})),o=document.createElement(`a`);o.href=r,o.download=t$1,document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}var O=(t=new Date)=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`;var d=t=>new Intl.NumberFormat(`en-PH`,{style:`currency`,currency:`PHP`,minimumFractionDigits:2}).format(t);var l=t=>t?new Date(t).toLocaleString(`en-PH`,{month:`short`,day:`numeric`,year:`numeric`,hour:`numeric`,minute:`2-digit`}):``;var n=t=>t.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]);function D(t){return t.paymentStatus===`Paid`?`Paid${t.paidAt?` \xB7 ${l(t.paidAt)}`:``}`:t.paymentStatus===`Refunded`?`Refunded`:t.status===`Cancelled`?`Not charged (cancelled)`:t.paymentMethod===`Cash on Delivery`?`To be collected on delivery`:`Waiting for the station to confirm the transfer`}function P(t,e){let i=t.items.map(a=>`<tr>
		<td>${n(a.name)}<small>${n(a.volume)}${a.color?` \xB7 ${n(a.color)}`:``}${a.waterType?` \xB7 ${n(a.waterType)}`:``}</small></td>
		<td class="n">${a.quantity}</td><td class="n">${d(a.unitPrice)}</td><td class="n">${d(a.unitPrice*a.quantity)}</td></tr>`).join(``),r=a_(t.items),{street:o,barangay:c,city:k,province:m,landmark:h}=t.address,f=[e.contactNumber,e.contactEmail].filter(Boolean).map(n).join(` · `),s=(a,g)=>g?`<div><dt>${a}</dt><dd>${g}</dd></div>`:``;return`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Receipt ${n(t.id)}</title>
<style>
	* { box-sizing: border-box; }
	body { margin: 0; padding: 24px 16px; background: #f4f6f8; color: #1f2933; font: 13.5px/1.55 "Segoe UI", Roboto, Arial, Helvetica, sans-serif; }
	.r { max-width: 480px; margin: 0 auto; padding: 32px 32px 24px; border: 1px solid #e4e7eb; border-radius: 8px; background: #fff; }
	.hd { text-align: center; }
	h1 { margin: 0; font-size: 18px; font-weight: 700; letter-spacing: .01em; }
	.m, small { color: #6b7280; font-size: 12px; } small { display: block; }
	.title { margin: 18px 0 2px; font-size: 11px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: #6b7280; }
	.no { font-size: 15px; font-weight: 600; letter-spacing: .02em; }
	hr { margin: 20px 0; border: 0; border-top: 1px solid #e4e7eb; }
	hr.dash { border-top-style: dashed; border-color: #d1d5db; }
	h2 { margin: 0 0 6px; font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: #6b7280; }
	.meta { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
	.who { font-weight: 600; }
	dl { margin: 0; display: grid; gap: 2px; } dl div { display: flex; justify-content: space-between; gap: 10px; }
	dt { color: #6b7280; } dd { margin: 0; text-align: right; }
	table { width: 100%; border-collapse: collapse; }
	th { padding: 0 0 8px; border-bottom: 1px solid #e4e7eb; font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: #6b7280; text-align: left; }
	td { padding: 10px 0; border-bottom: 1px solid #f0f2f4; vertical-align: top; }
	.n { padding-left: 12px; text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
	.sum { margin-top: 12px; display: grid; gap: 4px; }
	.sum div { display: flex; justify-content: space-between; }
	.sum span:first-child { color: #4b5563; }
	.sum .g { margin-top: 8px; padding-top: 10px; border-top: 1px solid #1f2933; font-size: 16px; font-weight: 700; }
	.sum .g span:first-child { color: inherit; }
	.ft { text-align: center; }
	.ft p { margin: 0 0 4px; }
	.thanks { font-weight: 600; }
	@media (max-width: 480px) { .r { padding: 24px 18px 20px; } .meta { grid-template-columns: 1fr; gap: 14px; } }
	/* margin 0 drops the browser's own date / URL header and footer from the printout */
	@page { size: A4; margin: 0; }
	@media print {
		html, body { background: #fff; }
		body { padding: 18mm 0; }
		.r { max-width: 130mm; border: 0; padding: 0; }
		tr, .meta, .sum { break-inside: avoid; }
	}
</style></head>
<body><div class="r">
	<header class="hd">
		<h1>${n(e.businessName)}</h1>
		<div class="m">${n(e.address)}${f?`<br>${f}`:``}</div>
		<div class="title">Order receipt</div>
		<div class="no">${n(t.id)}</div>
	</header>
	<hr>
	<div class="meta">
		<section><h2>Deliver to</h2>
			<div class="who">${n(t.customerName)}</div>
			<div>${n(o)}, ${n(c)}<br>${n(k)}${m?`, ${n(m)}`:``}</div>
			${h?`<small>Landmark: ${n(h)}</small>`:``}
		</section>
		<section><h2>Details</h2><dl>
			${s(`Ordered`,l(t.createdAt))}
			${s(`Delivery`,l(t.scheduledAt))}
			${s(`Status`,n(t.status))}
		</dl></section>
	</div>
	<hr>
	<table><thead><tr><th>Item</th><th class="n">Qty</th><th class="n">Price</th><th class="n">Amount</th></tr></thead><tbody>${i}</tbody></table>
	<div class="sum">
		<div><span>Subtotal</span><span class="n">${d(t.subtotal)}</span></div>
		${r?`<div><span>Gallon wash &amp; sanitize (${r})</span><span>Free</span></div>`:``}
		<div><span>Delivery fee</span><span class="n">${d(t.deliveryFee)}</span></div>
		<div class="g"><span>Total</span><span class="n">${d(t.total)}</span></div>
	</div>
	<hr>
	<dl>
		${s(`Payment`,n(t.paymentMethod))}
		${s(`Status`,n(D(t)))}
	</dl>
	<hr class="dash">
	<footer class="ft">
		<p class="thanks">Thank you for ordering with ${n(e.businessName)}!</p>
		<p class="m">This is an order receipt, not an official BIR receipt.</p>
		<p class="m">Printed ${l(new Date().toISOString())}</p>
	</footer>
</div></body></html>`}function B(t,e){let i=document.createElement(`iframe`);i.setAttribute(`aria-hidden`,`true`),i.style.cssText=`position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden`,i.srcdoc=P(t,e),i.onload=()=>{let r=i.contentWindow;if(!r)return i.remove();let o=()=>setTimeout(()=>i.remove(),500);r.addEventListener(`afterprint`,o,{once:!0}),r.focus(),r.print(),setTimeout(()=>i.isConnected&&i.remove(),6e4)},document.body.appendChild(i)}function M(t,e){return S(`receipt-${t.id}.html`,P(t,e),`text/html`)}export{P as a,O as i,I as n,S as o,M as r,E as s,B as t};