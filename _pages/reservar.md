---
layout: splash
title: "Reservar"
excerpt: "Reservar."
permalink: /reservar
---

<!-- Cal inline embed code begins -->
<div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline"></div>
<script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "1-clase-del-paquete", {origin:"https://cal.com"});

  Cal.ns["1-clase-del-paquete"]("inline", {
	elementOrSelector:"#my-cal-inline",
	calLink: "espanolconamor/1-clase-del-paquete",
	layout: "column_view"
  });
  
  Cal.ns["1-clase-del-paquete"]("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"column_view"});
  </script>
  <!-- Cal inline embed code ends -->
