import console = require("console");

class PrintReceiptFlow {
  async issueReceipt(req) {
    try {
      let file = { content: "<html>  <head>   <meta charset='UTF-8'>   <title>Comprovante não fiscal</title>   <style>         body {       -webkit-print-color-adjust: exact !important;       print-color-adjust: exact !important;     }      thead.header {       background-color: #333;       color: #fff;     }      .bolder {       font-weight: bolder;     }      .left {       text-align: left !important;     }      .right {       text-align: right !important;     }      .center {       text-align: center;     }      .parent-width {       width: 100%;     }      .text-center {       text-align: center;     }       .top-dashed {       border-top: 1px dashed #BCBCBC;     }      .uppercase {       text-transform: uppercase;     }      .printer-ticket {       display: table !important;       width: 100%;       max-width: 400px;       font-weight: light;       line-height: 1.3em;     }       .printer-ticket,     .printer-ticket * {       font-family: Tahoma, Geneva, sans-serif;       font-size: 10px;     }      .printer-ticket th {       font-weight: inherit;       padding: 10px 0;       text-align: center;     }      .padding-left-5 {       padding-left: 5px !important;     }      .padding-right-5 {       padding-right: 5px !important;     }   </style> </head>  <body translate='no'>   <table id='receipt' class='printer-ticket'>     <tbody>       <tr>         <td>           <table class='printer-ticket'>             <thead class='header'>               <tr>                 <th>ESTABELECIMENTO</th>               </tr>               <tr>             </thead>             <tbody>               <tr>                 <td class='center'>DEUPETCH LTDA.</td>               </tr>               <tr>                 <td class='center'>Rua Carlos de Sá, 392, Centro</td>               </tr>               <tr>                 <td class='center'>(41) 9 9873-0937</td>               </tr>               <tr>                 <td class='center'>desenvolvedor@deupetch.com.br</td>               </tr>             </tbody>           </table>           <table class='printer-ticket'>             <thead class='header'>               <tr>                 <th>DOCUMENTO</th>               </tr>               <tr>             </thead>             <tbody>               <tr>                 <td class='padding-left-5'>Nº Pedido: <span class='bolder'>0002536</span></td>               </tr>               <tr>                 <td class='padding-left-5'>Data/Hora: <span class='bolder'>22/09/2022 15:22</span></td>               </tr>             </tbody>           </table>            <table class='printer-ticket'>             <thead class='header'>               <tr>                 <th>CLIENTE</th>               </tr>               <tr>             </thead>             <tbody>               <tr>                 <td class='padding-left-5'>                   Nome: <span class='bolder'>João da Silva</span>                 </td>               </tr>               <tr>                 <td class='padding-left-5'>                   Contato: <span class='bolder'>(41) 9 98730937 / joao@yahoo.com.br</span>                 </td>               </tr>             </tbody>           </table>           <table class='printer-ticket'>             <thead class='header'>               <tr>                 <th>ITENS</th>               </tr>               <tr>             </thead>             <tbody>               <tr>                 <td>                   <table class='parent-width'>                     <thead class='bolder'>                       <tr>                         <th class='left padding-left-5'>Descrição</th>                         <th class='left'>Qtde</th>                         <th class='left'>Preço</th>                         <th class='padding-right-5 right'>Total</th>                       </tr>                     </thead>                     <tbody>                       <tr>                         <td class='left padding-left-5'>Ração fisher para gato</td>                         <td class='left'>2</td>                         <td class='left'>54,90</td>                         <td class='padding-right-5 right'>109,80</td>                       </tr>                       <tr>                         <td class='left padding-left-5'>Areia para gatos foss</td>                         <td class='left'>2</td>                         <td class='left'>54,90</td>                         <td class='padding-right-5 right'>109,80</td>                       </tr>                     </tbody>                     <tfoot>                       <tr>                         <td class='top-dashed padding-left-5' colspan='3'>Subtotal</td>                         <td class='padding-right-5 top-dashed right'>219,60</td>                       </tr>                       <tr>                         <td class='padding-left-5' colspan='3'>Descontos</td>                         <td class='padding-right-5 right'>-10,00</td>                       </tr>                       <tr>                         <td class='padding-left-5' colspan='3'>Total</td>                         <td class='padding-right-5 bolder right'>209,60</td>                       </tr>                     </tfoot>                   </table>                 </td>               </tr>             </tbody>           </table>           <table class='printer-ticket'>             <thead class='header'>               <tr>                 <th>PAGAMENTO</th>               </tr>               <tr>             </thead>             <tbody>               <tr>                 <td class='padding-left-5'>                   Forma de pagamento: <span class='bolder'>Cartão de Crédito 3x</span>                 </td>               </tr>             </tbody>           </table>           <table class='printer-ticket'>             <thead>               <tr>                 <th class='top-dashed'>COMPROVANTE NÃO FISCAL</th>               </tr>             </thead>           </table>         </td>       </tr>     </tbody>   </table> </body>  </html>" };
      // const puppeteer = require('puppeteer');
      // const browser = await puppeteer.launch();
      const chromium = require('chrome-aws-lambda');
      const puppeteer = require('puppeteer-core');
      //const browser = await chromium.puppeteer.launch();
      const options = process.env.AWS_REGION
        ? {
          args: chromium.args,
          executablePath: await chromium.executablePath,
          headless: chromium.headless
        }
        : {
          args: [],
          executablePath:
            process.platform === 'win32'
              ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
              : process.platform === 'linux'
                ? '/usr/bin/google-chrome'
                : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
        };






      var path = await chromium.executablePath;
      console.log(path)
      // const browser = await puppeteer.launch({
      //   args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
      //   defaultViewport: chromium.defaultViewport,
      //   executablePath: await chromium.executablePath,
      //   headless: true,
      //   ignoreHTTPSErrors: true,
      // });

      const browser = await puppeteer.launch(options);
      const page = await browser.newPage();
      await page.setContent(file.content);
      const image = await page.screenshot();
      await browser.close();
      const sharp = require('sharp');
      var image1 = await sharp(image)
      var metadata = await image1.metadata()
      var img = await image1.extract({ left: 15, top: 10, width: 388, height: metadata.height - 10 })
        .toBuffer()

      return Buffer.from(img).toString('base64')
    } catch (error) {
      console.log(error)
    }


    return null
  }

}

export default new PrintReceiptFlow
