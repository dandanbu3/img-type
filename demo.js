
onmessage = (e) => {
    var start = Date.now();
    var text, end;
    var unit = new Uint8Array(e.data);
    if (unit.slice(0,2).join(',') === '255,216' && unit.slice(unit.length - 2).join(',') ==='255,217') {
        text = '该文件的格式是：jpg';
    } else if (unit.slice(0,8).join(',') === '137,80,78,71,13,10,26,10') {
        text = '该文件的格式是：png';
    } else if (unit.slice(0,6).join(',') === '71,73,70,56,57,97' || unit.slice(0,6).join(',') === '71,73,70,56,55,97') {
        text = '该文件的格式是：gif';
    } else if (unit.slice(0,2).join(",") === '66,77') {
        text = '该文件的格式是：bmp';
    }
    end = Date.now();
    console.log(end - start);
    console.log(end, start);
    postMessage({text: '该文件的格式是：jpg', time: end-start});
}
