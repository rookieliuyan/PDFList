let typeNameList = []
let listName = []
let childClass

let createTypeList = (firstList, secondList, firstClass) => {
    //初始化列表
    let typeCount = firstList.length
    if (typeCount == 0) {
        console.log('type name is nothing')
        return
    }
    let tpl = ''
    for (let i = 0; i < typeCount; i++) {
        tpl += '<li class=' + (firstClass ? firstClass : "type-name") + ' id="name' + i + '">' + firstList[i] + '</li>'
            + '<div class="type-list" id="list' + i + '" isList="false"></div>'
    }
    $('#type').html(tpl)

    //默认第一张pdf
    if (secondList.length > 0) {
        let isSetSrc = false
        let firstPdf = secondList[0]
        for (let key in firstPdf) {
            if (!isSetSrc) {
                $('div.pdf > embed').attr('src', firstPdf[key])
                isSetSrc = true
            } else {
                break
            }
        }
    } else {
        console.log('your url is nothing')
    }
}

let PDFList = function(firstList, secondList, firstClass, secondClass) {
    typeNameList = firstList
    listName = secondList
    childClass = secondClass
    createTypeList(firstList, secondList, firstClass)
}

//展开或者合拢列表
$(document).on('click', '.type-name', function() {
    let numTag = $(this).attr('id').replace('name', '')
    let iL = $('#list' + numTag).attr('isList')
    if ($('#list' + numTag).html()) {
        if (iL == "true") {
            $('#list' + numTag).css('display', 'none')
            iL = false
        } else {
            $('#list' + numTag).css('display', 'block')
            iL = true
        }
        $('#list' + numTag).attr('isList', iL)
    } else {
        let lN = listName[numTag]
        if (!lN) {
            console.log('be short of pdf name and url')
        }
        $('#type-list').html('')
        let tpl = ''
        for (let key in lN) {
            tpl += ' <li class=' + (childClass ? childClass : "type-list-file") +' pdf-url="' + lN[key] + '">' + key + '</li>'
        }
        $('#list' + numTag).html('<ul>' + tpl + '</ul>').attr('isList', true)
    }
})

PDFList.prototype.parentListClick = function(tagName) {
    let numTag = $(tagName).attr('id').replace('name', '')
    let iL = $('#list' + numTag).attr('isList')
    if ($('#list' + numTag).html()) {
        if (iL == "true") {
            $('#list' + numTag).css('display', 'none')
            iL = false
        } else {
            $('#list' + numTag).css('display', 'block')
            iL = true
        }
        $('#list' + numTag).attr('isList', iL)
    } else {
        let lN = listName[numTag]
        if (!lN) {
            console.log('be short of pdf name and url')
        }
        $('#type-list').html('')
        let tpl = ''
        for (let key in lN) {
            tpl += ' <li class=' + (childClass ? childClass : "type-list-file") +' pdf-url="' + lN[key] + '">' + key + '</li>'
        }
        $('#list' + numTag).html('<ul>' + tpl + '</ul>').attr('isList', true)
    }
}

//显示pdf
$(document).on('click', '.type-list-file', function() {
    let pdfUrl = $(this).attr('pdf-url')
    let currentUrl = $('div.pdf > embed').attr('src')
    if (pdfUrl) {
        if (pdfUrl != currentUrl) {
            $('div.pdf > embed').attr('src', pdfUrl)
        }
    } else {
        console.log('the url was no found')
    }
})

PDFList.prototype.childListClick = function(tagName) {
    let pdfUrl = $(tagName).attr('pdf-url')
    let currentUrl = $('div.pdf > embed').attr('src')
    if (pdfUrl) {
        if (pdfUrl != currentUrl) {
            $('div.pdf > embed').attr('src', pdfUrl)
        }
    } else {
        console.log('the url was no found')
    }
}