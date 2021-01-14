import {createWorker} from 'tesseract.js';

const worker = createWorker({
    // logger: m => console.log(m),
});

(async () => {
    await worker.load();
    await worker.loadLanguage('rus+eng');
    await worker.initialize('rus+eng');
    await worker.setParameters({
        // tessedit_ocr_engine_mode: OEM.LSTM_ONLY,
        // preserve_interword_spaces: 1,
        // tessjs_create_hocr: 0,
        // tessjs_create_tsv: 0,
        // tessjs_create_unlv: 1,
        // tessjs_create_osd: 1,
        tessedit_char_whitelist:
            'абвгдеёжзийклмнопрстуфхцчшщийъыьэюя' +
            'абвгдеёжзийклмнопрстуфхцчшщийъыьэюя'.toUpperCase() +
            'abcdefghijklmnopqrstuvwxyz' +
            'abcdefghijklmnopqrstuvwxyz'.toUpperCase() +
            '0123456789' +
            '.,- ',
    });
    const {
        data: {text},
    } = await worker.recognize('./public/assets/sliced_corrected.jpg');
    console.log(text);
    await worker.terminate();
})();
