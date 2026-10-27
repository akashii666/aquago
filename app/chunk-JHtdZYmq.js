import{i as U,r as T}from"./chunk-RVNbQz2-.js";import{K as XS}from"./main-MEATNTEW.js";import{t as s$1}from"./chunk-BdVxaTmP.js";var t=(function(a){return a.Documents=`DOCUMENTS`,a.Data=`DATA`,a.Library=`LIBRARY`,a.Cache=`CACHE`,a.External=`EXTERNAL`,a.ExternalStorage=`EXTERNAL_STORAGE`,a.ExternalCache=`EXTERNAL_CACHE`,a.LibraryNoCloud=`LIBRARY_NO_CLOUD`,a.Temporary=`TEMPORARY`,a})(t||{});var E=(function(a){return a.UTF8=`utf8`,a.ASCII=`ascii`,a.UTF16=`utf16`,a})(E||{});var g=T(`Filesystem`,{web:()=>import(`./chunk-CgP86eOC2.js`).then(t=>new t.FilesystemWeb)});s$1();var x=T(`Share`,{web:()=>import(`./chunk-bWvLDhAj.js`).then(t=>new t.ShareWeb)});var S=t=>{let e=t==null?``:String(t);return/^[=+\-@]/.test(e)&&!/^-?\d/.test(e)&&(e=`'${e}`),/[",\r\n]/.test(e)?`"${e.replace(/"/g,`""`)}"`:e};function A(t,e){return`\uFEFF${[t,...e].map(n=>n.map(S).join(`,`)).join(`\r
`)}\r
`}async function y(t$1,e,n){if(U.isNativePlatform()){let{uri:c}=await g.writeFile({path:t$1,data:e,directory:t.Cache,encoding:E.UTF8});await x.share({title:t$1,files:[c],dialogTitle:`Save or send ${t$1}`});return}let i=URL.createObjectURL(new Blob([e],{type:n})),r=document.createElement(`a`);r.href=i,r.download=t$1,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}var H=(t=new Date)=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`;var s=t=>new Intl.NumberFormat(`en-PH`,{style:`currency`,currency:`PHP`,minimumFractionDigits:2}).format(t);var $=t=>t?new Date(t).toLocaleString(`en-PH`,{month:`short`,day:`numeric`,year:`numeric`,hour:`numeric`,minute:`2-digit`}):``;var a=t=>t.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]);function P(t){return t.paymentStatus===`Paid`?`Paid${t.paidAt?` \xB7 ${$(t.paidAt)}`:``}`:t.paymentStatus===`Refunded`?`Refunded`:t.status===`Cancelled`?`Not charged (cancelled)`:t.paymentMethod===`Cash on Delivery`?`To be collected on delivery`:`Waiting for the station to confirm the transfer`}function v(t,e){let n=t.items.map(o=>`<tr>
		<td>${a(o.name)}${o.waterType?` <small>(${a(o.waterType)})</small>`:``}</td>
		<td class="n">${o.quantity}</td><td class="n">${s(o.unitPrice)}</td><td class="n">${s(o.unitPrice*o.quantity)}</td></tr>`).join(``),i=XS(t.items),{street:r,barangay:c,city:w,province:l,landmark:p}=t.address;return`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Receipt ${a(t.id)}</title>
<style>
	body { margin: 0; padding: 24px 16px; background: #f1f9fc; color: #023e8a; font: 14px/1.45 Arial, Helvetica, sans-serif; }
	.r { max-width: 420px; margin: 0 auto; padding: 24px; border: 1px solid #d6e8f0; border-radius: 12px; background: #fff; }
	h1 { margin: 0; font-size: 20px; } h2 { margin: 18px 0 6px; font-size: 13px; text-transform: uppercase; letter-spacing: .05em; color: #5a7091; }
	.c { text-align: center; } .m { color: #5a7091; font-size: 12.5px; } small { color: #5a7091; }
	table { width: 100%; border-collapse: collapse; } th, td { padding: 6px 0; border-bottom: 1px dashed #d6e8f0; text-align: left; vertical-align: top; }
	th { font-size: 12px; color: #5a7091; } .n { text-align: right; white-space: nowrap; padding-left: 8px; }
	.t td { border: 0; padding: 3px 0; } .g td { padding-top: 8px; font-size: 17px; font-weight: bold; border-top: 2px solid #023e8a; }
	@page { size: auto; margin: 12mm; }
	@media print { html, body { background: #fff; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; } .r { max-width: 100mm; border: 0; padding: 0; } tr { break-inside: avoid; } }
</style></head>
<body><div class="r">
	<div class="c"><h1>${a(e.businessName)}</h1>
	<div class="m">${a(e.address)}${e.contactNumber?`<br>${a(e.contactNumber)}`:``}${e.contactEmail?` \xB7 ${a(e.contactEmail)}`:``}</div></div>
	<h2>Receipt</h2>
	<div><b>${a(t.id)}</b><br><span class="m">Ordered ${$(t.createdAt)} \xB7 ${a(t.status)}</span></div>
	<h2>Deliver to</h2>
	<div>${a(t.customerName)}<br>${a(r)}, ${a(c)}<br>${a(w)}${l?`, ${a(l)}`:``}${p?`<br><small>${a(p)}</small>`:``}</div>
	<h2>Items</h2>
	<table><thead><tr><th>Item</th><th class="n">Qty</th><th class="n">Price</th><th class="n">Amount</th></tr></thead><tbody>${n}</tbody></table>
	<table class="t">
		<tr><td>Subtotal</td><td class="n">${s(t.subtotal)}</td></tr>
		${i?`<tr><td>Gallon wash &amp; sanitize (${i})</td><td class="n">FREE</td></tr>`:``}
		<tr><td>Delivery fee</td><td class="n">${s(t.deliveryFee)}</td></tr>
		<tr class="g"><td>Total</td><td class="n">${s(t.total)}</td></tr>
	</table>
	<h2>Payment</h2>
	<div>${a(t.paymentMethod)}<br><span class="m">${a(P(t))}</span></div>
	<p class="c m" style="margin-top:22px">Thank you for ordering with ${a(e.businessName)}!<br>This is an order receipt, not an official BIR receipt.</p>
</div></body></html>`}function W(t,e){let n=document.createElement(`iframe`);n.setAttribute(`aria-hidden`,`true`),n.style.cssText=`position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden`,n.srcdoc=v(t,e),n.onload=()=>{let i=n.contentWindow;if(!i)return n.remove();let r=()=>setTimeout(()=>n.remove(),500);i.addEventListener(`afterprint`,r,{once:!0}),i.focus(),i.print(),setTimeout(()=>n.isConnected&&n.remove(),6e4)},document.body.appendChild(n)}function q(t,e){return y(`receipt-${t.id}.html`,v(t,e),`text/html`)}export{q as a,E as c,W as i,H as n,v as o,P as r,y as s,A as t};