import { chromium } from "@playwright/test";
async function multiContext(){
    //Broser Global
    const browser = await chromium.launch( {headless : false});

    //Admin
    const AdminContext = await browser.newContext();
    const Adminpage = await AdminContext.newPage();
    await Adminpage.goto("https://www.google.com/");
    console.log("Admin page title : " + await Adminpage.title());

    //Viewer

    const ViewerContext = await browser.newContext();
    const  VewerPage = await ViewerContext.newPage();
    await VewerPage.goto("https://www.google.com/");
    console.log("Viewer page title : " + await VewerPage.title());

    //Cleanup - reverse order
    await VewerPage.close();
    await ViewerContext.close();
    await Adminpage.close();
    await AdminContext.close();
    await browser.close();

}