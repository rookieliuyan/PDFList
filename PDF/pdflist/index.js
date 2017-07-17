let type= ['name1', 'name2', 'name3'] //外层列表名字
let list = [
                    {'name1.pdf1' : '../file/Nodejs.pdf', 'name1.pdf2' : '../file/sc.pdf'},
                    {'name2.pdf1' : '../file/Nodejs.pdf', 'name2.pdf2' : '../file/sc.pdf'},
                    {'name3.pdf1' : '../file/Nodejs.pdf', 'name3.pdf2' : '../file/sc.pdf'}
                ] //内层列表名字及连接

let pDFList = new PDFList(type, list, '', 'secondCustom')

// $(document).on('click', '.firstCustom', function() {
//     pDFList.parentListClick(this)
// })

$(document).on('click', '.secondCustom', function() {
    pDFList.childListClick(this)
})
