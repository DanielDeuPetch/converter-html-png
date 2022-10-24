"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PrintReceiptFlow {
    issueReceipt(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let file = { content: "<html>  <head>   <meta charset='UTF-8'>   <title>Comprovante não fiscal</title>   <style>         body {       -webkit-print-color-adjust: exact !important;       print-color-adjust: exact !important;     }      thead.header {       background-color: #333;       color: #fff;     }      .bolder {       font-weight: bolder;     }      .left {       text-align: left !important;     }      .right {       text-align: right !important;     }      .center {       text-align: center;     }      .parent-width {       width: 100%;     }      .text-center {       text-align: center;     }       .top-dashed {       border-top: 1px dashed #BCBCBC;     }      .uppercase {       text-transform: uppercase;     }      .printer-ticket {       display: table !important;       width: 100%;       max-width: 400px;       font-weight: light;       line-height: 1.3em;     }       .printer-ticket,     .printer-ticket * {       font-family: Tahoma, Geneva, sans-serif;       font-size: 10px;     }      .printer-ticket th {       font-weight: inherit;       padding: 10px 0;       text-align: center;     }      .padding-left-5 {       padding-left: 5px !important;     }      .padding-right-5 {       padding-right: 5px !important;     }   </style> </head>  <body translate='no'>   <table id='receipt' class='printer-ticket'>     <tbody>       <tr>         <td>           <table class='printer-ticket'>             <thead class='header'>               <tr>                 <th>ESTABELECIMENTO</th>               </tr>               <tr>             </thead>             <tbody>               <tr>                 <td class='center'>DEUPETCH LTDA.</td>               </tr>               <tr>                 <td class='center'>Rua Carlos de Sá, 392, Centro</td>               </tr>               <tr>                 <td class='center'>(41) 9 9873-0937</td>               </tr>               <tr>                 <td class='center'>desenvolvedor@deupetch.com.br</td>               </tr>             </tbody>           </table>           <table class='printer-ticket'>             <thead class='header'>               <tr>                 <th>DOCUMENTO</th>               </tr>               <tr>             </thead>             <tbody>               <tr>                 <td class='padding-left-5'>Nº Pedido: <span class='bolder'>0002536</span></td>               </tr>               <tr>                 <td class='padding-left-5'>Data/Hora: <span class='bolder'>22/09/2022 15:22</span></td>               </tr>             </tbody>           </table>            <table class='printer-ticket'>             <thead class='header'>               <tr>                 <th>CLIENTE</th>               </tr>               <tr>             </thead>             <tbody>               <tr>                 <td class='padding-left-5'>                   Nome: <span class='bolder'>João da Silva</span>                 </td>               </tr>               <tr>                 <td class='padding-left-5'>                   Contato: <span class='bolder'>(41) 9 98730937 / joao@yahoo.com.br</span>                 </td>               </tr>             </tbody>           </table>           <table class='printer-ticket'>             <thead class='header'>               <tr>                 <th>ITENS</th>               </tr>               <tr>             </thead>             <tbody>               <tr>                 <td>                   <table class='parent-width'>                     <thead class='bolder'>                       <tr>                         <th class='left padding-left-5'>Descrição</th>                         <th class='left'>Qtde</th>                         <th class='left'>Preço</th>                         <th class='padding-right-5 right'>Total</th>                       </tr>                     </thead>                     <tbody>                       <tr>                         <td class='left padding-left-5'>Ração fisher para gato</td>                         <td class='left'>2</td>                         <td class='left'>54,90</td>                         <td class='padding-right-5 right'>109,80</td>                       </tr>                       <tr>                         <td class='left padding-left-5'>Areia para gatos foss</td>                         <td class='left'>2</td>                         <td class='left'>54,90</td>                         <td class='padding-right-5 right'>109,80</td>                       </tr>                     </tbody>                     <tfoot>                       <tr>                         <td class='top-dashed padding-left-5' colspan='3'>Subtotal</td>                         <td class='padding-right-5 top-dashed right'>219,60</td>                       </tr>                       <tr>                         <td class='padding-left-5' colspan='3'>Descontos</td>                         <td class='padding-right-5 right'>-10,00</td>                       </tr>                       <tr>                         <td class='padding-left-5' colspan='3'>Total</td>                         <td class='padding-right-5 bolder right'>209,60</td>                       </tr>                     </tfoot>                   </table>                 </td>               </tr>             </tbody>           </table>           <table class='printer-ticket'>             <thead class='header'>               <tr>                 <th>PAGAMENTO</th>               </tr>               <tr>             </thead>             <tbody>               <tr>                 <td class='padding-left-5'>                   Forma de pagamento: <span class='bolder'>Cartão de Crédito 3x</span>                 </td>               </tr>             </tbody>           </table>           <table class='printer-ticket'>             <thead>               <tr>                 <th class='top-dashed'>COMPROVANTE NÃO FISCAL</th>               </tr>             </thead>           </table>         </td>       </tr>     </tbody>   </table> </body>  </html>" };
                // const puppeteer = require('puppeteer');
                // const browser = await puppeteer.launch();
                const chromium = require('chrome-aws-lambda');
                const puppeteer = require('puppeteer-core');
                //const browser = await chromium.puppeteer.launch();
                const browser = yield puppeteer.launch({
                    args: chromium.args,
                    executablePath: yield chromium.executablePath,
                    headless: true,
                });
                const page = yield browser.newPage();
                yield page.setContent(file.content);
                const image = yield page.screenshot();
                yield browser.close();
                const sharp = require('sharp');
                var image1 = yield sharp(image);
                var metadata = yield image1.metadata();
                var img = yield image1.extract({ left: 15, top: 10, width: 388, height: metadata.height - 10 })
                    .toBuffer();
                return Buffer.from(img).toString('base64');
            }
            catch (error) {
                console.log(error);
            }
            return null;
        });
    }
}
exports.default = new PrintReceiptFlow;
