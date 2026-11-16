const fs = require('node:fs');
const {chromium} = require('playwright');
(async () => {
 const browser = await chromium.launch({headless:true,args:['--no-sandbox']});
 const context = await browser.newContext({viewport:{width:390,height:884},deviceScaleFactor:2});
 for (const name of ['UX-06','UX-12']) {
  const page = await context.newPage();
  const failures=[];
  page.on('requestfailed',r=>failures.push(r.url()));
  await page.goto('file:///work/'+name+'.html',{waitUntil:'networkidle',timeout:45000});
  await page.waitForFunction(()=>typeof window.tailwind!=='undefined',{timeout:15000});
  await page.evaluate(()=>document.fonts.ready);
  const text = await page.locator('body').innerText();
  if (/evitar cualquier daño|quedó registrado en tu sesión|Volver a revisar mis respuestas|en este teléfono|Guardado de forma local/.test(text)) throw new Error('Texto incorrecto en '+name);
  await page.screenshot({path:'/work/'+name+'-corrected.png',fullPage:true});
  fs.writeFileSync('/work/'+name+'-corrected.html',await page.content());
  process.stdout.write(JSON.stringify({screen:name,screenshot:name+'-corrected.png',textCorrected:true,failedRequests:failures})+'\n');
  await page.close();
 }
 await browser.close();
})().catch(e=>{process.stderr.write(String(e)+'\n');process.exit(1);});
